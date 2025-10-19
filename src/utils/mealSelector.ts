import {
  UserPreferences,
  DailyMealPlan,
  Budget,
  SelectedMeal,
  DiningLocation,
  Restaurant,
  DiningHall,
  MealComponent,
  Macros,
  MealTime,
  ComponentCategory
} from '../types';
import { mockDiningLocations } from '../data/mockData';

/**
 * Global meal rules for dining hall component combinations
 * Requires at least 2 distinct components, with at least 1 protein
 */
const GLOBAL_DINING_HALL_MEAL_RULES = {
  required: ['protein'] as ComponentCategory[],
  optional: ['vegetable', 'side', 'sauce', 'base'] as ComponentCategory[],
  maxComponents: 4,
  minComponents: 2
} as const;

/**
 * Finds the optimal combination of 3 meals (breakfast, lunch, dinner) 
 * that matches the user's diet goals, macro thresholds, and budget constraints.
 * Returns a single meal plan (for backward compatibility).
 */
export function findOptimalMealPlan(preferences: UserPreferences): DailyMealPlan | null {
  const plans = findOptimalMealPlans(preferences, 1);
  return plans.length > 0 ? plans[0] : null;
}

/**
 * Finds up to N optimal combinations of 3 meals (breakfast, lunch, dinner) 
 * that match the user's diet goals, macro thresholds, and budget constraints.
 * Returns up to maxPlans meal plans, sorted by how closely they match the goals.
 */
export function findOptimalMealPlans(preferences: UserPreferences, maxPlans: number = 5): DailyMealPlan[] {
  // Filter locations by user preferences
  let filteredLocations = [...mockDiningLocations];

  // Filter by location
  if (preferences.location !== 'No Preference') {
    filteredLocations = filteredLocations.filter(
      (loc) => loc.location === preferences.location
    );
  }

  if (filteredLocations.length === 0) {
    return [];
  }

  // Generate meal options for each meal time
  const breakfastOptions = generateMealOptions(filteredLocations, 'breakfast', preferences);
  const lunchOptions = generateMealOptions(filteredLocations, 'lunch', preferences);
  const dinnerOptions = generateMealOptions(filteredLocations, 'dinner', preferences);

  if (breakfastOptions.length === 0 || lunchOptions.length === 0 || dinnerOptions.length === 0) {
    return [];
  }

  // Find all valid combinations that meet macro thresholds and budget
  let validPlans: DailyMealPlan[] = [];

  for (const breakfast of breakfastOptions) {
    for (const lunch of lunchOptions) {
      for (const dinner of dinnerOptions) {
        // Calculate totals
        const totalCalories = breakfast.totalMacros.calories + lunch.totalMacros.calories + dinner.totalMacros.calories;
        const totalProtein = breakfast.totalMacros.protein + lunch.totalMacros.protein + dinner.totalMacros.protein;
        const totalCarbs = breakfast.totalMacros.carbs + lunch.totalMacros.carbs + dinner.totalMacros.carbs;
        const totalFats = breakfast.totalMacros.fats + lunch.totalMacros.fats + dinner.totalMacros.fats;

        // Check if within macro thresholds
        if (!isWithinThreshold(totalCalories, preferences.dietGoals.calories, preferences.macroThresholds.calories)) continue;
        if (!isWithinThreshold(totalProtein, preferences.dietGoals.protein, preferences.macroThresholds.protein)) continue;
        if (!isWithinThreshold(totalCarbs, preferences.dietGoals.carbs, preferences.macroThresholds.carbs)) continue;
        if (!isWithinThreshold(totalFats, preferences.dietGoals.fats, preferences.macroThresholds.fats)) continue;

        // Calculate budget used
        const budgetUsed = calculateBudgetUsed([breakfast, lunch, dinner]);

        // Check if within budget
        if (!isWithinBudget(budgetUsed, preferences.budget)) continue;

        const plan: DailyMealPlan = {
          breakfast,
          lunch,
          dinner,
          totalCalories,
          totalProtein,
          totalCarbs,
          totalFats,
          budgetUsed
        };

        validPlans.push(plan);
      }
    }
  }

  if (validPlans.length === 0) {
    return [];
  }

  // Sort by how close to macro goals (best match first)
  validPlans.sort((a, b) => {
    const scoreA = calculateMacroScore(a, preferences);
    const scoreB = calculateMacroScore(b, preferences);
    return scoreA - scoreB;
  });

  // Return up to maxPlans meal plans
  return validPlans.slice(0, maxPlans);
}

/**
 * Generate meal options for a specific meal time
 */
function generateMealOptions(
  locations: DiningLocation[],
  mealTime: MealTime,
  preferences: UserPreferences
): SelectedMeal[] {
  const options: SelectedMeal[] = [];

  for (const location of locations) {
    if (location.isDiningHall) {
      // Dining Hall - generate component combinations
      const diningHall = location as DiningHall;
      const stations = diningHall.stations[mealTime];

      if (!stations || stations.length === 0) continue;

      // Generate multiple component combinations for this dining hall
      const combinations = generateDiningHallCombinations(
        diningHall,
        stations,
        mealTime,
        preferences
      );

      options.push(...combinations);
    } else {
      // Restaurant - add individual dishes
      const restaurant = location as Restaurant;
      const dishes = restaurant.dishes.filter((d) => d.mealTimes.includes(mealTime));

      for (const dish of dishes) {
        // Try each available payment option
        const paymentTypes = Object.keys(dish.paymentCosts) as Array<'diningDollars' | 'realDollars' | 'maroonMeal'>;

        for (const paymentType of paymentTypes) {
          const cost = dish.paymentCosts[paymentType];
          if (cost === undefined) continue;

          options.push({
            location: restaurant,
            mealTime,
            dish,
            dishPaymentType: paymentType,
            totalMacros: { ...dish.macros },
            cost: {
              type: paymentType,
              amount: cost
            }
          });
        }
      }
    }
  }

  return options;
}

/**
 * Generate component combinations for dining hall meals
 * Each station is processed independently to create complete meals
 */
function generateDiningHallCombinations(
  diningHall: DiningHall,
  stations: any[],
  mealTime: MealTime,
  preferences: UserPreferences
): SelectedMeal[] {
  const allCombinations: SelectedMeal[] = [];

  // Get target macros for this meal (roughly 1/3 of daily goals)
  const targetMacros: Macros = {
    calories: preferences.dietGoals.calories / 3,
    protein: preferences.dietGoals.protein / 3,
    carbs: preferences.dietGoals.carbs / 3,
    fats: preferences.dietGoals.fats / 3
  };

  // Process each station independently
  for (const station of stations) {
    const stationCombinations = generateStationCombinations(
      diningHall,
      station,
      mealTime,
      targetMacros,
      preferences
    );
    allCombinations.push(...stationCombinations);
  }

  return allCombinations;
}

/**
 * Generate valid meal combinations from a single station
 */
function generateStationCombinations(
  diningHall: DiningHall,
  station: { name: string; components: MealComponent[] },
  mealTime: MealTime,
  targetMacros: Macros,
  preferences: UserPreferences
): SelectedMeal[] {
  const validMeals: SelectedMeal[] = [];

  // Group components by category
  const componentsByCategory = groupComponentsByCategory(station.components);

  // Generate valid combinations based on global rules
  const combinations = generateValidCombinations(componentsByCategory, targetMacros);

  // Create SelectedMeal objects for each valid combination
  for (const components of combinations) {
    const totalMacros = calculateMealTotals(components);

    // Only include meals with reasonable macro totals
    if (isReasonableMealSize(totalMacros, targetMacros)) {
      // Try each payment option for the dining hall
      const paymentOptions: Array<'mealSwipe' | 'diningDollars' | 'realDollars'> = [
        'mealSwipe',
        'diningDollars',
        'realDollars'
      ];

      for (const paymentType of paymentOptions) {
        validMeals.push({
          location: diningHall,
          mealTime,
          selectedComponents: components,
          diningHallPaymentType: paymentType,
          totalMacros,
          cost: {
            type: paymentType,
            amount: diningHall.paymentCosts[paymentType]
          }
        });
      }
    }
  }

  return validMeals;
}

/**
 * Group meal components by their category
 */
function groupComponentsByCategory(components: MealComponent[]): Record<ComponentCategory, MealComponent[]> {
  const grouped: Record<string, MealComponent[]> = {
    protein: [],
    base: [],
    vegetable: [],
    side: [],
    sauce: []
  };

  for (const component of components) {
    if (grouped[component.category]) {
      grouped[component.category].push(component);
    }
  }

  return grouped as Record<ComponentCategory, MealComponent[]>;
}

/**
 * Generate valid combinations following global meal rules
 * Must have at least 2 distinct components, with at least 1 protein
 */
function generateValidCombinations(
  componentsByCategory: Record<ComponentCategory, MealComponent[]>,
  targetMacros: Macros
): MealComponent[][] {
  const combinations: MealComponent[][] = [];

  const proteins = componentsByCategory.protein || [];
  const bases = componentsByCategory.base || [];
  const vegetables = componentsByCategory.vegetable || [];
  const sides = componentsByCategory.side || [];
  const sauces = componentsByCategory.sauce || [];

  // Must have at least one protein
  if (proteins.length === 0) {
    return combinations;
  }

  // Generate all valid 2-component combinations with at least 1 protein
  for (const protein of proteins) {
    // Protein + Base combinations
    for (const base of bases) {
      const combo2 = [protein, base];
      combinations.push([...combo2]);

      // Try adding a third component
      for (const vegetable of vegetables) {
        const combo3 = [...combo2, vegetable];
        if (combo3.length <= GLOBAL_DINING_HALL_MEAL_RULES.maxComponents) {
          combinations.push([...combo3]);
        }

        // Try adding a fourth component (sauce)
        for (const sauce of sauces) {
          const combo4 = [...combo2, vegetable, sauce];
          if (combo4.length <= GLOBAL_DINING_HALL_MEAL_RULES.maxComponents) {
            combinations.push([...combo4]);
          }
        }
      }

      // Base + side combinations (3 components)
      for (const side of sides) {
        const combo3 = [...combo2, side];
        if (combo3.length <= GLOBAL_DINING_HALL_MEAL_RULES.maxComponents) {
          combinations.push([...combo3]);
        }
      }

      // Base + sauce combinations (3 components)
      for (const sauce of sauces) {
        const combo3 = [...combo2, sauce];
        if (combo3.length <= GLOBAL_DINING_HALL_MEAL_RULES.maxComponents) {
          combinations.push([...combo3]);
        }
      }
    }

    // Protein + Vegetable combinations (no base)
    for (const vegetable of vegetables) {
      const combo2 = [protein, vegetable];
      combinations.push([...combo2]);

      // Try adding a side
      for (const side of sides) {
        const combo3 = [...combo2, side];
        if (combo3.length <= GLOBAL_DINING_HALL_MEAL_RULES.maxComponents) {
          combinations.push([...combo3]);
        }
      }

      // Try adding a sauce
      for (const sauce of sauces) {
        const combo3 = [...combo2, sauce];
        if (combo3.length <= GLOBAL_DINING_HALL_MEAL_RULES.maxComponents) {
          combinations.push([...combo3]);
        }
      }
    }

    // Protein + Side combinations (no base)
    for (const side of sides) {
      const combo2 = [protein, side];
      combinations.push([...combo2]);

      // Try adding a sauce
      for (const sauce of sauces) {
        const combo3 = [...combo2, sauce];
        if (combo3.length <= GLOBAL_DINING_HALL_MEAL_RULES.maxComponents) {
          combinations.push([...combo3]);
        }
      }
    }

    // Protein + Sauce combinations (no base, for low-carb options)
    for (const sauce of sauces) {
      const combo2 = [protein, sauce];
      combinations.push([...combo2]);
    }

    // Protein + Protein combinations (for high-protein meals)
    for (const protein2 of proteins) {
      if (protein.id !== protein2.id) {
        const combo2 = [protein, protein2];
        combinations.push([...combo2]);
      }
    }
  }

  return combinations;
}

/**
 * Check if meal size is reasonable for one meal (not too small or too large)
 */
function isReasonableMealSize(mealMacros: Macros, targetMacros: Macros): boolean {
  // Meal should be between 50% and 150% of target calories
  const minCalories = targetMacros.calories * 0.5;
  const maxCalories = targetMacros.calories * 1.5;

  return mealMacros.calories >= minCalories && mealMacros.calories <= maxCalories;
}

/**
 * Calculate total macros from selected components
 */
function calculateMealTotals(components: MealComponent[]): Macros {
  return components.reduce(
    (totals, component) => ({
      calories: totals.calories + component.macros.calories,
      protein: totals.protein + component.macros.protein,
      carbs: totals.carbs + component.macros.carbs,
      fats: totals.fats + component.macros.fats
    }),
    { calories: 0, protein: 0, carbs: 0, fats: 0 }
  );
}

/**
 * Check if a value is within the threshold percentage of the target
 */
function isWithinThreshold(actual: number, target: number, thresholdPercent: number): boolean {
  const threshold = (thresholdPercent / 100) * target;
  return Math.abs(actual - target) <= threshold;
}

/**
 * Calculate a score for how close the meal plan is to the goals (lower is better)
 */
function calculateMacroScore(plan: DailyMealPlan, preferences: UserPreferences): number {
  const caloriesDiff = Math.abs(plan.totalCalories - preferences.dietGoals.calories);
  const proteinDiff = Math.abs(plan.totalProtein - preferences.dietGoals.protein);
  const carbsDiff = Math.abs(plan.totalCarbs - preferences.dietGoals.carbs);
  const fatsDiff = Math.abs(plan.totalFats - preferences.dietGoals.fats);

  // Weighted score (protein and calories are more important)
  return caloriesDiff * 0.4 + proteinDiff * 0.3 + carbsDiff * 0.2 + fatsDiff * 0.1;
}

/**
 * Calculate the budget used by a set of selected meals
 */
function calculateBudgetUsed(meals: SelectedMeal[]): Budget {
  const budgetUsed: Budget = {
    mealSwipes: 0,
    maroonMeals: 0,
    diningDollars: 0,
    realDollars: 0
  };

  for (const meal of meals) {
    switch (meal.cost.type) {
      case 'mealSwipe':
        budgetUsed.mealSwipes += meal.cost.amount;
        break;
      case 'maroonMeal':
        budgetUsed.maroonMeals += meal.cost.amount;
        break;
      case 'diningDollars':
        budgetUsed.diningDollars += meal.cost.amount;
        break;
      case 'realDollars':
        budgetUsed.realDollars += meal.cost.amount;
        break;
    }
  }

  return budgetUsed;
}

/**
 * Check if the budget used is within the available budget
 */
function isWithinBudget(used: Budget, available: Budget): boolean {
  // Check if maroon meals used exceeds meal swipes (maroon meals are a subset of meal swipes)
  if (used.maroonMeals > used.mealSwipes) {
    return false;
  }

  return (
    used.mealSwipes <= available.mealSwipes &&
    used.maroonMeals <= available.maroonMeals &&
    used.diningDollars <= available.diningDollars &&
    used.realDollars <= available.realDollars
  );
}

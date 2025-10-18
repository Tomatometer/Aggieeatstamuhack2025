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
  MealTime
} from '../types';
import { mockDiningLocations } from '../data/mockData';

/**
 * Finds the optimal combination of 3 meals (breakfast, lunch, dinner) 
 * that matches the user's diet goals, macro thresholds, and budget constraints.
 */
export function findOptimalMealPlan(preferences: UserPreferences): DailyMealPlan | null {
  // Filter locations by user preferences
  let filteredLocations = [...mockDiningLocations];

  // Filter by location
  if (preferences.location !== 'No Preference') {
    filteredLocations = filteredLocations.filter(
      (loc) => loc.location === preferences.location
    );
  }

  if (filteredLocations.length === 0) {
    return null;
  }

  // Generate meal options for each meal time
  const breakfastOptions = generateMealOptions(filteredLocations, 'breakfast', preferences);
  const lunchOptions = generateMealOptions(filteredLocations, 'lunch', preferences);
  const dinnerOptions = generateMealOptions(filteredLocations, 'dinner', preferences);

  if (breakfastOptions.length === 0 || lunchOptions.length === 0 || dinnerOptions.length === 0) {
    return null;
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
    return null;
  }

  // Sort by how close to macro goals (best match first)
  validPlans.sort((a, b) => {
    const scoreA = calculateMacroScore(a, preferences);
    const scoreB = calculateMacroScore(b, preferences);
    return scoreA - scoreB;
  });

  return validPlans[0];
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
 */
function generateDiningHallCombinations(
  diningHall: DiningHall,
  stations: any[],
  mealTime: MealTime,
  preferences: UserPreferences
): SelectedMeal[] {
  const combinations: SelectedMeal[] = [];

  // Get target macros for this meal (roughly 1/3 of daily goals)
  const targetMacros: Macros = {
    calories: preferences.dietGoals.calories / 3,
    protein: preferences.dietGoals.protein / 3,
    carbs: preferences.dietGoals.carbs / 3,
    fats: preferences.dietGoals.fats / 3
  };

  // Generate a few different combinations with different strategies
  const strategies = [
    { caloriesMult: 1.0, proteinMult: 1.2, carbsMult: 0.8, fatsMult: 1.0 }, // High protein
    { caloriesMult: 1.0, proteinMult: 1.0, carbsMult: 1.0, fatsMult: 1.0 }, // Balanced
    { caloriesMult: 1.0, proteinMult: 0.8, carbsMult: 1.3, fatsMult: 1.0 }, // Higher carbs
  ];

  for (const strategy of strategies) {
    const adjustedTarget: Macros = {
      calories: targetMacros.calories * strategy.caloriesMult,
      protein: targetMacros.protein * strategy.proteinMult,
      carbs: targetMacros.carbs * strategy.carbsMult,
      fats: targetMacros.fats * strategy.fatsMult
    };

    const components = selectComponentsForTarget(stations, adjustedTarget);

    if (components.length > 0) {
      const totalMacros = calculateMealTotals(components);

      // Try each payment option for the dining hall
      const paymentOptions: Array<'mealSwipe' | 'diningDollars' | 'realDollars'> = [
        'mealSwipe',
        'diningDollars',
        'realDollars'
      ];

      for (const paymentType of paymentOptions) {
        combinations.push({
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

  return combinations;
}

/**
 * Select components from stations to match target macros
 * Uses a greedy algorithm to build a reasonable meal
 */
function selectComponentsForTarget(
  stations: Array<{ name: string; components: MealComponent[] }>,
  target: Macros
): MealComponent[] {
  const selected: MealComponent[] = [];
  let totals: Macros = { calories: 0, protein: 0, carbs: 0, fats: 0 };

  // Try to get at least one item from each station
  for (const station of stations) {
    if (station.components.length === 0) continue;

    // Find the component that best matches our remaining needs
    let bestComponent: MealComponent | null = null;
    let bestScore = Infinity;

    for (const component of station.components) {
      // Calculate how this would affect our distance from target
      const newTotals: Macros = {
        calories: totals.calories + component.macros.calories,
        protein: totals.protein + component.macros.protein,
        carbs: totals.carbs + component.macros.carbs,
        fats: totals.fats + component.macros.fats
      };

      // Score based on distance from target (lower is better)
      const score =
        Math.abs(newTotals.calories - target.calories) * 0.3 +
        Math.abs(newTotals.protein - target.protein) * 2 +
        Math.abs(newTotals.carbs - target.carbs) * 0.5 +
        Math.abs(newTotals.fats - target.fats) * 1;

      // Don't overshoot calories too much
      if (newTotals.calories > target.calories * 1.3) continue;

      if (score < bestScore) {
        bestScore = score;
        bestComponent = component;
      }
    }

    if (bestComponent) {
      selected.push(bestComponent);
      totals.calories += bestComponent.macros.calories;
      totals.protein += bestComponent.macros.protein;
      totals.carbs += bestComponent.macros.carbs;
      totals.fats += bestComponent.macros.fats;
    }
  }

  return selected;
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

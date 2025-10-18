import { UserPreferences, DailyMealPlan, Meal, MealWithPayment, Budget, PaymentOption } from '../types';
import { mockRestaurants } from '../data/mockData';

/**
 * Finds the optimal combination of 3 meals (breakfast, lunch, dinner) 
 * that matches the user's diet goals, macro thresholds, and budget constraints.
 */
export function findOptimalMealPlan(preferences: UserPreferences): DailyMealPlan | null {
  // Get all meals from restaurants
  let allMeals: Meal[] = [];
  mockRestaurants.forEach((restaurant) => {
    restaurant.meals.forEach((meal) => {
      allMeals.push({
        ...meal,
        restaurantName: restaurant.name
      });
    });
  });

  // Filter by location if not "No Preference"
  if (preferences.location !== 'No Preference') {
    const restaurantIds = mockRestaurants
      .filter((r) => r.location === preferences.location)
      .map((r) => r.id);
    allMeals = allMeals.filter((meal) => {
      const restaurantId = meal.id.split('-')[0];
      return restaurantIds.includes(restaurantId);
    });
  }

  // Filter by cuisine if not "All Cuisines"
  if (preferences.mood !== 'All Cuisines') {
    const restaurantIds = mockRestaurants
      .filter((r) => r.cuisine === preferences.mood)
      .map((r) => r.id);
    allMeals = allMeals.filter((meal) => {
      const restaurantId = meal.id.split('-')[0];
      return restaurantIds.includes(restaurantId);
    });
  }

  // Separate meals by time
  const breakfastMeals = allMeals.filter((m) => m.mealTime === 'breakfast');
  const lunchMeals = allMeals.filter((m) => m.mealTime === 'lunch');
  const dinnerMeals = allMeals.filter((m) => m.mealTime === 'dinner');

  if (breakfastMeals.length === 0 || lunchMeals.length === 0 || dinnerMeals.length === 0) {
    return null;
  }

  // Find all valid combinations that meet macro thresholds and budget
  let validPlans: DailyMealPlan[] = [];

  for (const breakfast of breakfastMeals) {
    for (const lunch of lunchMeals) {
      for (const dinner of dinnerMeals) {
        // Calculate totals
        const totalCalories = breakfast.calories + lunch.calories + dinner.calories;
        const totalProtein = breakfast.protein + lunch.protein + dinner.protein;
        const totalCarbs = breakfast.carbs + lunch.carbs + dinner.carbs;
        const totalFats = breakfast.fats + lunch.fats + dinner.fats;

        // Check if within macro thresholds
        if (!isWithinThreshold(totalCalories, preferences.dietGoals.calories, preferences.macroThresholds.calories)) continue;
        if (!isWithinThreshold(totalProtein, preferences.dietGoals.protein, preferences.macroThresholds.protein)) continue;
        if (!isWithinThreshold(totalCarbs, preferences.dietGoals.carbs, preferences.macroThresholds.carbs)) continue;
        if (!isWithinThreshold(totalFats, preferences.dietGoals.fats, preferences.macroThresholds.fats)) continue;

        // Try to find a valid payment combination within budget
        const paymentCombination = findValidPaymentCombination(
          [breakfast, lunch, dinner],
          preferences.budget
        );

        if (paymentCombination) {
          const [breakfastPayment, lunchPayment, dinnerPayment] = paymentCombination.payments;
          
          const plan: DailyMealPlan = {
            breakfast: { ...breakfast, selectedPayment: breakfastPayment },
            lunch: { ...lunch, selectedPayment: lunchPayment },
            dinner: { ...dinner, selectedPayment: dinnerPayment },
            totalCalories,
            totalProtein,
            totalCarbs,
            totalFats,
            budgetUsed: paymentCombination.budgetUsed
          };

          validPlans.push(plan);
        }
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
 * Find a valid payment combination for the three meals within budget
 */
function findValidPaymentCombination(
  meals: [Meal, Meal, Meal],
  budget: Budget
): { payments: [PaymentOption, PaymentOption, PaymentOption]; budgetUsed: Budget } | null {
  const [meal1, meal2, meal3] = meals;

  // Try all payment option combinations
  for (const payment1 of meal1.paymentOptions) {
    for (const payment2 of meal2.paymentOptions) {
      for (const payment3 of meal3.paymentOptions) {
        const budgetUsed = calculateBudgetUsed([payment1, payment2, payment3]);
        
        if (isWithinBudget(budgetUsed, budget)) {
          return {
            payments: [payment1, payment2, payment3],
            budgetUsed
          };
        }
      }
    }
  }

  return null;
}

/**
 * Calculate the budget used by a set of payment options
 */
function calculateBudgetUsed(payments: PaymentOption[]): Budget {
  const budgetUsed: Budget = {
    mealSwipes: 0,
    maroonMeals: 0,
    diningDollars: 0,
    realDollars: 0
  };

  for (const payment of payments) {
    switch (payment.type) {
      case 'mealSwipe':
        budgetUsed.mealSwipes += payment.cost;
        break;
      case 'maroonMeal':
        budgetUsed.maroonMeals += payment.cost;
        break;
      case 'diningDollars':
        budgetUsed.diningDollars += payment.cost;
        break;
      case 'realDollars':
        budgetUsed.realDollars += payment.cost;
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

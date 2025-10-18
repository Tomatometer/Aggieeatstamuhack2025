import { useState } from 'react';
import { DietGoalsForm } from './components/DietGoalsForm';
import { DailyMealPlanComponent } from './components/DailyMealPlan';
import { UserPreferences, DailyMealPlan, Meal } from './types';
import { mockRestaurants } from './data/mockData';
import { Utensils } from 'lucide-react';

export default function App() {
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const [mealPlan, setMealPlan] = useState<DailyMealPlan | null>(null);

  const findOptimalMealPlan = (prefs: UserPreferences): DailyMealPlan | null => {
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
    if (prefs.location !== 'No Preference') {
      const restaurantIds = mockRestaurants
        .filter((r) => r.location === prefs.location)
        .map((r) => r.id);
      allMeals = allMeals.filter((meal) => {
        const restaurantId = meal.id.split('-')[0];
        return restaurantIds.includes(restaurantId);
      });
    }

    // Filter by cuisine if not "All Cuisines"
    if (prefs.mood !== 'All Cuisines') {
      const restaurantIds = mockRestaurants
        .filter((r) => r.cuisine === prefs.mood)
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

    // Find the best combination of 3 meals
    let bestPlan: DailyMealPlan | null = null;
    let bestScore = Infinity;

    for (const breakfast of breakfastMeals) {
      for (const lunch of lunchMeals) {
        for (const dinner of dinnerMeals) {
          const totalCalories = breakfast.calories + lunch.calories + dinner.calories;
          const totalProtein = breakfast.protein + lunch.protein + dinner.protein;
          const totalCarbs = breakfast.carbs + lunch.carbs + dinner.carbs;
          const totalFats = breakfast.fats + lunch.fats + dinner.fats;

          // Calculate how close this combination is to the target
          const caloriesDiff = Math.abs(totalCalories - prefs.dietGoals.calories);
          const proteinDiff = Math.abs(totalProtein - prefs.dietGoals.protein);
          const carbsDiff = Math.abs(totalCarbs - prefs.dietGoals.carbs);
          const fatsDiff = Math.abs(totalFats - prefs.dietGoals.fats);

          // Weighted score (protein and calories are more important)
          const score =
            caloriesDiff * 0.4 +
            proteinDiff * 0.3 +
            carbsDiff * 0.2 +
            fatsDiff * 0.1;

          if (score < bestScore) {
            bestScore = score;
            bestPlan = {
              breakfast,
              lunch,
              dinner,
              totalCalories,
              totalProtein,
              totalCarbs,
              totalFats,
              totalPrice: breakfast.price + lunch.price + dinner.price
            };
          }
        }
      }
    }

    return bestPlan;
  };

  const handlePreferencesSubmit = (newPreferences: UserPreferences) => {
    setPreferences(newPreferences);
    const plan = findOptimalMealPlan(newPreferences);
    setMealPlan(plan);
  };

  const handleBack = () => {
    setPreferences(null);
    setMealPlan(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Utensils className="w-8 h-8" />
            <h1>Macro Match</h1>
          </div>
          <p className="text-muted-foreground mt-2">
            Find the perfect 3-meal plan that matches your daily macro goals
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {!preferences || !mealPlan ? (
          <DietGoalsForm onSubmit={handlePreferencesSubmit} />
        ) : mealPlan ? (
          <DailyMealPlanComponent
            mealPlan={mealPlan}
            dietGoals={preferences.dietGoals}
            onBack={handleBack}
          />
        ) : (
          <div className="max-w-2xl mx-auto text-center py-12">
            <p className="text-muted-foreground">
              Sorry, we couldn't find a meal combination that matches your preferences.
              Please try adjusting your filters.
            </p>
            <button onClick={handleBack} className="mt-4">
              Try Again
            </button>
          </div>
        )}
      </main>

      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>Macro Match - Your personalized daily meal planning assistant</p>
        </div>
      </footer>
    </div>
  );
}

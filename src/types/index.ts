export interface DietGoals {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

export interface UserPreferences {
  dietGoals: DietGoals;
  location: string;
  mood: string;
  radius?: number;
}

export type MealTime = 'breakfast' | 'lunch' | 'dinner';

export interface Meal {
  id: string;
  name: string;
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  price: number;
  mealTime: MealTime;
  restaurantName?: string;
  image?: string;
}

export interface DailyMealPlan {
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFats: number;
  totalPrice: number;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  location: string;
  distance: number;
  rating: number;
  priceRange: string;
  meals: Meal[];
}

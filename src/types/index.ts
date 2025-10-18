export interface DietGoals {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

export type PaymentType = 'mealSwipe' | 'diningDollars' | 'maroonMeal' | 'realDollars';

export interface PaymentOption {
  type: PaymentType;
  cost: number;
}

export interface Budget {
  mealSwipes: number;
  maroonMeals: number;
  diningDollars: number;
  realDollars: number;
}

export interface MacroThresholds {
  calories: number; // percentage (e.g., 10 means ±10%)
  protein: number;
  carbs: number;
  fats: number;
}

export interface UserPreferences {
  dietGoals: DietGoals;
  macroThresholds: MacroThresholds;
  budget: Budget;
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
  paymentOptions: PaymentOption[];
  mealTime: MealTime;
  restaurantName?: string;
  isDiningHall?: boolean;
  image?: string;
}

export interface MealWithPayment extends Meal {
  selectedPayment: PaymentOption;
}

export interface DailyMealPlan {
  breakfast: MealWithPayment;
  lunch: MealWithPayment;
  dinner: MealWithPayment;
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFats: number;
  budgetUsed: Budget;
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

export interface DietGoals {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

export type PaymentType = 'mealSwipe' | 'diningDollars' | 'maroonMeal' | 'realDollars';

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
  radius?: number;
}

export type MealTime = 'breakfast' | 'lunch' | 'dinner';

export type DietaryPreference = 'vegetarian' | 'vegan' | 'halal' | 'glutenFree';

export type Allergen = 'dairy' | 'eggs' | 'fish' | 'shellfish' | 'treeNuts' | 'peanuts' | 'wheat' | 'soy';

// Component categories for dining hall meal building
export type ComponentCategory = 
  | 'protein' 
  | 'base' 
  | 'vegetable' 
  | 'side' 
  | 'sauce';

// Macros for both dishes and meal components
export interface Macros {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

// Payment costs for restaurant dishes
export interface DishPaymentCosts {
  diningDollars?: number;
  realDollars?: number;
  maroonMeal?: number; // Cost in maroon meals (usually 1 or not available)
}

// Restaurant Dish (individual meals at retail locations)
export interface Dish {
  id: string;
  name: string;
  description: string;
  macros: Macros;
  allergens: Allergen[];
  dietaryPreferences: DietaryPreference[];
  paymentCosts: DishPaymentCosts;
  mealTimes: MealTime[]; // Can be available at multiple meal times
}

// Meal Component (parts of a dining hall meal)
export interface MealComponent {
  id: string;
  name: string;
  station: string;
  category: ComponentCategory; // Category for meal building logic
  macros: Macros;
  allergens: Allergen[];
  dietaryPreferences: DietaryPreference[];
}

// Dining Hall Station
export interface DiningHallStation {
  id: string;
  name: string;
  components: MealComponent[];
}

// Payment costs for dining hall access
export interface DiningHallPaymentCosts {
  mealSwipe: number; // Usually 1
  diningDollars: number; // Dollar amount for unlimited access
  realDollars: number; // Dollar amount for unlimited access
}

// Restaurant (retail location - isDiningHall = false)
export interface Restaurant {
  id: string;
  name: string;
  location: string;
  isDiningHall: false;
  dishes: Dish[];
}

// Dining Hall (buffet-style - isDiningHall = true)
export interface DiningHall {
  id: string;
  name: string;
  location: string;
  isDiningHall: true;
  stations: {
    breakfast?: DiningHallStation[];
    lunch?: DiningHallStation[];
    dinner?: DiningHallStation[];
  };
  paymentCosts: DiningHallPaymentCosts;
}

// Union type for all dining locations
export type DiningLocation = Restaurant | DiningHall;

// Selected meal with payment information
export interface SelectedMeal {
  location: DiningLocation;
  mealTime: MealTime;
  // For restaurants
  dish?: Dish;
  dishPaymentType?: 'diningDollars' | 'realDollars' | 'maroonMeal';
  // For dining halls
  selectedComponents?: MealComponent[];
  diningHallPaymentType?: 'mealSwipe' | 'diningDollars' | 'realDollars';
  // Calculated totals
  totalMacros: Macros;
  cost: {
    type: PaymentType;
    amount: number;
  };
}

export interface DailyMealPlan {
  breakfast: SelectedMeal;
  lunch: SelectedMeal;
  dinner: SelectedMeal;
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFats: number;
  budgetUsed: Budget;
}

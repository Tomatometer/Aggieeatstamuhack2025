import { Restaurant } from '../types';

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Main Dining Hall',
    cuisine: 'American',
    location: 'Downtown',
    distance: 0.5,
    rating: 4.8,
    priceRange: '$$',
    meals: [
      {
        id: '1-1',
        name: 'Breakfast Buffet',
        description: 'Unlimited access to eggs, pancakes, fruits, yogurt, and more',
        calories: 650,
        protein: 35,
        carbs: 75,
        fats: 22,
        isDiningHall: true,
        paymentOptions: [
          { type: 'mealSwipe', cost: 1 },
          { type: 'diningDollars', cost: 12 },
          { type: 'realDollars', cost: 12 }
        ],
        mealTime: 'breakfast'
      },
      {
        id: '1-2',
        name: 'Lunch Buffet',
        description: 'Unlimited access to salad bar, entrees, sides, and desserts',
        calories: 750,
        protein: 45,
        carbs: 80,
        fats: 28,
        isDiningHall: true,
        paymentOptions: [
          { type: 'mealSwipe', cost: 1 },
          { type: 'diningDollars', cost: 12 },
          { type: 'realDollars', cost: 12 }
        ],
        mealTime: 'lunch'
      },
      {
        id: '1-3',
        name: 'Dinner Buffet',
        description: 'Unlimited access to pasta station, grill items, vegetables, and more',
        calories: 800,
        protein: 50,
        carbs: 85,
        fats: 30,
        isDiningHall: true,
        paymentOptions: [
          { type: 'mealSwipe', cost: 1 },
          { type: 'diningDollars', cost: 12 },
          { type: 'realDollars', cost: 12 }
        ],
        mealTime: 'dinner'
      }
    ]
  },
  {
    id: '2',
    name: 'Chick-fil-A Campus',
    cuisine: 'American',
    location: 'Midtown',
    distance: 1.2,
    rating: 4.6,
    priceRange: '$$',
    meals: [
      {
        id: '2-1',
        name: 'Chicken Biscuit',
        description: 'Chicken breast on a buttermilk biscuit',
        calories: 460,
        protein: 23,
        carbs: 45,
        fats: 21,
        paymentOptions: [
          { type: 'maroonMeal', cost: 1 },
          { type: 'diningDollars', cost: 5.99 },
          { type: 'realDollars', cost: 5.99 }
        ],
        mealTime: 'breakfast'
      },
      {
        id: '2-2',
        name: 'Classic Chicken Sandwich',
        description: 'Grilled or fried chicken breast on a toasted bun',
        calories: 440,
        protein: 38,
        carbs: 41,
        fats: 16,
        paymentOptions: [
          { type: 'maroonMeal', cost: 1 },
          { type: 'diningDollars', cost: 6.99 },
          { type: 'realDollars', cost: 6.99 }
        ],
        mealTime: 'lunch'
      },
      {
        id: '2-3',
        name: 'Spicy Deluxe Sandwich',
        description: 'Spicy chicken with lettuce, tomato, and pepper jack cheese',
        calories: 550,
        protein: 34,
        carbs: 48,
        fats: 25,
        paymentOptions: [
          { type: 'diningDollars', cost: 8.49 },
          { type: 'realDollars', cost: 8.49 }
        ],
        mealTime: 'lunch'
      },
      {
        id: '2-4',
        name: 'Grilled Nuggets (8-count)',
        description: 'Grilled chicken nuggets with your choice of sauce',
        calories: 250,
        protein: 38,
        carbs: 9,
        fats: 6,
        paymentOptions: [
          { type: 'diningDollars', cost: 7.99 },
          { type: 'realDollars', cost: 7.99 }
        ],
        mealTime: 'dinner'
      }
    ]
  },
  {
    id: '3',
    name: 'Campus Fresh Market',
    cuisine: 'Health Food',
    location: 'Downtown',
    distance: 0.8,
    rating: 4.9,
    priceRange: '$$',
    meals: [
      {
        id: '3-1',
        name: 'Protein Smoothie Bowl',
        description: 'Açaí bowl with protein powder, granola, and fresh fruit',
        calories: 420,
        protein: 28,
        carbs: 52,
        fats: 12,
        paymentOptions: [
          { type: 'diningDollars', cost: 8.99 },
          { type: 'realDollars', cost: 8.99 }
        ],
        mealTime: 'breakfast'
      },
      {
        id: '3-2',
        name: 'Build-Your-Own Salad',
        description: 'Custom salad with choice of protein, greens, and toppings',
        calories: 380,
        protein: 32,
        carbs: 28,
        fats: 16,
        paymentOptions: [
          { type: 'diningDollars', cost: 9.99 },
          { type: 'realDollars', cost: 9.99 }
        ],
        mealTime: 'lunch'
      },
      {
        id: '3-3',
        name: 'Grilled Chicken Wrap',
        description: 'Grilled chicken with veggies in a whole wheat wrap',
        calories: 510,
        protein: 42,
        carbs: 45,
        fats: 16,
        paymentOptions: [
          { type: 'maroonMeal', cost: 1 },
          { type: 'diningDollars', cost: 8.49 },
          { type: 'realDollars', cost: 8.49 }
        ],
        mealTime: 'lunch'
      },
      {
        id: '3-4',
        name: 'Salmon & Quinoa Bowl',
        description: 'Grilled salmon with quinoa, roasted vegetables, and lemon',
        calories: 580,
        protein: 44,
        carbs: 48,
        fats: 20,
        paymentOptions: [
          { type: 'diningDollars', cost: 12.99 },
          { type: 'realDollars', cost: 12.99 }
        ],
        mealTime: 'dinner'
      }
    ]
  },
  {
    id: '4',
    name: 'Panda Express Campus',
    cuisine: 'Asian',
    location: 'Uptown',
    distance: 2.1,
    rating: 4.7,
    priceRange: '$',
    meals: [
      {
        id: '4-1',
        name: 'Orange Chicken Bowl',
        description: 'Crispy chicken in orange sauce with fried rice',
        calories: 820,
        protein: 36,
        carbs: 94,
        fats: 32,
        paymentOptions: [
          { type: 'diningDollars', cost: 9.99 },
          { type: 'realDollars', cost: 9.99 }
        ],
        mealTime: 'lunch'
      },
      {
        id: '4-2',
        name: 'Grilled Teriyaki Chicken',
        description: 'Grilled chicken with teriyaki sauce and steamed vegetables',
        calories: 480,
        protein: 42,
        carbs: 52,
        fats: 10,
        paymentOptions: [
          { type: 'maroonMeal', cost: 1 },
          { type: 'diningDollars', cost: 8.99 },
          { type: 'realDollars', cost: 8.99 }
        ],
        mealTime: 'lunch'
      },
      {
        id: '4-3',
        name: 'String Bean Chicken Breast',
        description: 'Chicken breast wok-tossed with string beans',
        calories: 420,
        protein: 38,
        carbs: 28,
        fats: 16,
        paymentOptions: [
          { type: 'diningDollars', cost: 8.99 },
          { type: 'realDollars', cost: 8.99 }
        ],
        mealTime: 'dinner'
      }
    ]
  },
  {
    id: '5',
    name: 'Subway Campus',
    cuisine: 'American',
    location: 'Downtown',
    distance: 0.6,
    rating: 4.5,
    priceRange: '$',
    meals: [
      {
        id: '5-1',
        name: 'Egg & Cheese Flatbread',
        description: 'Egg whites with cheese on flatbread',
        calories: 380,
        protein: 26,
        carbs: 42,
        fats: 12,
        paymentOptions: [
          { type: 'maroonMeal', cost: 1 },
          { type: 'diningDollars', cost: 5.99 },
          { type: 'realDollars', cost: 5.99 }
        ],
        mealTime: 'breakfast'
      },
      {
        id: '5-2',
        name: 'Turkey Breast Sub (6-inch)',
        description: 'Oven roasted turkey with vegetables on wheat bread',
        calories: 280,
        protein: 18,
        carbs: 46,
        fats: 4,
        paymentOptions: [
          { type: 'maroonMeal', cost: 1 },
          { type: 'diningDollars', cost: 6.49 },
          { type: 'realDollars', cost: 6.49 }
        ],
        mealTime: 'lunch'
      },
      {
        id: '5-3',
        name: 'Chicken & Bacon Ranch Sub (6-inch)',
        description: 'Grilled chicken with bacon and ranch on wheat',
        calories: 570,
        protein: 36,
        carbs: 48,
        fats: 24,
        paymentOptions: [
          { type: 'diningDollars', cost: 7.99 },
          { type: 'realDollars', cost: 7.99 }
        ],
        mealTime: 'dinner'
      }
    ]
  },
  {
    id: '6',
    name: 'Starbucks Campus',
    cuisine: 'American',
    location: 'Midtown',
    distance: 1.5,
    rating: 4.4,
    priceRange: '$$',
    meals: [
      {
        id: '6-1',
        name: 'Egg White & Roasted Red Pepper Wrap',
        description: 'Egg whites with spinach and peppers in a whole wheat wrap',
        calories: 290,
        protein: 20,
        carbs: 34,
        fats: 8,
        paymentOptions: [
          { type: 'diningDollars', cost: 5.45 },
          { type: 'realDollars', cost: 5.45 }
        ],
        mealTime: 'breakfast'
      },
      {
        id: '6-2',
        name: 'Protein Box - Chicken & Quinoa',
        description: 'Grilled chicken with quinoa, vegetables, and hard-boiled egg',
        calories: 420,
        protein: 36,
        carbs: 38,
        fats: 14,
        paymentOptions: [
          { type: 'diningDollars', cost: 7.95 },
          { type: 'realDollars', cost: 7.95 }
        ],
        mealTime: 'lunch'
      }
    ]
  },
  {
    id: '7',
    name: 'Pizza Place Campus',
    cuisine: 'Italian',
    location: 'Uptown',
    distance: 1.8,
    rating: 4.3,
    priceRange: '$',
    meals: [
      {
        id: '7-1',
        name: 'Veggie Pizza (2 slices)',
        description: 'Thin crust pizza with vegetables and light cheese',
        calories: 480,
        protein: 22,
        carbs: 62,
        fats: 16,
        paymentOptions: [
          { type: 'diningDollars', cost: 6.99 },
          { type: 'realDollars', cost: 6.99 }
        ],
        mealTime: 'lunch'
      },
      {
        id: '7-2',
        name: 'Grilled Chicken Pizza (2 slices)',
        description: 'Thin crust with grilled chicken and vegetables',
        calories: 540,
        protein: 38,
        carbs: 58,
        fats: 18,
        paymentOptions: [
          { type: 'maroonMeal', cost: 1 },
          { type: 'diningDollars', cost: 7.99 },
          { type: 'realDollars', cost: 7.99 }
        ],
        mealTime: 'dinner'
      }
    ]
  }
];

export const cuisineTypes = [
  'All Cuisines',
  'American',
  'Mediterranean',
  'Health Food',
  'Asian',
  'Italian'
];

export const locations = [
  'No Preference',
  'Downtown',
  'Midtown',
  'Uptown',
  'Suburbs'
];

import { Restaurant, DiningHall, DiningLocation } from '../types';

// Mock data following the database schema

export const mockDiningLocations: DiningLocation[] = [
  // DINING HALL: Sbisa
  {
    id: 'dh-1',
    name: 'Sbisa Dining Hall',
    location: 'Sbisa',
    isDiningHall: true,
    paymentCosts: {
      mealSwipe: 1,
      diningDollars: 12,
      realDollars: 12
    },
    stations: {
      breakfast: [
        {
          id: 'sbisa-b-egg',
          name: 'Egg Station',
          components: [
            {
              id: 'sbisa-b-egg-1',
              name: 'Scrambled Eggs (2)',
              station: 'Egg Station',
              category: 'protein',
              macros: { calories: 180, protein: 12, carbs: 2, fats: 12 },
              allergens: ['eggs', 'dairy'],
              dietaryPreferences: ['vegetarian']
            },
            {
              id: 'sbisa-b-egg-2',
              name: 'Egg Whites (3)',
              station: 'Egg Station',
              category: 'protein',
              macros: { calories: 75, protein: 15, carbs: 1, fats: 0 },
              allergens: ['eggs'],
              dietaryPreferences: ['vegetarian']
            },
            {
              id: 'sbisa-b-egg-3',
              name: 'Omelet with Veggies',
              station: 'Egg Station',
              category: 'protein',
              macros: { calories: 220, protein: 18, carbs: 8, fats: 14 },
              allergens: ['eggs', 'dairy'],
              dietaryPreferences: ['vegetarian']
            },
            {
              id: 'sbisa-b-egg-4',
              name: 'English Muffin',
              station: 'Egg Station',
              category: 'base',
              macros: { calories: 130, protein: 5, carbs: 25, fats: 1.5 },
              allergens: ['wheat'],
              dietaryPreferences: ['vegetarian']
            },
            {
              id: 'sbisa-b-egg-5',
              name: 'Wheat Toast (2 slices)',
              station: 'Egg Station',
              category: 'base',
              macros: { calories: 160, protein: 8, carbs: 28, fats: 2 },
              allergens: ['wheat'],
              dietaryPreferences: ['vegan']
            },
            {
              id: 'sbisa-b-egg-6',
              name: 'Avocado Slices',
              station: 'Egg Station',
              category: 'side',
              macros: { calories: 120, protein: 1.5, carbs: 6, fats: 11 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            }
          ]
        },
        {
          id: 'sbisa-b-protein',
          name: 'Protein Station',
          components: [
            {
              id: 'sbisa-b-prot-1',
              name: 'Turkey Sausage (2 links)',
              station: 'Protein Station',
              category: 'protein',
              macros: { calories: 130, protein: 14, carbs: 1, fats: 8 },
              allergens: [],
              dietaryPreferences: ['halal']
            },
            {
              id: 'sbisa-b-prot-2',
              name: 'Bacon (3 strips)',
              station: 'Protein Station',
              category: 'protein',
              macros: { calories: 120, protein: 9, carbs: 0, fats: 9 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-b-prot-3',
              name: 'Grilled Chicken Breast',
              station: 'Protein Station',
              category: 'protein',
              macros: { calories: 165, protein: 31, carbs: 0, fats: 4 },
              allergens: [],
              dietaryPreferences: ['halal']
            },
            {
              id: 'sbisa-b-prot-4',
              name: 'Breakfast Potatoes',
              station: 'Protein Station',
              category: 'base',
              macros: { calories: 140, protein: 3, carbs: 24, fats: 4 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-b-prot-5',
              name: 'Grits (1 cup)',
              station: 'Protein Station',
              category: 'base',
              macros: { calories: 150, protein: 3, carbs: 31, fats: 1.5 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-b-prot-6',
              name: 'Sautéed Peppers & Onions',
              station: 'Protein Station',
              category: 'side',
              macros: { calories: 35, protein: 1, carbs: 8, fats: 0 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            }
          ]
        },
        {
          id: 'sbisa-b-carbs',
          name: 'Carbs Station',
          components: [
            {
              id: 'sbisa-b-carb-1',
              name: 'Whole Wheat Toast (2 slices)',
              station: 'Carbs Station',
              category: 'base',
              macros: { calories: 160, protein: 8, carbs: 28, fats: 2 },
              allergens: ['wheat'],
              dietaryPreferences: ['vegan']
            },
            {
              id: 'sbisa-b-carb-2',
              name: 'Oatmeal (1 cup)',
              station: 'Carbs Station',
              category: 'base',
              macros: { calories: 150, protein: 5, carbs: 27, fats: 3 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-b-carb-3',
              name: 'Pancakes (2)',
              station: 'Carbs Station',
              category: 'base',
              macros: { calories: 220, protein: 6, carbs: 44, fats: 2.5 },
              allergens: ['wheat', 'eggs', 'dairy'],
              dietaryPreferences: ['vegetarian']
            },
            {
              id: 'sbisa-b-carb-4',
              name: 'Hash Browns',
              station: 'Carbs Station',
              category: 'base',
              macros: { calories: 150, protein: 2, carbs: 18, fats: 8 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            }
          ]
        },
        {
          id: 'sbisa-b-fruit',
          name: 'Fruit & Yogurt',
          components: [
            {
              id: 'sbisa-b-fruit-1',
              name: 'Fresh Fruit Cup',
              station: 'Fruit & Yogurt',
              category: 'side',
              macros: { calories: 60, protein: 1, carbs: 15, fats: 0 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-b-fruit-2',
              name: 'Greek Yogurt',
              station: 'Fruit & Yogurt',
              category: 'protein',
              macros: { calories: 100, protein: 17, carbs: 6, fats: 0 },
              allergens: ['dairy'],
              dietaryPreferences: ['vegetarian', 'glutenFree']
            },
            {
              id: 'sbisa-b-fruit-3',
              name: 'Banana',
              station: 'Fruit & Yogurt',
              category: 'side',
              macros: { calories: 105, protein: 1, carbs: 27, fats: 0 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-b-fruit-4',
              name: 'Cottage Cheese',
              station: 'Fruit & Yogurt',
              category: 'protein',
              macros: { calories: 120, protein: 14, carbs: 6, fats: 5 },
              allergens: ['dairy'],
              dietaryPreferences: ['vegetarian', 'glutenFree']
            },
            {
              id: 'sbisa-b-fruit-5',
              name: 'Granola (1/2 cup)',
              station: 'Fruit & Yogurt',
              category: 'base',
              macros: { calories: 210, protein: 5, carbs: 34, fats: 7 },
              allergens: ['treeNuts'],
              dietaryPreferences: ['vegetarian']
            }
          ]
        }
      ],
      lunch: [
        {
          id: 'sbisa-l-grill',
          name: 'Grill',
          components: [
            {
              id: 'sbisa-l-grill-1',
              name: 'Grilled Chicken Breast',
              station: 'Grill',
              category: 'protein',
              macros: { calories: 165, protein: 31, carbs: 0, fats: 4 },
              allergens: [],
              dietaryPreferences: ['halal', 'glutenFree']
            },
            {
              id: 'sbisa-l-grill-2',
              name: 'Burger Patty',
              station: 'Grill',
              category: 'protein',
              macros: { calories: 250, protein: 20, carbs: 0, fats: 18 },
              allergens: [],
              dietaryPreferences: ['glutenFree']
            },
            {
              id: 'sbisa-l-grill-3',
              name: 'Grilled Salmon',
              station: 'Grill',
              category: 'protein',
              macros: { calories: 280, protein: 25, carbs: 0, fats: 18 },
              allergens: ['fish'],
              dietaryPreferences: ['glutenFree']
            },
            {
              id: 'sbisa-l-grill-4',
              name: 'Veggie Burger',
              station: 'Grill',
              category: 'protein',
              macros: { calories: 180, protein: 15, carbs: 18, fats: 6 },
              allergens: ['soy'],
              dietaryPreferences: ['vegan']
            },
            {
              id: 'sbisa-l-grill-5',
              name: 'Burger Bun',
              station: 'Grill',
              category: 'base',
              macros: { calories: 140, protein: 4, carbs: 26, fats: 2 },
              allergens: ['wheat'],
              dietaryPreferences: ['vegetarian']
            },
            {
              id: 'sbisa-l-grill-6',
              name: 'Whole Wheat Bun',
              station: 'Grill',
              category: 'base',
              macros: { calories: 150, protein: 6, carbs: 28, fats: 2.5 },
              allergens: ['wheat'],
              dietaryPreferences: ['vegan']
            },
            {
              id: 'sbisa-l-grill-7',
              name: 'Grilled Vegetables',
              station: 'Grill',
              category: 'side',
              macros: { calories: 50, protein: 2, carbs: 10, fats: 1 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            }
          ]
        },
        {
          id: 'sbisa-l-salad',
          name: 'Salad Bar',
          components: [
            {
              id: 'sbisa-l-salad-1',
              name: 'Mixed Greens (2 cups)',
              station: 'Salad Bar',
              category: 'base',
              macros: { calories: 20, protein: 2, carbs: 4, fats: 0 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-l-salad-2',
              name: 'Cherry Tomatoes',
              station: 'Salad Bar',
              category: 'vegetable',
              macros: { calories: 25, protein: 1, carbs: 5, fats: 0 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-l-salad-3',
              name: 'Grilled Chicken (diced)',
              station: 'Salad Bar',
              category: 'protein',
              macros: { calories: 120, protein: 24, carbs: 0, fats: 3 },
              allergens: [],
              dietaryPreferences: ['halal', 'glutenFree']
            },
            {
              id: 'sbisa-l-salad-4',
              name: 'Hard Boiled Eggs (2)',
              station: 'Salad Bar',
              category: 'protein',
              macros: { calories: 140, protein: 12, carbs: 1, fats: 10 },
              allergens: ['eggs'],
              dietaryPreferences: ['vegetarian', 'glutenFree']
            }
          ]
        },
        {
          id: 'sbisa-l-carbs',
          name: 'Carbs & Sides',
          components: [
            {
              id: 'sbisa-l-carb-1',
              name: 'Brown Rice (1 cup)',
              station: 'Carbs & Sides',
              category: 'base',
              macros: { calories: 215, protein: 5, carbs: 45, fats: 2 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-l-carb-2',
              name: 'White Rice (1 cup)',
              station: 'Carbs & Sides',
              category: 'base',
              macros: { calories: 205, protein: 4, carbs: 45, fats: 0.5 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-l-carb-3',
              name: 'Quinoa (1 cup)',
              station: 'Carbs & Sides',
              category: 'base',
              macros: { calories: 220, protein: 8, carbs: 40, fats: 4 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-l-carb-4',
              name: 'Sweet Potato (medium)',
              station: 'Carbs & Sides',
              category: 'base',
              macros: { calories: 130, protein: 3, carbs: 30, fats: 0 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            }
          ]
        },
        {
          id: 'sbisa-l-veg',
          name: 'Vegetables',
          components: [
            {
              id: 'sbisa-l-veg-1',
              name: 'Steamed Broccoli',
              station: 'Vegetables',
              category: 'vegetable',
              macros: { calories: 55, protein: 4, carbs: 11, fats: 0.5 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-l-veg-2',
              name: 'Roasted Brussels Sprouts',
              station: 'Vegetables',
              category: 'vegetable',
              macros: { calories: 60, protein: 3, carbs: 12, fats: 1 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-l-veg-3',
              name: 'Green Beans',
              station: 'Vegetables',
              category: 'vegetable',
              macros: { calories: 45, protein: 2, carbs: 10, fats: 0 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-l-veg-4',
              name: 'Grilled Tofu',
              station: 'Vegetables',
              category: 'protein',
              macros: { calories: 145, protein: 17, carbs: 4, fats: 7 },
              allergens: ['soy'],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-l-veg-5',
              name: 'Roasted Chickpeas',
              station: 'Vegetables',
              category: 'protein',
              macros: { calories: 140, protein: 7, carbs: 22, fats: 3 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-l-veg-6',
              name: 'Wild Rice (1 cup)',
              station: 'Vegetables',
              category: 'base',
              macros: { calories: 166, protein: 6.5, carbs: 35, fats: 0.5 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-l-veg-7',
              name: 'Roasted Sweet Potato Cubes',
              station: 'Vegetables',
              category: 'base',
              macros: { calories: 150, protein: 2, carbs: 35, fats: 0 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            }
          ]
        }
      ],
      dinner: [
        {
          id: 'sbisa-d-grill',
          name: 'Grill',
          components: [
            {
              id: 'sbisa-d-grill-1',
              name: 'Grilled Chicken Breast',
              station: 'Grill',
              category: 'protein',
              macros: { calories: 165, protein: 31, carbs: 0, fats: 4 },
              allergens: [],
              dietaryPreferences: ['halal', 'glutenFree']
            },
            {
              id: 'sbisa-d-grill-2',
              name: 'Grilled Steak (6oz)',
              station: 'Grill',
              category: 'protein',
              macros: { calories: 310, protein: 42, carbs: 0, fats: 15 },
              allergens: [],
              dietaryPreferences: ['glutenFree']
            },
            {
              id: 'sbisa-d-grill-3',
              name: 'Baked Salmon',
              station: 'Grill',
              category: 'protein',
              macros: { calories: 280, protein: 25, carbs: 0, fats: 18 },
              allergens: ['fish'],
              dietaryPreferences: ['glutenFree']
            },
            {
              id: 'sbisa-d-grill-4',
              name: 'Grilled Shrimp (6oz)',
              station: 'Grill',
              category: 'protein',
              macros: { calories: 170, protein: 36, carbs: 1, fats: 2 },
              allergens: ['shellfish'],
              dietaryPreferences: ['glutenFree']
            },
            {
              id: 'sbisa-d-grill-5',
              name: 'Jasmine Rice (1 cup)',
              station: 'Grill',
              category: 'base',
              macros: { calories: 205, protein: 4, carbs: 45, fats: 0.5 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-d-grill-6',
              name: 'Cauliflower Rice (1 cup)',
              station: 'Grill',
              category: 'base',
              macros: { calories: 25, protein: 2, carbs: 5, fats: 0 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-d-grill-7',
              name: 'Grilled Zucchini',
              station: 'Grill',
              category: 'side',
              macros: { calories: 30, protein: 2, carbs: 6, fats: 0.5 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            }
          ]
        },
        {
          id: 'sbisa-d-pasta',
          name: 'Pasta Station',
          components: [
            {
              id: 'sbisa-d-pasta-1',
              name: 'Whole Wheat Pasta (1 cup)',
              station: 'Pasta Station',
              category: 'base',
              macros: { calories: 180, protein: 7, carbs: 37, fats: 1 },
              allergens: ['wheat'],
              dietaryPreferences: ['vegan']
            },
            {
              id: 'sbisa-d-pasta-2',
              name: 'Marinara Sauce',
              station: 'Pasta Station',
              category: 'sauce',
              macros: { calories: 70, protein: 2, carbs: 12, fats: 2 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-d-pasta-3',
              name: 'Alfredo Sauce',
              station: 'Pasta Station',
              category: 'sauce',
              macros: { calories: 110, protein: 3, carbs: 5, fats: 9 },
              allergens: ['dairy'],
              dietaryPreferences: ['vegetarian', 'glutenFree']
            },
            {
              id: 'sbisa-d-pasta-4',
              name: 'Meatballs (3)',
              station: 'Pasta Station',
              category: 'protein',
              macros: { calories: 240, protein: 18, carbs: 8, fats: 15 },
              allergens: ['wheat', 'eggs'],
              dietaryPreferences: []
            }
          ]
        },
        {
          id: 'sbisa-d-carbs',
          name: 'Carbs & Sides',
          components: [
            {
              id: 'sbisa-d-carb-1',
              name: 'Baked Potato',
              station: 'Carbs & Sides',
              category: 'base',
              macros: { calories: 160, protein: 4, carbs: 37, fats: 0 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-d-carb-2',
              name: 'Brown Rice (1 cup)',
              station: 'Carbs & Sides',
              category: 'base',
              macros: { calories: 215, protein: 5, carbs: 45, fats: 2 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-d-carb-3',
              name: 'Mashed Potatoes',
              station: 'Carbs & Sides',
              category: 'base',
              macros: { calories: 210, protein: 4, carbs: 35, fats: 7 },
              allergens: ['dairy'],
              dietaryPreferences: ['vegetarian', 'glutenFree']
            }
          ]
        },
        {
          id: 'sbisa-d-veg',
          name: 'Vegetables',
          components: [
            {
              id: 'sbisa-d-veg-1',
              name: 'Steamed Broccoli',
              station: 'Vegetables',
              category: 'vegetable',
              macros: { calories: 55, protein: 4, carbs: 11, fats: 0.5 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-d-veg-2',
              name: 'Roasted Asparagus',
              station: 'Vegetables',
              category: 'vegetable',
              macros: { calories: 40, protein: 4, carbs: 8, fats: 0 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-d-veg-3',
              name: 'Sautéed Spinach',
              station: 'Vegetables',
              category: 'vegetable',
              macros: { calories: 50, protein: 5, carbs: 7, fats: 1 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-d-veg-4',
              name: 'Baked Tempeh',
              station: 'Vegetables',
              category: 'protein',
              macros: { calories: 195, protein: 20, carbs: 9, fats: 11 },
              allergens: ['soy'],
              dietaryPreferences: ['vegan']
            },
            {
              id: 'sbisa-d-veg-5',
              name: 'Black Bean Burger Patty',
              station: 'Vegetables',
              category: 'protein',
              macros: { calories: 170, protein: 10, carbs: 20, fats: 6 },
              allergens: [],
              dietaryPreferences: ['vegan', 'glutenFree']
            },
            {
              id: 'sbisa-d-veg-6',
              name: 'Farro (1 cup)',
              station: 'Vegetables',
              category: 'base',
              macros: { calories: 220, protein: 8, carbs: 44, fats: 2 },
              allergens: ['wheat'],
              dietaryPreferences: ['vegan']
            },
            {
              id: 'sbisa-d-veg-7',
              name: 'Couscous (1 cup)',
              station: 'Vegetables',
              category: 'base',
              macros: { calories: 176, protein: 6, carbs: 36, fats: 0.5 },
              allergens: ['wheat'],
              dietaryPreferences: ['vegan']
            }
          ]
        }
      ]
    }
  },
  
  // RESTAURANT: Chick-fil-A at MSC
  {
    id: 'rest-2',
    name: 'Chick-fil-A at MSC',
    location: 'MSC',
    isDiningHall: false,
    dishes: [
      {
        id: 'cfa-1',
        name: 'Chicken Biscuit',
        description: 'Chicken breast on a buttermilk biscuit',
        macros: { calories: 460, protein: 23, carbs: 45, fats: 21 },
        allergens: ['wheat', 'eggs', 'dairy'],
        dietaryPreferences: [],
        paymentCosts: {
          maroonMeal: 1,
          diningDollars: 5.99,
          realDollars: 5.99
        },
        mealTimes: ['breakfast']
      },
      {
        id: 'cfa-2',
        name: 'Grilled Chicken Sandwich',
        description: 'Grilled chicken breast on a toasted bun',
        macros: { calories: 440, protein: 38, carbs: 41, fats: 16 },
        allergens: ['wheat', 'dairy'],
        dietaryPreferences: [],
        paymentCosts: {
          maroonMeal: 1,
          diningDollars: 6.99,
          realDollars: 6.99
        },
        mealTimes: ['breakfast', 'lunch', 'dinner']
      },
      {
        id: 'cfa-3',
        name: 'Spicy Deluxe Sandwich',
        description: 'Spicy chicken with lettuce, tomato, and pepper jack cheese',
        macros: { calories: 550, protein: 34, carbs: 48, fats: 25 },
        allergens: ['wheat', 'dairy', 'eggs'],
        dietaryPreferences: [],
        paymentCosts: {
          diningDollars: 8.49,
          realDollars: 8.49
        },
        mealTimes: ['breakfast', 'lunch', 'dinner']
      },
      {
        id: 'cfa-4',
        name: 'Grilled Nuggets (8-count)',
        description: 'Grilled chicken nuggets with your choice of sauce',
        macros: { calories: 250, protein: 38, carbs: 9, fats: 6 },
        allergens: [],
        dietaryPreferences: ['glutenFree'],
        paymentCosts: {
          diningDollars: 7.99,
          realDollars: 7.99
        },
        mealTimes: ['breakfast', 'lunch', 'dinner']
      }
    ]
  },

  // RESTAURANT: Fresh Market at Commons
  {
    id: 'rest-3',
    name: 'Fresh Market at Commons',
    location: 'Commons',
    isDiningHall: false,
    dishes: [
      {
        id: 'fm-1',
        name: 'Protein Smoothie Bowl',
        description: 'Açaí bowl with protein powder, granola, and fresh fruit',
        macros: { calories: 420, protein: 28, carbs: 52, fats: 12 },
        allergens: ['treeNuts', 'dairy'],
        dietaryPreferences: ['vegetarian'],
        paymentCosts: {
          diningDollars: 8.99,
          realDollars: 8.99
        },
        mealTimes: ['breakfast']
      },
      {
        id: 'fm-2',
        name: 'Build-Your-Own Salad',
        description: 'Custom salad with choice of protein, greens, and toppings',
        macros: { calories: 380, protein: 32, carbs: 28, fats: 16 },
        allergens: ['eggs'],
        dietaryPreferences: ['glutenFree'],
        paymentCosts: {
          diningDollars: 9.99,
          realDollars: 9.99
        },
        mealTimes: ['breakfast', 'lunch', 'dinner']
      },
      {
        id: 'fm-3',
        name: 'Grilled Chicken Wrap',
        description: 'Grilled chicken with veggies in a whole wheat wrap',
        macros: { calories: 510, protein: 42, carbs: 45, fats: 16 },
        allergens: ['wheat', 'dairy'],
        dietaryPreferences: [],
        paymentCosts: {
          maroonMeal: 1,
          diningDollars: 8.49,
          realDollars: 8.49
        },
        mealTimes: ['breakfast', 'lunch', 'dinner']
      },
      {
        id: 'fm-4',
        name: 'Salmon & Quinoa Bowl',
        description: 'Grilled salmon with quinoa, roasted vegetables, and lemon',
        macros: { calories: 580, protein: 44, carbs: 48, fats: 20 },
        allergens: ['fish'],
        dietaryPreferences: ['glutenFree'],
        paymentCosts: {
          diningDollars: 12.99,
          realDollars: 12.99
        },
        mealTimes: ['breakfast', 'lunch', 'dinner']
      }
    ]
  },

  // RESTAURANT: Panda Express at Duncan
  {
    id: 'rest-4',
    name: 'Panda Express at Duncan',
    location: 'Duncan',
    isDiningHall: false,
    dishes: [
      {
        id: 'pe-1',
        name: 'Orange Chicken Bowl',
        description: 'Crispy chicken in orange sauce with fried rice',
        macros: { calories: 820, protein: 36, carbs: 94, fats: 32 },
        allergens: ['wheat', 'soy', 'eggs'],
        dietaryPreferences: [],
        paymentCosts: {
          diningDollars: 9.99,
          realDollars: 9.99
        },
        mealTimes: ['breakfast', 'lunch', 'dinner']
      },
      {
        id: 'pe-2',
        name: 'Grilled Teriyaki Chicken',
        description: 'Grilled chicken with teriyaki sauce and steamed vegetables',
        macros: { calories: 480, protein: 42, carbs: 52, fats: 10 },
        allergens: ['soy', 'wheat'],
        dietaryPreferences: [],
        paymentCosts: {
          maroonMeal: 1,
          diningDollars: 8.99,
          realDollars: 8.99
        },
        mealTimes: ['breakfast', 'lunch', 'dinner']
      },
      {
        id: 'pe-3',
        name: 'String Bean Chicken Breast',
        description: 'Chicken breast wok-tossed with string beans',
        macros: { calories: 420, protein: 38, carbs: 28, fats: 16 },
        allergens: ['soy'],
        dietaryPreferences: ['glutenFree'],
        paymentCosts: {
          diningDollars: 8.99,
          realDollars: 8.99
        },
        mealTimes: ['breakfast', 'lunch', 'dinner']
      }
    ]
  },

  // RESTAURANT: Subway at MSC
  {
    id: 'rest-5',
    name: 'Subway at MSC',
    location: 'MSC',
    isDiningHall: false,
    dishes: [
      {
        id: 'sub-1',
        name: 'Egg & Cheese Flatbread',
        description: 'Egg whites with cheese on flatbread',
        macros: { calories: 380, protein: 26, carbs: 42, fats: 12 },
        allergens: ['wheat', 'eggs', 'dairy'],
        dietaryPreferences: ['vegetarian'],
        paymentCosts: {
          maroonMeal: 1,
          diningDollars: 5.99,
          realDollars: 5.99
        },
        mealTimes: ['breakfast']
      },
      {
        id: 'sub-2',
        name: 'Turkey Breast Sub (6-inch)',
        description: 'Oven roasted turkey with vegetables on wheat bread',
        macros: { calories: 280, protein: 18, carbs: 46, fats: 4 },
        allergens: ['wheat'],
        dietaryPreferences: [],
        paymentCosts: {
          maroonMeal: 1,
          diningDollars: 6.49,
          realDollars: 6.49
        },
        mealTimes: ['breakfast', 'lunch', 'dinner']
      },
      {
        id: 'sub-3',
        name: 'Chicken & Bacon Ranch Sub (6-inch)',
        description: 'Grilled chicken with bacon and ranch on wheat',
        macros: { calories: 570, protein: 36, carbs: 48, fats: 24 },
        allergens: ['wheat', 'dairy', 'eggs'],
        dietaryPreferences: [],
        paymentCosts: {
          diningDollars: 7.99,
          realDollars: 7.99
        },
        mealTimes: ['breakfast', 'lunch', 'dinner']
      }
    ]
  },

  // RESTAURANT: Starbucks at Commons
  {
    id: 'rest-6',
    name: 'Starbucks at Commons',
    location: 'Commons',
    isDiningHall: false,
    dishes: [
      {
        id: 'sbux-1',
        name: 'Egg White & Roasted Red Pepper Wrap',
        description: 'Egg whites with spinach and peppers in a whole wheat wrap',
        macros: { calories: 290, protein: 20, carbs: 34, fats: 8 },
        allergens: ['wheat', 'eggs', 'dairy'],
        dietaryPreferences: ['vegetarian'],
        paymentCosts: {
          diningDollars: 5.45,
          realDollars: 5.45
        },
        mealTimes: ['breakfast']
      },
      {
        id: 'sbux-2',
        name: 'Protein Box - Chicken & Quinoa',
        description: 'Grilled chicken with quinoa, vegetables, and hard-boiled egg',
        macros: { calories: 420, protein: 36, carbs: 38, fats: 14 },
        allergens: ['eggs'],
        dietaryPreferences: ['glutenFree'],
        paymentCosts: {
          diningDollars: 7.95,
          realDollars: 7.95
        },
        mealTimes: ['breakfast', 'lunch', 'dinner']
      }
    ]
  },

  // RESTAURANT: Pizza Place at Duncan
  {
    id: 'rest-7',
    name: 'Pizza Place at Duncan',
    location: 'Duncan',
    isDiningHall: false,
    dishes: [
      {
        id: 'pizza-1',
        name: 'Veggie Pizza (2 slices)',
        description: 'Thin crust pizza with vegetables and light cheese',
        macros: { calories: 480, protein: 22, carbs: 62, fats: 16 },
        allergens: ['wheat', 'dairy'],
        dietaryPreferences: ['vegetarian'],
        paymentCosts: {
          diningDollars: 6.99,
          realDollars: 6.99
        },
        mealTimes: ['breakfast', 'lunch', 'dinner']
      },
      {
        id: 'pizza-2',
        name: 'Grilled Chicken Pizza (2 slices)',
        description: 'Thin crust with grilled chicken and vegetables',
        macros: { calories: 540, protein: 38, carbs: 58, fats: 18 },
        allergens: ['wheat', 'dairy'],
        dietaryPreferences: [],
        paymentCosts: {
          maroonMeal: 1,
          diningDollars: 7.99,
          realDollars: 7.99
        },
        mealTimes: ['breakfast', 'lunch', 'dinner']
      }
    ]
  }
];

export const locations = [
  'No Preference',
  'MSC',
  'Sbisa',
  'Commons',
  'Duncan'
];

import { Restaurant } from '../types';

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'The Protein Kitchen',
    cuisine: 'American',
    location: 'Downtown',
    distance: 0.5,
    rating: 4.8,
    priceRange: '$$',
    meals: [
      {
        id: '1-1',
        name: 'Veggie Omelet & Turkey Sausage',
        description: 'Egg white omelet with vegetables and lean turkey sausage',
        calories: 380,
        protein: 32,
        carbs: 28,
        fats: 14,
        price: 9.99,
        mealTime: 'breakfast'
      },
      {
        id: '1-2',
        name: 'Grilled Chicken Bowl',
        description: 'Grilled chicken breast with quinoa, roasted vegetables, and avocado',
        calories: 520,
        protein: 45,
        carbs: 42,
        fats: 18,
        price: 14.99,
        mealTime: 'lunch'
      },
      {
        id: '1-3',
        name: 'Salmon Power Plate',
        description: 'Atlantic salmon with sweet potato, asparagus, and lemon butter',
        calories: 580,
        protein: 42,
        carbs: 38,
        fats: 24,
        price: 18.99,
        mealTime: 'dinner'
      },
      {
        id: '1-4',
        name: 'Turkey Burger & Sweet Potato Fries',
        description: 'Lean turkey burger with mixed greens and baked sweet potato fries',
        calories: 650,
        protein: 48,
        carbs: 52,
        fats: 22,
        price: 15.99,
        mealTime: 'dinner'
      }
    ]
  },
  {
    id: '2',
    name: 'Mediterranean Delight',
    cuisine: 'Mediterranean',
    location: 'Midtown',
    distance: 1.2,
    rating: 4.6,
    priceRange: '$$',
    meals: [
      {
        id: '2-1',
        name: 'Greek Yogurt Bowl',
        description: 'Greek yogurt with honey, granola, and fresh berries',
        calories: 340,
        protein: 22,
        carbs: 48,
        fats: 8,
        price: 8.99,
        mealTime: 'breakfast'
      },
      {
        id: '2-2',
        name: 'Greek Chicken Souvlaki',
        description: 'Grilled chicken skewers with tzatziki, pita, and Greek salad',
        calories: 480,
        protein: 40,
        carbs: 45,
        fats: 15,
        price: 13.99,
        mealTime: 'lunch'
      },
      {
        id: '2-3',
        name: 'Falafel Bowl',
        description: 'Crispy falafel with hummus, tabbouleh, and tahini sauce',
        calories: 550,
        protein: 18,
        carbs: 68,
        fats: 22,
        price: 12.99,
        mealTime: 'lunch'
      },
      {
        id: '2-4',
        name: 'Lamb Kebab Plate',
        description: 'Spiced lamb kebabs with rice pilaf and grilled vegetables',
        calories: 620,
        protein: 38,
        carbs: 48,
        fats: 28,
        price: 17.99,
        mealTime: 'dinner'
      }
    ]
  },
  {
    id: '3',
    name: 'Fit & Fresh',
    cuisine: 'Health Food',
    location: 'Downtown',
    distance: 0.8,
    rating: 4.9,
    priceRange: '$$',
    meals: [
      {
        id: '3-1',
        name: 'Protein Pancakes',
        description: 'High-protein pancakes with berries and sugar-free syrup',
        calories: 420,
        protein: 35,
        carbs: 48,
        fats: 10,
        price: 11.99,
        mealTime: 'breakfast'
      },
      {
        id: '3-2',
        name: 'Steak & Eggs',
        description: 'Lean sirloin steak with scrambled eggs and roasted potatoes',
        calories: 580,
        protein: 52,
        carbs: 32,
        fats: 24,
        price: 16.99,
        mealTime: 'breakfast'
      },
      {
        id: '3-3',
        name: 'Macro Bowl',
        description: 'Your choice of protein with brown rice, black beans, and vegetables',
        calories: 500,
        protein: 42,
        carbs: 50,
        fats: 14,
        price: 13.99,
        mealTime: 'lunch'
      },
      {
        id: '3-4',
        name: 'Grilled Shrimp & Veggies',
        description: 'Grilled shrimp with roasted seasonal vegetables and wild rice',
        calories: 480,
        protein: 40,
        carbs: 45,
        fats: 12,
        price: 17.99,
        mealTime: 'dinner'
      }
    ]
  },
  {
    id: '4',
    name: 'Asian Fusion House',
    cuisine: 'Asian',
    location: 'Uptown',
    distance: 2.1,
    rating: 4.7,
    priceRange: '$$$',
    meals: [
      {
        id: '4-1',
        name: 'Miso Salmon Breakfast',
        description: 'Miso-glazed salmon with steamed rice and pickled vegetables',
        calories: 450,
        protein: 38,
        carbs: 42,
        fats: 15,
        price: 13.99,
        mealTime: 'breakfast'
      },
      {
        id: '4-2',
        name: 'Teriyaki Chicken Bowl',
        description: 'Grilled teriyaki chicken with steamed rice and mixed vegetables',
        calories: 540,
        protein: 38,
        carbs: 62,
        fats: 12,
        price: 14.99,
        mealTime: 'lunch'
      },
      {
        id: '4-3',
        name: 'Poke Bowl',
        description: 'Fresh tuna poke with edamame, cucumber, and seaweed salad',
        calories: 460,
        protein: 36,
        carbs: 45,
        fats: 14,
        price: 15.99,
        mealTime: 'lunch'
      },
      {
        id: '4-4',
        name: 'Beef & Broccoli',
        description: 'Lean beef with broccoli in ginger sauce, served with brown rice',
        calories: 520,
        protein: 42,
        carbs: 48,
        fats: 16,
        price: 16.99,
        mealTime: 'dinner'
      }
    ]
  },
  {
    id: '5',
    name: 'Mexican Cantina',
    cuisine: 'Mexican',
    location: 'Downtown',
    distance: 0.6,
    rating: 4.5,
    priceRange: '$',
    meals: [
      {
        id: '5-1',
        name: 'Breakfast Burrito',
        description: 'Egg, black beans, cheese, and salsa wrapped in a whole wheat tortilla',
        calories: 420,
        protein: 28,
        carbs: 45,
        fats: 14,
        price: 7.99,
        mealTime: 'breakfast'
      },
      {
        id: '5-2',
        name: 'Chicken Burrito Bowl',
        description: 'Grilled chicken with rice, black beans, salsa, and guacamole',
        calories: 580,
        protein: 44,
        carbs: 58,
        fats: 18,
        price: 11.99,
        mealTime: 'lunch'
      },
      {
        id: '5-3',
        name: 'Fish Tacos',
        description: 'Grilled mahi-mahi tacos with cabbage slaw and lime crema',
        calories: 490,
        protein: 32,
        carbs: 52,
        fats: 16,
        price: 13.99,
        mealTime: 'dinner'
      },
      {
        id: '5-4',
        name: 'Steak Fajitas',
        description: 'Sizzling steak fajitas with peppers, onions, and tortillas',
        calories: 620,
        protein: 46,
        carbs: 48,
        fats: 24,
        price: 15.99,
        mealTime: 'dinner'
      }
    ]
  },
  {
    id: '6',
    name: 'Italian Trattoria',
    cuisine: 'Italian',
    location: 'Midtown',
    distance: 1.5,
    rating: 4.4,
    priceRange: '$$',
    meals: [
      {
        id: '6-1',
        name: 'Frittata with Spinach',
        description: 'Italian-style egg frittata with spinach, tomatoes, and parmesan',
        calories: 360,
        protein: 26,
        carbs: 18,
        fats: 20,
        price: 10.99,
        mealTime: 'breakfast'
      },
      {
        id: '6-2',
        name: 'Margherita Flatbread',
        description: 'Thin crust with fresh mozzarella, tomatoes, and basil',
        calories: 480,
        protein: 24,
        carbs: 54,
        fats: 18,
        price: 12.99,
        mealTime: 'lunch'
      },
      {
        id: '6-3',
        name: 'Chicken Parmesan (Lighter Version)',
        description: 'Grilled chicken with marinara and part-skim mozzarella, side salad',
        calories: 560,
        protein: 48,
        carbs: 42,
        fats: 20,
        price: 16.99,
        mealTime: 'dinner'
      },
      {
        id: '6-4',
        name: 'Pasta Primavera with Shrimp',
        description: 'Whole wheat pasta with grilled shrimp and seasonal vegetables',
        calories: 520,
        protein: 35,
        carbs: 58,
        fats: 16,
        price: 17.99,
        mealTime: 'dinner'
      }
    ]
  },
  {
    id: '7',
    name: 'Morning Glory Cafe',
    cuisine: 'American',
    location: 'Uptown',
    distance: 1.8,
    rating: 4.7,
    priceRange: '$',
    meals: [
      {
        id: '7-1',
        name: 'Oatmeal Power Bowl',
        description: 'Steel-cut oats with protein powder, banana, and almond butter',
        calories: 400,
        protein: 28,
        carbs: 52,
        fats: 12,
        price: 8.99,
        mealTime: 'breakfast'
      },
      {
        id: '7-2',
        name: 'Avocado Toast with Eggs',
        description: 'Whole grain toast with avocado, poached eggs, and cherry tomatoes',
        calories: 380,
        protein: 24,
        carbs: 38,
        fats: 16,
        price: 9.99,
        mealTime: 'breakfast'
      },
      {
        id: '7-3',
        name: 'Turkey Club Wrap',
        description: 'Turkey breast, bacon, lettuce, tomato in a whole wheat wrap',
        calories: 520,
        protein: 42,
        carbs: 44,
        fats: 18,
        price: 11.99,
        mealTime: 'lunch'
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
  'Mexican',
  'Italian'
];

export const locations = [
  'No Preference',
  'Downtown',
  'Midtown',
  'Uptown',
  'Suburbs'
];

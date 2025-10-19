import {
  Restaurant,
  DiningHall,
  DiningLocation,
} from "../types";

// Mock data following the database schema

export const mockDiningLocations: DiningLocation[] = [
  // DINING HALL: Sbisa
  {
    id: "dh-1",
    name: "Sbisa Dining Hall",
    location: "Sbisa",
    isDiningHall: true,
    paymentCosts: {
      mealSwipe: 1,
      diningDollars: 12,
      realDollars: 12,
    },
    stations: {
      breakfast: [
        {
          id: 'sbisa-breakfast-grill',
          name: 'Grill Station',
          components: [
            {
              id: 'sbisa-breakfast-grill-1',
              name: 'Biscuit',
              station: 'Grill Station',
              category: 'base',
              macros: { calories: 570, protein: 7, carbs: 58, fats: 35 },
              allergens: ["eggs", "wheat", "soy"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-grill-2',
              name: 'Country Gravy',
              station: 'Grill Station',
              category: 'sauce',
              macros: { calories: 35, protein: 1, carbs: 3, fats: 2 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-grill-3',
              name: 'Pork Sausage Gravy',
              station: 'Grill Station',
              category: 'protein',
              macros: { calories: 80, protein: 3, carbs: 2, fats: 7 },
              allergens: ["wheat"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-grill-4',
              name: 'Cheese Omelet',
              station: 'Grill Station',
              category: 'side',
              macros: { calories: 190, protein: 12, carbs: 2, fats: 14 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-grill-5',
              name: 'Pork Sausage Patty',
              station: 'Grill Station',
              category: 'protein',
              macros: { calories: 180, protein: 5, carbs: 1, fats: 17 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-grill-6',
              name: 'Hot Honey Chicken Tenders',
              station: 'Grill Station',
              category: 'protein',
              macros: { calories: 310, protein: 0, carbs: 62, fats: 9 },
              allergens: ["eggs", "wheat", "soy"],
              dietaryPreferences: []
            }
          ]
        },
        {
          id: 'sbisa-breakfast-nook',
          name: 'Nook Station',
          components: [
            {
              id: 'sbisa-breakfast-nook-1',
              name: 'Pancake Sandwiches',
              station: 'Nook Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-nook-2',
              name: 'Eggs Your Way',
              station: 'Nook Station',
              category: 'protein',
              macros: { calories: 60, protein: 6, carbs: 0, fats: 4 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-nook-3',
              name: 'Bacon',
              station: 'Nook Station',
              category: 'protein',
              macros: { calories: 90, protein: 6, carbs: 0, fats: 7 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-nook-4',
              name: 'Pork Sausage Patty',
              station: 'Nook Station',
              category: 'protein',
              macros: { calories: 90, protein: 4, carbs: 0, fats: 8 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-nook-5',
              name: 'Red Roasted Potatoes',
              station: 'Nook Station',
              category: 'base',
              macros: { calories: 120, protein: 2, carbs: 18, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            }
          ]
        },
        {
          id: 'sbisa-breakfast-homestyle',
          name: 'Homestyle Station',
          components: [
            {
              id: 'sbisa-breakfast-homestyle-1',
              name: 'Scrambled Eggs',
              station: 'Homestyle Station',
              category: 'protein',
              macros: { calories: 210, protein: 14, carbs: 1, fats: 16 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-homestyle-2',
              name: 'Bacon',
              station: 'Homestyle Station',
              category: 'protein',
              macros: { calories: 90, protein: 6, carbs: 0, fats: 7 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-homestyle-3',
              name: 'Roasted Red Bliss Potatoes w/ Onion',
              station: 'Homestyle Station',
              category: 'base',
              macros: { calories: 80, protein: 2, carbs: 18, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-homestyle-4',
              name: 'Sweet Potato Hash',
              station: 'Homestyle Station',
              category: 'base',
              macros: { calories: 100, protein: 1, carbs: 13, fats: 5 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-homestyle-5',
              name: 'Oatmeal',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 90, protein: 3, carbs: 16, fats: 2 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-homestyle-6',
              name: 'Shredded Coconut',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 25, protein: 0, carbs: 3, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-homestyle-7',
              name: 'Semi Sweet Chocolate Chips',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 70, protein: 1, carbs: 10, fats: 4 },
              allergens: ["soy"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-homestyle-8',
              name: 'Dried Cranberries',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 30, protein: 0, carbs: 8, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-homestyle-9',
              name: 'Golden Raisins',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 30, protein: 0, carbs: 8, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-homestyle-10',
              name: 'Light Brown Sugar',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 50, protein: 0, carbs: 13, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-homestyle-11',
              name: 'Cinnamon Sugar',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 110, protein: 0, carbs: 28, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-homestyle-12',
              name: 'Ground Cinnamon',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            }
          ]
        },
        {
          id: 'sbisa-breakfast-carved-&-crafted',
          name: 'Carved & Crafted Station',
          components: [
            {
              id: 'sbisa-breakfast-carved-&-crafted-1',
              name: 'Plain Bagel',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 310, protein: 10, carbs: 63, fats: 1 },
              allergens: ["wheat", "soy"],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-2',
              name: 'Cinnamon Raisin Bagel',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 250, protein: 8, carbs: 50, fats: 1 },
              allergens: ["wheat", "soy"],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-3',
              name: 'Everything Bagel',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 240, protein: 10, carbs: 48, fats: 1 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-4',
              name: 'Cream Cheese',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 50, protein: 1, carbs: 1, fats: 5 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-5',
              name: 'Whipped Butter',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 100, protein: 0, carbs: 0, fats: 12 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-6',
              name: 'Creamy Peanut Butter',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 110, protein: 4, carbs: 3, fats: 9 },
              allergens: ["peanuts"],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-7',
              name: 'Grape Jelly',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 50, protein: 0, carbs: 13, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-8',
              name: 'Hummus',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 30, protein: 1, carbs: 4, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-9',
              name: 'Part Skim Ricotta Cheese',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 20, protein: 2, carbs: 1, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-10',
              name: 'Avocado Pulp',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 90, protein: 1, carbs: 5, fats: 8 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-11',
              name: 'Baby Spinach',
              station: 'Carved & Crafted Station',
              category: 'vegetable',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-12',
              name: 'Sliced Radishes',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-13',
              name: 'Sliced Cucumber',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-14',
              name: 'Sliced Red Onion',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 10, protein: 0, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-15',
              name: 'Grape Tomatoes',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-16',
              name: 'Balsamic Glaze',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 15, protein: 0, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-17',
              name: 'Sliced Banana',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 25, protein: 0, carbs: 7, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-18',
              name: 'Mixed Berries',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 45, protein: 1, carbs: 11, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-19',
              name: 'Nutella',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 100, protein: 1, carbs: 11, fats: 6 },
              allergens: ["treeNuts", "soy"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-20',
              name: 'Shredded Coconut',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 25, protein: 0, carbs: 3, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-21',
              name: 'Semi Sweet Chocolate Chips',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 70, protein: 1, carbs: 10, fats: 4 },
              allergens: ["soy"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-22',
              name: 'Oats and Honey Granola',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 200, protein: 5, carbs: 35, fats: 5 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-23',
              name: 'Everything Bagel Spice',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 10, protein: 0, carbs: 1, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-24',
              name: 'Chia Seeds',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 25, protein: 1, carbs: 2, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-25',
              name: 'Thinly Sliced Deli Turkey Breast',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 30, protein: 4, carbs: 1, fats: 1 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-carved-&-crafted-26',
              name: 'Sliced Cheddar Cheese',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 90, protein: 5, carbs: 1, fats: 7 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-breakfast-rooted',
          name: 'Rooted Station',
          components: [
            {
              id: 'sbisa-breakfast-rooted-1',
              name: 'Acai Berry Puree Mix',
              station: 'Rooted Station',
              category: 'side',
              macros: { calories: 20, protein: 1, carbs: 1, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-rooted-2',
              name: 'Low Fat Vanilla Yogurt',
              station: 'Rooted Station',
              category: 'side',
              macros: { calories: 70, protein: 2, carbs: 15, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-rooted-3',
              name: 'Low Fat Strawberry Yogurt',
              station: 'Rooted Station',
              category: 'side',
              macros: { calories: 110, protein: 4, carbs: 22, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-rooted-4',
              name: 'Cottage Cheese',
              station: 'Rooted Station',
              category: 'side',
              macros: { calories: 80, protein: 14, carbs: 3, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-rooted-5',
              name: 'Peaches',
              station: 'Rooted Station',
              category: 'side',
              macros: { calories: 40, protein: 1, carbs: 10, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-rooted-6',
              name: 'Pineapple Tidbits',
              station: 'Rooted Station',
              category: 'side',
              macros: { calories: 30, protein: 0, carbs: 7, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-rooted-7',
              name: 'Mixed Melon',
              station: 'Rooted Station',
              category: 'side',
              macros: { calories: 30, protein: 1, carbs: 8, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-rooted-8',
              name: 'Strawberries',
              station: 'Rooted Station',
              category: 'side',
              macros: { calories: 20, protein: 0, carbs: 5, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-rooted-9',
              name: 'Blackberries',
              station: 'Rooted Station',
              category: 'side',
              macros: { calories: 25, protein: 0, carbs: 6, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-rooted-10',
              name: 'Blueberries',
              station: 'Rooted Station',
              category: 'side',
              macros: { calories: 20, protein: 0, carbs: 5, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-rooted-11',
              name: 'Banana',
              station: 'Rooted Station',
              category: 'side',
              macros: { calories: 110, protein: 1, carbs: 27, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-rooted-12',
              name: 'Toasted Shredded Coconut',
              station: 'Rooted Station',
              category: 'base',
              macros: { calories: 70, protein: 0, carbs: 8, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-rooted-13',
              name: 'Honey',
              station: 'Rooted Station',
              category: 'side',
              macros: { calories: 60, protein: 0, carbs: 17, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-rooted-14',
              name: 'Nutella',
              station: 'Rooted Station',
              category: 'side',
              macros: { calories: 100, protein: 1, carbs: 11, fats: 6 },
              allergens: ["treeNuts", "soy"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-rooted-15',
              name: 'Whipped Topping',
              station: 'Rooted Station',
              category: 'side',
              macros: { calories: 10, protein: 0, carbs: 1, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-rooted-16',
              name: 'Chia Seeds',
              station: 'Rooted Station',
              category: 'side',
              macros: { calories: 25, protein: 1, carbs: 2, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-rooted-17',
              name: 'Oats and Honey Granola',
              station: 'Rooted Station',
              category: 'side',
              macros: { calories: 200, protein: 5, carbs: 35, fats: 5 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-rooted-18',
              name: 'Frozen Vanilla Yogurt',
              station: 'Rooted Station',
              category: 'side',
              macros: { calories: 110, protein: 4, carbs: 21, fats: 0 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-breakfast-pasta-&-co.',
          name: 'Pasta & Co. Station',
          components: [
            {
              id: 'sbisa-breakfast-pasta-&-co.-1',
              name: 'Omelet Bar',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-pasta-&-co.-2',
              name: 'Eggs',
              station: 'Pasta & Co. Station',
              category: 'protein',
              macros: { calories: 90, protein: 7, carbs: 1, fats: 6 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-pasta-&-co.-3',
              name: 'Egg Whites',
              station: 'Pasta & Co. Station',
              category: 'protein',
              macros: { calories: 30, protein: 7, carbs: 0, fats: 0 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-pasta-&-co.-4',
              name: 'Baby Spinach',
              station: 'Pasta & Co. Station',
              category: 'vegetable',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-pasta-&-co.-5',
              name: ' Diced Onions',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 15, protein: 0, carbs: 4, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-pasta-&-co.-6',
              name: 'Sliced Mushrooms',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 0, protein: 1, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-pasta-&-co.-7',
              name: 'Chopped Green Bell Pepper',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-pasta-&-co.-8',
              name: 'Diced Tomatoes',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 10, protein: 0, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-pasta-&-co.-9',
              name: 'Chorizo Sausage',
              station: 'Pasta & Co. Station',
              category: 'protein',
              macros: { calories: 60, protein: 3, carbs: 1, fats: 5 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-pasta-&-co.-10',
              name: 'Shredded Cheddar Cheese',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 30, protein: 2, carbs: 0, fats: 2 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-breakfast-500-degrees',
          name: '500 Degrees Station',
          components: [
          ]
        }
      ],
      lunch: [
        {
          id: 'sbisa-lunch-grill',
          name: 'Grill Station',
          components: [
            {
              id: 'sbisa-lunch-grill-1',
              name: 'Fried Chicken Snack Wrap',
              station: 'Grill Station',
              category: 'protein',
              macros: { calories: 280, protein: 16, carbs: 23, fats: 13 },
              allergens: ["eggs", "wheat"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-grill-2',
              name: 'Tater Tots',
              station: 'Grill Station',
              category: 'side',
              macros: { calories: 210, protein: 1, carbs: 18, fats: 15 },
              allergens: ["soy"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-grill-3',
              name: 'Shredded Iceberg Lettuce',
              station: 'Grill Station',
              category: 'side',
              macros: { calories: 10, protein: 1, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-grill-4',
              name: 'Shredded Cheddar Cheese',
              station: 'Grill Station',
              category: 'side',
              macros: { calories: 30, protein: 2, carbs: 0, fats: 2 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-grill-5',
              name: 'Diced Tomatoes',
              station: 'Grill Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-grill-6',
              name: 'Fresh Dill Pickle Spears',
              station: 'Grill Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-grill-7',
              name: 'Ranch Dressing',
              station: 'Grill Station',
              category: 'sauce',
              macros: { calories: 20, protein: 1, carbs: 4, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-homestyle',
          name: 'Homestyle Station',
          components: [
            {
              id: 'sbisa-lunch-homestyle-1',
              name: 'Beef Fajita Mixture',
              station: 'Homestyle Station',
              category: 'protein',
              macros: { calories: 250, protein: 22, carbs: 7, fats: 15 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-homestyle-2',
              name: 'Spanish Rice',
              station: 'Homestyle Station',
              category: 'base',
              macros: { calories: 90, protein: 2, carbs: 15, fats: 2 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-3',
              name: 'Vegan Refried Beans',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 45, protein: 3, carbs: 8, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-4',
              name: 'Grilled Peppers and Onions',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 45, protein: 1, carbs: 5, fats: 3 },
              allergens: ["soy", "fish"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-homestyle-5',
              name: 'Enchilada Sauce',
              station: 'Homestyle Station',
              category: 'sauce',
              macros: { calories: 25, protein: 1, carbs: 3, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-6',
              name: 'Queso Blanco Sauce ',
              station: 'Homestyle Station',
              category: 'sauce',
              macros: { calories: 50, protein: 1, carbs: 6, fats: 2 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-7',
              name: 'Shredded Iceberg Lettuce',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 10, protein: 1, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-8',
              name: 'Pico de Gallo',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-9',
              name: 'Sour Cream',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 30, protein: 0, carbs: 1, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-10',
              name: 'Guacamole',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 100, protein: 1, carbs: 6, fats: 9 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-11',
              name: 'Sliced Jalapeno',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 10, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-12',
              name: 'Chipotle Ranch Dressing',
              station: 'Homestyle Station',
              category: 'sauce',
              macros: { calories: 190, protein: 0, carbs: 2, fats: 20 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-the-kitchen',
          name: 'The Kitchen Station',
          components: [
            {
              id: 'sbisa-lunch-the-kitchen-1',
              name: 'Chicken Vindaloo',
              station: 'The Kitchen Station',
              category: 'protein',
              macros: { calories: 190, protein: 17, carbs: 12, fats: 8 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-the-kitchen-2',
              name: 'Aloo Gobi-Cauliflower and Potatoes',
              station: 'The Kitchen Station',
              category: 'base',
              macros: { calories: 100, protein: 2, carbs: 11, fats: 6 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-the-kitchen-3',
              name: 'Basmati Rice with CIlantro',
              station: 'The Kitchen Station',
              category: 'base',
              macros: { calories: 110, protein: 2, carbs: 24, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-the-kitchen-4',
              name: 'Roasted Garbanzo Beans',
              station: 'The Kitchen Station',
              category: 'side',
              macros: { calories: 240, protein: 11, carbs: 35, fats: 7 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-bok-choy',
          name: 'Bok Choy Station',
          components: [
            {
              id: 'sbisa-lunch-bok-choy-1',
              name: 'Orange Chicken',
              station: 'Bok Choy Station',
              category: 'protein',
              macros: { calories: 280, protein: 14, carbs: 31, fats: 12 },
              allergens: ["soy", "wheat"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-bok-choy-2',
              name: 'Beef and Broccoli',
              station: 'Bok Choy Station',
              category: 'protein',
              macros: { calories: 970, protein: 115, carbs: 16, fats: 53 },
              allergens: ["soy", "wheat"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-bok-choy-3',
              name: 'Steamed Rice',
              station: 'Bok Choy Station',
              category: 'base',
              macros: { calories: 150, protein: 3, carbs: 32, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-bok-choy-4',
              name: 'Vegetable Fried Rice',
              station: 'Bok Choy Station',
              category: 'base',
              macros: { calories: 140, protein: 3, carbs: 26, fats: 2 },
              allergens: ["soy"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-bok-choy-5',
              name: 'Vegetable Potstickers',
              station: 'Bok Choy Station',
              category: 'side',
              macros: { calories: 100, protein: 4, carbs: 19, fats: 1 },
              allergens: ["soy", "eggs", "wheat"],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-innovate',
          name: 'Innovate Station',
          components: [
            {
              id: 'sbisa-lunch-innovate-1',
              name: 'Mixed Field Greens',
              station: 'Innovate Station',
              category: 'vegetable',
              macros: { calories: 10, protein: 1, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-2',
              name: 'Chopped Romaine Lettuce',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 10, protein: 1, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-3',
              name: 'Sliced Grilled Chicken Breast',
              station: 'Innovate Station',
              category: 'protein',
              macros: { calories: 200, protein: 31, carbs: 0, fats: 9 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-innovate-4',
              name: 'Lime Shrimp',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 150, protein: 14, carbs: 7, fats: 8 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-innovate-5',
              name: 'Sliced Red Onion',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-6',
              name: 'Grape Tomatoes',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-7',
              name: 'Sliced Black Olives',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 40, protein: 0, carbs: 2, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-8',
              name: 'Banana Pepper Rings',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-9',
              name: 'Shredded Parmesan Cheese',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 20, protein: 2, carbs: 0, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-10',
              name: 'Seasoned Croutons',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 15, protein: 1, carbs: 2, fats: 1 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-11',
              name: 'Greek Dressing',
              station: 'Innovate Station',
              category: 'sauce',
              macros: { calories: 35, protein: 0, carbs: 2, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-fresh-52',
          name: 'Fresh 52 Station',
          components: [
            {
              id: 'sbisa-lunch-fresh-52-1',
              name: 'Chopped Romaine Lettuce',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 10, protein: 1, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-2',
              name: 'Spring Mix',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 5, protein: 1, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-3',
              name: 'Chopped Iceberg Lettuce',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 10, protein: 1, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-4',
              name: 'Sliced Cucumber',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-5',
              name: 'Steamed Broccoli',
              station: 'Fresh 52 Station',
              category: 'vegetable',
              macros: { calories: 60, protein: 5, carbs: 11, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-6',
              name: 'Grape Tomatoes',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-7',
              name: 'Dark Red Kidney Beans',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 35, protein: 2, carbs: 7, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-8',
              name: 'Shredded Carrots',
              station: 'Fresh 52 Station',
              category: 'vegetable',
              macros: { calories: 10, protein: 0, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-9',
              name: 'Sliced Red Onion',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-10',
              name: 'Croutons',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 70, protein: 2, carbs: 15, fats: 0 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-11',
              name: 'Roasted Sunflower Seeds',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 45, protein: 2, carbs: 2, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-12',
              name: 'Shredded Cheddar Cheese',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 30, protein: 2, carbs: 0, fats: 2 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-13',
              name: 'Ranch Dressing',
              station: 'Fresh 52 Station',
              category: 'sauce',
              macros: { calories: 110, protein: 1, carbs: 1, fats: 11 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-14',
              name: 'Caesar Dressing',
              station: 'Fresh 52 Station',
              category: 'sauce',
              macros: { calories: 150, protein: 1, carbs: 1, fats: 16 },
              allergens: ["fish"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-fresh-52-15',
              name: 'Italian Dressing',
              station: 'Fresh 52 Station',
              category: 'sauce',
              macros: { calories: 110, protein: 0, carbs: 2, fats: 12 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-16',
              name: 'Dried Cranberries',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 30, protein: 0, carbs: 8, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-17',
              name: 'Honey Mustard Dressing',
              station: 'Fresh 52 Station',
              category: 'sauce',
              macros: { calories: 130, protein: 0, carbs: 7, fats: 12 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-18',
              name: 'Balsamic Vinaigrette Dressing',
              station: 'Fresh 52 Station',
              category: 'sauce',
              macros: { calories: 60, protein: 0, carbs: 5, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-19',
              name: 'Olive Oil',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 240, protein: 0, carbs: 0, fats: 27 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-20',
              name: 'Balsamic Vinegar',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 25, protein: 0, carbs: 5, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-21',
              name: 'Saltine Crackers',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 25, protein: 0, carbs: 5, fats: 0 },
              allergens: ["soy", "wheat"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-22',
              name: 'Sliced Mushrooms',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 0, protein: 1, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-23',
              name: 'Black Beans',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 40, protein: 3, carbs: 7, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-24',
              name: 'Cooked Quinoa',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 60, protein: 2, carbs: 10, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-25',
              name: 'Cubed Tofu',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 50, protein: 5, carbs: 1, fats: 3 },
              allergens: ["soy"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-26',
              name: 'Sliced Red Bell Pepper',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-27',
              name: 'Sliced Green Bell Pepper',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-fresh-52-28',
              name: 'Diced Ham',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 45, protein: 5, carbs: 2, fats: 1 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-fresh-52-29',
              name: 'Sliced Jalapeno Pepper',
              station: 'Fresh 52 Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-carved-&-crafted',
          name: 'Carved & Crafted Station',
          components: [
            {
              id: 'sbisa-lunch-carved-&-crafted-1',
              name: '12" Tomato Basil Flour Tortilla',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 300, protein: 9, carbs: 47, fats: 9 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-2',
              name: 'Multigrain Bread',
              station: 'Carved & Crafted Station',
              category: 'base',
              macros: { calories: 280, protein: 8, carbs: 52, fats: 4 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-3',
              name: 'Whole Wheat Bread',
              station: 'Carved & Crafted Station',
              category: 'base',
              macros: { calories: 140, protein: 8, carbs: 26, fats: 1 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-4',
              name: 'White Bread',
              station: 'Carved & Crafted Station',
              category: 'base',
              macros: { calories: 150, protein: 5, carbs: 29, fats: 1 },
              allergens: ["soy", "wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-5',
              name: 'Thinly Sliced Deli Turkey Breast',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 90, protein: 11, carbs: 3, fats: 3 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-6',
              name: 'Thinly Sliced Smoked Ham',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 110, protein: 15, carbs: 1, fats: 4 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-7',
              name: 'Hummus',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 110, protein: 3, carbs: 8, fats: 8 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-8',
              name: 'Egg Salad',
              station: 'Carved & Crafted Station',
              category: 'protein',
              macros: { calories: 310, protein: 7, carbs: 1, fats: 30 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-9',
              name: 'Tuna Salad',
              station: 'Carved & Crafted Station',
              category: 'vegetable',
              macros: { calories: 330, protein: 22, carbs: 2, fats: 25 },
              allergens: ["eggs", "fish"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-10',
              name: 'Cheddar Cheese Slice',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 60, protein: 3, carbs: 0, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-11',
              name: 'Sliced American Swiss Cheese',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 100, protein: 5, carbs: 1, fats: 9 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-12',
              name: 'Sliced Cucumber',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-13',
              name: 'Sliced Green Bell Pepper',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-14',
              name: 'Dill Pickle Slices',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-15',
              name: 'Sliced Jalapeno Pepper',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-16',
              name: 'Lettuce Leaf',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-17',
              name: 'Sliced Tomatoes',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-18',
              name: 'Sliced Red Onion',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-19',
              name: 'House Fried Potato Chips ',
              station: 'Carved & Crafted Station',
              category: 'base',
              macros: { calories: 90, protein: 1, carbs: 5, fats: 8 },
              allergens: ["soy"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-20',
              name: 'Sriracha Mayo',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 80, protein: 0, carbs: 0, fats: 9 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-21',
              name: 'Franks Red Hot Seasoning',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-22',
              name: 'Chipotle Cinnamon Seasoning',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-23',
              name: 'Sriracha Seasoning',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-24',
              name: 'Barbecue Seasoning',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-carved-&-crafted-25',
              name: 'Lemon Pepper Seasoning',
              station: 'Carved & Crafted Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-pasta-&-co.',
          name: 'Pasta & Co. Station',
          components: [
            {
              id: 'sbisa-lunch-pasta-&-co.-1',
              name: 'Chicken Pho Bowl',
              station: 'Pasta & Co. Station',
              category: 'protein',
              macros: { calories: 1550, protein: 37, carbs: 232, fats: 51 },
              allergens: ["soy"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-pasta-&-co.-2',
              name: 'Vegetable Pho Bowl',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 160, protein: 10, carbs: 26, fats: 4 },
              allergens: ["soy", "fish"],
              dietaryPreferences: []
            }
          ]
        },
        {
          id: 'sbisa-lunch-500-degrees',
          name: '500 Degrees Station',
          components: [
            {
              id: 'sbisa-lunch-500-degrees-1',
              name: 'Margherita Pizza',
              station: '500 Degrees Station',
              category: 'side',
              macros: { calories: 480, protein: 22, carbs: 61, fats: 17 },
              allergens: ["soy", "wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-500-degrees-2',
              name: 'BBQ Chicken Pizza',
              station: '500 Degrees Station',
              category: 'protein',
              macros: { calories: 230, protein: 11, carbs: 34, fats: 5 },
              allergens: ["wheat"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-500-degrees-3',
              name: 'Grilled Veggie Pizza',
              station: '500 Degrees Station',
              category: 'protein',
              macros: { calories: 200, protein: 9, carbs: 29, fats: 6 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-500-degrees-4',
              name: 'Crushed Red Pepper',
              station: '500 Degrees Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-500-degrees-5',
              name: 'Dried Oregano',
              station: '500 Degrees Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-500-degrees-6',
              name: 'Grated Parmesan Cheese',
              station: '500 Degrees Station',
              category: 'side',
              macros: { calories: 25, protein: 2, carbs: 1, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-rooted',
          name: 'Rooted Station',
          components: [
          ]
        },
        {
          id: 'sbisa-lunch-nook',
          name: 'Nook Station',
          components: [
          ]
        }
      ],
      dinner: [
        {
          id: "sbisa-dinner-grill",
          name: "Grill Station",
          components: [
            {
              id: "sbisa-dinner-grill-1",
              name: "Buffalo Chicken Snack Wrap",
              station: "Grill Station",
              category: "protein",
              macros: {
                calories: 260,
                protein: 15,
                carbs: 22,
                fats: 12,
              },
              allergens: ["eggs", "wheat"],
              dietaryPreferences: [],
            },
            {
              id: "sbisa-dinner-grill-2",
              name: "Shoestring French Fries",
              station: "Grill Station",
              category: "side",
              macros: {
                calories: 200,
                protein: 1,
                carbs: 20,
                fats: 11,
              },
              allergens: [],
              dietaryPreferences: [],
            },
            {
              id: "sbisa-dinner-grill-3",
              name: "Shredded Iceberg Lettuce",
              station: "Grill Station",
              category: "side",
              macros: {
                calories: 10,
                protein: 1,
                carbs: 2,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-grill-4",
              name: "Diced Tomatoes",
              station: "Grill Station",
              category: "side",
              macros: {
                calories: 0,
                protein: 0,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-grill-5",
              name: "Sliced Dill Pickles",
              station: "Grill Station",
              category: "side",
              macros: {
                calories: 0,
                protein: 0,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-grill-6",
              name: "Ranch Dressing",
              station: "Grill Station",
              category: "sauce",
              macros: {
                calories: 110,
                protein: 1,
                carbs: 1,
                fats: 11,
              },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"],
            },
          ],
        },
        {
          id: "sbisa-dinner-homestyle",
          name: "Homestyle Station",
          components: [
            {
              id: "sbisa-dinner-homestyle-1",
              name: "Southern Smothered Pork Chops",
              station: "Homestyle Station",
              category: "protein",
              macros: {
                calories: 260,
                protein: 25,
                carbs: 5,
                fats: 15,
              },
              allergens: ["wheat"],
              dietaryPreferences: [],
            },
            {
              id: "sbisa-dinner-homestyle-2",
              name: "Herb Roasted Chicken",
              station: "Homestyle Station",
              category: "protein",
              macros: {
                calories: 550,
                protein: 60,
                carbs: 0,
                fats: 32,
              },
              allergens: [],
              dietaryPreferences: [],
            },
            {
              id: "sbisa-dinner-homestyle-3",
              name: "Steamed Rice",
              station: "Homestyle Station",
              category: "base",
              macros: {
                calories: 110,
                protein: 2,
                carbs: 23,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-homestyle-4",
              name: "Country Style Green Beans",
              station: "Homestyle Station",
              category: "side",
              macros: {
                calories: 50,
                protein: 2,
                carbs: 11,
                fats: 1,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-homestyle-5",
              name: "Roasted Cauliflower Florets",
              station: "Homestyle Station",
              category: "side",
              macros: {
                calories: 5,
                protein: 0,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
          ],
        },
        {
          id: "sbisa-dinner-the-kitchen",
          name: "The Kitchen Station",
          components: [
            {
              id: "sbisa-dinner-the-kitchen-1",
              name: "Herb Crusted Chicken",
              station: "The Kitchen Station",
              category: "protein",
              macros: {
                calories: 200,
                protein: 32,
                carbs: 2,
                fats: 4,
              },
              allergens: [],
              dietaryPreferences: [],
            },
            {
              id: "sbisa-dinner-the-kitchen-2",
              name: "Lemon Rice Pilaf",
              station: "The Kitchen Station",
              category: "base",
              macros: {
                calories: 120,
                protein: 2,
                carbs: 25,
                fats: 1,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-the-kitchen-3",
              name: "Broccolini",
              station: "The Kitchen Station",
              category: "vegetable",
              macros: {
                calories: 80,
                protein: 3,
                carbs: 7,
                fats: 6,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
          ],
        },
        {
          id: "sbisa-dinner-bok-choy",
          name: "Bok Choy Station",
          components: [
            {
              id: "sbisa-dinner-bok-choy-1",
              name: "Chicken in Marinade",
              station: "Bok Choy Station",
              category: "protein",
              macros: {
                calories: 180,
                protein: 19,
                carbs: 1,
                fats: 11,
              },
              allergens: [],
              dietaryPreferences: [],
            },
            {
              id: "sbisa-dinner-bok-choy-2",
              name: "Sliced Mushrooms",
              station: "Bok Choy Station",
              category: "side",
              macros: {
                calories: 0,
                protein: 1,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-bok-choy-3",
              name: "Sliced Green Bell Pepper",
              station: "Bok Choy Station",
              category: "side",
              macros: {
                calories: 0,
                protein: 0,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-bok-choy-4",
              name: "Shredded Carrots",
              station: "Bok Choy Station",
              category: "vegetable",
              macros: {
                calories: 10,
                protein: 0,
                carbs: 3,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-bok-choy-5",
              name: "Julienne Yellow Onions",
              station: "Bok Choy Station",
              category: "side",
              macros: {
                calories: 10,
                protein: 0,
                carbs: 3,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-bok-choy-6",
              name: "Grated Ginger Root",
              station: "Bok Choy Station",
              category: "side",
              macros: {
                calories: 0,
                protein: 0,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-bok-choy-7",
              name: "Sweet and Sour Sauce",
              station: "Bok Choy Station",
              category: "sauce",
              macros: {
                calories: 40,
                protein: 1,
                carbs: 8,
                fats: 0,
              },
              allergens: ["soy"],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-bok-choy-8",
              name: "Steamed Rice",
              station: "Bok Choy Station",
              category: "base",
              macros: {
                calories: 150,
                protein: 3,
                carbs: 32,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-bok-choy-9",
              name: "Bourbon Style Sauce",
              station: "Bok Choy Station",
              category: "sauce",
              macros: {
                calories: 80,
                protein: 0,
                carbs: 18,
                fats: 0,
              },
              allergens: ["soy", "wheat"],
              dietaryPreferences: [],
            },
            {
              id: "sbisa-dinner-bok-choy-10",
              name: "Sliced Tofu",
              station: "Bok Choy Station",
              category: "side",
              macros: {
                calories: 20,
                protein: 2,
                carbs: 1,
                fats: 1,
              },
              allergens: ["soy"],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-bok-choy-11",
              name: "Soy Sauce",
              station: "Bok Choy Station",
              category: "sauce",
              macros: {
                calories: 0,
                protein: 1,
                carbs: 0,
                fats: 0,
              },
              allergens: ["soy", "wheat"],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-bok-choy-12",
              name: "Sesame Seed Mix",
              station: "Bok Choy Station",
              category: "side",
              macros: {
                calories: 180,
                protein: 6,
                carbs: 3,
                fats: 17,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-bok-choy-13",
              name: "Sriracha Hot Chili Sauce",
              station: "Bok Choy Station",
              category: "sauce",
              macros: {
                calories: 0,
                protein: 0,
                carbs: 0,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
          ],
        },
        {
          id: "sbisa-dinner-innovate",
          name: "Innovate Station",
          components: [],
        },
        {
          id: "sbisa-dinner-fresh-52",
          name: "Fresh 52 Station",
          components: [
            {
              id: "sbisa-dinner-fresh-52-1",
              name: "Chopped Romaine Lettuce",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 10,
                protein: 1,
                carbs: 2,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-2",
              name: "Spring Mix",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 5,
                protein: 1,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-3",
              name: "Chopped Iceberg Lettuce",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 10,
                protein: 1,
                carbs: 2,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-4",
              name: "Sliced Cucumber",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 0,
                protein: 0,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-5",
              name: "Steamed Broccoli",
              station: "Fresh 52 Station",
              category: "vegetable",
              macros: {
                calories: 60,
                protein: 5,
                carbs: 11,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-6",
              name: "Grape Tomatoes",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 5,
                protein: 0,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-7",
              name: "Dark Red Kidney Beans",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 35,
                protein: 2,
                carbs: 7,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-8",
              name: "Shredded Carrots",
              station: "Fresh 52 Station",
              category: "vegetable",
              macros: {
                calories: 10,
                protein: 0,
                carbs: 3,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-9",
              name: "Sliced Red Onion",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 5,
                protein: 0,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-10",
              name: "Croutons",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 70,
                protein: 2,
                carbs: 15,
                fats: 0,
              },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"],
            },
            {
              id: "sbisa-dinner-fresh-52-11",
              name: "Roasted Sunflower Seeds",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 45,
                protein: 2,
                carbs: 2,
                fats: 4,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-12",
              name: "Shredded Cheddar Cheese",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 30,
                protein: 2,
                carbs: 0,
                fats: 2,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian"],
            },
            {
              id: "sbisa-dinner-fresh-52-13",
              name: "Ranch Dressing",
              station: "Fresh 52 Station",
              category: "sauce",
              macros: {
                calories: 110,
                protein: 1,
                carbs: 1,
                fats: 11,
              },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"],
            },
            {
              id: "sbisa-dinner-fresh-52-14",
              name: "Caesar Dressing",
              station: "Fresh 52 Station",
              category: "sauce",
              macros: {
                calories: 150,
                protein: 1,
                carbs: 1,
                fats: 16,
              },
              allergens: ["fish"],
              dietaryPreferences: [],
            },
            {
              id: "sbisa-dinner-fresh-52-15",
              name: "Italian Dressing",
              station: "Fresh 52 Station",
              category: "sauce",
              macros: {
                calories: 110,
                protein: 0,
                carbs: 2,
                fats: 12,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-16",
              name: "Dried Cranberries",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 30,
                protein: 0,
                carbs: 8,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-17",
              name: "Honey Mustard Dressing",
              station: "Fresh 52 Station",
              category: "sauce",
              macros: {
                calories: 130,
                protein: 0,
                carbs: 7,
                fats: 12,
              },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"],
            },
            {
              id: "sbisa-dinner-fresh-52-18",
              name: "Balsamic Vinaigrette Dressing",
              station: "Fresh 52 Station",
              category: "sauce",
              macros: {
                calories: 60,
                protein: 0,
                carbs: 5,
                fats: 4,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-19",
              name: "Olive Oil",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 240,
                protein: 0,
                carbs: 0,
                fats: 27,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-20",
              name: "Balsamic Vinegar",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 25,
                protein: 0,
                carbs: 5,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-21",
              name: "Saltine Crackers",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 25,
                protein: 0,
                carbs: 5,
                fats: 0,
              },
              allergens: ["soy", "wheat"],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-22",
              name: "Sliced Mushrooms",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 0,
                protein: 1,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-23",
              name: "Black Beans",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 40,
                protein: 3,
                carbs: 7,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-24",
              name: "Cooked Quinoa",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 60,
                protein: 2,
                carbs: 10,
                fats: 1,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-25",
              name: "Cubed Tofu",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 50,
                protein: 5,
                carbs: 1,
                fats: 3,
              },
              allergens: ["soy"],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-26",
              name: "Sliced Red Bell Pepper",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 5,
                protein: 0,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-27",
              name: "Sliced Green Bell Pepper",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 0,
                protein: 0,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-fresh-52-28",
              name: "Diced Ham",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 45,
                protein: 5,
                carbs: 2,
                fats: 1,
              },
              allergens: [],
              dietaryPreferences: [],
            },
            {
              id: "sbisa-dinner-fresh-52-29",
              name: "Sliced Jalapeno Pepper",
              station: "Fresh 52 Station",
              category: "side",
              macros: {
                calories: 0,
                protein: 0,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
          ],
        },
        {
          id: "sbisa-dinner-carved-&-crafted",
          name: "Carved & Crafted Station",
          components: [
            {
              id: "sbisa-dinner-carved-&-crafted-1",
              name: '12" Tomato Basil Flour Tortilla',
              station: "Carved & Crafted Station",
              category: "side",
              macros: {
                calories: 300,
                protein: 9,
                carbs: 47,
                fats: 9,
              },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-2",
              name: "Multigrain Bread",
              station: "Carved & Crafted Station",
              category: "base",
              macros: {
                calories: 280,
                protein: 8,
                carbs: 52,
                fats: 4,
              },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-3",
              name: "Whole Wheat Bread",
              station: "Carved & Crafted Station",
              category: "base",
              macros: {
                calories: 140,
                protein: 8,
                carbs: 26,
                fats: 1,
              },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-4",
              name: "White Bread",
              station: "Carved & Crafted Station",
              category: "base",
              macros: {
                calories: 150,
                protein: 5,
                carbs: 29,
                fats: 1,
              },
              allergens: ["soy", "wheat"],
              dietaryPreferences: ["vegetarian"],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-5",
              name: "Thinly Sliced Deli Turkey Breast",
              station: "Carved & Crafted Station",
              category: "side",
              macros: {
                calories: 90,
                protein: 11,
                carbs: 3,
                fats: 3,
              },
              allergens: [],
              dietaryPreferences: [],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-6",
              name: "Thinly Sliced Smoked Ham",
              station: "Carved & Crafted Station",
              category: "side",
              macros: {
                calories: 110,
                protein: 15,
                carbs: 1,
                fats: 4,
              },
              allergens: [],
              dietaryPreferences: [],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-7",
              name: "Hummus",
              station: "Carved & Crafted Station",
              category: "side",
              macros: {
                calories: 110,
                protein: 3,
                carbs: 8,
                fats: 8,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-8",
              name: "Tuna Salad",
              station: "Carved & Crafted Station",
              category: "vegetable",
              macros: {
                calories: 130,
                protein: 9,
                carbs: 1,
                fats: 10,
              },
              allergens: ["fish", "eggs"],
              dietaryPreferences: [],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-9",
              name: "Egg Salad",
              station: "Carved & Crafted Station",
              category: "protein",
              macros: {
                calories: 310,
                protein: 7,
                carbs: 1,
                fats: 30,
              },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-10",
              name: "Cheddar Cheese Slice",
              station: "Carved & Crafted Station",
              category: "side",
              macros: {
                calories: 60,
                protein: 3,
                carbs: 0,
                fats: 4,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian"],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-11",
              name: "Sliced American Swiss Cheese",
              station: "Carved & Crafted Station",
              category: "side",
              macros: {
                calories: 100,
                protein: 5,
                carbs: 1,
                fats: 9,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian"],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-12",
              name: "Sliced Cucumber",
              station: "Carved & Crafted Station",
              category: "side",
              macros: {
                calories: 0,
                protein: 0,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-13",
              name: "Sliced Green Bell Pepper",
              station: "Carved & Crafted Station",
              category: "side",
              macros: {
                calories: 5,
                protein: 0,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-14",
              name: "Dill Pickle Slices",
              station: "Carved & Crafted Station",
              category: "side",
              macros: {
                calories: 0,
                protein: 0,
                carbs: 0,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-15",
              name: "Sliced Jalapeno Pepper",
              station: "Carved & Crafted Station",
              category: "side",
              macros: {
                calories: 0,
                protein: 0,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-16",
              name: "Lettuce Leaf",
              station: "Carved & Crafted Station",
              category: "side",
              macros: {
                calories: 0,
                protein: 0,
                carbs: 0,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-17",
              name: "Sliced Tomatoes",
              station: "Carved & Crafted Station",
              category: "side",
              macros: {
                calories: 0,
                protein: 0,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-18",
              name: "Sliced Red Onion",
              station: "Carved & Crafted Station",
              category: "side",
              macros: {
                calories: 5,
                protein: 0,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-19",
              name: "House Fried Potato Chips ",
              station: "Carved & Crafted Station",
              category: "base",
              macros: {
                calories: 90,
                protein: 1,
                carbs: 5,
                fats: 8,
              },
              allergens: ["soy"],
              dietaryPreferences: [],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-20",
              name: "Sriracha Mayo",
              station: "Carved & Crafted Station",
              category: "side",
              macros: {
                calories: 80,
                protein: 0,
                carbs: 0,
                fats: 9,
              },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"],
            },
            {
              id: "sbisa-dinner-carved-&-crafted-21",
              name: "Franks Red Hot Seasoning",
              station: "Carved & Crafted Station",
              category: "side",
              macros: {
                calories: 0,
                protein: 0,
                carbs: 0,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
          ],
        },
        {
          id: "sbisa-dinner-pasta-&-co.",
          name: "Pasta & Co. Station",
          components: [
            {
              id: "sbisa-dinner-pasta-&-co.-1",
              name: "Penne Pasta",
              station: "Pasta & Co. Station",
              category: "base",
              macros: {
                calories: 100,
                protein: 5,
                carbs: 19,
                fats: 1,
              },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-pasta-&-co.-2",
              name: "Marinara Sauce",
              station: "Pasta & Co. Station",
              category: "sauce",
              macros: {
                calories: 10,
                protein: 0,
                carbs: 2,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-pasta-&-co.-3",
              name: "Roasted Garlic Alfredo Sauce",
              station: "Pasta & Co. Station",
              category: "sauce",
              macros: {
                calories: 110,
                protein: 3,
                carbs: 4,
                fats: 10,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian"],
            },
            {
              id: "sbisa-dinner-pasta-&-co.-4",
              name: "Italian Sausage Crumbles",
              station: "Pasta & Co. Station",
              category: "protein",
              macros: {
                calories: 70,
                protein: 4,
                carbs: 0,
                fats: 5,
              },
              allergens: ["soy"],
              dietaryPreferences: [],
            },
            {
              id: "sbisa-dinner-pasta-&-co.-5",
              name: "Baby Spinach",
              station: "Pasta & Co. Station",
              category: "vegetable",
              macros: {
                calories: 0,
                protein: 0,
                carbs: 0,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-pasta-&-co.-6",
              name: "Sliced Mushrooms",
              station: "Pasta & Co. Station",
              category: "side",
              macros: {
                calories: 0,
                protein: 1,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-pasta-&-co.-7",
              name: "Sliced Green Bell Pepper",
              station: "Pasta & Co. Station",
              category: "side",
              macros: {
                calories: 0,
                protein: 0,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-pasta-&-co.-8",
              name: "Julienne Yellow Onions",
              station: "Pasta & Co. Station",
              category: "side",
              macros: {
                calories: 10,
                protein: 0,
                carbs: 3,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-pasta-&-co.-9",
              name: "Fresh Chopped Garlic",
              station: "Pasta & Co. Station",
              category: "side",
              macros: {
                calories: 15,
                protein: 1,
                carbs: 3,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-pasta-&-co.-10",
              name: "Grated Parmesan Cheese",
              station: "Pasta & Co. Station",
              category: "side",
              macros: {
                calories: 10,
                protein: 1,
                carbs: 0,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian"],
            },
            {
              id: "sbisa-dinner-pasta-&-co.-11",
              name: "Crushed Red Pepper",
              station: "Pasta & Co. Station",
              category: "side",
              macros: {
                calories: 0,
                protein: 0,
                carbs: 0,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
          ],
        },
        {
          id: "sbisa-dinner-500-degrees",
          name: "500 Degrees Station",
          components: [
            {
              id: "sbisa-dinner-500-degrees-1",
              name: "Margherita Pizza",
              station: "500 Degrees Station",
              category: "side",
              macros: {
                calories: 480,
                protein: 22,
                carbs: 61,
                fats: 17,
              },
              allergens: ["soy", "wheat"],
              dietaryPreferences: ["vegetarian"],
            },
            {
              id: "sbisa-dinner-500-degrees-2",
              name: "BBQ Chicken Pizza",
              station: "500 Degrees Station",
              category: "protein",
              macros: {
                calories: 230,
                protein: 11,
                carbs: 34,
                fats: 5,
              },
              allergens: ["wheat"],
              dietaryPreferences: [],
            },
            {
              id: "sbisa-dinner-500-degrees-3",
              name: "Veggie Pizza",
              station: "500 Degrees Station",
              category: "protein",
              macros: {
                calories: 170,
                protein: 7,
                carbs: 26,
                fats: 4,
              },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"],
            },
            {
              id: "sbisa-dinner-500-degrees-4",
              name: "Crushed Red Pepper",
              station: "500 Degrees Station",
              category: "side",
              macros: {
                calories: 5,
                protein: 0,
                carbs: 1,
                fats: 0,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
            {
              id: "sbisa-dinner-500-degrees-5",
              name: "Grated Parmesan Cheese",
              station: "500 Degrees Station",
              category: "side",
              macros: {
                calories: 25,
                protein: 2,
                carbs: 1,
                fats: 1,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian"],
            },
            {
              id: "sbisa-dinner-500-degrees-6",
              name: "Italian Seasoning Blend",
              station: "500 Degrees Station",
              category: "side",
              macros: {
                calories: 40,
                protein: 2,
                carbs: 8,
                fats: 1,
              },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"],
            },
          ],
        },
        {
          id: "sbisa-dinner-rooted",
          name: "Rooted Station",
          components: [],
        },
        {
          id: "sbisa-dinner-nook",
          name: "Nook Station",
          components: [],
        },
        {
          id: "sbisa-dinner-sweet-shoppe",
          name: "Sweet Shoppe Station",
          components: [],
        },
      ],
    },
  },
   // DINING HALL: Commons
  {
    id: 'dh-1',
    name: 'Commons Dining Hall',
    location: 'Commons',
    isDiningHall: true,
    paymentCosts: {
      mealSwipe: 1,
      diningDollars: 12,
      realDollars: 12
    },
    stations: {
      breakfast: [
        {
          id: 'sbisa-breakfast-nook',
          name: 'Nook Station',
          components: [
            {
              id: 'sbisa-breakfast-nook-1',
              name: 'Bacon Egg and Cheese Waffle',
              station: 'Nook Station',
              category: 'protein',
              macros: { calories: 640, protein: 27, carbs: 64, fats: 30 },
              allergens: ["soy", "wheat", "eggs"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-nook-2',
              name: 'Crispy Hashbrowns',
              station: 'Nook Station',
              category: 'side',
              macros: { calories: 100, protein: 2, carbs: 19, fats: 2 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-nook-3',
              name: 'Bacon',
              station: 'Nook Station',
              category: 'protein',
              macros: { calories: 90, protein: 6, carbs: 0, fats: 7 },
              allergens: [],
              dietaryPreferences: []
            }
          ]
        },
        {
          id: 'sbisa-breakfast-homestyle',
          name: 'Homestyle Station',
          components: [
            {
              id: 'sbisa-breakfast-homestyle-1',
              name: 'Scrambled Eggs',
              station: 'Homestyle Station',
              category: 'protein',
              macros: { calories: 210, protein: 14, carbs: 1, fats: 16 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-homestyle-2',
              name: 'Bacon',
              station: 'Homestyle Station',
              category: 'protein',
              macros: { calories: 90, protein: 6, carbs: 0, fats: 7 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-homestyle-3',
              name: 'Tater Tots',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 140, protein: 1, carbs: 18, fats: 8 },
              allergens: ["soy"],
              dietaryPreferences: []
            }
          ]
        },
        {
          id: 'sbisa-breakfast-grill',
          name: 'Grill Station',
          components: [
          ]
        },
        {
          id: 'sbisa-breakfast-pasta-&-co.',
          name: 'Pasta & Co. Station',
          components: [
            {
              id: 'sbisa-breakfast-pasta-&-co.-1',
              name: 'Omelet Bar',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-pasta-&-co.-2',
              name: 'Eggs',
              station: 'Pasta & Co. Station',
              category: 'protein',
              macros: { calories: 90, protein: 7, carbs: 1, fats: 6 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-pasta-&-co.-3',
              name: 'Egg Whites',
              station: 'Pasta & Co. Station',
              category: 'protein',
              macros: { calories: 30, protein: 7, carbs: 0, fats: 0 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-pasta-&-co.-4',
              name: 'Baby Spinach',
              station: 'Pasta & Co. Station',
              category: 'vegetable',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-pasta-&-co.-5',
              name: ' Diced Onions',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 15, protein: 0, carbs: 4, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-pasta-&-co.-6',
              name: 'Sliced Mushrooms',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 0, protein: 1, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-pasta-&-co.-7',
              name: 'Chopped Green Bell Pepper',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-pasta-&-co.-8',
              name: 'Chorizo Sausage',
              station: 'Pasta & Co. Station',
              category: 'protein',
              macros: { calories: 60, protein: 3, carbs: 1, fats: 5 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-pasta-&-co.-9',
              name: 'Shredded Cheddar Cheese',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 30, protein: 2, carbs: 0, fats: 2 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-breakfast-innovate',
          name: 'Innovate Station',
          components: [
            {
              id: 'sbisa-breakfast-innovate-1',
              name: 'Acai Berry Puree Mix',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 20, protein: 1, carbs: 1, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-innovate-2',
              name: 'Low Fat Vanilla Yogurt',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 70, protein: 2, carbs: 15, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-innovate-3',
              name: 'Low Fat Strawberry Yogurt',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 110, protein: 4, carbs: 22, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-innovate-4',
              name: 'Cottage Cheese',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 80, protein: 14, carbs: 3, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-innovate-5',
              name: 'Peaches',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 40, protein: 1, carbs: 10, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-innovate-6',
              name: 'Pineapple Tidbits',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 30, protein: 0, carbs: 7, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-innovate-7',
              name: 'Mixed Melon',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 30, protein: 1, carbs: 8, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-innovate-8',
              name: 'Strawberries',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 20, protein: 0, carbs: 5, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-innovate-9',
              name: 'Blackberries',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 25, protein: 0, carbs: 6, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-innovate-10',
              name: 'Blueberries',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 20, protein: 0, carbs: 5, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-innovate-11',
              name: 'Banana',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 110, protein: 1, carbs: 27, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-innovate-12',
              name: 'Toasted Shredded Coconut',
              station: 'Innovate Station',
              category: 'base',
              macros: { calories: 70, protein: 0, carbs: 8, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-innovate-13',
              name: 'Honey',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 60, protein: 0, carbs: 17, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-innovate-14',
              name: 'Nutella',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 100, protein: 1, carbs: 11, fats: 6 },
              allergens: ["treeNuts", "soy"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-innovate-15',
              name: 'Whipped Topping',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 10, protein: 0, carbs: 1, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-innovate-16',
              name: 'Chia Seeds',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 25, protein: 1, carbs: 2, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-innovate-17',
              name: 'Oats and Honey Granola',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 200, protein: 5, carbs: 35, fats: 5 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-breakfast-market-st.-deli',
          name: 'Market St. Deli Station',
          components: [
            {
              id: 'sbisa-breakfast-market-st.-deli-1',
              name: 'Plain Bagel',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 310, protein: 10, carbs: 63, fats: 1 },
              allergens: ["soy", "wheat"],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-2',
              name: 'Cinnamon Raisin Bagel',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 250, protein: 8, carbs: 50, fats: 1 },
              allergens: ["soy", "wheat"],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-3',
              name: 'Everything Bagel',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 240, protein: 10, carbs: 48, fats: 1 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-4',
              name: 'Cream Cheese',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 50, protein: 1, carbs: 1, fats: 5 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-5',
              name: 'Whipped Butter',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 100, protein: 0, carbs: 0, fats: 12 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-6',
              name: 'Creamy Peanut Butter',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 110, protein: 4, carbs: 3, fats: 9 },
              allergens: ["peanuts"],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-7',
              name: 'Grape Jelly',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 50, protein: 0, carbs: 13, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-8',
              name: 'Hummus',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 30, protein: 1, carbs: 4, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-9',
              name: 'Part Skim Ricotta Cheese',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 20, protein: 2, carbs: 1, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-10',
              name: 'Avocado Pulp',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 90, protein: 1, carbs: 5, fats: 8 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-11',
              name: 'Baby Spinach',
              station: 'Market St. Deli Station',
              category: 'vegetable',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-12',
              name: 'Sliced Radishes',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-13',
              name: 'Sliced Cucumber',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-14',
              name: 'Sliced Red Onion',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 10, protein: 0, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-15',
              name: 'Grape Tomatoes',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-16',
              name: 'Balsamic Glaze',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 15, protein: 0, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-17',
              name: 'Sliced Banana',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 25, protein: 0, carbs: 7, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-18',
              name: 'Mixed Berries',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 45, protein: 1, carbs: 11, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-19',
              name: 'Nutella',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 100, protein: 1, carbs: 11, fats: 6 },
              allergens: ["treeNuts", "soy"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-20',
              name: 'Shredded Coconut',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 25, protein: 0, carbs: 3, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-21',
              name: 'Semi Sweet Chocolate Chips',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 70, protein: 1, carbs: 10, fats: 4 },
              allergens: ["soy"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-22',
              name: 'Oats and Honey Granola',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 200, protein: 5, carbs: 35, fats: 5 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-23',
              name: 'Everything Bagel Spice',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 10, protein: 0, carbs: 1, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-market-st.-deli-24',
              name: 'Chia Seeds',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 25, protein: 1, carbs: 2, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            }
          ]
        },
        {
          id: 'sbisa-breakfast-hearthstone-ovens',
          name: 'Hearthstone Ovens Station',
          components: [
            {
              id: 'sbisa-breakfast-hearthstone-ovens-1',
              name: 'Oatmeal',
              station: 'Hearthstone Ovens Station',
              category: 'side',
              macros: { calories: 70, protein: 2, carbs: 13, fats: 1 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-hearthstone-ovens-2',
              name: 'Sausage Kolache',
              station: 'Hearthstone Ovens Station',
              category: 'protein',
              macros: { calories: 360, protein: 14, carbs: 31, fats: 19 },
              allergens: ["wheat", "eggs"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-hearthstone-ovens-3',
              name: 'Cheese Omelet',
              station: 'Hearthstone Ovens Station',
              category: 'side',
              macros: { calories: 190, protein: 12, carbs: 2, fats: 14 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-hearthstone-ovens-4',
              name: 'Buttermilk Biscuit',
              station: 'Hearthstone Ovens Station',
              category: 'base',
              macros: { calories: 220, protein: 5, carbs: 32, fats: 8 },
              allergens: ["wheat", "eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-hearthstone-ovens-5',
              name: 'Country Sausage Gravy',
              station: 'Hearthstone Ovens Station',
              category: 'protein',
              macros: { calories: 35, protein: 1, carbs: 3, fats: 2 },
              allergens: ["wheat"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-hearthstone-ovens-6',
              name: 'Country Gravy',
              station: 'Hearthstone Ovens Station',
              category: 'sauce',
              macros: { calories: 35, protein: 1, carbs: 3, fats: 2 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-hearthstone-ovens-7',
              name: 'Chipotle Salsa',
              station: 'Hearthstone Ovens Station',
              category: 'side',
              macros: { calories: 35, protein: 1, carbs: 4, fats: 2 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-breakfast-hearthstone-ovens-8',
              name: 'Shredded Cheddar Cheese',
              station: 'Hearthstone Ovens Station',
              category: 'side',
              macros: { calories: 30, protein: 2, carbs: 0, fats: 2 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-hearthstone-ovens-9',
              name: 'Pico de Gallo',
              station: 'Hearthstone Ovens Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            }
          ]
        }
      ],
      lunch: [
        {
          id: 'sbisa-lunch-bok-choy',
          name: 'Bok Choy Station',
          components: [
            {
              id: 'sbisa-lunch-bok-choy-1',
              name: 'Orange Chicken',
              station: 'Bok Choy Station',
              category: 'protein',
              macros: { calories: 290, protein: 14, carbs: 31, fats: 12 },
              allergens: ["wheat", "soy"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-bok-choy-2',
              name: 'Sweet and Sour Shrimp',
              station: 'Bok Choy Station',
              category: 'side',
              macros: { calories: 340, protein: 12, carbs: 32, fats: 17 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-bok-choy-3',
              name: 'White Rice',
              station: 'Bok Choy Station',
              category: 'base',
              macros: { calories: 120, protein: 2, carbs: 23, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-bok-choy-4',
              name: 'Vegetable Lo Mein					',
              station: 'Bok Choy Station',
              category: 'side',
              macros: { calories: 340, protein: 10, carbs: 60, fats: 7 },
              allergens: ["wheat", "soy"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-bok-choy-5',
              name: 'Stir Fry Vegetables',
              station: 'Bok Choy Station',
              category: 'side',
              macros: { calories: 80, protein: 3, carbs: 15, fats: 1 },
              allergens: ["soy"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-bok-choy-6',
              name: 'Sliced Pickled Ginger',
              station: 'Bok Choy Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-bok-choy-7',
              name: 'Chopped Cilantro',
              station: 'Bok Choy Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-bok-choy-8',
              name: 'Chow Mein Noodles',
              station: 'Bok Choy Station',
              category: 'side',
              macros: { calories: 220, protein: 5, carbs: 30, fats: 8 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-bok-choy-9',
              name: 'Pickled Carrots',
              station: 'Bok Choy Station',
              category: 'vegetable',
              macros: { calories: 30, protein: 1, carbs: 7, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-bok-choy-10',
              name: 'Chopped Onion',
              station: 'Bok Choy Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-bok-choy-11',
              name: 'Sliced Watermelon Radish',
              station: 'Bok Choy Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-bok-choy-12',
              name: 'Cookies, Fortune',
              station: 'Bok Choy Station',
              category: 'side',
              macros: { calories: 30, protein: 0, carbs: 7, fats: 0 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-homestyle',
          name: 'Homestyle Station',
          components: [
            {
              id: 'sbisa-lunch-homestyle-1',
              name: 'Beef Fajitas',
              station: 'Homestyle Station',
              category: 'protein',
              macros: { calories: 450, protein: 35, carbs: 40, fats: 17 },
              allergens: ["wheat"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-homestyle-2',
              name: 'White Rice',
              station: 'Homestyle Station',
              category: 'base',
              macros: { calories: 120, protein: 2, carbs: 23, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-3',
              name: 'Pinto Beans',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 100, protein: 5, carbs: 16, fats: 2 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-4',
              name: 'Sauteed Peppers and Onions',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 45, protein: 1, carbs: 4, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-5',
              name: 'Enchilada Sauce',
              station: 'Homestyle Station',
              category: 'sauce',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-6',
              name: 'Queso Blanco',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 190, protein: 7, carbs: 3, fats: 16 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-7',
              name: 'Shredded Iceberg Lettuce',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 10, protein: 1, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-8',
              name: 'Pico de Gallo',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-9',
              name: 'Sliced Jalapeno',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 10, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-10',
              name: 'Sour Cream',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 30, protein: 0, carbs: 1, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-11',
              name: 'Guacamole',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 80, protein: 1, carbs: 5, fats: 7 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-12',
              name: 'roasted corn salsa',
              station: 'Homestyle Station',
              category: 'side',
              macros: { calories: 90, protein: 1, carbs: 12, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-the-kitchen',
          name: 'The Kitchen Station',
          components: [
            {
              id: 'sbisa-lunch-the-kitchen-1',
              name: 'Jerk Chicken Thighs',
              station: 'The Kitchen Station',
              category: 'protein',
              macros: { calories: 220, protein: 22, carbs: 5, fats: 12 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-the-kitchen-2',
              name: 'Caribbean Beans and Rice	',
              station: 'The Kitchen Station',
              category: 'base',
              macros: { calories: 280, protein: 6, carbs: 49, fats: 6 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-the-kitchen-3',
              name: 'Vegetarian Collard Greens',
              station: 'The Kitchen Station',
              category: 'vegetable',
              macros: { calories: 70, protein: 3, carbs: 12, fats: 2 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-the-kitchen-4',
              name: 'Brown Rice',
              station: 'The Kitchen Station',
              category: 'base',
              macros: { calories: 160, protein: 4, carbs: 33, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-innovate',
          name: 'Innovate Station',
          components: [
            {
              id: 'sbisa-lunch-innovate-1',
              name: 'Romaine Blend',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 10, protein: 1, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-2',
              name: 'Baby Spinach',
              station: 'Innovate Station',
              category: 'vegetable',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-3',
              name: 'Chicken Breast',
              station: 'Innovate Station',
              category: 'protein',
              macros: { calories: 180, protein: 23, carbs: 0, fats: 10 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-innovate-4',
              name: 'Garlic, Lemon and Parsley Shrimp',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 290, protein: 13, carbs: 6, fats: 24 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-innovate-5',
              name: 'Crumbled Feta Cheese',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 25, protein: 1, carbs: 0, fats: 2 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-6',
              name: 'Shaved Red Onion',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-7',
              name: 'Banana Pepper Rings',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-8',
              name: 'Sliced Black Olives',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 35, protein: 0, carbs: 2, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-9',
              name: 'Croutons',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 90, protein: 2, carbs: 15, fats: 2 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-10',
              name: 'Greek Dressing',
              station: 'Innovate Station',
              category: 'sauce',
              macros: { calories: 35, protein: 0, carbs: 2, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-grill',
          name: 'Grill Station',
          components: [
            {
              id: 'sbisa-lunch-grill-1',
              name: 'Chopped Green Onions',
              station: 'Grill Station',
              category: 'side',
              macros: { calories: 10, protein: 0, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-grill-2',
              name: 'Sliced Jalapeno Pepper',
              station: 'Grill Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-grill-3',
              name: 'Avocado Ranch Dressing',
              station: 'Grill Station',
              category: 'sauce',
              macros: { calories: 210, protein: 0, carbs: 3, fats: 22 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-grill-4',
              name: 'Beef Chili',
              station: 'Grill Station',
              category: 'protein',
              macros: { calories: 370, protein: 25, carbs: 36, fats: 14 },
              allergens: ["wheat"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-grill-5',
              name: 'Cheese Sauce',
              station: 'Grill Station',
              category: 'sauce',
              macros: { calories: 40, protein: 1, carbs: 3, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-grill-6',
              name: 'Pico de Gallo',
              station: 'Grill Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-market-st.-deli',
          name: 'Market St. Deli Station',
          components: [
            {
              id: 'sbisa-lunch-market-st.-deli-1',
              name: 'Multigrain Bread',
              station: 'Market St. Deli Station',
              category: 'base',
              macros: { calories: 280, protein: 8, carbs: 52, fats: 4 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-market-st.-deli-2',
              name: 'Whole Wheat Bread',
              station: 'Market St. Deli Station',
              category: 'base',
              macros: { calories: 140, protein: 8, carbs: 26, fats: 1 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-market-st.-deli-3',
              name: 'White Bread',
              station: 'Market St. Deli Station',
              category: 'base',
              macros: { calories: 150, protein: 5, carbs: 29, fats: 1 },
              allergens: ["wheat", "soy"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-market-st.-deli-4',
              name: 'Thinly Sliced Deli Turkey Breast',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 90, protein: 11, carbs: 3, fats: 3 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-market-st.-deli-5',
              name: 'Thinly Sliced Smoked Ham',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 110, protein: 15, carbs: 1, fats: 4 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-market-st.-deli-6',
              name: 'Tuna Salad',
              station: 'Market St. Deli Station',
              category: 'vegetable',
              macros: { calories: 130, protein: 9, carbs: 1, fats: 10 },
              allergens: ["eggs", "fish"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-market-st.-deli-7',
              name: 'Cheddar Cheese Slice',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 60, protein: 3, carbs: 0, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-market-st.-deli-8',
              name: 'Sliced American Swiss Cheese',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 100, protein: 5, carbs: 1, fats: 9 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-market-st.-deli-9',
              name: 'Sliced Cucumber',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-market-st.-deli-10',
              name: 'Sliced Green Bell Pepper',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-market-st.-deli-11',
              name: 'Dill Pickle Slices',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-market-st.-deli-12',
              name: 'Sliced Jalapeno Pepper',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-market-st.-deli-13',
              name: 'Lettuce Leaf',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-market-st.-deli-14',
              name: 'Sliced Tomatoes',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-market-st.-deli-15',
              name: 'Sliced Red Onion',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-market-st.-deli-16',
              name: 'House Fried Potato Chips ',
              station: 'Market St. Deli Station',
              category: 'base',
              macros: { calories: 90, protein: 1, carbs: 5, fats: 8 },
              allergens: ["soy"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-market-st.-deli-17',
              name: 'Sriracha Mayo',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 80, protein: 0, carbs: 0, fats: 9 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-market-st.-deli-18',
              name: 'Franks Red Hot Seasoning',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-pasta-&-co.',
          name: 'Pasta & Co. Station',
          components: [
            {
              id: 'sbisa-lunch-pasta-&-co.-1',
              name: 'Penne Pasta',
              station: 'Pasta & Co. Station',
              category: 'base',
              macros: { calories: 100, protein: 5, carbs: 19, fats: 1 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-pasta-&-co.-2',
              name: 'Marinara Sauce',
              station: 'Pasta & Co. Station',
              category: 'sauce',
              macros: { calories: 40, protein: 1, carbs: 7, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-pasta-&-co.-3',
              name: 'Italian Sausage Crumbles',
              station: 'Pasta & Co. Station',
              category: 'protein',
              macros: { calories: 70, protein: 4, carbs: 0, fats: 5 },
              allergens: ["soy"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-pasta-&-co.-4',
              name: 'Sliced Red Bell Pepper',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-pasta-&-co.-5',
              name: 'Julienne Yellow Onions',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 10, protein: 0, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-pasta-&-co.-6',
              name: 'Shredded Carrots',
              station: 'Pasta & Co. Station',
              category: 'vegetable',
              macros: { calories: 10, protein: 0, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-pasta-&-co.-7',
              name: 'Sliced Mushrooms',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 0, protein: 1, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-pasta-&-co.-8',
              name: 'Grated Parmesan Cheese',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 10, protein: 1, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-pasta-&-co.-9',
              name: 'Crushed Red Pepper',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-hearthstone-ovens',
          name: 'Hearthstone Ovens Station',
          components: [
            {
              id: 'sbisa-lunch-hearthstone-ovens-1',
              name: 'Cheese Pizza',
              station: 'Hearthstone Ovens Station',
              category: 'side',
              macros: { calories: 200, protein: 8, carbs: 29, fats: 5 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-hearthstone-ovens-2',
              name: 'Pepperoni Pizza',
              station: 'Hearthstone Ovens Station',
              category: 'side',
              macros: { calories: 210, protein: 9, carbs: 29, fats: 7 },
              allergens: ["wheat"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-hearthstone-ovens-3',
              name: 'Grilled Veggie Pizza',
              station: 'Hearthstone Ovens Station',
              category: 'protein',
              macros: { calories: 200, protein: 9, carbs: 29, fats: 6 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-hearthstone-ovens-4',
              name: 'Crushed Red Pepper',
              station: 'Hearthstone Ovens Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-hearthstone-ovens-5',
              name: 'Dried Oregano',
              station: 'Hearthstone Ovens Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-hearthstone-ovens-6',
              name: 'Grated Parmesan Cheese',
              station: 'Hearthstone Ovens Station',
              category: 'side',
              macros: { calories: 10, protein: 1, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-hearthstone-ovens-7',
              name: 'Barbecue Chicken Pizza',
              station: 'Hearthstone Ovens Station',
              category: 'protein',
              macros: { calories: 370, protein: 21, carbs: 53, fats: 9 },
              allergens: ["wheat"],
              dietaryPreferences: []
            }
          ]
        },
        {
          id: 'sbisa-lunch-sweet-shoppe',
          name: 'Sweet Shoppe Station',
          components: [
          ]
        },
        {
          id: 'sbisa-lunch-freshworks',
          name: 'Freshworks Station',
          components: [
            {
              id: 'sbisa-lunch-freshworks-1',
              name: 'Chopped Romaine Lettuce',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 10, protein: 1, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-2',
              name: 'Spring Mix',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 5, protein: 1, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-3',
              name: 'Chopped Iceberg Lettuce',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 10, protein: 1, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-4',
              name: 'Sliced Cucumber',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-5',
              name: 'Steamed Broccoli',
              station: 'Freshworks Station',
              category: 'vegetable',
              macros: { calories: 60, protein: 5, carbs: 11, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-6',
              name: 'Grape Tomatoes',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-7',
              name: 'Dark Red Kidney Beans',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 35, protein: 2, carbs: 7, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-8',
              name: 'Shredded Carrots',
              station: 'Freshworks Station',
              category: 'vegetable',
              macros: { calories: 10, protein: 0, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-9',
              name: 'Sliced Red Onion',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-10',
              name: 'Croutons',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 70, protein: 2, carbs: 15, fats: 0 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-11',
              name: 'Roasted Sunflower Seeds',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 45, protein: 2, carbs: 2, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-12',
              name: 'Shredded Cheddar Cheese',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 30, protein: 2, carbs: 0, fats: 2 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-13',
              name: 'Ranch Dressing',
              station: 'Freshworks Station',
              category: 'sauce',
              macros: { calories: 110, protein: 1, carbs: 1, fats: 11 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-14',
              name: 'Caesar Dressing',
              station: 'Freshworks Station',
              category: 'sauce',
              macros: { calories: 150, protein: 1, carbs: 1, fats: 16 },
              allergens: ["fish"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-freshworks-15',
              name: 'Italian Dressing',
              station: 'Freshworks Station',
              category: 'sauce',
              macros: { calories: 110, protein: 0, carbs: 2, fats: 12 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-16',
              name: 'Dried Cranberries',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 30, protein: 0, carbs: 8, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-17',
              name: 'Honey Mustard Dressing',
              station: 'Freshworks Station',
              category: 'sauce',
              macros: { calories: 130, protein: 0, carbs: 7, fats: 12 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-18',
              name: 'Balsamic Vinaigrette Dressing',
              station: 'Freshworks Station',
              category: 'sauce',
              macros: { calories: 60, protein: 0, carbs: 5, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-19',
              name: 'Olive Oil',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 240, protein: 0, carbs: 0, fats: 27 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-20',
              name: 'Balsamic Vinegar',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 25, protein: 0, carbs: 5, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-21',
              name: 'Saltine Crackers',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 25, protein: 0, carbs: 5, fats: 0 },
              allergens: ["wheat", "soy"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-22',
              name: 'Sliced Mushrooms',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 0, protein: 1, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-23',
              name: 'Black Beans',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 40, protein: 3, carbs: 7, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-24',
              name: 'Cooked Quinoa',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 60, protein: 2, carbs: 10, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-25',
              name: 'Cubed Tofu',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 50, protein: 5, carbs: 1, fats: 3 },
              allergens: ["soy"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-26',
              name: 'Sliced Red Bell Pepper',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-27',
              name: 'Sliced Green Bell Pepper',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-freshworks-28',
              name: 'Diced Ham',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 45, protein: 5, carbs: 2, fats: 1 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-freshworks-29',
              name: 'Sliced Jalapeno Pepper',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        }
      ],
      dinner: [
        {
          id: 'sbisa-dinner-bok-choy',
          name: 'Bok Choy Station',
          components: [
            {
              id: 'sbisa-dinner-bok-choy-1',
              name: 'Chicken in Marinade',
              station: 'Bok Choy Station',
              category: 'protein',
              macros: { calories: 180, protein: 19, carbs: 1, fats: 11 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-dinner-bok-choy-2',
              name: 'Sliced Mushrooms',
              station: 'Bok Choy Station',
              category: 'side',
              macros: { calories: 0, protein: 1, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-bok-choy-3',
              name: 'Sliced Green Bell Pepper',
              station: 'Bok Choy Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-bok-choy-4',
              name: 'Shredded Carrots',
              station: 'Bok Choy Station',
              category: 'vegetable',
              macros: { calories: 10, protein: 0, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-bok-choy-5',
              name: 'Julienne Yellow Onions',
              station: 'Bok Choy Station',
              category: 'side',
              macros: { calories: 10, protein: 0, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-bok-choy-6',
              name: 'Grated Ginger Root',
              station: 'Bok Choy Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-bok-choy-7',
              name: 'Sweet and Sour Sauce',
              station: 'Bok Choy Station',
              category: 'sauce',
              macros: { calories: 40, protein: 1, carbs: 8, fats: 0 },
              allergens: ["soy"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-bok-choy-8',
              name: 'Steamed Rice',
              station: 'Bok Choy Station',
              category: 'base',
              macros: { calories: 150, protein: 3, carbs: 32, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-bok-choy-9',
              name: 'Bourbon Style Sauce',
              station: 'Bok Choy Station',
              category: 'sauce',
              macros: { calories: 80, protein: 0, carbs: 18, fats: 0 },
              allergens: ["wheat", "soy"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-dinner-bok-choy-10',
              name: 'Sliced Tofu',
              station: 'Bok Choy Station',
              category: 'side',
              macros: { calories: 20, protein: 2, carbs: 1, fats: 1 },
              allergens: ["soy"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-bok-choy-11',
              name: 'Soy Sauce',
              station: 'Bok Choy Station',
              category: 'sauce',
              macros: { calories: 0, protein: 1, carbs: 0, fats: 0 },
              allergens: ["wheat", "soy"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-bok-choy-12',
              name: 'Sesame Seed Mix',
              station: 'Bok Choy Station',
              category: 'side',
              macros: { calories: 180, protein: 6, carbs: 3, fats: 17 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-bok-choy-13',
              name: 'Sriracha Hot Chili Sauce',
              station: 'Bok Choy Station',
              category: 'sauce',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-dinner-homestyle',
          name: 'Homestyle Station',
          components: [
            {
              id: 'sbisa-dinner-homestyle-1',
              name: 'Chicken Piccata',
              station: 'Homestyle Station',
              category: 'protein',
              macros: { calories: 210, protein: 24, carbs: 6, fats: 8 },
              allergens: ["wheat"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-dinner-homestyle-2',
              name: 'Broccolini',
              station: 'Homestyle Station',
              category: 'vegetable',
              macros: { calories: 50, protein: 2, carbs: 5, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-homestyle-3',
              name: 'Orzo Pasta',
              station: 'Homestyle Station',
              category: 'base',
              macros: { calories: 130, protein: 5, carbs: 22, fats: 1 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-dinner-innovate',
          name: 'Innovate Station',
          components: [
          ]
        },
        {
          id: 'sbisa-dinner-the-kitchen',
          name: 'The Kitchen Station',
          components: [
            {
              id: 'sbisa-dinner-the-kitchen-1',
              name: 'BBQ Shredded Beef',
              station: 'The Kitchen Station',
              category: 'protein',
              macros: { calories: 370, protein: 29, carbs: 43, fats: 8 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-dinner-the-kitchen-2',
              name: 'steamed rice',
              station: 'The Kitchen Station',
              category: 'base',
              macros: { calories: 140, protein: 3, carbs: 31, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-the-kitchen-3',
              name: 'Blanched Green Beans',
              station: 'The Kitchen Station',
              category: 'side',
              macros: { calories: 25, protein: 1, carbs: 6, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-dinner-grill',
          name: 'Grill Station',
          components: [
            {
              id: 'sbisa-dinner-grill-1',
              name: 'Chili Cheese Dog',
              station: 'Grill Station',
              category: 'side',
              macros: { calories: 370, protein: 13, carbs: 28, fats: 23 },
              allergens: ["wheat", "soy"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-dinner-grill-2',
              name: '3/8" French Fries, Fried',
              station: 'Grill Station',
              category: 'side',
              macros: { calories: 150, protein: 1, carbs: 18, fats: 9 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-grill-3',
              name: 'Fried Onions',
              station: 'Grill Station',
              category: 'side',
              macros: { calories: 50, protein: 2, carbs: 9, fats: 0 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-grill-4',
              name: 'Dill Pickles',
              station: 'Grill Station',
              category: 'side',
              macros: { calories: 25, protein: 1, carbs: 4, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-grill-5',
              name: ' Diced Onions',
              station: 'Grill Station',
              category: 'side',
              macros: { calories: 15, protein: 0, carbs: 4, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-dinner-market-st.-deli',
          name: 'Market St. Deli Station',
          components: [
            {
              id: 'sbisa-dinner-market-st.-deli-1',
              name: '12" Tomato Basil Flour Tortilla',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 300, protein: 9, carbs: 47, fats: 9 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-market-st.-deli-2',
              name: 'Multigrain Bread',
              station: 'Market St. Deli Station',
              category: 'base',
              macros: { calories: 280, protein: 8, carbs: 52, fats: 4 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-market-st.-deli-3',
              name: 'Whole Wheat Bread',
              station: 'Market St. Deli Station',
              category: 'base',
              macros: { calories: 140, protein: 8, carbs: 26, fats: 1 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-market-st.-deli-4',
              name: 'White Bread',
              station: 'Market St. Deli Station',
              category: 'base',
              macros: { calories: 150, protein: 5, carbs: 29, fats: 1 },
              allergens: ["wheat", "soy"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-market-st.-deli-5',
              name: 'Thinly Sliced Deli Turkey Breast',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 90, protein: 11, carbs: 3, fats: 3 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-dinner-market-st.-deli-6',
              name: 'Hummus',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 110, protein: 3, carbs: 8, fats: 8 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-market-st.-deli-7',
              name: 'Egg Salad',
              station: 'Market St. Deli Station',
              category: 'protein',
              macros: { calories: 310, protein: 7, carbs: 1, fats: 30 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-market-st.-deli-8',
              name: 'Thinly Sliced Smoked Ham',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 110, protein: 15, carbs: 1, fats: 4 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-dinner-market-st.-deli-9',
              name: 'Cheddar Cheese Slice',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 60, protein: 3, carbs: 0, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-market-st.-deli-10',
              name: 'Sliced American Swiss Cheese',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 100, protein: 5, carbs: 1, fats: 9 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-market-st.-deli-11',
              name: 'Sliced Cucumber',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-market-st.-deli-12',
              name: 'Dill Pickle Slices',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-market-st.-deli-13',
              name: 'Lettuce Leaf',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-market-st.-deli-14',
              name: 'Sliced Tomatoes',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-market-st.-deli-15',
              name: 'Sliced Red Onion',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-market-st.-deli-16',
              name: 'House Fried Potato Chips ',
              station: 'Market St. Deli Station',
              category: 'base',
              macros: { calories: 90, protein: 1, carbs: 5, fats: 8 },
              allergens: ["soy"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-dinner-market-st.-deli-17',
              name: 'Sriracha Mayo',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 80, protein: 0, carbs: 0, fats: 9 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-market-st.-deli-18',
              name: 'Franks Red Hot Seasoning',
              station: 'Market St. Deli Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-dinner-pasta-&-co.',
          name: 'Pasta & Co. Station',
          components: [
            {
              id: 'sbisa-dinner-pasta-&-co.-1',
              name: 'Penne Pasta',
              station: 'Pasta & Co. Station',
              category: 'base',
              macros: { calories: 100, protein: 5, carbs: 19, fats: 1 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-pasta-&-co.-2',
              name: 'Marinara Sauce',
              station: 'Pasta & Co. Station',
              category: 'sauce',
              macros: { calories: 10, protein: 0, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-pasta-&-co.-3',
              name: 'Italian Sausage Crumbles',
              station: 'Pasta & Co. Station',
              category: 'protein',
              macros: { calories: 70, protein: 4, carbs: 0, fats: 5 },
              allergens: ["soy"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-dinner-pasta-&-co.-4',
              name: 'Baby Spinach',
              station: 'Pasta & Co. Station',
              category: 'vegetable',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-pasta-&-co.-5',
              name: 'Sliced Green Bell Pepper',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-pasta-&-co.-6',
              name: 'Julienne Yellow Onions',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 10, protein: 0, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-pasta-&-co.-7',
              name: 'Fresh Chopped Garlic',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 15, protein: 1, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-pasta-&-co.-8',
              name: 'Sliced Mushrooms',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 0, protein: 1, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-pasta-&-co.-9',
              name: 'Grated Parmesan Cheese',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 10, protein: 1, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-pasta-&-co.-10',
              name: 'Crushed Red Pepper',
              station: 'Pasta & Co. Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-dinner-hearthstone-ovens',
          name: 'Hearthstone Ovens Station',
          components: [
            {
              id: 'sbisa-dinner-hearthstone-ovens-1',
              name: 'Veggie Pizza',
              station: 'Hearthstone Ovens Station',
              category: 'protein',
              macros: { calories: 170, protein: 7, carbs: 26, fats: 4 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-hearthstone-ovens-2',
              name: 'Classic Cheese Pizza',
              station: 'Hearthstone Ovens Station',
              category: 'side',
              macros: { calories: 380, protein: 18, carbs: 54, fats: 11 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-hearthstone-ovens-3',
              name: 'Pepperoni Pizza',
              station: 'Hearthstone Ovens Station',
              category: 'side',
              macros: { calories: 480, protein: 22, carbs: 61, fats: 17 },
              allergens: ["wheat", "soy"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-dinner-hearthstone-ovens-4',
              name: 'Crushed Red Pepper',
              station: 'Hearthstone Ovens Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-hearthstone-ovens-5',
              name: 'Italian Seasoning Blend',
              station: 'Hearthstone Ovens Station',
              category: 'side',
              macros: { calories: 40, protein: 2, carbs: 8, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-hearthstone-ovens-6',
              name: 'Grated Parmesan Cheese',
              station: 'Hearthstone Ovens Station',
              category: 'side',
              macros: { calories: 25, protein: 2, carbs: 1, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-dinner-sweet-shoppe',
          name: 'Sweet Shoppe Station',
          components: [
          ]
        },
        {
          id: 'sbisa-dinner-freshworks',
          name: 'Freshworks Station',
          components: [
            {
              id: 'sbisa-dinner-freshworks-1',
              name: 'Chopped Romaine Lettuce',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 10, protein: 1, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-2',
              name: 'Spring Mix',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 5, protein: 1, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-3',
              name: 'Chopped Iceberg Lettuce',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 10, protein: 1, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-4',
              name: 'Sliced Cucumber',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-5',
              name: 'Steamed Broccoli',
              station: 'Freshworks Station',
              category: 'vegetable',
              macros: { calories: 60, protein: 5, carbs: 11, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-6',
              name: 'Grape Tomatoes',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-7',
              name: 'Dark Red Kidney Beans',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 35, protein: 2, carbs: 7, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-8',
              name: 'Shredded Carrots',
              station: 'Freshworks Station',
              category: 'vegetable',
              macros: { calories: 10, protein: 0, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-9',
              name: 'Sliced Red Onion',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-10',
              name: 'Croutons',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 70, protein: 2, carbs: 15, fats: 0 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-11',
              name: 'Roasted Sunflower Seeds',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 45, protein: 2, carbs: 2, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-12',
              name: 'Shredded Cheddar Cheese',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 30, protein: 2, carbs: 0, fats: 2 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-13',
              name: 'Ranch Dressing',
              station: 'Freshworks Station',
              category: 'sauce',
              macros: { calories: 110, protein: 1, carbs: 1, fats: 11 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-14',
              name: 'Caesar Dressing',
              station: 'Freshworks Station',
              category: 'sauce',
              macros: { calories: 150, protein: 1, carbs: 1, fats: 16 },
              allergens: ["fish"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-dinner-freshworks-15',
              name: 'Italian Dressing',
              station: 'Freshworks Station',
              category: 'sauce',
              macros: { calories: 110, protein: 0, carbs: 2, fats: 12 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-16',
              name: 'Dried Cranberries',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 30, protein: 0, carbs: 8, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-17',
              name: 'Honey Mustard Dressing',
              station: 'Freshworks Station',
              category: 'sauce',
              macros: { calories: 130, protein: 0, carbs: 7, fats: 12 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-18',
              name: 'Balsamic Vinaigrette Dressing',
              station: 'Freshworks Station',
              category: 'sauce',
              macros: { calories: 60, protein: 0, carbs: 5, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-19',
              name: 'Olive Oil',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 240, protein: 0, carbs: 0, fats: 27 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-20',
              name: 'Balsamic Vinegar',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 25, protein: 0, carbs: 5, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-21',
              name: 'Saltine Crackers',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 25, protein: 0, carbs: 5, fats: 0 },
              allergens: ["wheat", "soy"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-22',
              name: 'Sliced Mushrooms',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 0, protein: 1, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-23',
              name: 'Black Beans',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 40, protein: 3, carbs: 7, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-24',
              name: 'Cooked Quinoa',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 60, protein: 2, carbs: 10, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-25',
              name: 'Cubed Tofu',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 50, protein: 5, carbs: 1, fats: 3 },
              allergens: ["soy"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-26',
              name: 'Sliced Red Bell Pepper',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-27',
              name: 'Sliced Green Bell Pepper',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-dinner-freshworks-28',
              name: 'Diced Ham',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 45, protein: 5, carbs: 2, fats: 1 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-dinner-freshworks-29',
              name: 'Sliced Jalapeno Pepper',
              station: 'Freshworks Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-dinner-nook',
          name: 'Nook Station',
          components: [
          ]
        }
      ]
    }
  },
  // DINING HALL: Duncan
  {
    id: 'dh-1',
    name: 'Duncan Dining Hall',
    location: 'Duncan',
    isDiningHall: true,
    paymentCosts: {
      mealSwipe: 1,
      diningDollars: 12,
      realDollars: 12
    },
    stations: {
      breakfast: [
        {
          id: 'sbisa-breakfast-nook',
          name: 'Nook Station',
          components: [
            {
              id: 'sbisa-breakfast-nook-1',
              name: 'Egg, Cheese and Vegetable Frittata',
              station: 'Nook Station',
              category: 'protein',
              macros: { calories: 180, protein: 13, carbs: 4, fats: 13 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-nook-2',
              name: 'Bacon',
              station: 'Nook Station',
              category: 'protein',
              macros: { calories: 45, protein: 3, carbs: 0, fats: 3 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-nook-3',
              name: 'Fried Hash Brown Patty',
              station: 'Nook Station',
              category: 'side',
              macros: { calories: 150, protein: 1, carbs: 12, fats: 11 },
              allergens: [],
              dietaryPreferences: []
            }
          ]
        },
        {
          id: 'sbisa-breakfast-the-kitchen',
          name: 'THE KITCHEN Station',
          components: [
            {
              id: 'sbisa-breakfast-the-kitchen-1',
              name: 'Crunchy French Toast',
              station: 'THE KITCHEN Station',
              category: 'base',
              macros: { calories: 230, protein: 12, carbs: 33, fats: 6 },
              allergens: ["eggs", "wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-the-kitchen-2',
              name: 'Fried Hash Brown Patty',
              station: 'THE KITCHEN Station',
              category: 'side',
              macros: { calories: 150, protein: 1, carbs: 12, fats: 11 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-the-kitchen-3',
              name: 'Bacon',
              station: 'THE KITCHEN Station',
              category: 'protein',
              macros: { calories: 45, protein: 3, carbs: 0, fats: 3 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-the-kitchen-4',
              name: 'Strawberry Compote',
              station: 'THE KITCHEN Station',
              category: 'side',
              macros: { calories: 45, protein: 0, carbs: 11, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-breakfast-homestyle',
          name: 'HOMESTYLE Station',
          components: [
            {
              id: 'sbisa-breakfast-homestyle-1',
              name: 'Sausage, Egg & Cheese',
              station: 'HOMESTYLE Station',
              category: 'protein',
              macros: { calories: 640, protein: 22, carbs: 29, fats: 49 },
              allergens: ["soy", "eggs", "wheat"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-homestyle-2',
              name: 'Fried Hash Brown Patty',
              station: 'HOMESTYLE Station',
              category: 'side',
              macros: { calories: 150, protein: 1, carbs: 12, fats: 11 },
              allergens: [],
              dietaryPreferences: []
            }
          ]
        },
        {
          id: 'sbisa-breakfast-deli',
          name: 'Deli Station',
          components: [
            {
              id: 'sbisa-breakfast-deli-1',
              name: 'Plain Bagel',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 290, protein: 10, carbs: 59, fats: 0 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-deli-2',
              name: 'Cream Cheese',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 50, protein: 1, carbs: 1, fats: 5 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-deli-3',
              name: 'Strawberry Cream Cheese',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 90, protein: 1, carbs: 7, fats: 7 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-deli-4',
              name: 'Whipped Butter',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 100, protein: 0, carbs: 0, fats: 12 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-deli-5',
              name: 'Creamy Peanut Butter',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 50, protein: 0, carbs: 13, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-breakfast-deli-6',
              name: 'Grape Jelly',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 50, protein: 0, carbs: 13, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-breakfast-deli-7',
              name: 'Guacamole',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 100, protein: 1, carbs: 6, fats: 9 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-breakfast-deli-8',
              name: 'Hummus',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 30, protein: 1, carbs: 4, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-breakfast-deli-9',
              name: 'Baby Spinach',
              station: 'Deli Station',
              category: 'vegetable',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-breakfast-deli-10',
              name: 'Sliced Red Onion',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 10, protein: 0, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-breakfast-deli-11',
              name: 'Sliced Tomato',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-breakfast-deli-12',
              name: 'Balsamic Glaze',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 15, protein: 0, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-breakfast-deli-13',
              name: 'FIT Tuna Salad',
              station: 'Deli Station',
              category: 'vegetable',
              macros: { calories: 100, protein: 17, carbs: 2, fats: 3 },
              allergens: ["eggs", "fish"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-deli-14',
              name: 'Crunch Berry Acai',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 440, protein: 4, carbs: 75, fats: 11 },
              allergens: ["soy", "wheat"],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-breakfast-innovate',
          name: 'Innovate Station',
          components: [
            {
              id: 'sbisa-breakfast-innovate-1',
              name: 'Curried Tofu Scramble',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 220, protein: 20, carbs: 9, fats: 12 },
              allergens: ["soy"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-breakfast-innovate-2',
              name: 'Beyond Chorizo',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 70, protein: 6, carbs: 2, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-breakfast-innovate-3',
              name: '6" Flour Tortilla',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 90, protein: 2, carbs: 14, fats: 2 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-breakfast-innovate-4',
              name: 'Mushrooms, Tomatoes and Spinach',
              station: 'Innovate Station',
              category: 'vegetable',
              macros: { calories: 50, protein: 2, carbs: 5, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-breakfast-salad',
          name: 'SALAD Station',
          components: [
            {
              id: 'sbisa-breakfast-salad-1',
              name: 'Fresh Fruit Salad',
              station: 'SALAD Station',
              category: 'vegetable',
              macros: { calories: 30, protein: 0, carbs: 8, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-breakfast-salad-2',
              name: 'Low Fat Vanilla Yogurt',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 110, protein: 4, carbs: 22, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-salad-3',
              name: 'Low Fat Strawberry Yogurt',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 70, protein: 2, carbs: 15, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-salad-4',
              name: 'Cottage Cheese',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 80, protein: 14, carbs: 3, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-salad-5',
              name: 'Hard Boiled Egg',
              station: 'SALAD Station',
              category: 'protein',
              macros: { calories: 70, protein: 6, carbs: 0, fats: 4 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-salad-6',
              name: 'Low Fat Almond Granola',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 150, protein: 3, carbs: 33, fats: 2 },
              allergens: ["treeNuts", "wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-salad-7',
              name: 'Creamy Peanut Butter',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 110, protein: 4, carbs: 3, fats: 9 },
              allergens: ["peanuts"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-breakfast-salad-8',
              name: 'Grape Jelly',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 50, protein: 0, carbs: 13, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-breakfast-salad-9',
              name: 'Fuji Apple',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 90, protein: 0, carbs: 21, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-breakfast-salad-10',
              name: 'Granny Smith Apple',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 70, protein: 0, carbs: 18, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-breakfast-salad-11',
              name: 'Banana',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 110, protein: 1, carbs: 27, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-breakfast-salad-12',
              name: 'Belgian Waffles',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 180, protein: 3, carbs: 27, fats: 6 },
              allergens: ["soy", "eggs", "wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-salad-13',
              name: 'White Bread',
              station: 'SALAD Station',
              category: 'base',
              macros: { calories: 100, protein: 3, carbs: 20, fats: 1 },
              allergens: ["soy", "wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-salad-14',
              name: 'Wheat Bread',
              station: 'SALAD Station',
              category: 'base',
              macros: { calories: 70, protein: 2, carbs: 14, fats: 1 },
              allergens: ["soy", "wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-salad-15',
              name: 'Plain Bagel',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 290, protein: 10, carbs: 59, fats: 0 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-salad-16',
              name: 'Oatmeal',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 110, protein: 4, carbs: 19, fats: 2 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-breakfast-salad-side-station',
          name: 'Salad Side Station Station',
          components: [
            {
              id: 'sbisa-breakfast-salad-side-station-1',
              name: 'Buttermilk Biscuit',
              station: 'Salad Side Station Station',
              category: 'base',
              macros: { calories: 220, protein: 5, carbs: 32, fats: 8 },
              allergens: ["eggs", "wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-salad-side-station-2',
              name: 'Country Style Gravy',
              station: 'Salad Side Station Station',
              category: 'sauce',
              macros: { calories: 35, protein: 1, carbs: 6, fats: 1 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-breakfast-salad-side-station-3',
              name: 'Country Sausage Gravy',
              station: 'Salad Side Station Station',
              category: 'protein',
              macros: { calories: 35, protein: 1, carbs: 3, fats: 2 },
              allergens: ["wheat"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-salad-side-station-4',
              name: 'Brown Gravy',
              station: 'Salad Side Station Station',
              category: 'sauce',
              macros: { calories: 20, protein: 0, carbs: 4, fats: 0 },
              allergens: ["soy", "wheat"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-breakfast-salad-side-station-5',
              name: 'Pork Sausage Patty',
              station: 'Salad Side Station Station',
              category: 'protein',
              macros: { calories: 90, protein: 4, carbs: 0, fats: 8 },
              allergens: [],
              dietaryPreferences: []
            }
          ]
        }
      ],
      lunch: [
        {
          id: 'sbisa-lunch-nook',
          name: 'Nook Station',
          components: [
            {
              id: 'sbisa-lunch-nook-1',
              name: 'Orange Chicken',
              station: 'Nook Station',
              category: 'protein',
              macros: { calories: 280, protein: 13, carbs: 31, fats: 12 },
              allergens: ["soy", "wheat"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-nook-2',
              name: 'Vegetable Fried Rice',
              station: 'Nook Station',
              category: 'base',
              macros: { calories: 150, protein: 4, carbs: 21, fats: 6 },
              allergens: ["eggs", "soy"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-nook-3',
              name: 'Chicken Lemongrass Potsticker',
              station: 'Nook Station',
              category: 'protein',
              macros: { calories: 210, protein: 8, carbs: 21, fats: 10 },
              allergens: ["fish", "wheat"],
              dietaryPreferences: []
            }
          ]
        },
        {
          id: 'sbisa-lunch-the-kitchen',
          name: 'THE KITCHEN Station',
          components: [
            {
              id: 'sbisa-lunch-the-kitchen-1',
              name: 'Seasoned Grilled Chicken',
              station: 'THE KITCHEN Station',
              category: 'protein',
              macros: { calories: 110, protein: 16, carbs: 0, fats: 5 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-the-kitchen-2',
              name: 'Beef Patty',
              station: 'THE KITCHEN Station',
              category: 'protein',
              macros: { calories: 240, protein: 22, carbs: 0, fats: 16 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-the-kitchen-3',
              name: 'Roasted Sweet Potatoes',
              station: 'THE KITCHEN Station',
              category: 'base',
              macros: { calories: 160, protein: 3, carbs: 28, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-the-kitchen-4',
              name: 'Baked Potatoes',
              station: 'THE KITCHEN Station',
              category: 'base',
              macros: { calories: 360, protein: 12, carbs: 66, fats: 6 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-the-kitchen-5',
              name: 'Fresh Green Beans',
              station: 'THE KITCHEN Station',
              category: 'side',
              macros: { calories: 35, protein: 1, carbs: 5, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-homestyle',
          name: 'HOMESTYLE Station',
          components: [
            {
              id: 'sbisa-lunch-homestyle-1',
              name: 'Chicken Fajita Mixture',
              station: 'HOMESTYLE Station',
              category: 'protein',
              macros: { calories: 290, protein: 24, carbs: 7, fats: 19 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-homestyle-2',
              name: 'Lime White Rice',
              station: 'HOMESTYLE Station',
              category: 'base',
              macros: { calories: 60, protein: 1, carbs: 12, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-homestyle-3',
              name: 'Refried Pinto Beans',
              station: 'HOMESTYLE Station',
              category: 'side',
              macros: { calories: 100, protein: 4, carbs: 15, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-carving-station',
          name: 'Carving Station Station',
          components: [
            {
              id: 'sbisa-lunch-carving-station-1',
              name: 'Carved Top Round Beef',
              station: 'Carving Station Station',
              category: 'protein',
              macros: { calories: 340, protein: 47, carbs: 2, fats: 14 },
              allergens: ["fish", "soy"],
              dietaryPreferences: []
            }
          ]
        },
        {
          id: 'sbisa-lunch-deli',
          name: 'Deli Station',
          components: [
            {
              id: 'sbisa-lunch-deli-1',
              name: 'Multigrain Bread',
              station: 'Deli Station',
              category: 'base',
              macros: { calories: 280, protein: 8, carbs: 52, fats: 4 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-deli-2',
              name: 'Whole Wheat Bread',
              station: 'Deli Station',
              category: 'base',
              macros: { calories: 140, protein: 8, carbs: 26, fats: 1 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-deli-3',
              name: 'White Bread',
              station: 'Deli Station',
              category: 'base',
              macros: { calories: 150, protein: 5, carbs: 29, fats: 1 },
              allergens: ["soy", "wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-deli-4',
              name: 'Thinly Sliced Deli Turkey Breast',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 90, protein: 11, carbs: 3, fats: 3 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-deli-5',
              name: 'Thinly Sliced Smoked Ham',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 110, protein: 15, carbs: 1, fats: 4 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-deli-6',
              name: 'Egg Salad',
              station: 'Deli Station',
              category: 'protein',
              macros: { calories: 310, protein: 7, carbs: 1, fats: 30 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-deli-7',
              name: 'Cheddar Cheese Slice',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 60, protein: 3, carbs: 0, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-deli-8',
              name: 'Sliced American Swiss Cheese',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 100, protein: 5, carbs: 1, fats: 9 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-deli-9',
              name: 'Sliced Cucumber',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-deli-10',
              name: 'Dill Pickle Slices',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-deli-11',
              name: 'Lettuce Leaf',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-deli-12',
              name: 'Sliced Tomatoes',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-deli-13',
              name: 'Sliced Red Onion',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 5, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-deli-14',
              name: 'House Fried Potato Chips ',
              station: 'Deli Station',
              category: 'base',
              macros: { calories: 90, protein: 1, carbs: 5, fats: 8 },
              allergens: ["soy"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-deli-15',
              name: 'Sriracha Mayo',
              station: 'Deli Station',
              category: 'side',
              macros: { calories: 80, protein: 0, carbs: 0, fats: 9 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-innovate',
          name: 'Innovate Station',
          components: [
            {
              id: 'sbisa-lunch-innovate-1',
              name: 'Steamed Rice',
              station: 'Innovate Station',
              category: 'base',
              macros: { calories: 280, protein: 6, carbs: 61, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-2',
              name: 'Grilled Chicken',
              station: 'Innovate Station',
              category: 'protein',
              macros: { calories: 120, protein: 23, carbs: 0, fats: 3 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-innovate-3',
              name: 'Shredded Green Cabbage',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 15, protein: 1, carbs: 4, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-4',
              name: ' Diced Onions',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 15, protein: 0, carbs: 4, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-5',
              name: 'Shredded Carrots',
              station: 'Innovate Station',
              category: 'vegetable',
              macros: { calories: 10, protein: 0, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-6',
              name: 'Sliced Green Bell Pepper',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-7',
              name: 'Sliced Mushrooms',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 0, protein: 1, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-8',
              name: 'Julienne Zucchini',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 30, protein: 1, carbs: 3, fats: 2 },
              allergens: ["soy"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-9',
              name: 'Green Peas',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 30, protein: 2, carbs: 6, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-10',
              name: 'Garlic Ginger Aromatics',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 20, protein: 1, carbs: 3, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-innovate-11',
              name: 'Sweet and Sour Sauce',
              station: 'Innovate Station',
              category: 'sauce',
              macros: { calories: 70, protein: 0, carbs: 17, fats: 0 },
              allergens: ["fish", "soy"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-innovate-12',
              name: 'Zesty Orange Sauce',
              station: 'Innovate Station',
              category: 'sauce',
              macros: { calories: 70, protein: 0, carbs: 17, fats: 0 },
              allergens: ["soy", "wheat"],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-salad',
          name: 'SALAD Station',
          components: [
            {
              id: 'sbisa-lunch-salad-1',
              name: 'Chopped Romaine Lettuce',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 10, protein: 1, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-salad-2',
              name: 'Green Salad',
              station: 'SALAD Station',
              category: 'vegetable',
              macros: { calories: 5, protein: 1, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-salad-3',
              name: 'Sliced Cucumber',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-salad-4',
              name: 'Shredded Carrots',
              station: 'SALAD Station',
              category: 'vegetable',
              macros: { calories: 10, protein: 0, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-salad-5',
              name: 'Sliced Red Onion',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 10, protein: 0, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-salad-6',
              name: 'Sliced Green Bell Pepper',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-salad-7',
              name: 'Garbonzo Beans',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 190, protein: 10, carbs: 31, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-salad-8',
              name: 'Sliced Tofu',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 20, protein: 2, carbs: 1, fats: 1 },
              allergens: ["soy"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-salad-9',
              name: 'Cheddar Cheese',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 60, protein: 3, carbs: 0, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-salad-10',
              name: 'Grilled Chicken',
              station: 'SALAD Station',
              category: 'protein',
              macros: { calories: 120, protein: 23, carbs: 0, fats: 3 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-salad-11',
              name: 'Croutons, Seasoned, Italian, 0.5 oz',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 60, protein: 1, carbs: 9, fats: 2 },
              allergens: ["soy", "wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-salad-12',
              name: 'Ranch Dressing',
              station: 'SALAD Station',
              category: 'sauce',
              macros: { calories: 140, protein: 0, carbs: 1, fats: 15 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-salad-13',
              name: 'Golden Italian Dressing',
              station: 'SALAD Station',
              category: 'sauce',
              macros: { calories: 110, protein: 0, carbs: 2, fats: 12 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-salad-14',
              name: 'Salad Dressing, Raspberry Vinaigrette, Fat Free, Kraft, 1.5 oz',
              station: 'SALAD Station',
              category: 'vegetable',
              macros: { calories: 40, protein: 0, carbs: 9, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-salad-15',
              name: 'Balsamic Vinaigrette Dressing',
              station: 'SALAD Station',
              category: 'sauce',
              macros: { calories: 60, protein: 0, carbs: 5, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-salad-16',
              name: 'Caesar Dressing',
              station: 'SALAD Station',
              category: 'sauce',
              macros: { calories: 150, protein: 1, carbs: 1, fats: 16 },
              allergens: ["fish"],
              dietaryPreferences: []
            }
          ]
        },
        {
          id: 'sbisa-lunch-composed-salads',
          name: 'Composed Salads Station',
          components: [
            {
              id: 'sbisa-lunch-composed-salads-1',
              name: 'Pasta Salad',
              station: 'Composed Salads Station',
              category: 'base',
              macros: { calories: 120, protein: 4, carbs: 24, fats: 0 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-composed-salads-2',
              name: 'Three Bean Salad',
              station: 'Composed Salads Station',
              category: 'vegetable',
              macros: { calories: 120, protein: 3, carbs: 20, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-composed-salads-3',
              name: 'Mixed Melon',
              station: 'Composed Salads Station',
              category: 'side',
              macros: { calories: 30, protein: 1, carbs: 8, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-composed-salads-4',
              name: 'Caesar Salad',
              station: 'Composed Salads Station',
              category: 'vegetable',
              macros: { calories: 320, protein: 12, carbs: 14, fats: 25 },
              allergens: ["eggs", "wheat"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-lunch-composed-salads-5',
              name: 'Tomato Cucumber Salad',
              station: 'Composed Salads Station',
              category: 'vegetable',
              macros: { calories: 45, protein: 1, carbs: 4, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-composed-salads-6',
              name: 'Moroccan Chickpea Salad',
              station: 'Composed Salads Station',
              category: 'vegetable',
              macros: { calories: 90, protein: 4, carbs: 16, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-salad-side-station',
          name: 'Salad Side Station Station',
          components: [
            {
              id: 'sbisa-lunch-salad-side-station-1',
              name: 'Penne Pasta',
              station: 'Salad Side Station Station',
              category: 'base',
              macros: { calories: 90, protein: 3, carbs: 17, fats: 0 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-lunch-salad-side-station-2',
              name: 'Marinara Sauce',
              station: 'Salad Side Station Station',
              category: 'sauce',
              macros: { calories: 70, protein: 2, carbs: 14, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegan", "vegetarian"]
            },
            {
              id: 'sbisa-lunch-salad-side-station-3',
              name: 'Alfredo Sauce',
              station: 'Salad Side Station Station',
              category: 'sauce',
              macros: { calories: 210, protein: 7, carbs: 4, fats: 19 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-lunch-l-station',
          name: 'L station Station',
          components: [
          ]
        }
      ],
      dinner: [
        {
          id: 'sbisa-dinner-march-in',
          name: 'March-In Station',
          components: [
          ]
        },
        {
          id: 'sbisa-dinner-nook',
          name: 'Nook Station',
          components: [
            {
              id: 'sbisa-dinner-nook-1',
              name: 'Fried Beef Steak',
              station: 'Nook Station',
              category: 'protein',
              macros: { calories: 290, protein: 11, carbs: 2, fats: 16 },
              allergens: ["wheat"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-dinner-nook-2',
              name: 'Garlic Mashed Potatoes					',
              station: 'Nook Station',
              category: 'base',
              macros: { calories: 180, protein: 3, carbs: 30, fats: 5 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-nook-3',
              name: 'Roasted Carrots ',
              station: 'Nook Station',
              category: 'vegetable',
              macros: { calories: 80, protein: 1, carbs: 12, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-dinner-nook-4',
              name: 'Country Gravy',
              station: 'Nook Station',
              category: 'sauce',
              macros: { calories: 35, protein: 1, carbs: 3, fats: 2 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-dinner-the-kitchen',
          name: 'THE KITCHEN Station',
          components: [
            {
              id: 'sbisa-dinner-the-kitchen-1',
              name: 'Chicken Piccata',
              station: 'THE KITCHEN Station',
              category: 'protein',
              macros: { calories: 390, protein: 34, carbs: 10, fats: 23 },
              allergens: ["soy", "wheat"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-dinner-the-kitchen-2',
              name: 'White Rice',
              station: 'THE KITCHEN Station',
              category: 'base',
              macros: { calories: 120, protein: 2, carbs: 23, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-dinner-the-kitchen-3',
              name: 'Fresh Green Beans',
              station: 'THE KITCHEN Station',
              category: 'side',
              macros: { calories: 35, protein: 1, carbs: 5, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            }
          ]
        },
        {
          id: 'sbisa-dinner-homestyle',
          name: 'HOMESTYLE Station',
          components: [
          ]
        },
        {
          id: 'sbisa-dinner-deli',
          name: 'Deli Station',
          components: [
          ]
        },
        {
          id: 'sbisa-dinner-innovate',
          name: 'Innovate Station',
          components: [
            {
              id: 'sbisa-dinner-innovate-1',
              name: 'Chicken Tinga Nachos',
              station: 'Innovate Station',
              category: 'protein',
              macros: { calories: 1160, protein: 63, carbs: 97, fats: 59 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-dinner-innovate-2',
              name: 'Cheese Sauce',
              station: 'Innovate Station',
              category: 'sauce',
              macros: { calories: 40, protein: 1, carbs: 3, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-innovate-3',
              name: 'Sour Cream',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 30, protein: 0, carbs: 1, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-innovate-4',
              name: 'Fresh Cilantro',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-dinner-innovate-5',
              name: 'Sliced Jalapeno',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 10, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-dinner-innovate-6',
              name: 'Pico de Gallo',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-dinner-innovate-7',
              name: 'Pickled red onions',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 10, protein: 0, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-innovate-8',
              name: 'Limes',
              station: 'Innovate Station',
              category: 'side',
              macros: { calories: 0, protein: 0, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            }
          ]
        },
        {
          id: 'sbisa-dinner-salad',
          name: 'SALAD Station',
          components: [
            {
              id: 'sbisa-dinner-salad-1',
              name: 'Chopped Romaine Lettuce',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 10, protein: 1, carbs: 2, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-dinner-salad-2',
              name: 'Green Salad',
              station: 'SALAD Station',
              category: 'vegetable',
              macros: { calories: 5, protein: 1, carbs: 1, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-dinner-salad-3',
              name: 'Red Pepper Sticks',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 20, protein: 1, carbs: 4, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-dinner-salad-4',
              name: 'Green Pepper Sticks',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 15, protein: 1, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-dinner-salad-5',
              name: 'Shredded Carrots',
              station: 'SALAD Station',
              category: 'vegetable',
              macros: { calories: 10, protein: 0, carbs: 3, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-dinner-salad-6',
              name: 'Garbonzo Beans',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 190, protein: 10, carbs: 31, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-dinner-salad-7',
              name: 'Shredded Monterey Jack Cheese',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 25, protein: 2, carbs: 0, fats: 2 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-salad-8',
              name: 'Cheddar Cheese',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 60, protein: 3, carbs: 0, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-salad-9',
              name: 'Shredded Parmesan Cheese',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 20, protein: 2, carbs: 0, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-salad-10',
              name: 'Diced Ham',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 45, protein: 5, carbs: 2, fats: 1 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-dinner-salad-11',
              name: 'Diced Turkey Breast',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 30, protein: 6, carbs: 1, fats: 2 },
              allergens: [],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-dinner-salad-12',
              name: 'Croutons, Seasoned, Italian, 0.5 oz',
              station: 'SALAD Station',
              category: 'side',
              macros: { calories: 60, protein: 1, carbs: 9, fats: 2 },
              allergens: ["soy", "wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-salad-13',
              name: 'Ranch Dressing',
              station: 'SALAD Station',
              category: 'sauce',
              macros: { calories: 140, protein: 0, carbs: 1, fats: 15 },
              allergens: ["eggs"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-salad-14',
              name: 'Golden Italian Dressing',
              station: 'SALAD Station',
              category: 'sauce',
              macros: { calories: 110, protein: 0, carbs: 2, fats: 12 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-dinner-salad-15',
              name: 'Salad Dressing, Raspberry Vinaigrette, Fat Free, Kraft, 1.5 oz',
              station: 'SALAD Station',
              category: 'vegetable',
              macros: { calories: 40, protein: 0, carbs: 9, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-dinner-salad-16',
              name: 'Balsamic Vinaigrette Dressing',
              station: 'SALAD Station',
              category: 'sauce',
              macros: { calories: 60, protein: 0, carbs: 5, fats: 4 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-dinner-salad-17',
              name: 'Caesar Dressing',
              station: 'SALAD Station',
              category: 'sauce',
              macros: { calories: 150, protein: 1, carbs: 1, fats: 16 },
              allergens: ["fish"],
              dietaryPreferences: []
            }
          ]
        },
        {
          id: 'sbisa-dinner-composed-salads',
          name: 'Composed Salads Station',
          components: [
            {
              id: 'sbisa-dinner-composed-salads-1',
              name: 'Pasta Salad',
              station: 'Composed Salads Station',
              category: 'base',
              macros: { calories: 120, protein: 4, carbs: 24, fats: 0 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-dinner-composed-salads-2',
              name: 'Three Bean Salad',
              station: 'Composed Salads Station',
              category: 'vegetable',
              macros: { calories: 120, protein: 3, carbs: 20, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-dinner-composed-salads-3',
              name: 'Mixed Melon',
              station: 'Composed Salads Station',
              category: 'side',
              macros: { calories: 30, protein: 1, carbs: 8, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-dinner-composed-salads-4',
              name: 'Caesar Salad',
              station: 'Composed Salads Station',
              category: 'vegetable',
              macros: { calories: 320, protein: 12, carbs: 14, fats: 25 },
              allergens: ["eggs", "wheat"],
              dietaryPreferences: []
            },
            {
              id: 'sbisa-dinner-composed-salads-5',
              name: 'Tomato Cucumber Salad',
              station: 'Composed Salads Station',
              category: 'vegetable',
              macros: { calories: 45, protein: 1, carbs: 4, fats: 3 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-composed-salads-6',
              name: 'Moroccan Chickpea Salad',
              station: 'Composed Salads Station',
              category: 'vegetable',
              macros: { calories: 90, protein: 4, carbs: 16, fats: 1 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            }
          ]
        },
        {
          id: 'sbisa-dinner-salad-side-station',
          name: 'Salad Side Station Station',
          components: [
            {
              id: 'sbisa-dinner-salad-side-station-1',
              name: 'Penne Pasta',
              station: 'Salad Side Station Station',
              category: 'base',
              macros: { calories: 90, protein: 3, carbs: 17, fats: 0 },
              allergens: ["wheat"],
              dietaryPreferences: ["vegetarian"]
            },
            {
              id: 'sbisa-dinner-salad-side-station-2',
              name: 'Marinara Sauce',
              station: 'Salad Side Station Station',
              category: 'sauce',
              macros: { calories: 70, protein: 2, carbs: 14, fats: 0 },
              allergens: [],
              dietaryPreferences: ["vegetarian", "vegan"]
            },
            {
              id: 'sbisa-dinner-salad-side-station-3',
              name: 'Alfredo Sauce',
              station: 'Salad Side Station Station',
              category: 'sauce',
              macros: { calories: 210, protein: 7, carbs: 4, fats: 19 },
              allergens: [],
              dietaryPreferences: ["vegetarian"]
            }
          ]
        },
        {
          id: 'sbisa-dinner-l-station',
          name: 'L station Station',
          components: [
          ]
        }
      ]
    }
  },
  // RESTAURANT: Chick-fil-A
{
  id: 'rest-cfa',
  name: 'Chick-fil-A',
  location: 'Sbisa',
  isDiningHall: false,
  dishes: [
    // ENTREES
    {
      id: 'cfa-entree-1',
      name: 'Original Chick-fil-A® Chicken Sandwich',
      description: 'A classic breaded chicken fillet on a bun',
      macros: { calories: 320, protein: 32, carbs: 41, fats: 6 },
      allergens: ['wheat'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 8.75,
        realDollars: 8.75,
        maroonMeal: 1
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-entree-2',
      name: 'Spicy Chicken Sandwich',
      description: 'A spicy version of the original sandwich',
      macros: { calories: 350, protein: 32, carbs: 41, fats: 9 },
      allergens: ['wheat'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 8.75,
        realDollars: 8.75,
        maroonMeal: 1
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-entree-3',
      name: 'Grilled Chicken Sandwich',
      description: 'A grilled chicken fillet on a bun',
      macros: { calories: 320, protein: 37, carbs: 41, fats: 6 },
      allergens: ['wheat'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 9.25,
        realDollars: 9.25,
        maroonMeal: 1
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-entree-4',
      name: 'Chick-fil-A® Nuggets',
      description: 'Breaded and pressure-cooked chicken nuggets, available in different quantities',
      macros: { calories: 260, protein: 26, carbs: 12, fats: 12 },
      allergens: ['wheat'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 7.95,
        realDollars: 7.95,
        maroonMeal: 1
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-entree-5',
      name: 'Chick-n-Strips®',
      description: 'Breaded and pressure-cooked chicken strips',
      macros: { calories: 400, protein: 40, carbs: 15, fats: 18 },
      allergens: ['wheat'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 9.45,
        realDollars: 9.45
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-entree-6',
      name: 'Chick-fil-A Cool Wrap®',
      description: 'Grilled chicken rolled in a flaxseed flour flatbread with lettuce and cheese',
      macros: { calories: 350, protein: 28, carbs: 35, fats: 12 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 9.35,
        realDollars: 9.35
      },
      mealTimes: ['lunch', 'dinner']
    },
    // SALADS
    {
      id: 'cfa-salad-1',
      name: 'Cobb Salad',
      description: 'Chilled grilled chicken, bacon, egg, cheddar cheese, avocado, and vegetables on mixed greens',
      macros: { calories: 540, protein: 44, carbs: 15, fats: 32 },
      allergens: ['eggs', 'dairy'],
      dietaryPreferences: ['glutenFree'],
      paymentCosts: {
        diningDollars: 10.95,
        realDollars: 10.95
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-salad-2',
      name: 'Spicy Southwest Salad',
      description: 'Spicy grilled chicken with black beans, corn, poblano peppers, and tortilla strips on mixed greens',
      macros: { calories: 480, protein: 38, carbs: 32, fats: 20 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 10.95,
        realDollars: 10.95
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-salad-3',
      name: 'Market Salad',
      description: 'Grilled chicken with mixed greens, corn, carrots, cucumbers, and tomatoes',
      macros: { calories: 230, protein: 32, carbs: 15, fats: 6 },
      allergens: [],
      dietaryPreferences: ['vegetarian', 'glutenFree'],
      paymentCosts: {
        diningDollars: 9.95,
        realDollars: 9.95
      },
      mealTimes: ['lunch', 'dinner']
    },
    // BREAKFAST
    {
      id: 'cfa-bfast-1',
      name: 'Sausage Biscuit',
      description: 'Sausage patty on a warm biscuit',
      macros: { calories: 420, protein: 14, carbs: 41, fats: 21 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 5.50,
        realDollars: 5.50
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'cfa-bfast-2',
      name: 'Chicken Biscuit',
      description: 'Breaded chicken fillet on a warm biscuit',
      macros: { calories: 420, protein: 28, carbs: 41, fats: 15 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 6.50,
        realDollars: 6.50
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'cfa-bfast-3',
      name: 'Spicy Chicken Biscuit',
      description: 'Spicy breaded chicken fillet on a warm biscuit',
      macros: { calories: 450, protein: 28, carbs: 41, fats: 18 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 7.00,
        realDollars: 7.00
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'cfa-bfast-4',
      name: 'Yogurt Parfait',
      description: 'Yogurt with granola and berries',
      macros: { calories: 190, protein: 11, carbs: 28, fats: 2 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian', 'glutenFree'],
      paymentCosts: {
        diningDollars: 8.50,
        realDollars: 8.50
      },
      mealTimes: ['breakfast']
    },
    // SIDES
    {
      id: 'cfa-side-1',
      name: 'Waffle Potato Fries',
      description: 'Crinkle-cut waffle-shaped fried potatoes',
      macros: { calories: 400, protein: 5, carbs: 48, fats: 21 },
      allergens: [],
      dietaryPreferences: ['vegetarian', 'glutenFree', 'vegan'],
      paymentCosts: {
        diningDollars: 3.75,
        realDollars: 3.75
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-side-2',
      name: 'Mac & Cheese',
      description: 'Creamy mac and cheese made with real cheddar cheese',
      macros: { calories: 440, protein: 19, carbs: 52, fats: 18 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 4.25,
        realDollars: 4.25
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-side-3',
      name: 'Side Salad',
      description: 'Mixed greens with vegetables',
      macros: { calories: 80, protein: 2, carbs: 12, fats: 3 },
      allergens: [],
      dietaryPreferences: ['vegetarian', 'glutenFree', 'vegan'],
      paymentCosts: {
        diningDollars: 3.95,
        realDollars: 3.95
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-side-4',
      name: 'Fruit Cup',
      description: 'Fresh seasonal fruit selection',
      macros: { calories: 80, protein: 1, carbs: 20, fats: 0 },
      allergens: [],
      dietaryPreferences: ['vegetarian', 'glutenFree', 'vegan'],
      paymentCosts: {
        diningDollars: 5.75,
        realDollars: 5.75
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'cfa-side-5',
      name: 'Kale Crunch Side',
      description: 'Kale salad with shredded kale, green cabbage, and crispy chickpeas',
      macros: { calories: 170, protein: 4, carbs: 20, fats: 8 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian', 'glutenFree'],
      paymentCosts: {
        diningDollars: 5.95,
        realDollars: 5.95
      },
      mealTimes: ['lunch', 'dinner']
    },
    // SOUPS
    {
      id: 'cfa-soup-1',
      name: 'Chicken Noodle Soup',
      description: 'Hearty chicken noodle soup',
      macros: { calories: 170, protein: 16, carbs: 18, fats: 3 },
      allergens: ['wheat'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 4.95,
        realDollars: 4.95
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-soup-2',
      name: 'Chicken Tortilla Soup',
      description: 'Spicy chicken tortilla soup with crispy tortilla strips',
      macros: { calories: 240, protein: 18, carbs: 24, fats: 8 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 4.95,
        realDollars: 4.95
      },
      mealTimes: ['lunch', 'dinner']
    }
  ]
},
{
  id: 'rest-cfa',
  name: 'Chick-fil-A',
  location: 'MSC',
  isDiningHall: false,
  dishes: [
    // ENTREES
    {
      id: 'cfa-entree-1',
      name: 'Original Chick-fil-A® Chicken Sandwich',
      description: 'A classic breaded chicken fillet on a bun',
      macros: { calories: 320, protein: 32, carbs: 41, fats: 6 },
      allergens: ['wheat'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 8.75,
        realDollars: 8.75,
        maroonMeal: 1
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-entree-2',
      name: 'Spicy Chicken Sandwich',
      description: 'A spicy version of the original sandwich',
      macros: { calories: 350, protein: 32, carbs: 41, fats: 9 },
      allergens: ['wheat'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 8.75,
        realDollars: 8.75,
        maroonMeal: 1
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-entree-3',
      name: 'Grilled Chicken Sandwich',
      description: 'A grilled chicken fillet on a bun',
      macros: { calories: 320, protein: 37, carbs: 41, fats: 6 },
      allergens: ['wheat'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 9.25,
        realDollars: 9.25,
        maroonMeal: 1
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-entree-4',
      name: 'Chick-fil-A® Nuggets',
      description: 'Breaded and pressure-cooked chicken nuggets, available in different quantities',
      macros: { calories: 260, protein: 26, carbs: 12, fats: 12 },
      allergens: ['wheat'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 7.95,
        realDollars: 7.95,
        maroonMeal: 1
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-entree-5',
      name: 'Chick-n-Strips®',
      description: 'Breaded and pressure-cooked chicken strips',
      macros: { calories: 400, protein: 40, carbs: 15, fats: 18 },
      allergens: ['wheat'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 9.45,
        realDollars: 9.45
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-entree-6',
      name: 'Chick-fil-A Cool Wrap®',
      description: 'Grilled chicken rolled in a flaxseed flour flatbread with lettuce and cheese',
      macros: { calories: 350, protein: 28, carbs: 35, fats: 12 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 9.35,
        realDollars: 9.35
      },
      mealTimes: ['lunch', 'dinner']
    },
    // SALADS
    {
      id: 'cfa-salad-1',
      name: 'Cobb Salad',
      description: 'Chilled grilled chicken, bacon, egg, cheddar cheese, avocado, and vegetables on mixed greens',
      macros: { calories: 540, protein: 44, carbs: 15, fats: 32 },
      allergens: ['eggs', 'dairy'],
      dietaryPreferences: ['glutenFree'],
      paymentCosts: {
        diningDollars: 10.95,
        realDollars: 10.95
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-salad-2',
      name: 'Spicy Southwest Salad',
      description: 'Spicy grilled chicken with black beans, corn, poblano peppers, and tortilla strips on mixed greens',
      macros: { calories: 480, protein: 38, carbs: 32, fats: 20 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 10.95,
        realDollars: 10.95
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-salad-3',
      name: 'Market Salad',
      description: 'Grilled chicken with mixed greens, corn, carrots, cucumbers, and tomatoes',
      macros: { calories: 230, protein: 32, carbs: 15, fats: 6 },
      allergens: [],
      dietaryPreferences: ['vegetarian', 'glutenFree'],
      paymentCosts: {
        diningDollars: 9.95,
        realDollars: 9.95
      },
      mealTimes: ['lunch', 'dinner']
    },
    // BREAKFAST
    {
      id: 'cfa-bfast-1',
      name: 'Sausage Biscuit',
      description: 'Sausage patty on a warm biscuit',
      macros: { calories: 420, protein: 14, carbs: 41, fats: 21 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 5.50,
        realDollars: 5.50
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'cfa-bfast-2',
      name: 'Chicken Biscuit',
      description: 'Breaded chicken fillet on a warm biscuit',
      macros: { calories: 420, protein: 28, carbs: 41, fats: 15 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 6.50,
        realDollars: 6.50
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'cfa-bfast-3',
      name: 'Spicy Chicken Biscuit',
      description: 'Spicy breaded chicken fillet on a warm biscuit',
      macros: { calories: 450, protein: 28, carbs: 41, fats: 18 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 7.00,
        realDollars: 7.00
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'cfa-bfast-4',
      name: 'Yogurt Parfait',
      description: 'Yogurt with granola and berries',
      macros: { calories: 190, protein: 11, carbs: 28, fats: 2 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian', 'glutenFree'],
      paymentCosts: {
        diningDollars: 8.50,
        realDollars: 8.50
      },
      mealTimes: ['breakfast']
    },
    // SIDES
    {
      id: 'cfa-side-1',
      name: 'Waffle Potato Fries',
      description: 'Crinkle-cut waffle-shaped fried potatoes',
      macros: { calories: 400, protein: 5, carbs: 48, fats: 21 },
      allergens: [],
      dietaryPreferences: ['vegetarian', 'glutenFree', 'vegan'],
      paymentCosts: {
        diningDollars: 3.75,
        realDollars: 3.75
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-side-2',
      name: 'Mac & Cheese',
      description: 'Creamy mac and cheese made with real cheddar cheese',
      macros: { calories: 440, protein: 19, carbs: 52, fats: 18 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 4.25,
        realDollars: 4.25
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-side-3',
      name: 'Side Salad',
      description: 'Mixed greens with vegetables',
      macros: { calories: 80, protein: 2, carbs: 12, fats: 3 },
      allergens: [],
      dietaryPreferences: ['vegetarian', 'glutenFree', 'vegan'],
      paymentCosts: {
        diningDollars: 3.95,
        realDollars: 3.95
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-side-4',
      name: 'Fruit Cup',
      description: 'Fresh seasonal fruit selection',
      macros: { calories: 80, protein: 1, carbs: 20, fats: 0 },
      allergens: [],
      dietaryPreferences: ['vegetarian', 'glutenFree', 'vegan'],
      paymentCosts: {
        diningDollars: 5.75,
        realDollars: 5.75
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'cfa-side-5',
      name: 'Kale Crunch Side',
      description: 'Kale salad with shredded kale, green cabbage, and crispy chickpeas',
      macros: { calories: 170, protein: 4, carbs: 20, fats: 8 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian', 'glutenFree'],
      paymentCosts: {
        diningDollars: 5.95,
        realDollars: 5.95
      },
      mealTimes: ['lunch', 'dinner']
    },
    // SOUPS
    {
      id: 'cfa-soup-1',
      name: 'Chicken Noodle Soup',
      description: 'Hearty chicken noodle soup',
      macros: { calories: 170, protein: 16, carbs: 18, fats: 3 },
      allergens: ['wheat'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 4.95,
        realDollars: 4.95
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'cfa-soup-2',
      name: 'Chicken Tortilla Soup',
      description: 'Spicy chicken tortilla soup with crispy tortilla strips',
      macros: { calories: 240, protein: 18, carbs: 24, fats: 8 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 4.95,
        realDollars: 4.95
      },
      mealTimes: ['lunch', 'dinner']
    }
  ]
},
  // RESTAURANT: Einstein Bros. Bagels
{
  id: 'rest-einstein-bros',
  name: 'Einstein Bros. Bagels',
  location: 'Sbisa',
  isDiningHall: false,
  dishes: [
    // SIGNATURE BAGELS
    {
      id: 'eb-bagel-sig-1',
      name: 'Asiago',
      description: 'Fresh-baked signature bagel with Asiago cheese',
      macros: { calories: 300, protein: 10, carbs: 54, fats: 4 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 2.50,
        realDollars: 2.50
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-bagel-sig-2',
      name: 'Blueberry',
      description: 'Fresh-baked blueberry bagel',
      macros: { calories: 290, protein: 9, carbs: 59, fats: 1 },
      allergens: ['wheat'],
      dietaryPreferences: ['vegetarian', 'vegan'],
      paymentCosts: {
        diningDollars: 2.50,
        realDollars: 2.50
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-bagel-sig-3',
      name: 'Chocolate Chip',
      description: 'Fresh-baked bagel with chocolate chips',
      macros: { calories: 300, protein: 9, carbs: 58, fats: 3.5 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 2.50,
        realDollars: 2.50
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-bagel-sig-4',
      name: 'Cinnamon Sugar',
      description: 'Fresh-baked bagel with cinnamon sugar topping',
      macros: { calories: 320, protein: 9, carbs: 59, fats: 6 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 2.50,
        realDollars: 2.50
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-bagel-sig-5',
      name: 'French Toast',
      description: 'Fresh-baked bagel with French toast flavor',
      macros: { calories: 370, protein: 9, carbs: 68, fats: 7 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 2.75,
        realDollars: 2.75
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'eb-bagel-sig-6',
      name: 'Pretzel',
      description: 'Fresh-baked pretzel bagel',
      macros: { calories: 280, protein: 9, carbs: 52, fats: 4 },
      allergens: ['wheat'],
      dietaryPreferences: ['vegetarian', 'vegan'],
      paymentCosts: {
        diningDollars: 2.50,
        realDollars: 2.50
      },
      mealTimes: ['breakfast', 'lunch']
    },
    // CLASSIC BAGELS
    {
      id: 'eb-bagel-class-1',
      name: 'Ancient Grain',
      description: 'Fresh-baked ancient grain bagel',
      macros: { calories: 280, protein: 11, carbs: 49, fats: 5 },
      allergens: ['wheat'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 2.25,
        realDollars: 2.25
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-bagel-class-2',
      name: 'Cinnamon Raisin',
      description: 'Fresh-baked cinnamon raisin bagel',
      macros: { calories: 280, protein: 9, carbs: 58, fats: 1 },
      allergens: ['wheat'],
      dietaryPreferences: ['vegetarian', 'vegan'],
      paymentCosts: {
        diningDollars: 2.25,
        realDollars: 2.25
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-bagel-class-3',
      name: 'Cranberry',
      description: 'Fresh-baked cranberry bagel',
      macros: { calories: 310, protein: 9, carbs: 60, fats: 4 },
      allergens: ['wheat'],
      dietaryPreferences: ['vegetarian', 'vegan'],
      paymentCosts: {
        diningDollars: 2.25,
        realDollars: 2.25
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-bagel-class-4',
      name: 'Everything',
      description: 'Fresh-baked everything bagel with multiple seed seasonings',
      macros: { calories: 280, protein: 9, carbs: 56, fats: 2 },
      allergens: ['wheat'],
      dietaryPreferences: ['vegetarian', 'vegan'],
      paymentCosts: {
        diningDollars: 2.25,
        realDollars: 2.25
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-bagel-class-5',
      name: 'Plain',
      description: 'Fresh-baked plain bagel',
      macros: { calories: 270, protein: 9, carbs: 56, fats: 1 },
      allergens: ['wheat'],
      dietaryPreferences: ['vegetarian', 'vegan'],
      paymentCosts: {
        diningDollars: 2.25,
        realDollars: 2.25
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-bagel-class-6',
      name: 'Honey Wheat',
      description: 'Fresh-baked honey wheat bagel',
      macros: { calories: 260, protein: 10, carbs: 49, fats: 3 },
      allergens: ['wheat'],
      dietaryPreferences: ['vegetarian', 'vegan'],
      paymentCosts: {
        diningDollars: 2.25,
        realDollars: 2.25
      },
      mealTimes: ['breakfast', 'lunch']
    },
    // GOURMET BAGELS
    {
      id: 'eb-bagel-gourmet-1',
      name: 'Apple Cinnamon',
      description: 'Fresh-baked gourmet bagel with apple and cinnamon',
      macros: { calories: 450, protein: 9, carbs: 83, fats: 9 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 2.75,
        realDollars: 2.75
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-bagel-gourmet-2',
      name: 'Cheddar Jalapeño',
      description: 'Fresh-baked bagel with Cheddar cheese and jalapeños',
      macros: { calories: 340, protein: 12, carbs: 52, fats: 9 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 2.75,
        realDollars: 2.75
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-bagel-gourmet-3',
      name: 'Cheesy Hash Brown',
      description: 'Fresh-baked bagel with cheese and hash brown',
      macros: { calories: 400, protein: 13, carbs: 60, fats: 12 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 2.75,
        realDollars: 2.75
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-bagel-gourmet-4',
      name: 'Green Chile',
      description: 'Fresh-baked bagel with green chile and cheese',
      macros: { calories: 390, protein: 17, carbs: 54, fats: 12 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 2.75,
        realDollars: 2.75
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-bagel-gourmet-5',
      name: 'Six Cheese',
      description: 'Fresh-baked bagel with six different cheeses',
      macros: { calories: 370, protein: 16, carbs: 53, fats: 10 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 2.75,
        realDollars: 2.75
      },
      mealTimes: ['breakfast', 'lunch']
    },
    // EGG SANDWICHES - SIGNATURE
    {
      id: 'eb-egg-sig-1',
      name: 'Farmhouse',
      description: 'Eggs, thick-cut bacon, smoked ham, cheddar cheese with country pepper shmear on cheesy hash brown gourmet bagel',
      macros: { calories: 680, protein: 36, carbs: 64, fats: 32 },
      allergens: ['wheat', 'dairy', 'eggs'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 7.95,
        realDollars: 7.95
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'eb-egg-sig-2',
      name: 'Chorizo Sunrise',
      description: 'Eggs, chorizo, cheese, avocado, jalapeño salsa shmear on green chile gourmet bagel',
      macros: { calories: 800, protein: 36, carbs: 61, fats: 51 },
      allergens: ['wheat', 'dairy', 'eggs'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 8.25,
        realDollars: 8.25
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'eb-egg-sig-3',
      name: 'All-Nighter',
      description: 'Eggs, bacon, American cheese, jalapeño garlic aioli on cheesy hash brown gourmet bagel',
      macros: { calories: 880, protein: 36, carbs: 76, fats: 38 },
      allergens: ['wheat', 'dairy', 'eggs'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 8.50,
        realDollars: 8.50
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'eb-egg-sig-4',
      name: 'Garden Avocado',
      description: 'Eggs, avocado, tomato, spinach, roasted tomato spread on everything bagel',
      macros: { calories: 500, protein: 18, carbs: 60, fats: 20 },
      allergens: ['wheat', 'dairy', 'eggs'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 7.50,
        realDollars: 7.50
      },
      mealTimes: ['breakfast']
    },
    // EGG WHITE SANDWICHES
    {
      id: 'eb-eggwhite-1',
      name: 'Santa Fe',
      description: 'Egg white, turkey sausage, cheese with roasted tomato salsa and jalapeño salsa shmear on asiago thintastic bagel',
      macros: { calories: 530, protein: 25, carbs: 42, fats: 16 },
      allergens: ['wheat', 'dairy', 'eggs'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 7.75,
        realDollars: 7.75
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'eb-eggwhite-2',
      name: 'Bacon, Avocado & Tomato',
      description: 'Egg white, thick-cut bacon, avocado, tomato with roasted tomato spread on plain thintastic bagel',
      macros: { calories: 410, protein: 17, carbs: 45, fats: 19 },
      allergens: ['wheat', 'dairy', 'eggs'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 7.25,
        realDollars: 7.25
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'eb-eggwhite-3',
      name: 'Bacon & Cheddar',
      description: 'Egg white with bacon and cheddar cheese',
      macros: { calories: 450, protein: 22, carbs: 57, fats: 15 },
      allergens: ['wheat', 'dairy', 'eggs'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 6.95,
        realDollars: 6.95
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'eb-eggwhite-4',
      name: 'Turkey Sausage & Cheddar',
      description: 'Egg white with turkey sausage and cheddar cheese',
      macros: { calories: 480, protein: 26, carbs: 58, fats: 15 },
      allergens: ['wheat', 'dairy', 'eggs'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 7.25,
        realDollars: 7.25
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'eb-eggwhite-5',
      name: 'Ham & Swiss',
      description: 'Egg white with ham and Swiss cheese',
      macros: { calories: 450, protein: 28, carbs: 57, fats: 12 },
      allergens: ['wheat', 'dairy', 'eggs'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 6.95,
        realDollars: 6.95
      },
      mealTimes: ['breakfast']
    },
    // DELI LUNCH SANDWICHES
    {
      id: 'eb-deli-1',
      name: 'Nova Lox',
      description: 'Nova lox, red onion, capers, tomato with plain shmear on plain bagel. Side of chips included.',
      macros: { calories: 480, protein: 23, carbs: 66, fats: 18 },
      allergens: ['wheat', 'dairy', 'fish'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 8.50,
        realDollars: 8.50
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'eb-deli-2',
      name: 'Turkey, Bacon & Avocado',
      description: 'Roasted turkey, thick-cut bacon, avocado, lettuce, tomato with roasted tomato spread on plain bagel. Side of chips included.',
      macros: { calories: 610, protein: 28, carbs: 62, fats: 30 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 8.75,
        realDollars: 8.75
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'eb-deli-3',
      name: 'Tasty Turkey',
      description: 'Roasted turkey, spinach, cucumber, lettuce, tomato with onion & chive shmear on asiago bagel. Side of chips included.',
      macros: { calories: 510, protein: 29, carbs: 66, fats: 15 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 8.25,
        realDollars: 8.25
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'eb-deli-4',
      name: 'Avocado Veg Out',
      description: 'Avocado, tomato, cucumber, red onion, spinach, lettuce with garden veggie shmear on sesame bagel. Side of chips included.',
      macros: { calories: 420, protein: 17, carbs: 59, fats: 14 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 7.50,
        realDollars: 7.50
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'eb-deli-5',
      name: 'Turkey & Cheddar',
      description: 'Roasted turkey, cheddar cheese, lettuce, tomato, red onion with mayo and deli mustard on plain bagel. Side of chips included.',
      macros: { calories: 540, protein: 27, carbs: 57, fats: 22 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 8.50,
        realDollars: 8.50
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'eb-deli-6',
      name: 'Ham & Swiss',
      description: 'Smoked ham, Swiss cheese, lettuce, tomato, red onion with mayo and deli mustard on plain bagel. Side of chips included.',
      macros: { calories: 550, protein: 28, carbs: 57, fats: 18 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 8.50,
        realDollars: 8.50
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'eb-deli-7',
      name: 'Pizza Bagel - Cheese',
      description: 'Cheese on a fresh-baked bagel. Side of chips included.',
      macros: { calories: 440, protein: 23, carbs: 58, fats: 14 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 6.75,
        realDollars: 6.75
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'eb-deli-8',
      name: 'Pizza Bagel - Pepperoni',
      description: 'Pepperoni and cheese on a fresh-baked bagel. Side of chips included.',
      macros: { calories: 530, protein: 27, carbs: 59, fats: 23 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 7.50,
        realDollars: 7.50
      },
      mealTimes: ['lunch', 'dinner']
    },
    // SPREADS & SHMEARS
    {
      id: 'eb-shmear-1',
      name: 'Plain Shmear',
      description: 'Classic plain cream cheese spread',
      macros: { calories: 120, protein: 2, carbs: 2, fats: 12 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian', 'glutenFree'],
      paymentCosts: {
        diningDollars: 0.75,
        realDollars: 0.75
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-shmear-2',
      name: 'Onion & Chive Shmear',
      description: 'Cream cheese with onion and chive flavoring',
      macros: { calories: 120, protein: 2, carbs: 4, fats: 10 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian', 'glutenFree'],
      paymentCosts: {
        diningDollars: 0.75,
        realDollars: 0.75
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-shmear-3',
      name: 'Smoked Salmon Shmear',
      description: 'Cream cheese with smoked salmon flavor',
      macros: { calories: 110, protein: 2, carbs: 4, fats: 10 },
      allergens: ['dairy', 'fish'],
      dietaryPreferences: ['vegetarian', 'glutenFree'],
      paymentCosts: {
        diningDollars: 1.25,
        realDollars: 1.25
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-shmear-4',
      name: 'Garden Veggie Shmear',
      description: 'Reduced fat cream cheese with garden vegetables',
      macros: { calories: 110, protein: 2, carbs: 5, fats: 9 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian', 'glutenFree'],
      paymentCosts: {
        diningDollars: 0.75,
        realDollars: 0.75
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-shmear-5',
      name: 'Honey Almond Shmear',
      description: 'Reduced fat cream cheese with honey and almond flavoring',
      macros: { calories: 120, protein: 2, carbs: 11, fats: 8 },
      allergens: ['dairy', 'treeNuts'],
      dietaryPreferences: ['vegetarian', 'glutenFree'],
      paymentCosts: {
        diningDollars: 0.75,
        realDollars: 0.75
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-shmear-6',
      name: 'Jalapeño Salsa Shmear',
      description: 'Reduced fat cream cheese with jalapeño salsa flavor',
      macros: { calories: 110, protein: 2, carbs: 6, fats: 8 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian', 'glutenFree'],
      paymentCosts: {
        diningDollars: 0.75,
        realDollars: 0.75
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-shmear-7',
      name: 'Strawberry Shmear',
      description: 'Reduced fat cream cheese with strawberry flavor',
      macros: { calories: 120, protein: 1, carbs: 9, fats: 9 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian', 'glutenFree'],
      paymentCosts: {
        diningDollars: 0.75,
        realDollars: 0.75
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    // TOPPINGS
    {
      id: 'eb-topping-1',
      name: 'Butter Blend',
      description: 'Butter spread',
      macros: { calories: 100, protein: 0, carbs: 0, fats: 12 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian', 'glutenFree'],
      paymentCosts: {
        diningDollars: 0.50,
        realDollars: 0.50
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-topping-2',
      name: 'Honey',
      description: 'Pure honey',
      macros: { calories: 90, protein: 0, carbs: 23, fats: 0 },
      allergens: [],
      dietaryPreferences: ['vegetarian', 'vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 0.50,
        realDollars: 0.50
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-topping-3',
      name: 'Jelly',
      description: 'Fruit jelly spread',
      macros: { calories: 70, protein: 0, carbs: 18, fats: 0 },
      allergens: [],
      dietaryPreferences: ['vegetarian', 'vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 0.50,
        realDollars: 0.50
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-topping-4',
      name: 'Peanut Butter',
      description: 'Natural peanut butter',
      macros: { calories: 240, protein: 9, carbs: 11, fats: 20 },
      allergens: ['peanuts'],
      dietaryPreferences: ['vegetarian', 'vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 1.00,
        realDollars: 1.00
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    // SIDES
    {
      id: 'eb-side-1',
      name: 'Twice-Baked Hash Brown',
      description: 'Crispy hash brown patty',
      macros: { calories: 170, protein: 7, carbs: 11, fats: 11 },
      allergens: ['dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 2.50,
        realDollars: 2.50
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'eb-side-2',
      name: 'Fruit Cup',
      description: 'Fresh fruit cup',
      macros: { calories: 50, protein: 1, carbs: 13, fats: 0 },
      allergens: [],
      dietaryPreferences: ['vegetarian', 'vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 3.25,
        realDollars: 3.25
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-side-3',
      name: 'Redskin Potato Salad',
      description: 'Classic potato salad with redskin potatoes',
      macros: { calories: 220, protein: 2, carbs: 17, fats: 15 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 3.50,
        realDollars: 3.50
      },
      mealTimes: ['lunch', 'dinner']
    },
    // BEVERAGES - COFFEE
    {
      id: 'eb-coffee-1',
      name: 'Fresh-Brewed Coffee',
      description: 'Breakfast blend medium roast, decaf, darn good dark roast, or vanilla hazelnut',
      macros: { calories: 5, protein: 0, carbs: 0, fats: 0 },
      allergens: [],
      dietaryPreferences: ['vegetarian', 'vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 2.50,
        realDollars: 2.50
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-coffee-2',
      name: 'Cold Brew - Classic',
      description: 'Classic cold brew coffee',
      macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
      allergens: [],
      dietaryPreferences: ['vegetarian', 'vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 2.75,
        realDollars: 2.75
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-coffee-3',
      name: 'Cold Brew - Vanilla Cream',
      description: 'Cold brew with vanilla cream',
      macros: { calories: 190, protein: 0, carbs: 26, fats: 8 },
      allergens: ['dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 3.50,
        realDollars: 3.50
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-coffee-4',
      name: 'Cold Brew - Caramel Cream',
      description: 'Cold brew with caramel cream',
      macros: { calories: 210, protein: 0, carbs: 32, fats: 8 },
      allergens: ['dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 3.50,
        realDollars: 3.50
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-coffee-5',
      name: 'Cold Brew - Chocolate Cream',
      description: 'Cold brew with chocolate cream',
      macros: { calories: 200, protein: 0, carbs: 28, fats: 8 },
      allergens: ['dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 3.50,
        realDollars: 3.50
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-coffee-6',
      name: 'Cold Brew Shake - Vanilla',
      description: 'Cold brew shake with vanilla flavor',
      macros: { calories: 350, protein: 0, carbs: 48, fats: 14 },
      allergens: ['dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 4.25,
        realDollars: 4.25
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-coffee-7',
      name: 'Cold Brew Shake - Caramel',
      description: 'Cold brew shake with caramel flavor',
      macros: { calories: 390, protein: 0, carbs: 54, fats: 16 },
      allergens: ['dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 4.25,
        realDollars: 4.25
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-coffee-8',
      name: 'Cold Brew Shake - Chocolate',
      description: 'Cold brew shake with chocolate flavor',
      macros: { calories: 380, protein: 0, carbs: 52, fats: 15 },
      allergens: ['dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 4.25,
        realDollars: 4.25
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    // BEVERAGES - LATTES
    {
      id: 'eb-latte-1',
      name: 'Latte',
      description: 'Classic hot or iced latte',
      macros: { calories: 140, protein: 0, carbs: 12, fats: 5 },
      allergens: ['dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 3.50,
        realDollars: 3.50
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-latte-2',
      name: 'Mocha',
      description: 'Latte with chocolate flavor',
      macros: { calories: 350, protein: 0, carbs: 32, fats: 14 },
      allergens: ['dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 4.00,
        realDollars: 4.00
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-latte-3',
      name: 'Caramel Macchiato',
      description: 'Latte with caramel and espresso',
      macros: { calories: 370, protein: 0, carbs: 34, fats: 14 },
      allergens: ['dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 4.00,
        realDollars: 4.00
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-latte-4',
      name: 'Chai Tea Latte',
      description: 'Chai tea with steamed milk',
      macros: { calories: 230, protein: 0, carbs: 26, fats: 8 },
      allergens: ['dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 3.75,
        realDollars: 3.75
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    // BEVERAGES - TEA & SMOOTHIE
    {
      id: 'eb-tea-1',
      name: 'Hot Tea',
      description: 'Assorted hot tea selection',
      macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
      allergens: [],
      dietaryPreferences: ['vegetarian', 'vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 2.50,
        realDollars: 2.50
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-tea-2',
      name: 'Iced Tea',
      description: 'Assorted iced tea selection',
      macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
      allergens: [],
      dietaryPreferences: ['vegetarian', 'vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 2.50,
        realDollars: 2.50
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'eb-smoothie-1',
      name: 'Strawberry Banana Smoothie',
      description: 'Fresh strawberry and banana smoothie',
      macros: { calories: 280, protein: 0, carbs: 62, fats: 1 },
      allergens: [],
      dietaryPreferences: ['vegetarian', 'vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 4.50,
        realDollars: 4.50
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    // SWEETS & PASTRIES
    {
      id: 'eb-sweet-1',
      name: 'Avocado Toast',
      description: 'Fresh avocado on toasted bagel',
      macros: { calories: 400, protein: 11, carbs: 61, fats: 12 },
      allergens: ['wheat'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 6.50,
        realDollars: 6.50
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-sweet-2',
      name: 'Cinnamon Twist',
      description: 'Crispy cinnamon pastry',
      macros: { calories: 360, protein: 4, carbs: 50, fats: 16 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 3.75,
        realDollars: 3.75
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-sweet-3',
      name: 'Coffee Cake - Chocolate Chip',
      description: 'Rich chocolate chip coffee cake',
      macros: { calories: 550, protein: 4, carbs: 81, fats: 25 },
      allergens: ['wheat', 'dairy', 'eggs'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 4.75,
        realDollars: 4.75
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-sweet-4',
      name: 'Cookie - Heavenly Chocolate Chip',
      description: 'Premium chocolate chip cookie',
      macros: { calories: 460, protein: 5, carbs: 58, fats: 24 },
      allergens: ['wheat', 'dairy', 'eggs'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 3.50,
        realDollars: 3.50
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'eb-sweet-5',
      name: 'Croissant - Plain',
      description: 'Buttery plain croissant',
      macros: { calories: 390, protein: 8, carbs: 41, fats: 22 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 3.75,
        realDollars: 3.75
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-sweet-6',
      name: 'Croissant - Chocolate',
      description: 'Buttery croissant with chocolate',
      macros: { calories: 310, protein: 6, carbs: 33, fats: 17 },
      allergens: ['wheat', 'dairy', 'eggs'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 4.00,
        realDollars: 4.00
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-sweet-7',
      name: 'Muffin - Blueberry',
      description: 'Fresh blueberry muffin',
      macros: { calories: 450, protein: 5, carbs: 55, fats: 23 },
      allergens: ['wheat', 'dairy', 'eggs'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 3.95,
        realDollars: 3.95
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-sweet-8',
      name: 'Muffin - Cinnamon Chip',
      description: 'Cinnamon muffin with chips',
      macros: { calories: 540, protein: 5, carbs: 69, fats: 27 },
      allergens: ['wheat', 'dairy', 'eggs'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 4.25,
        realDollars: 4.25
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-sweet-9',
      name: 'Strudel - Cinnamon Walnut',
      description: 'Cinnamon strudel with walnuts',
      macros: { calories: 640, protein: 10, carbs: 71, fats: 35 },
      allergens: ['wheat', 'dairy', 'treeNuts'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 4.75,
        realDollars: 4.75
      },
      mealTimes: ['breakfast', 'lunch']
    },
    // BREAKFAST EXTRAS
    {
      id: 'eb-breakfast-extra-1',
      name: 'Shmearful - Plain',
      description: 'Individual-sized plain cream cheese portion',
      macros: { calories: 80, protein: 2, carbs: 10, fats: 3.5 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 1.50,
        realDollars: 1.50
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'eb-breakfast-extra-2',
      name: 'Shmearful - Asiago',
      description: 'Individual-sized Asiago cream cheese portion',
      macros: { calories: 90, protein: 3, carbs: 10, fats: 4 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 1.75,
        realDollars: 1.75
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'eb-breakfast-extra-3',
      name: 'Shmearful - French Toast',
      description: 'Individual-sized French toast cream cheese portion',
      macros: { calories: 100, protein: 2, carbs: 15, fats: 3.5 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 1.75,
        realDollars: 1.75
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'eb-breakfast-extra-4',
      name: 'Shmearful - Chocolate Chip Cheesecake',
      description: 'Individual-sized chocolate chip cheesecake cream cheese portion',
      macros: { calories: 90, protein: 2, carbs: 12, fats: 3.5 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 1.75,
        realDollars: 1.75
      },
      mealTimes: ['breakfast']
    },
    // SOUPS
    {
      id: 'eb-soup-1',
      name: 'Chicken Noodle Soup',
      description: 'Classic chicken noodle soup',
      macros: { calories: 110, protein: 8, carbs: 12, fats: 2.5 },
      allergens: ['wheat'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 4.50,
        realDollars: 4.50
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'eb-soup-2',
      name: 'Broccoli Cheese Soup',
      description: 'Creamy broccoli cheese soup',
      macros: { calories: 160, protein: 5, carbs: 14, fats: 17 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 4.75,
        realDollars: 4.75
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'eb-soup-3',
      name: 'Vegetarian Chile Soup',
      description: 'Hearty vegetarian chile soup',
      macros: { calories: 160, protein: 6, carbs: 28, fats: 2 },
      allergens: [],
      dietaryPreferences: ['vegetarian', 'vegan'],
      paymentCosts: {
        diningDollars: 4.75,
        realDollars: 4.75
      },
      mealTimes: ['lunch', 'dinner']
    },
    // YOGURT PARFAITS
    {
      id: 'eb-parfait-1',
      name: 'Fruit & Yogurt Parfait',
      description: 'Fresh fruit with creamy yogurt',
      macros: { calories: 200, protein: 8, carbs: 38, fats: 2 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 4.95,
        realDollars: 4.95
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'eb-parfait-2',
      name: 'Greek Yogurt Parfait with Honey',
      description: 'Greek yogurt with honey',
      macros: { calories: 270, protein: 16, carbs: 49, fats: 2.5 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 5.50,
        realDollars: 5.50
      },
      mealTimes: ['breakfast', 'lunch']
    },
    // FOUNTAIN BEVERAGES
    {
      id: 'eb-fountain-1',
      name: 'Fountain Drink',
      description: 'Various fountain drink options',
      macros: { calories: 150, protein: 0, carbs: 40, fats: 0 },
      allergens: [],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 2.25,
        realDollars: 2.25
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    }
  ]
},
  // RESTAURANT: Shake Smart - TCU
{
  id: 'rest-shake-smart-tcu',
  name: 'Shake Smart',
  location: 'TCU Recreation Center',
  address: '3005 Stadium Dr, Fort Worth, TX 76109',
  isDiningHall: false,
  description: 'Student-founded concept specializing in protein shakes, acai bowls, cold brew, and healthy meal options',
  dishes: [
    // CLASSIC PROTEIN SHAKES
    {
      id: 'ss-shake-1',
      name: 'Vanilla Thrilla',
      description: 'The bean that gets you lean! Classic vanilla protein shake made with organic agave nectar',
      macros: { calories: 350, protein: 30, carbs: 45, fats: 8 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 6.95,
        realDollars: 6.95
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-shake-2',
      name: 'Chocolate',
      description: 'Classic chocolate protein shake made with organic agave nectar',
      macros: { calories: 360, protein: 30, carbs: 46, fats: 8 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 6.95,
        realDollars: 6.95
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-shake-3',
      name: 'Strawberry',
      description: 'Fresh strawberry protein shake made with organic agave nectar',
      macros: { calories: 340, protein: 30, carbs: 44, fats: 7 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 6.95,
        realDollars: 6.95
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-shake-4',
      name: 'Peanut Butter',
      description: 'Rich peanut butter protein shake made with organic agave nectar',
      macros: { calories: 420, protein: 32, carbs: 48, fats: 14 },
      allergens: ['dairy', 'peanuts'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 7.45,
        realDollars: 7.45
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-shake-5',
      name: 'Cookies & Cream',
      description: 'Cookies and cream protein shake made with organic agave nectar',
      macros: { calories: 380, protein: 30, carbs: 48, fats: 10 },
      allergens: ['dairy', 'wheat'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 6.95,
        realDollars: 6.95
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    // GREEN SHAKES
    {
      id: 'ss-shake-6',
      name: 'Green Machine',
      description: 'Spinach, banana, pineapple, and vanilla protein shake with organic agave nectar',
      macros: { calories: 330, protein: 30, carbs: 42, fats: 7 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 6.95,
        realDollars: 6.95
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-shake-7',
      name: 'Tropical Green',
      description: 'Spinach, mango, pineapple, and vanilla protein shake with organic agave nectar',
      macros: { calories: 340, protein: 30, carbs: 43, fats: 7 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 6.95,
        realDollars: 6.95
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    // EXOTIC SHAKES
    {
      id: 'ss-shake-8',
      name: 'Perfect 10',
      description: 'One of our most popular protein shakes made with organic agave nectar',
      macros: { calories: 370, protein: 30, carbs: 47, fats: 9 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 6.95,
        realDollars: 6.95
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-shake-9',
      name: 'Acai Berry',
      description: 'Acai, mixed berries, and vanilla protein shake with organic agave nectar',
      macros: { calories: 350, protein: 30, carbs: 45, fats: 8 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 7.25,
        realDollars: 7.25
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-shake-10',
      name: 'Pitaya Passion',
      description: 'Dragon fruit, strawberry, and vanilla protein shake with organic agave nectar',
      macros: { calories: 345, protein: 30, carbs: 44, fats: 8 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 7.25,
        realDollars: 7.25
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    // ACAI BOWLS
    {
      id: 'ss-bowl-1',
      name: 'Rawcai',
      description: 'Scoops of organic acai and strawberry topped with granola, banana slices, chia and coconut flakes',
      macros: { calories: 380, protein: 8, carbs: 58, fats: 12 },
      allergens: [],
      dietaryPreferences: ['vegan'],
      paymentCosts: {
        diningDollars: 7.95,
        realDollars: 7.95
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-bowl-2',
      name: 'Raw-PB',
      description: 'Scoops of organic acai topped with granola, banana slices, dark chocolate and peanut butter',
      macros: { calories: 480, protein: 12, carbs: 55, fats: 20 },
      allergens: ['peanuts'],
      dietaryPreferences: ['vegan'],
      paymentCosts: {
        diningDollars: 8.45,
        realDollars: 8.45
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-bowl-3',
      name: 'The Buzz Bowl',
      description: 'Scoops of organic acai, pitaya and pineapple topped with granola, coconut flakes and bee pollen',
      macros: { calories: 360, protein: 7, carbs: 56, fats: 11 },
      allergens: [],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 7.95,
        realDollars: 7.95
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-bowl-4',
      name: 'Organic Acai Bowl',
      description: 'Organic acai, strawberry, apple juice and protein topped with granola, coconut flakes and banana slices',
      macros: { calories: 420, protein: 30, carbs: 54, fats: 8 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 8.95,
        realDollars: 8.95
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-bowl-5',
      name: 'PB&A',
      description: 'Organic acai, strawberry, peanut butter, almond milk and protein topped with granola, dark chocolate and banana slices',
      macros: { calories: 520, protein: 32, carbs: 58, fats: 16 },
      allergens: ['peanuts', 'dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 9.45,
        realDollars: 9.45
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-bowl-6',
      name: 'Dragon Bowl',
      description: 'Pitaya, pineapple, OJ and vanilla protein topped with granola, chia and coconut flakes',
      macros: { calories: 410, protein: 30, carbs: 52, fats: 9 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 8.95,
        realDollars: 8.95
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    // COLD BREW COFFEE
    {
      id: 'ss-coffee-1',
      name: 'Classic Cold Brew',
      description: 'Smooth cold brew coffee',
      macros: { calories: 5, protein: 0, carbs: 0, fats: 0 },
      allergens: [],
      dietaryPreferences: ['vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 3.50,
        realDollars: 3.50
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-coffee-2',
      name: 'Vanilla Cold Brew',
      description: 'Cold brew with vanilla flavoring',
      macros: { calories: 45, protein: 0, carbs: 10, fats: 0 },
      allergens: [],
      dietaryPreferences: ['vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 3.95,
        realDollars: 3.95
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-coffee-3',
      name: 'Mocha Cold Brew',
      description: 'Cold brew with chocolate flavoring',
      macros: { calories: 60, protein: 0, carbs: 12, fats: 1 },
      allergens: ['dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 3.95,
        realDollars: 3.95
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-coffee-4',
      name: 'Caramel Cold Brew',
      description: 'Cold brew with caramel flavoring',
      macros: { calories: 50, protein: 0, carbs: 11, fats: 0 },
      allergens: [],
      dietaryPreferences: ['vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 3.95,
        realDollars: 3.95
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    // OATMEAL & OVERNIGHT OATS
    {
      id: 'ss-oats-1',
      name: 'Wholly Oatmeal',
      description: 'Hot oatmeal with your choice of toppings',
      macros: { calories: 300, protein: 10, carbs: 52, fats: 5 },
      allergens: [],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 5.45,
        realDollars: 5.45
      },
      mealTimes: ['breakfast']
    },
    {
      id: 'ss-oats-2',
      name: 'Overnight Oats - Original',
      description: 'Cold soaked oats ready to eat',
      macros: { calories: 320, protein: 12, carbs: 48, fats: 7 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 5.95,
        realDollars: 5.95
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'ss-oats-3',
      name: 'Overnight Oats - Peanut Butter',
      description: 'Cold soaked oats with peanut butter',
      macros: { calories: 420, protein: 16, carbs: 52, fats: 14 },
      allergens: ['dairy', 'peanuts'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 6.45,
        realDollars: 6.45
      },
      mealTimes: ['breakfast', 'lunch']
    },
    {
      id: 'ss-oats-4',
      name: 'Overnight Oats - Berry',
      description: 'Cold soaked oats with mixed berries',
      macros: { calories: 340, protein: 12, carbs: 50, fats: 7 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 5.95,
        realDollars: 5.95
      },
      mealTimes: ['breakfast', 'lunch']
    },
    // FOOD ITEMS
    {
      id: 'ss-food-1',
      name: 'Peanut Butter & Banana Sandwich',
      description: 'All-natural peanut butter and banana on whole wheat',
      macros: { calories: 380, protein: 14, carbs: 48, fats: 12 },
      allergens: ['peanuts', 'wheat'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 5.75,
        realDollars: 5.75
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-food-2',
      name: 'Turks and Matoes Wrap',
      description: 'Turkey wrap with pesto, tomatoes, and spinach',
      macros: { calories: 420, protein: 28, carbs: 44, fats: 13 },
      allergens: ['wheat', 'dairy'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 7.95,
        realDollars: 7.95
      },
      mealTimes: ['lunch', 'dinner']
    },
    {
      id: 'ss-food-3',
      name: 'Greek Yogurt',
      description: 'Plain or flavored Greek yogurt',
      macros: { calories: 150, protein: 15, carbs: 12, fats: 3 },
      allergens: ['dairy'],
      dietaryPreferences: ['vegetarian', 'glutenFree'],
      paymentCosts: {
        diningDollars: 4.95,
        realDollars: 4.95
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-food-4',
      name: 'Protein Balls',
      description: 'Energy bites with oats and protein',
      macros: { calories: 180, protein: 8, carbs: 20, fats: 7 },
      allergens: ['treeNuts'],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 3.50,
        realDollars: 3.50
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    // SHAKE CUSTOMIZATIONS / ADD-INS
    {
      id: 'ss-addon-1',
      name: 'Add Peanut Butter',
      description: 'Add peanut butter to any shake',
      macros: { calories: 100, protein: 4, carbs: 4, fats: 8 },
      allergens: ['peanuts'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 0.75,
        realDollars: 0.75
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-addon-2',
      name: 'Add Almond Butter',
      description: 'Add almond butter to any shake',
      macros: { calories: 100, protein: 4, carbs: 4, fats: 9 },
      allergens: ['treeNuts'],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 0.75,
        realDollars: 0.75
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-addon-3',
      name: 'Add Spinach',
      description: 'Add fresh spinach to any shake',
      macros: { calories: 5, protein: 1, carbs: 1, fats: 0 },
      allergens: [],
      dietaryPreferences: ['vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 0.50,
        realDollars: 0.50
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-addon-4',
      name: 'Add Chia Seeds',
      description: 'Add chia seeds to any shake',
      macros: { calories: 60, protein: 2, carbs: 5, fats: 4 },
      allergens: [],
      dietaryPreferences: ['vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 0.75,
        realDollars: 0.75
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-addon-5',
      name: 'Add Superfood',
      description: 'Add superfood powder to any shake',
      macros: { calories: 15, protein: 1, carbs: 2, fats: 0 },
      allergens: [],
      dietaryPreferences: ['vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 0.75,
        realDollars: 0.75
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-addon-6',
      name: 'Add Banana',
      description: 'Add banana to any shake',
      macros: { calories: 105, protein: 1, carbs: 27, fats: 0 },
      allergens: [],
      dietaryPreferences: ['vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 0.75,
        realDollars: 0.75
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-addon-7',
      name: 'Add Blueberries',
      description: 'Add blueberries to any shake',
      macros: { calories: 45, protein: 1, carbs: 11, fats: 0 },
      allergens: [],
      dietaryPreferences: ['vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 0.75,
        realDollars: 0.75
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-addon-8',
      name: 'Add Pineapple',
      description: 'Add pineapple to any shake',
      macros: { calories: 40, protein: 0, carbs: 10, fats: 0 },
      allergens: [],
      dietaryPreferences: ['vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 0.75,
        realDollars: 0.75
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-addon-9',
      name: 'Add Pitaya (Dragon Fruit)',
      description: 'Add pitaya (dragon fruit) to any shake',
      macros: { calories: 30, protein: 1, carbs: 7, fats: 0 },
      allergens: [],
      dietaryPreferences: ['vegan', 'glutenFree'],
      paymentCosts: {
        diningDollars: 1.00,
        realDollars: 1.00
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    // MODIFICATIONS
    {
      id: 'ss-mod-1',
      name: 'Remove Agave',
      description: 'Remove organic agave nectar from any shake (saves 120 calories)',
      macros: { calories: -120, protein: 0, carbs: -30, fats: 0 },
      allergens: [],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 0.00,
        realDollars: 0.00
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-mod-2',
      name: 'Half Agave',
      description: 'Reduce agave nectar by 50% (saves 60 calories)',
      macros: { calories: -60, protein: 0, carbs: -15, fats: 0 },
      allergens: [],
      dietaryPreferences: [],
      paymentCosts: {
        diningDollars: 0.00,
        realDollars: 0.00
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-mod-3',
      name: 'Almond Milk',
      description: 'Substitute with almond milk (saves 20-40 calories)',
      macros: { calories: -30, protein: 2, carbs: -2, fats: -2 },
      allergens: ['treeNuts'],
      dietaryPreferences: ['vegan'],
      paymentCosts: {
        diningDollars: 0.50,
        realDollars: 0.50
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 'ss-mod-4',
      name: 'Make It A Bowl',
      description: 'Turn any shake into a bowl topped with granola',
      macros: { calories: 150, protein: 4, carbs: 24, fats: 5 },
      allergens: [],
      dietaryPreferences: ['vegetarian'],
      paymentCosts: {
        diningDollars: 1.50,
        realDollars: 1.50
      },
      mealTimes: ['breakfast', 'lunch', 'dinner']
    }
  ]
},
  {
  "id": "rest-spin-n-stone",
  "name": "Spin 'N Stone",
  "location": "Various",
  "isDiningHall": false,
  "dishes": [
    {
      "id": "sns-pizza-1",
      "name": "Cheese Pizza",
      "description": "Fresh pizza with sauce and cheese - customize with your choice of toppings",
      "macros": { "calories": 280, "protein": 12, "carbs": 36, "fats": 9 },
      "allergens": ["wheat", "dairy"],
      "dietaryPreferences": ["vegetarian"],
      "paymentCosts": {
        "diningDollars": 6.45,
        "realDollars": 6.45
      },
      "mealTimes": ["lunch", "dinner"]
    },
    {
      "id": "sns-pizza-2",
      "name": "1 Topping Pizza",
      "description": "Fresh pizza with sauce, cheese, and 1 topping of your choice",
      "macros": { "calories": 320, "protein": 13, "carbs": 38, "fats": 12 },
      "allergens": ["wheat", "dairy"],
      "dietaryPreferences": [],
      "paymentCosts": {
        "diningDollars": 7.49,
        "realDollars": 7.49
      },
      "mealTimes": ["lunch", "dinner"]
    },
    {
      "id": "sns-pizza-3",
      "name": "Build Your Own Pizza",
      "description": "Create your perfect pizza with sauce, cheese, and up to 4 toppings",
      "macros": { "calories": 380, "protein": 15, "carbs": 42, "fats": 16 },
      "allergens": ["wheat", "dairy"],
      "dietaryPreferences": [],
      "paymentCosts": {
        "diningDollars": 8.85,
        "realDollars": 8.85
      },
      "mealTimes": ["lunch", "dinner"]
    }
  ]
},
];

export const locations = [
  "No Preference",
  "MSC",
  "Sbisa",
  "Commons",
  "Duncan",
];
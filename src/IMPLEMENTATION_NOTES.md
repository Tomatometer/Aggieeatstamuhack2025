# Macro Match - Implementation Notes

## Payment System

The application now supports 4 types of meal payments:

### 1. Meal Swipes
- Allows unlimited access to dining halls
- Cost: 1 swipe per meal
- Can also be used at dining halls for $12 Real Dollars or $10 Real Dollars alternative

### 2. Dining Dollars
- Accepted at most retail locations on campus
- NOT accepted at all locations (only on-campus retail)
- Can be used for dining hall entry at $12

### 3. Maroon Meals
- Uses 1 Meal Swipe but accesses a subset of meals at retail locations
- Example: Basic chicken sandwich at Chick-fil-A accepts Maroon Meal, but specialty items require Dining Dollars
- Counted as part of Meal Swipes allocation

### 4. Real Dollars
- Accepted everywhere for every meal
- Standard currency, most flexible option

## Budget System

Users can set their daily budget with:
- **Meal Swipes**: Number of swipes available (e.g., 2)
- **Maroon Meals**: Number of Maroon Meal uses (must be ≤ Meal Swipes, e.g., 1)
- **Dining Dollars**: Amount in dollars (e.g., $20.00)
- **Real Dollars**: Amount in dollars (e.g., $15.00)

The algorithm finds meal combinations that stay within all budget constraints.

## Macro Thresholds

Users can set percentage-based thresholds for each macro:
- **Calories Threshold**: ±% tolerance (default: 10%)
- **Protein Threshold**: ±% tolerance (default: 15%)
- **Carbs Threshold**: ±% tolerance (default: 15%)
- **Fats Threshold**: ±% tolerance (default: 15%)

Meals are only considered if their total macros fall within these thresholds.

## Meal Selection Algorithm (`/utils/mealSelector.ts`)

The algorithm is separated into its own file for easy editing:

1. **Filters meals** by location and cuisine preferences
2. **Separates meals** by time (breakfast, lunch, dinner)
3. **Checks all combinations** of 3 meals (one for each time)
4. **Validates** each combination against:
   - Macro thresholds for all 4 macros
   - Budget constraints for all 4 payment types
5. **Scores** valid combinations by how close they are to macro goals
6. **Returns** the best match or null if no valid combinations exist

### Key Functions:
- `findOptimalMealPlan()` - Main entry point
- `isWithinThreshold()` - Checks if a value is within threshold percentage
- `findValidPaymentCombination()` - Finds payment options within budget
- `calculateBudgetUsed()` - Calculates budget usage for payment options
- `isWithinBudget()` - Validates budget constraints

## Mock Data Structure

Each meal in `/data/mockData.ts` now includes:
- `paymentOptions`: Array of payment types accepted and their costs
- `mealTime`: 'breakfast', 'lunch', or 'dinner'
- `isDiningHall`: Boolean flag for unlimited access meals

Example:
```typescript
{
  id: '2-2',
  name: 'Classic Chicken Sandwich',
  paymentOptions: [
    { type: 'maroonMeal', cost: 1 },
    { type: 'diningDollars', cost: 6.99 },
    { type: 'realDollars', cost: 6.99 }
  ],
  mealTime: 'lunch'
}
```

## User Interface

### Form (`/components/DietGoalsForm.tsx`)
- Macro goals input
- Macro threshold sliders (5-50% range, 5% steps)
- Budget inputs for all 4 payment types
- Location and cuisine preferences

### Results (`/components/DailyMealPlan.tsx`)
- Daily totals with macro goal comparison
- Budget used summary
- Individual meal cards showing:
  - Meal details and restaurant
  - Payment method used
  - Nutritional breakdown

### No Results State
- Helpful error message
- Suggestions for adjusting preferences
- Button to return to form

## File Structure

```
/utils/mealSelector.ts       - Meal selection algorithm (separate for easy editing)
/types/index.ts              - TypeScript interfaces for payment and budget
/data/mockData.ts            - Restaurant and meal data with payment options
/components/DietGoalsForm.tsx - Form with budget and threshold controls
/components/DailyMealPlan.tsx - Results display with payment info
/App.tsx                     - Main app logic using the selector
```

## Customization

To modify the meal selection logic, edit `/utils/mealSelector.ts`. The algorithm is well-commented and separated into small, testable functions.

To add more restaurants or meals, edit `/data/mockData.ts` and ensure each meal has the required payment options and meal time.

import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { DailyMealPlan, DietGoals } from '../types';
import { Sunrise, Sun, Moon, Check, AlertCircle, DollarSign } from 'lucide-react';
import { Button } from './ui/button';

interface DailyMealPlanProps {
  mealPlan: DailyMealPlan;
  dietGoals: DietGoals;
  onBack: () => void;
}

export function DailyMealPlanComponent({ mealPlan, dietGoals, onBack }: DailyMealPlanProps) {
  const getMealIcon = (mealTime: string) => {
    switch (mealTime) {
      case 'breakfast':
        return <Sunrise className="w-5 h-5" />;
      case 'lunch':
        return <Sun className="w-5 h-5" />;
      case 'dinner':
        return <Moon className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const getMacroStatus = (actual: number, target: number) => {
    const percentDiff = Math.abs((actual - target) / target) * 100;
    return percentDiff <= 10;
  };

  const meals = [
    { time: 'breakfast', meal: mealPlan.breakfast },
    { time: 'lunch', meal: mealPlan.lunch },
    { time: 'dinner', meal: mealPlan.dinner }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="ghost" onClick={onBack} className="mb-6">
        ← Change Preferences
      </Button>

      <div className="mb-6">
        <h2 className="mb-2">Your Daily Meal Plan</h2>
        <p className="text-muted-foreground">
          Optimized to meet your macro goals across 3 meals
        </p>
      </div>

      {/* Daily Totals Summary */}
      <Card className="p-6 mb-6 bg-primary/5">
        <h3 className="mb-4">Daily Totals</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <p className="text-sm text-muted-foreground">Calories</p>
              {getMacroStatus(mealPlan.totalCalories, dietGoals.calories) ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <AlertCircle className="w-4 h-4 text-orange-500" />
              )}
            </div>
            <p className="text-lg">{mealPlan.totalCalories}</p>
            <p className="text-xs text-muted-foreground">Goal: {dietGoals.calories}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <p className="text-sm text-muted-foreground">Protein</p>
              {getMacroStatus(mealPlan.totalProtein, dietGoals.protein) ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <AlertCircle className="w-4 h-4 text-orange-500" />
              )}
            </div>
            <p className="text-lg">{mealPlan.totalProtein}g</p>
            <p className="text-xs text-muted-foreground">Goal: {dietGoals.protein}g</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <p className="text-sm text-muted-foreground">Carbs</p>
              {getMacroStatus(mealPlan.totalCarbs, dietGoals.carbs) ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <AlertCircle className="w-4 h-4 text-orange-500" />
              )}
            </div>
            <p className="text-lg">{mealPlan.totalCarbs}g</p>
            <p className="text-xs text-muted-foreground">Goal: {dietGoals.carbs}g</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <p className="text-sm text-muted-foreground">Fats</p>
              {getMacroStatus(mealPlan.totalFats, dietGoals.fats) ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <AlertCircle className="w-4 h-4 text-orange-500" />
              )}
            </div>
            <p className="text-lg">{mealPlan.totalFats}g</p>
            <p className="text-xs text-muted-foreground">Goal: {dietGoals.fats}g</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <DollarSign className="w-4 h-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Total Cost</p>
            </div>
            <p className="text-lg">${mealPlan.totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </Card>

      {/* Individual Meals */}
      <div className="space-y-4">
        {meals.map(({ time, meal }) => (
          <Card key={time} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                {getMealIcon(time)}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="capitalize">{time}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {meal.restaurantName}
                    </Badge>
                  </div>
                  <h4>{meal.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{meal.description}</p>
                </div>
              </div>
              <p className="text-lg">${meal.price.toFixed(2)}</p>
            </div>

            <div className="grid grid-cols-4 gap-3 mt-4">
              <div className="text-center p-3 bg-muted rounded">
                <p className="text-xs text-muted-foreground mb-1">Calories</p>
                <p className="text-sm">{meal.calories}</p>
              </div>
              <div className="text-center p-3 bg-muted rounded">
                <p className="text-xs text-muted-foreground mb-1">Protein</p>
                <p className="text-sm">{meal.protein}g</p>
              </div>
              <div className="text-center p-3 bg-muted rounded">
                <p className="text-xs text-muted-foreground mb-1">Carbs</p>
                <p className="text-sm">{meal.carbs}g</p>
              </div>
              <div className="text-center p-3 bg-muted rounded">
                <p className="text-xs text-muted-foreground mb-1">Fats</p>
                <p className="text-sm">{meal.fats}g</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

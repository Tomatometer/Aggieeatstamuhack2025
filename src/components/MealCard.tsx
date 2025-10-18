import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Meal, DietGoals } from '../types';
import { Check, X } from 'lucide-react';

interface MealCardProps {
  meal: Meal;
  dietGoals: DietGoals;
}

export function MealCard({ meal, dietGoals }: MealCardProps) {
  const calculateMatch = () => {
    const caloriesDiff = Math.abs(meal.calories - dietGoals.calories);
    const proteinDiff = Math.abs(meal.protein - dietGoals.protein);
    const carbsDiff = Math.abs(meal.carbs - dietGoals.carbs);
    const fatsDiff = Math.abs(meal.fats - dietGoals.fats);
    
    const totalDiff = caloriesDiff + proteinDiff + carbsDiff + fatsDiff;
    const maxPossibleDiff = dietGoals.calories + dietGoals.protein + dietGoals.carbs + dietGoals.fats;
    
    return Math.max(0, 100 - (totalDiff / maxPossibleDiff) * 100);
  };

  const matchScore = calculateMatch();
  const isGoodMatch = matchScore >= 70;

  const getMacroStatus = (actual: number, target: number) => {
    const diff = Math.abs(actual - target);
    const percentDiff = (diff / target) * 100;
    return percentDiff <= 20;
  };

  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <h4 className="mb-1">{meal.name}</h4>
          <p className="text-sm text-muted-foreground mb-3">{meal.description}</p>
        </div>
        <div className="text-right ml-4">
          <p className="text-lg">${meal.price.toFixed(2)}</p>
          {isGoodMatch && (
            <Badge variant="default" className="mt-1">
              <Check className="w-3 h-3 mr-1" />
              Great Match
            </Badge>
          )}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mt-4">
        <div className="text-center p-2 bg-muted rounded">
          <div className="flex items-center justify-center gap-1">
            <p className="text-xs text-muted-foreground">Calories</p>
            {getMacroStatus(meal.calories, dietGoals.calories) ? (
              <Check className="w-3 h-3 text-green-600" />
            ) : (
              <X className="w-3 h-3 text-orange-500" />
            )}
          </div>
          <p className="text-sm mt-1">{meal.calories}</p>
        </div>
        <div className="text-center p-2 bg-muted rounded">
          <div className="flex items-center justify-center gap-1">
            <p className="text-xs text-muted-foreground">Protein</p>
            {getMacroStatus(meal.protein, dietGoals.protein) ? (
              <Check className="w-3 h-3 text-green-600" />
            ) : (
              <X className="w-3 h-3 text-orange-500" />
            )}
          </div>
          <p className="text-sm mt-1">{meal.protein}g</p>
        </div>
        <div className="text-center p-2 bg-muted rounded">
          <div className="flex items-center justify-center gap-1">
            <p className="text-xs text-muted-foreground">Carbs</p>
            {getMacroStatus(meal.carbs, dietGoals.carbs) ? (
              <Check className="w-3 h-3 text-green-600" />
            ) : (
              <X className="w-3 h-3 text-orange-500" />
            )}
          </div>
          <p className="text-sm mt-1">{meal.carbs}g</p>
        </div>
        <div className="text-center p-2 bg-muted rounded">
          <div className="flex items-center justify-center gap-1">
            <p className="text-xs text-muted-foreground">Fats</p>
            {getMacroStatus(meal.fats, dietGoals.fats) ? (
              <Check className="w-3 h-3 text-green-600" />
            ) : (
              <X className="w-3 h-3 text-orange-500" />
            )}
          </div>
          <p className="text-sm mt-1">{meal.fats}g</p>
        </div>
      </div>
    </Card>
  );
}

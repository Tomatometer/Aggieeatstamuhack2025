import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Restaurant, DietGoals } from '../types';
import { MapPin } from 'lucide-react';
import { MealCard } from './MealCard';

interface RestaurantCardProps {
  restaurant: Restaurant;
  dietGoals: DietGoals;
}

export function RestaurantCard({ restaurant, dietGoals }: RestaurantCardProps) {
  return (
    <Card className="p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="mb-2">{restaurant.name}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{restaurant.location}</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="mb-3">Recommended Meals</h4>
        <div className="space-y-3">
          {restaurant.meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} dietGoals={dietGoals} />
          ))}
        </div>
      </div>
    </Card>
  );
}

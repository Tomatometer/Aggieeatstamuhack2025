import { UserPreferences, Restaurant } from '../types';
import { RestaurantCard } from './RestaurantCard';
import { Button } from './ui/button';
import { ArrowLeft, Filter } from 'lucide-react';
import { Badge } from './ui/badge';

interface RestaurantResultsProps {
  preferences: UserPreferences;
  restaurants: Restaurant[];
  onBack: () => void;
}

export function RestaurantResults({ preferences, restaurants, onBack }: RestaurantResultsProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Button variant="ghost" onClick={onBack} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Change Preferences
        </Button>
        
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="mb-2">Your Matches</h2>
            <p className="text-muted-foreground">
              Found {restaurants.length} restaurants matching your preferences
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filtered by:</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="outline">
            {preferences.location}
          </Badge>
          <Badge variant="outline">
            {preferences.mood}
          </Badge>
          <Badge variant="outline">
            {preferences.dietGoals.calories} cal
          </Badge>
          <Badge variant="outline">
            {preferences.dietGoals.protein}g protein
          </Badge>
          <Badge variant="outline">
            {preferences.dietGoals.carbs}g carbs
          </Badge>
          <Badge variant="outline">
            {preferences.dietGoals.fats}g fats
          </Badge>
        </div>
      </div>

      {restaurants.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No restaurants found matching your criteria. Try adjusting your preferences.
          </p>
        </div>
      ) : (
        <div>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              dietGoals={preferences.dietGoals}
            />
          ))}
        </div>
      )}
    </div>
  );
}

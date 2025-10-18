import { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { UserPreferences } from '../types';
import { cuisineTypes, locations } from '../data/mockData';
import { Target, MapPin, Utensils } from 'lucide-react';

interface DietGoalsFormProps {
  onSubmit: (preferences: UserPreferences) => void;
}

export function DietGoalsForm({ onSubmit }: DietGoalsFormProps) {
  const [calories, setCalories] = useState<string>('2000');
  const [protein, setProtein] = useState<string>('150');
  const [carbs, setCarbs] = useState<string>('200');
  const [fats, setFats] = useState<string>('65');
  const [location, setLocation] = useState<string>('No Preference');
  const [mood, setMood] = useState<string>('All Cuisines');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const preferences: UserPreferences = {
      dietGoals: {
        calories: parseInt(calories) || 0,
        protein: parseInt(protein) || 0,
        carbs: parseInt(carbs) || 0,
        fats: parseInt(fats) || 0
      },
      location,
      mood
    };
    
    onSubmit(preferences);
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5" />
            Daily Macro Goals
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="calories">Calories</Label>
              <Input
                id="calories"
                type="number"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                placeholder="2000"
              />
            </div>
            <div>
              <Label htmlFor="protein">Protein (g)</Label>
              <Input
                id="protein"
                type="number"
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                placeholder="150"
              />
            </div>
            <div>
              <Label htmlFor="carbs">Carbs (g)</Label>
              <Input
                id="carbs"
                type="number"
                value={carbs}
                onChange={(e) => setCarbs(e.target.value)}
                placeholder="200"
              />
            </div>
            <div>
              <Label htmlFor="fats">Fats (g)</Label>
              <Input
                id="fats"
                type="number"
                value={fats}
                onChange={(e) => setFats(e.target.value)}
                placeholder="65"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5" />
            Location Preference
          </h2>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <h2 className="flex items-center gap-2 mb-4">
            <Utensils className="w-5 h-5" />
            Cuisine Mood
          </h2>
          <Select value={mood} onValueChange={setMood}>
            <SelectTrigger>
              <SelectValue placeholder="Select cuisine type" />
            </SelectTrigger>
            <SelectContent>
              {cuisineTypes.map((cuisine) => (
                <SelectItem key={cuisine} value={cuisine}>
                  {cuisine}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full">
          Find Matching Restaurants
        </Button>
      </form>
    </Card>
  );
}

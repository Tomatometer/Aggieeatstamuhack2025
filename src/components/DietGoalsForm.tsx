import { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { UserPreferences, Allergen, DietaryPreference } from '../types';
import { locations } from '../data/mockData';
import { Target, MapPin, Wallet, SlidersHorizontal, AlertCircle, Leaf } from 'lucide-react';

interface DietGoalsFormProps {
  onSubmit: (preferences: UserPreferences) => void;
  initialPreferences?: UserPreferences | null;
}

export function DietGoalsForm({ onSubmit, initialPreferences }: DietGoalsFormProps) {
  const [calories, setCalories] = useState<string>(
    initialPreferences?.dietGoals.calories.toString() || '2000'
  );
  const [protein, setProtein] = useState<string>(
    initialPreferences?.dietGoals.protein.toString() || '150'
  );
  const [carbs, setCarbs] = useState<string>(
    initialPreferences?.dietGoals.carbs.toString() || '200'
  );
  const [fats, setFats] = useState<string>(
    initialPreferences?.dietGoals.fats.toString() || '65'
  );
  const [location, setLocation] = useState<string>(
    initialPreferences?.location || 'No Preference'
  );

  // Allergies and dietary preferences states
  const [selectedAllergies, setSelectedAllergies] = useState<Allergen[]>(
    initialPreferences?.allergies || []
  );
  const [selectedDietaryPreferences, setSelectedDietaryPreferences] = useState<DietaryPreference[]>(
    initialPreferences?.dietaryPreferences || []
  );

  // Budget states
  const [mealSwipes, setMealSwipes] = useState<string>(
    initialPreferences?.budget.mealSwipes.toString() || '2'
  );
  const [maroonMeals, setMaroonMeals] = useState<string>(
    initialPreferences?.budget.maroonMeals.toString() || '1'
  );
  const [diningDollars, setDiningDollars] = useState<string>(
    initialPreferences?.budget.diningDollars.toString() || '20'
  );
  const [realDollars, setRealDollars] = useState<string>(
    initialPreferences?.budget.realDollars.toString() || '15'
  );

  // Macro threshold states (percentage)
  const [caloriesThreshold, setCaloriesThreshold] = useState([
    initialPreferences?.macroThresholds.calories || 10
  ]);
  const [proteinThreshold, setProteinThreshold] = useState([
    initialPreferences?.macroThresholds.protein || 15
  ]);
  const [carbsThreshold, setCarbsThreshold] = useState([
    initialPreferences?.macroThresholds.carbs || 15
  ]);
  const [fatsThreshold, setFatsThreshold] = useState([
    initialPreferences?.macroThresholds.fats || 15
  ]);

  const allergenOptions: { value: Allergen; label: string }[] = [
    { value: 'dairy', label: 'Dairy' },
    { value: 'eggs', label: 'Eggs' },
    { value: 'fish', label: 'Fish' },
    { value: 'shellfish', label: 'Shellfish' },
    { value: 'treeNuts', label: 'Tree Nuts' },
    { value: 'peanuts', label: 'Peanuts' },
    { value: 'wheat', label: 'Wheat' },
    { value: 'soy', label: 'Soy' },
  ];

  const dietaryPreferenceOptions: { value: DietaryPreference; label: string }[] = [
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'halal', label: 'Halal' },
    { value: 'glutenFree', label: 'Gluten Free' },
  ];

  const toggleAllergen = (allergen: Allergen) => {
    setSelectedAllergies((prev) =>
      prev.includes(allergen)
        ? prev.filter((a) => a !== allergen)
        : [...prev, allergen]
    );
  };

  const toggleDietaryPreference = (preference: DietaryPreference) => {
    setSelectedDietaryPreferences((prev) =>
      prev.includes(preference)
        ? prev.filter((p) => p !== preference)
        : [...prev, preference]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const preferences: UserPreferences = {
      dietGoals: {
        calories: parseInt(calories) || 0,
        protein: parseInt(protein) || 0,
        carbs: parseInt(carbs) || 0,
        fats: parseInt(fats) || 0
      },
      macroThresholds: {
        calories: caloriesThreshold[0],
        protein: proteinThreshold[0],
        carbs: carbsThreshold[0],
        fats: fatsThreshold[0]
      },
      budget: {
        mealSwipes: parseInt(mealSwipes) || 0,
        maroonMeals: parseInt(maroonMeals) || 0,
        diningDollars: parseFloat(diningDollars) || 0,
        realDollars: parseFloat(realDollars) || 0
      },
      location,
      allergies: selectedAllergies,
      dietaryPreferences: selectedDietaryPreferences
    };
    
    onSubmit(preferences);
  };

  return (
    <Card className="p-6 max-w-3xl mx-auto">
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
            <SlidersHorizontal className="w-5 h-5" />
            Macro Thresholds (% tolerance)
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <Label>Calories Threshold</Label>
                <span className="text-sm text-muted-foreground">±{caloriesThreshold[0]}%</span>
              </div>
              <Slider
                value={caloriesThreshold}
                onValueChange={setCaloriesThreshold}
                min={5}
                max={50}
                step={5}
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <Label>Protein Threshold</Label>
                <span className="text-sm text-muted-foreground">±{proteinThreshold[0]}%</span>
              </div>
              <Slider
                value={proteinThreshold}
                onValueChange={setProteinThreshold}
                min={5}
                max={50}
                step={5}
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <Label>Carbs Threshold</Label>
                <span className="text-sm text-muted-foreground">±{carbsThreshold[0]}%</span>
              </div>
              <Slider
                value={carbsThreshold}
                onValueChange={setCarbsThreshold}
                min={5}
                max={50}
                step={5}
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <Label>Fats Threshold</Label>
                <span className="text-sm text-muted-foreground">±{fatsThreshold[0]}%</span>
              </div>
              <Slider
                value={fatsThreshold}
                onValueChange={setFatsThreshold}
                min={5}
                max={50}
                step={5}
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="flex items-center gap-2 mb-4">
            <Wallet className="w-5 h-5" />
            Budget
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="mealSwipes">Meal Swipes</Label>
              <Input
                id="mealSwipes"
                type="number"
                value={mealSwipes}
                onChange={(e) => setMealSwipes(e.target.value)}
                placeholder="2"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Unlimited dining hall access
              </p>
            </div>
            <div>
              <Label htmlFor="maroonMeals">Maroon Meals</Label>
              <Input
                id="maroonMeals"
                type="number"
                value={maroonMeals}
                onChange={(e) => setMaroonMeals(e.target.value)}
                placeholder="1"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Uses 1 Meal Swipe for specific items
              </p>
            </div>
            <div>
              <Label htmlFor="diningDollars">Dining Dollars ($)</Label>
              <Input
                id="diningDollars"
                type="number"
                step="0.01"
                value={diningDollars}
                onChange={(e) => setDiningDollars(e.target.value)}
                placeholder="20.00"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Campus retail locations only
              </p>
            </div>
            <div>
              <Label htmlFor="realDollars">Real Dollars ($)</Label>
              <Input
                id="realDollars"
                type="number"
                step="0.01"
                value={realDollars}
                onChange={(e) => setRealDollars(e.target.value)}
                placeholder="15.00"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Accepted everywhere
              </p>
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
            <AlertCircle className="w-5 h-5" />
            Allergies
          </h2>
          <p className="text-sm text-muted-foreground mb-3">
            Select any allergies to avoid meals containing these ingredients
          </p>
          <div className="grid grid-cols-2 gap-3">
            {allergenOptions.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <Checkbox
                  id={`allergen-${option.value}`}
                  checked={selectedAllergies.includes(option.value)}
                  onCheckedChange={() => toggleAllergen(option.value)}
                />
                <label
                  htmlFor={`allergen-${option.value}`}
                  className="text-sm cursor-pointer"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="flex items-center gap-2 mb-4">
            <Leaf className="w-5 h-5" />
            Dietary Preferences
          </h2>
          <p className="text-sm text-muted-foreground mb-3">
            Select dietary preferences - only meals matching ALL selected preferences will be shown
          </p>
          <div className="grid grid-cols-2 gap-3">
            {dietaryPreferenceOptions.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <Checkbox
                  id={`dietary-${option.value}`}
                  checked={selectedDietaryPreferences.includes(option.value)}
                  onCheckedChange={() => toggleDietaryPreference(option.value)}
                />
                <label
                  htmlFor={`dietary-${option.value}`}
                  className="text-sm cursor-pointer"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Button type="submit" className="w-full">
          Find My Meal Plan
        </Button>
      </form>
    </Card>
  );
}

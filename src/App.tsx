import { useState } from 'react';
import { DietGoalsForm } from './components/DietGoalsForm';
import { DailyMealPlanComponent } from './components/DailyMealPlan';
import { UserPreferences, DailyMealPlan } from './types';
import { findOptimalMealPlan } from './utils/mealSelector';
import { Utensils } from 'lucide-react';
import { Button } from './components/ui/button';

export default function App() {
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const [mealPlan, setMealPlan] = useState<DailyMealPlan | null>(null);
  const [showNoResults, setShowNoResults] = useState(false);

  const handlePreferencesSubmit = (newPreferences: UserPreferences) => {
    setPreferences(newPreferences);
    const plan = findOptimalMealPlan(newPreferences);
    
    if (plan) {
      setMealPlan(plan);
      setShowNoResults(false);
    } else {
      setMealPlan(null);
      setShowNoResults(true);
    }
  };

  const handleBack = () => {
    // Don't clear preferences - just reset the view state
    setMealPlan(null);
    setShowNoResults(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Utensils className="w-8 h-8" />
            <h1>Macro Match</h1>
          </div>
          <p className="text-muted-foreground mt-2">
            Find the perfect 3-meal plan that matches your daily macro goals and budget
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {!mealPlan && !showNoResults ? (
          <DietGoalsForm 
            onSubmit={handlePreferencesSubmit} 
            initialPreferences={preferences}
          />
        ) : mealPlan ? (
          <DailyMealPlanComponent
            mealPlan={mealPlan}
            dietGoals={preferences.dietGoals}
            onBack={handleBack}
          />
        ) : showNoResults ? (
          <div className="max-w-2xl mx-auto text-center py-12">
            <div className="mb-6">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-muted-foreground" />
              </div>
              <h2 className="mb-2">No Meals Found</h2>
              <p className="text-muted-foreground">
                Sorry, there are no meals within your preferences. Please try adjusting your filters.
              </p>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground mb-6">
              <p>Try these adjustments:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Increase your macro thresholds to allow more flexibility</li>
                <li>Adjust your budget to include more payment options</li>
                <li>Change your location preference to "No Preference"</li>
                <li>Select "All Cuisines" for more meal options</li>
              </ul>
            </div>
            <Button onClick={handleBack}>
              Adjust Preferences
            </Button>
          </div>
        ) : null}
      </main>

      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>Macro Match - Your personalized daily meal planning assistant</p>
        </div>
      </footer>
    </div>
  );
}

import { useState } from 'react';
import { DietGoalsForm } from './components/DietGoalsForm';
import { MealPlanCarousel } from './components/MealPlanCarousel';
import { UserPreferences, DailyMealPlan } from './types';
import { findOptimalMealPlans } from './utils/mealSelector';
import { Utensils, Loader2 } from 'lucide-react';
import { Button } from './components/ui/button';

export default function App() {
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const [mealPlans, setMealPlans] = useState<DailyMealPlan[]>([]);
  const [showNoResults, setShowNoResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePreferencesSubmit = async (newPreferences: UserPreferences) => {
    setPreferences(newPreferences);
    setIsLoading(true);
    
    // Use double requestAnimationFrame + setTimeout to ensure animations render smoothly
    // This gives the browser time to paint several frames before the heavy calculation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const plans = findOptimalMealPlans(newPreferences, 5);
          
          if (plans.length > 0) {
            setMealPlans(plans);
            setShowNoResults(false);
          } else {
            setMealPlans([]);
            setShowNoResults(true);
          }
          setIsLoading(false);
        }, 100);
      });
    });
  };

  const handleBack = () => {
    // Don't clear preferences - just reset the view state
    setMealPlans([]);
    setShowNoResults(false);
    setIsLoading(false);
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
        {isLoading ? (
          <div className="max-w-2xl mx-auto text-center py-12">
            <div className="mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
              </div>
              <h2 className="mb-2">Finding Your Perfect Meals</h2>
              <p className="text-muted-foreground">
                Analyzing dining options and calculating optimal combinations...
              </p>
            </div>
            <div className="space-y-3 max-w-md mx-auto">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Filtering by location and budget</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-100" />
                <span>Matching meals to your macro goals</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-200" />
                <span>Creating optimal 3-meal combinations</span>
              </div>
            </div>
          </div>
        ) : mealPlans.length === 0 && !showNoResults ? (
          <DietGoalsForm 
            onSubmit={handlePreferencesSubmit} 
            initialPreferences={preferences}
          />
        ) : mealPlans.length > 0 ? (
          <MealPlanCarousel
            mealPlans={mealPlans}
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

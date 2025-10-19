import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { DailyMealPlan, DietGoals, PaymentType, MealComponent, SelectedMeal } from '../types';
import { Sunrise, Sun, Moon, CreditCard, UtensilsCrossed, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface MealPlanCarouselProps {
  mealPlans: DailyMealPlan[];
  dietGoals: DietGoals;
  onBack: () => void;
}

export function MealPlanCarousel({ mealPlans, dietGoals, onBack }: MealPlanCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mealPlan = mealPlans[currentIndex];

  const nextPlan = () => {
    setCurrentIndex((prev) => (prev + 1) % mealPlans.length);
  };

  const prevPlan = () => {
    setCurrentIndex((prev) => (prev - 1 + mealPlans.length) % mealPlans.length);
  };

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

  const getPaymentLabel = (type: PaymentType, cost: number): string => {
    switch (type) {
      case 'mealSwipe':
        return `${cost} Meal Swipe${cost !== 1 ? 's' : ''}`;
      case 'maroonMeal':
        return `${cost} Maroon Meal${cost !== 1 ? 's' : ''}`;
      case 'diningDollars':
        return `$${cost.toFixed(2)} Dining Dollars`;
      case 'realDollars':
        return `$${cost.toFixed(2)} Real Dollars`;
    }
  };

  const meals: Array<{ time: string; meal: SelectedMeal }> = [
    { time: 'breakfast', meal: mealPlan.breakfast },
    { time: 'lunch', meal: mealPlan.lunch },
    { time: 'dinner', meal: mealPlan.dinner }
  ];

  // Group components by station for dining hall meals
  const groupComponentsByStation = (components: MealComponent[]) => {
    const grouped: Record<string, MealComponent[]> = {};
    components.forEach(component => {
      if (!grouped[component.station]) {
        grouped[component.station] = [];
      }
      grouped[component.station].push(component);
    });
    return grouped;
  };

  const renderMealContent = (meal: SelectedMeal) => {
    if (meal.location.isDiningHall && meal.selectedComponents) {
      // Dining Hall meal with components
      return (
        <>
          <h4 style={{ color: '#000000' }}>Build Your {meal.mealTime.charAt(0).toUpperCase() + meal.mealTime.slice(1)}</h4>
          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <h5 className="text-sm mb-3 flex items-center gap-2" style={{ color: '#000000' }}>
              <UtensilsCrossed className="w-4 h-4" />
              Your Selections
            </h5>
            <div className="space-y-3">
              {Object.entries(groupComponentsByStation(meal.selectedComponents)).map(([station, components]) => (
                <div key={station}>
                  <p className="text-xs uppercase tracking-wide mb-1.5" style={{ color: '#000000' }}>
                    {station}
                  </p>
                  <div className="space-y-1">
                    {components.map(component => (
                      <div key={component.id} className="flex justify-between items-center text-sm">
                        <span style={{ color: '#000000' }}>{component.name}</span>
                        <span className="text-xs" style={{ color: '#000000' }}>
                          {component.macros.calories}cal • {component.macros.protein}p • {component.macros.carbs}c • {component.macros.fats}f
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    } else if (meal.dish) {
      // Restaurant dish
      return (
        <>
          <h4 style={{ color: '#000000' }}>{meal.dish.name}</h4>
          <p className="text-sm mt-1" style={{ color: '#000000' }}>{meal.dish.description}</p>
        </>
      );
    }
    return null;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="ghost" onClick={onBack} className="mb-6" style={{ color: '#D6D3C4' }}>
        ← Change Preferences
      </Button>

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="mb-2" style={{ color: '#D6D3C4' }}>Your Daily Meal Plans</h2>
          <p style={{ color: '#D6D3C4' }}>
            {mealPlans.length} plan{mealPlans.length !== 1 ? 's' : ''} optimized to meet your macro goals and budget
          </p>
        </div>
        {mealPlans.length > 1 && (
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevPlan}
              disabled={mealPlans.length === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm min-w-[60px] text-center" style={{ color: '#D6D3C4' }}>
              {currentIndex + 1} of {mealPlans.length}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={nextPlan}
              disabled={mealPlans.length === 1}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Pagination dots */}
      {mealPlans.length > 1 && (
        <div className="flex justify-center gap-2 mb-6">
          {mealPlans.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to plan ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Daily Totals Summary */}
      <Card className="p-6 mb-6" style={{ backgroundColor: '#707070' }}>
        <h3 className="mb-4" style={{ color: '#000000' }}>Daily Totals</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <p className="text-sm mb-1" style={{ color: '#000000' }}>Calories</p>
            <p className="text-lg" style={{ color: '#000000' }}>{mealPlan.totalCalories}</p>
            <p className="text-xs" style={{ color: '#000000' }}>Goal: {dietGoals.calories}</p>
          </div>
          <div className="text-center">
            <p className="text-sm mb-1" style={{ color: '#000000' }}>Protein</p>
            <p className="text-lg" style={{ color: '#000000' }}>{mealPlan.totalProtein}g</p>
            <p className="text-xs" style={{ color: '#000000' }}>Goal: {dietGoals.protein}g</p>
          </div>
          <div className="text-center">
            <p className="text-sm mb-1" style={{ color: '#000000' }}>Carbs</p>
            <p className="text-lg" style={{ color: '#000000' }}>{mealPlan.totalCarbs}g</p>
            <p className="text-xs" style={{ color: '#000000' }}>Goal: {dietGoals.carbs}g</p>
          </div>
          <div className="text-center">
            <p className="text-sm mb-1" style={{ color: '#000000' }}>Fats</p>
            <p className="text-lg" style={{ color: '#000000' }}>{mealPlan.totalFats}g</p>
            <p className="text-xs" style={{ color: '#000000' }}>Goal: {dietGoals.fats}g</p>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center gap-2 mb-3">
            <CreditCard className="w-4 h-4" style={{ color: '#000000' }} />
            <h4 style={{ color: '#000000' }}>Budget Used</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {mealPlan.budgetUsed.mealSwipes > 0 && (
              <div className="text-center p-2 bg-background rounded">
                <p className="text-xs mb-1" style={{ color: '#000000' }}>Meal Swipes</p>
                <p className="text-sm" style={{ color: '#000000' }}>{mealPlan.budgetUsed.mealSwipes}</p>
              </div>
            )}
            {mealPlan.budgetUsed.maroonMeals > 0 && (
              <div className="text-center p-2 bg-background rounded">
                <p className="text-xs mb-1" style={{ color: '#000000' }}>Maroon Meals</p>
                <p className="text-sm" style={{ color: '#000000' }}>{mealPlan.budgetUsed.maroonMeals}</p>
              </div>
            )}
            {mealPlan.budgetUsed.diningDollars > 0 && (
              <div className="text-center p-2 bg-background rounded">
                <p className="text-xs mb-1" style={{ color: '#000000' }}>Dining Dollars</p>
                <p className="text-sm" style={{ color: '#000000' }}>${mealPlan.budgetUsed.diningDollars.toFixed(2)}</p>
              </div>
            )}
            {mealPlan.budgetUsed.realDollars > 0 && (
              <div className="text-center p-2 bg-background rounded">
                <p className="text-xs mb-1" style={{ color: '#000000' }}>Real Dollars</p>
                <p className="text-sm" style={{ color: '#000000' }}>${mealPlan.budgetUsed.realDollars.toFixed(2)}</p>
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* Individual Meals */}
      <div className="space-y-4">
        {meals.map(({ time, meal }) => (
          <Card key={time} className="p-6" style={{ backgroundColor: '#707070' }}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3 flex-1">
                {getMealIcon(time)}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="capitalize" style={{ color: '#000000' }}>{time}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {meal.location.name}
                    </Badge>
                    {meal.location.isDiningHall && (
                      <Badge variant="outline" className="text-xs">
                        <UtensilsCrossed className="w-3 h-3 mr-1" />
                        Dining Hall
                      </Badge>
                    )}
                  </div>
                  {renderMealContent(meal)}
                </div>
              </div>
              <div className="text-right ml-4">
                <Badge variant="outline" className="whitespace-nowrap">
                  {getPaymentLabel(meal.cost.type, meal.cost.amount)}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 mt-4">
              <div className="text-center p-3 bg-muted rounded">
                <p className="text-xs mb-1" style={{ color: '#000000' }}>Calories</p>
                <p className="text-sm" style={{ color: '#000000' }}>{meal.totalMacros.calories}</p>
              </div>
              <div className="text-center p-3 bg-muted rounded">
                <p className="text-xs mb-1" style={{ color: '#000000' }}>Protein</p>
                <p className="text-sm" style={{ color: '#000000' }}>{meal.totalMacros.protein}g</p>
              </div>
              <div className="text-center p-3 bg-muted rounded">
                <p className="text-xs mb-1" style={{ color: '#000000' }}>Carbs</p>
                <p className="text-sm" style={{ color: '#000000' }}>{meal.totalMacros.carbs}g</p>
              </div>
              <div className="text-center p-3 bg-muted rounded">
                <p className="text-xs mb-1" style={{ color: '#000000' }}>Fats</p>
                <p className="text-sm" style={{ color: '#000000' }}>{meal.totalMacros.fats}g</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

# Database Implementation Guide

## Overview
This document outlines how to implement a production database for the campus meal planning application, including schema design, recommended technologies, and API structure.

## Recommended Technology Stack

### Database: PostgreSQL
**Why PostgreSQL?**
- Excellent support for relational data (restaurants, dishes, components)
- JSON/JSONB support for flexible fields (allergens, dietary preferences)
- Strong data integrity with foreign keys and constraints
- Scalable and widely supported
- Free and open-source

### ORM: Prisma
**Why Prisma?**
- Type-safe database queries
- Automatic TypeScript type generation
- Easy migrations
- Great developer experience
- Works seamlessly with PostgreSQL

### API Framework: Next.js API Routes or Express.js
**Why Next.js/Express?**
- Easy to deploy
- Built-in TypeScript support
- Can be deployed on Vercel, Railway, or any Node.js host
- RESTful API or GraphQL support

## Database Schema

### Tables

#### 1. `dining_locations`
Base table for all dining locations (restaurants and dining halls)

```sql
CREATE TABLE dining_locations (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(100) NOT NULL, -- MSC, Sbisa, Commons, Duncan
  is_dining_hall BOOLEAN NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_location ON dining_locations(location);
CREATE INDEX idx_is_dining_hall ON dining_locations(is_dining_hall);
```

#### 2. `dishes` (for Restaurants only)
Individual menu items at retail locations

```sql
CREATE TABLE dishes (
  id VARCHAR(50) PRIMARY KEY,
  dining_location_id VARCHAR(50) NOT NULL REFERENCES dining_locations(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  meal_times JSONB NOT NULL DEFAULT '["breakfast", "lunch", "dinner"]', -- Can be available at multiple meal times
  
  -- Macros
  calories INTEGER NOT NULL,
  protein INTEGER NOT NULL,
  carbs INTEGER NOT NULL,
  fats INTEGER NOT NULL,
  
  -- Dietary Info (stored as JSON arrays)
  allergens JSONB DEFAULT '[]', -- ["dairy", "eggs", "wheat"]
  dietary_preferences JSONB DEFAULT '[]', -- ["vegetarian", "vegan", "halal", "glutenFree"]
  
  -- Payment costs (nullable if payment type not accepted)
  cost_dining_dollars DECIMAL(6,2),
  cost_real_dollars DECIMAL(6,2),
  cost_maroon_meal INTEGER, -- Usually 1 or NULL
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_dishes_location ON dishes(dining_location_id);
CREATE INDEX idx_dishes_meal_times ON dishes USING GIN(meal_times);
```

#### 3. `dining_hall_payment_costs` (for Dining Halls only)
Payment options for unlimited dining hall access

```sql
CREATE TABLE dining_hall_payment_costs (
  id SERIAL PRIMARY KEY,
  dining_location_id VARCHAR(50) NOT NULL REFERENCES dining_locations(id) ON DELETE CASCADE,
  cost_meal_swipe INTEGER NOT NULL DEFAULT 1,
  cost_dining_dollars DECIMAL(6,2) NOT NULL,
  cost_real_dollars DECIMAL(6,2) NOT NULL,
  
  UNIQUE(dining_location_id)
);
```

#### 4. `stations`
Dining hall stations (Grill, Salad Bar, etc.)

```sql
CREATE TABLE stations (
  id VARCHAR(50) PRIMARY KEY,
  dining_location_id VARCHAR(50) NOT NULL REFERENCES dining_locations(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  meal_time VARCHAR(20) NOT NULL, -- breakfast, lunch, dinner
  display_order INTEGER DEFAULT 0,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  CHECK (meal_time IN ('breakfast', 'lunch', 'dinner'))
);

CREATE INDEX idx_stations_location_time ON stations(dining_location_id, meal_time);
```

#### 5. `meal_components`
Individual food items at dining hall stations

```sql
CREATE TABLE meal_components (
  id VARCHAR(50) PRIMARY KEY,
  station_id VARCHAR(50) NOT NULL REFERENCES stations(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  
  -- Macros
  calories INTEGER NOT NULL,
  protein INTEGER NOT NULL,
  carbs INTEGER NOT NULL,
  fats INTEGER NOT NULL,
  
  -- Dietary Info (stored as JSON arrays)
  allergens JSONB DEFAULT '[]', -- ["dairy", "eggs", "wheat"]
  dietary_preferences JSONB DEFAULT '[]', -- ["vegetarian", "vegan", "halal", "glutenFree"]
  
  display_order INTEGER DEFAULT 0,
  is_available BOOLEAN DEFAULT TRUE,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_components_station ON meal_components(station_id);
CREATE INDEX idx_components_available ON meal_components(is_available);
```

## Prisma Schema

```prisma
// schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model DiningLocation {
  id            String   @id
  name          String
  location      String
  isDiningHall  Boolean  @map("is_dining_hall")
  createdAt     DateTime @default(now()) @map("created_at")
  updatedAt     DateTime @updatedAt @map("updated_at")

  dishes        Dish[]
  paymentCosts  DiningHallPaymentCost?
  stations      Station[]

  @@index([location])
  @@index([isDiningHall])
  @@map("dining_locations")
}

model Dish {
  id                  String          @id
  diningLocationId    String          @map("dining_location_id")
  name                String
  description         String?
  mealTimes           Json            @default("[\"breakfast\", \"lunch\", \"dinner\"]") @map("meal_times")
  
  calories            Int
  protein             Int
  carbs               Int
  fats                Int
  
  allergens           Json            @default("[]")
  dietaryPreferences  Json            @default("[]") @map("dietary_preferences")
  
  costDiningDollars   Decimal?        @map("cost_dining_dollars") @db.Decimal(6, 2)
  costRealDollars     Decimal?        @map("cost_real_dollars") @db.Decimal(6, 2)
  costMaroonMeal      Int?            @map("cost_maroon_meal")
  
  createdAt           DateTime        @default(now()) @map("created_at")
  updatedAt           DateTime        @updatedAt @map("updated_at")
  
  diningLocation      DiningLocation  @relation(fields: [diningLocationId], references: [id], onDelete: Cascade)

  @@index([diningLocationId])
  @@map("dishes")
}

model DiningHallPaymentCost {
  id                 Int             @id @default(autoincrement())
  diningLocationId   String          @unique @map("dining_location_id")
  costMealSwipe      Int             @default(1) @map("cost_meal_swipe")
  costDiningDollars  Decimal         @map("cost_dining_dollars") @db.Decimal(6, 2)
  costRealDollars    Decimal         @map("cost_real_dollars") @db.Decimal(6, 2)
  
  diningLocation     DiningLocation  @relation(fields: [diningLocationId], references: [id], onDelete: Cascade)

  @@map("dining_hall_payment_costs")
}

model Station {
  id                String          @id
  diningLocationId  String          @map("dining_location_id")
  name              String
  mealTime          String          @map("meal_time")
  displayOrder      Int             @default(0) @map("display_order")
  createdAt         DateTime        @default(now()) @map("created_at")
  updatedAt         DateTime        @updatedAt @map("updated_at")
  
  diningLocation    DiningLocation  @relation(fields: [diningLocationId], references: [id], onDelete: Cascade)
  components        MealComponent[]

  @@index([diningLocationId, mealTime])
  @@map("stations")
}

model MealComponent {
  id                  String   @id
  stationId           String   @map("station_id")
  name                String
  
  calories            Int
  protein             Int
  carbs               Int
  fats                Int
  
  allergens           Json     @default("[]")
  dietaryPreferences  Json     @default("[]") @map("dietary_preferences")
  
  displayOrder        Int      @default(0) @map("display_order")
  isAvailable         Boolean  @default(true) @map("is_available")
  createdAt           DateTime @default(now()) @map("created_at")
  updatedAt           DateTime @updatedAt @map("updated_at")
  
  station             Station  @relation(fields: [stationId], references: [id], onDelete: Cascade)

  @@index([stationId])
  @@index([isAvailable])
  @@map("meal_components")
}
```

## API Structure

### API Endpoints

#### GET `/api/dining-locations`
Get all dining locations with their meals/stations

**Query Parameters:**
- `location` (optional): Filter by location (MSC, Sbisa, Commons, Duncan)
- `isDiningHall` (optional): Filter by type (true/false)

**Response Format:**
```typescript
interface ApiResponse {
  success: boolean;
  data: DiningLocation[];
}

// Matches the mockData structure exactly
type DiningLocation = Restaurant | DiningHall;
```

### Example API Implementation (Next.js)

```typescript
// app/api/dining-locations/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { DiningLocation, Restaurant, DiningHall } from '@/types';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const location = searchParams.get('location');
    const isDiningHall = searchParams.get('isDiningHall');

    // Build where clause
    const where: any = {};
    if (location && location !== 'No Preference') {
      where.location = location;
    }
    if (isDiningHall !== null) {
      where.isDiningHall = isDiningHall === 'true';
    }

    // Fetch all dining locations with related data
    const locations = await prisma.diningLocation.findMany({
      where,
      include: {
        dishes: true,
        paymentCosts: true,
        stations: {
          include: {
            components: {
              where: { isAvailable: true },
              orderBy: { displayOrder: 'asc' }
            }
          },
          orderBy: { displayOrder: 'asc' }
        }
      }
    });

    // Transform to match frontend types
    const transformedData: DiningLocation[] = locations.map(loc => {
      if (loc.isDiningHall) {
        // Transform to DiningHall type
        const stationsByMealTime = {
          breakfast: [] as any[],
          lunch: [] as any[],
          dinner: [] as any[]
        };

        loc.stations.forEach(station => {
          const mealTime = station.mealTime as 'breakfast' | 'lunch' | 'dinner';
          stationsByMealTime[mealTime].push({
            id: station.id,
            name: station.name,
            components: station.components.map(c => ({
              id: c.id,
              name: c.name,
              station: station.name,
              macros: {
                calories: c.calories,
                protein: c.protein,
                carbs: c.carbs,
                fats: c.fats
              },
              allergens: c.allergens as string[],
              dietaryPreferences: c.dietaryPreferences as string[]
            }))
          });
        });

        const diningHall: DiningHall = {
          id: loc.id,
          name: loc.name,
          location: loc.location,
          isDiningHall: true,
          stations: {
            breakfast: stationsByMealTime.breakfast.length > 0 
              ? stationsByMealTime.breakfast 
              : undefined,
            lunch: stationsByMealTime.lunch.length > 0 
              ? stationsByMealTime.lunch 
              : undefined,
            dinner: stationsByMealTime.dinner.length > 0 
              ? stationsByMealTime.dinner 
              : undefined
          },
          paymentCosts: {
            mealSwipe: loc.paymentCosts!.costMealSwipe,
            diningDollars: Number(loc.paymentCosts!.costDiningDollars),
            realDollars: Number(loc.paymentCosts!.costRealDollars)
          }
        };
        return diningHall;
      } else {
        // Transform to Restaurant type
        const restaurant: Restaurant = {
          id: loc.id,
          name: loc.name,
          location: loc.location,
          isDiningHall: false,
          dishes: loc.dishes.map(d => ({
            id: d.id,
            name: d.name,
            description: d.description || '',
            macros: {
              calories: d.calories,
              protein: d.protein,
              carbs: d.carbs,
              fats: d.fats
            },
            allergens: d.allergens as string[],
            dietaryPreferences: d.dietaryPreferences as string[],
            paymentCosts: {
              diningDollars: d.costDiningDollars ? Number(d.costDiningDollars) : undefined,
              realDollars: d.costRealDollars ? Number(d.costRealDollars) : undefined,
              maroonMeal: d.costMaroonMeal || undefined
            },
            mealTimes: d.mealTimes as ('breakfast' | 'lunch' | 'dinner')[]
          }))
        };
        return restaurant;
      }
    });

    return NextResponse.json({
      success: true,
      data: transformedData
    });
  } catch (error) {
    console.error('Error fetching dining locations:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch dining locations' },
      { status: 500 }
    );
  }
}
```

### Example Frontend API Call

```typescript
// services/api.ts
import { DiningLocation } from '@/types';

export async function fetchDiningLocations(
  location?: string
): Promise<DiningLocation[]> {
  const params = new URLSearchParams();
  if (location) params.append('location', location);

  const response = await fetch(`/api/dining-locations?${params.toString()}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch dining locations');
  }

  const result = await response.json();
  return result.data;
}
```

### Update `mealSelector.ts` to use API

```typescript
// In utils/mealSelector.ts
import { fetchDiningLocations } from '@/services/api';

export async function findOptimalMealPlan(
  preferences: UserPreferences
): Promise<DailyMealPlan | null> {
  // Fetch real data instead of using mockData
  const diningLocations = await fetchDiningLocations(
    preferences.location !== 'No Preference' ? preferences.location : undefined
  );

  // Rest of the algorithm remains the same...
}
```

## Deployment Options

### Option 1: Vercel + Supabase (Recommended for beginners)
- **Frontend & API**: Deploy on Vercel (free tier available)
- **Database**: Use Supabase PostgreSQL (free tier: 500MB database)
- **Setup Time**: ~30 minutes
- **Cost**: Free for small projects

### Option 2: Railway
- **Full Stack**: Deploy everything on Railway
- **Database**: PostgreSQL included
- **Setup Time**: ~20 minutes
- **Cost**: $5/month usage-based pricing

### Option 3: AWS/Google Cloud (Production-scale)
- **Database**: AWS RDS or Google Cloud SQL
- **API**: AWS Lambda or Cloud Run
- **Setup Time**: ~2-3 hours
- **Cost**: Varies based on usage

## Setup Instructions

### 1. Install Dependencies
```bash
npm install prisma @prisma/client
npm install -D typescript @types/node
```

### 2. Initialize Prisma
```bash
npx prisma init
```

### 3. Set Environment Variables
```env
DATABASE_URL="postgresql://username:password@localhost:5432/meal_planner"
```

### 4. Create Migration
```bash
npx prisma migrate dev --name init
```

### 5. Seed Database
```bash
npx prisma db seed
```

### 6. Generate Prisma Client
```bash
npx prisma generate
```

## Data Management

### Admin Panel Options
1. **Prisma Studio**: Built-in GUI for database management
   ```bash
   npx prisma studio
   ```

2. **Custom Admin Dashboard**: Build with Next.js + React Admin

3. **Direct SQL**: Use pgAdmin or TablePlus for manual updates

## Performance Optimization

1. **Caching**: Use Redis or Next.js cache for frequently accessed data
2. **Indexing**: Already included in schema for common queries
3. **Connection Pooling**: Use Prisma's connection pooling
4. **CDN**: Serve static content through Vercel Edge Network

## Security Considerations

1. **Environment Variables**: Never commit DATABASE_URL
2. **Input Validation**: Validate all API inputs
3. **Rate Limiting**: Implement rate limiting on API routes
4. **SQL Injection**: Prisma automatically prevents SQL injection
5. **CORS**: Configure appropriate CORS policies

This implementation provides a production-ready, scalable solution that maintains the same data structure and functionality as your current mock data while enabling real-time updates and better data management.

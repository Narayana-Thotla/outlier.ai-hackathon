export type RestaurantType = {
  id: string;
  name: string;
  image: string;
  cuisines: string[];
  rating: number;
  deliveryTime: number;
  costForTwo: number;
  discount?: string;
  offers?: string;
  promoted?: boolean;
};

export type Collection = {
  id: string;
  title: string;
  image: string;
  places: number;
};

export type Cuisine = {
  id: string;
  name: string;
  count: number;
};

export type SortOption = 'relevance' | 'rating' | 'deliveryTime' | 'costLowToHigh' | 'costHighToLow';

export type FilterState = {
  cuisines: string[];
  sort: SortOption;
  veg: boolean;
  offers: boolean;
  rating: number | null;
  costForTwo: [number, number] | null;
};

export type Moods = {
  id:string;
  moodType:string;
  image:string;
  tags:string[];
  restaurant:RestaurantType
}
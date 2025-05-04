'use client';

import { useState, useMemo } from 'react';
import RestaurantCard from './restaurant-card';
import { RestaurantType, SortOption } from '@/lib/types';

interface RestaurantGridProps {
  restaurants: RestaurantType[];
  cuisineFilters: string[];
  sortOption: SortOption;
}

export default function RestaurantGrid({ 
  restaurants, 
  cuisineFilters, 
  sortOption 
}: RestaurantGridProps) {
  
  const filteredAndSortedRestaurants = useMemo(() => {
    // Filter restaurants by selected cuisines
    let filtered = restaurants;
    if (cuisineFilters.length > 0) {
      filtered = restaurants.filter(restaurant => 
        restaurant.cuisines.some(cuisine => cuisineFilters.includes(cuisine))
      );
    }
    
    // Sort restaurants based on the selected sort option
    return [...filtered].sort((a, b) => {
      switch (sortOption) {
        case 'rating':
          return b.rating - a.rating;
        case 'deliveryTime':
          return a.deliveryTime - b.deliveryTime;
        case 'costLowToHigh':
          return a.costForTwo - b.costForTwo;
        case 'costHighToLow':
          return b.costForTwo - a.costForTwo;
        default:
          // For 'relevance', show promoted restaurants first
          if (a.promoted && !b.promoted) return -1;
          if (!a.promoted && b.promoted) return 1;
          return 0;
      }
    });
  }, [restaurants, cuisineFilters, sortOption]);

  return (
    <div>
      <h2 className=" text-gray-800 text-4xl font-normal mb-7">
        Restaurants in Hyderabad
        {cuisineFilters.length > 0 && (
          <span className="text-lg font-normal ml-2 text-gray-600">
            with {cuisineFilters.join(', ')}
          </span>
        )}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
      
      {filteredAndSortedRestaurants.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-700">No restaurants found</h3>
          <p className="text-gray-500 mt-2">Try changing your filters or search criteria</p>
        </div>
      )}
    </div>
  );
}
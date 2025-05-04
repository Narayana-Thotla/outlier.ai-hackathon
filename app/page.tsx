"use client";

import { useState } from "react";
import CollectionsCarousel from "@/components/restaurants/collections-carousel";
import FilterBar from "@/components/restaurants/filter-bar";
import RestaurantGrid from "@/components/restaurants/restaurant-grid";
import { restaurants, collections, cuisines, moods } from "@/lib/data";
import { SortOption } from "@/lib/types";
import { useStore } from "@/zustand/zustand-store";
import ExploreByMood from "@/components/restaurants/explore-by-mood";
import { Moods } from "@/lib/types";
import RestaurantGridExploreByMood from "@/components/restaurants/restaurant-grid-exploreByMood";
import { foodsList } from "@/lib/zomato_fake_food_data";

export default function Home() {
  const [activeCuisines, setActiveCuisines] = useState<string[]>([]);
  const [activeSort, setActiveSort] = useState<SortOption>("relevance");
  const currentTab = useStore((state) => state.currentTab);
  const updateTab = useStore((state) => state.updateTab);
  const currentCuisines = useStore((state) => state.currentCuisines);
  const updateCuisines = useStore((state) => state.updateCuisines);

  const handleCuisineFilter = (cuisine: string) => {
    setActiveCuisines((prev) => {
      if (prev.includes(cuisine)) {
        return prev.filter((c) => c !== cuisine);
      } else {
        return [...prev, cuisine];
      }
    });
  };

  const handleSortChange = (sort: SortOption) => {
    setActiveSort(sort);
  };

  return (
    <main>
      <div className="container mx-auto px-4 py-6">
        {/* Banner - mobile only */}
        <div className="md:hidden bg-gradient-to-r from-red-600 to-red-500 text-white p-4 rounded-lg mb-6">
          <h1 className="text-xl font-bold mb-2">
            Find the best restaurants in Hyderabad
          </h1>
          <p>Order food from the finest restaurants near you</p>
        </div>

        {/* Collections */}
        {currentTab === "explorebymood" ? (
          <ExploreByMood collections={moods} />
        ) : (
          <CollectionsCarousel collections={collections} />
        )}

        {/* Filters */}
        <FilterBar
          cuisines={cuisines}
          onCuisineFilter={handleCuisineFilter}
          onSortChange={handleSortChange}
          activeCuisines={activeCuisines}
          activeSort={activeSort}
        />

        {/* Restaurant Grid */}
        {currentTab === "explorebymood" ? (
          <RestaurantGridExploreByMood
            foodList={foodsList}
            cuisineFilters={currentCuisines}
            sortOption={activeSort}
          />
        ) : (
          <RestaurantGrid
            restaurants={restaurants}
            cuisineFilters={activeCuisines}
            sortOption={activeSort}
          />
        )}
      </div>
    </main>
  );
}

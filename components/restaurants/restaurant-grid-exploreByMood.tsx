// 'use client';

// import { useState, useMemo } from 'react';
// import RestaurantCard from './restaurant-card';
// import { RestaurantType, SortOption,Moods } from '@/lib/types';
// import { foodsList } from '@/lib/zomato_fake_food_data';
// import { moods } from '@/lib/data';
// import { useStore } from '@/zustand/zustand-store';

// type RestaurantItem = {
//     restaurant_name: string;
//     dish_name: string;
//     price: number;
//     rating: number;
//     description: string;
//     location: string;
//     image_url: string;
//   };

// interface RestaurantGridProps {
// //   restaurants: RestaurantType[];
//   foodList: RestaurantItem[];
// //   moods:Moods[]
//   cuisineFilters: string[];
//   sortOption: SortOption;
// }

// export default function RestaurantGridExploreByMood({ 
//   foodList, 
//   cuisineFilters, 
//   sortOption 
// }: RestaurantGridProps) {
    
//       const currentCuisines = useStore((state) => state.currentCuisines);
//       const updateCuisines = useStore((state) => state.updateCuisines);
    
  
//   const filteredAndSortedRestaurants = useMemo(() => {
//     // Filter restaurants by selected cuisines
//     let filtered = restaurants;
//     if (cuisineFilters.length > 0) {
//       filtered = foodsList.filter(restaurant => 
//         restaurant.dish_name.some(cuisine => cuisineFilters.includes(cuisine))
//         // currentCuisines.some(cuisine => cuisineFilters.includes(cuisine))
//       );
//     }
    
//     // Sort restaurants based on the selected sort option
//     return [...filtered].sort((a, b) => {
//       switch (sortOption) {
//         case 'rating':
//           return b.rating - a.rating;
//         case 'deliveryTime':
//           return a.deliveryTime - b.deliveryTime;
//         case 'costLowToHigh':
//           return a.costForTwo - b.costForTwo;
//         case 'costHighToLow':
//           return b.costForTwo - a.costForTwo;
//         default:
//           // For 'relevance', show promoted restaurants first
//           if (a.promoted && !b.promoted) return -1;
//           if (!a.promoted && b.promoted) return 1;
//           return 0;
//       }
//     });
//   }, [restaurants, cuisineFilters, sortOption]);

//   return (
//     <div>
//       <h2 className=" text-gray-800 text-4xl font-normal mb-7">
//         Restaurants in Hyderabad
//         {cuisineFilters.length > 0 && (
//           <span className="text-lg font-normal ml-2 text-gray-600">
//             with {cuisineFilters.join(', ')}
//           </span>
//         )}
//       </h2>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredAndSortedRestaurants.map((restaurant) => (
//           <RestaurantCard key={restaurant.id} restaurant={restaurant} />
//         ))}
//       </div>
      
//       {filteredAndSortedRestaurants.length === 0 && (
//         <div className="text-center py-12">
//           <h3 className="text-xl font-medium text-gray-700">No restaurants found</h3>
//           <p className="text-gray-500 mt-2">Try changing your filters or search criteria</p>
//         </div>
//       )}
//     </div>
//   );
// }

//----------------------------------------------------------------------------------------------------------

// 'use client';

// import { useState, useMemo,useEffect } from 'react';
// import RestaurantCard from './restaurant-card';
// import { SortOption } from '@/lib/types';
// import { useStore } from '@/zustand/zustand-store';

// type RestaurantItem = {
//   restaurant_name: string;
//   dish_name: string;
//   price: number;
//   rating: number;
//   description: string;
//   location: string;
//   image_url: string;
// };

// interface RestaurantGridProps {
//   foodList: RestaurantItem[];
//   cuisineFilters: string[];
//   sortOption: SortOption;
// }

// export default function RestaurantGridExploreByMood({ 
//   foodList, 
//   cuisineFilters, 
//   sortOption 
// }: RestaurantGridProps) {
  
//   const currentCuisines = useStore((state) => state.currentCuisines);
//   const updateCuisines = useStore((state) => state.updateCuisines);
//   const [filtered, setfiltered] = useState([])
//   const [filteredAndSortedRestaurants, setFilteredAndSortedRestaurants] = useState<RestaurantItem[]>([]);


// //   const filteredAndSortedRestaurants = useMemo(() => {
// //     // Filter restaurants by selected cuisines
// //     let filtered = foodList;
    
// //     if (cuisineFilters.length > 0) {
// //       filtered = foodList.filter(item => {
// //         // Check if any cuisine filter matches (or is similar to) the dish name
// //         // Converting both to lowercase for case-insensitive comparison
// //         const lowerDishName = item.dish_name.toLowerCase();
// //         const lowerDishDescription = item.description.toLowerCase()
// //         // return cuisineFilters.some(cuisine => 
// //         //   lowerDishName.includes(cuisine.toLowerCase()) || 
// //         //   cuisine.toLowerCase().includes(lowerDishName) 
// //         // );


// //         return cuisineFilters.some(cuisine => {
// //             const lowerCuisine = cuisine.toLowerCase();
// //             return lowerDishName.includes(lowerCuisine) || 
// //                    lowerCuisine.includes(lowerDishName) &&
// //                    lowerDishDescription.includes(lowerCuisine) ||
// //                    lowerCuisine.includes(lowerDishDescription);
// //           });
// //       });
// //     }
    
// //     // Sort restaurants based on the selected sort option
// //     return [...filtered].sort((a, b) => {
// //       switch (sortOption) {
// //         case 'rating':
// //           return b.rating - a.rating;
// //         case 'deliveryTime':
// //           // If you don't have deliveryTime in your data model, you might want to handle this differently
// //           return 0;
// //         case 'costLowToHigh':
// //           return a.price - b.price;
// //         case 'costHighToLow':
// //           return b.price - a.price;
// //         default:
// //           // For 'relevance' or any other case
// //           return 0;
// //       }
      
// //     console.log('filtered:',filtered)
// //     });
// //   }, [foodList, cuisineFilters, sortOption]);


// useEffect(() => {
//     // Filter restaurants by selected cuisines
//     let filtered = [...foodList];
    
//     if (cuisineFilters.length > 0) {
//       filtered = foodList.filter(item => {
//         // Check if any cuisine filter matches (or is similar to) the dish name or description
//         const lowerDishName = item.dish_name.toLowerCase();
//         const lowerDishDescription = item.description.toLowerCase();
        
//         return cuisineFilters.some(cuisine => {
//           const lowerCuisine = cuisine.toLowerCase();
//           return (
//             lowerDishName.includes(lowerCuisine) || 
//             lowerCuisine.includes(lowerDishName) &&
//             lowerDishDescription.includes(lowerCuisine) || 
//             lowerCuisine.includes(lowerDishDescription)
//           );
//         });
//       });
//     }
    
//     // Sort restaurants based on the selected sort option
//     // filtered.sort((a, b) => {
//     //   switch (sortOption) {
//     //     case 'rating':
//     //       return b.rating - a.rating;
//     //     case 'deliveryTime':
//     //       return 0; // No deliveryTime in data model
//     //     case 'costLowToHigh':
//     //       return a.price - b.price;
//     //     case 'costHighToLow':
//     //       return b.price - a.price;
//     //     default:
//     //       return 0; // Default case for 'relevance'
//     //   }
//     // });
    
//     console.log('Filtered restaurants:', filtered);
//     setFilteredAndSortedRestaurants(filtered);
//   }, [foodList, cuisineFilters, sortOption]);

//   {console.log('res in res grid mood:',filteredAndSortedRestaurants)}

//   return (
//     <div>
//       <h2 className="text-gray-800 text-4xl font-normal mb-7">
//         Restaurants in Hyderabad
//         {cuisineFilters.length > 0 && (
//           <span className="text-xl font-normal ml-2 text-gray-600">
//             with {cuisineFilters.join(', ')}
//           </span>
//         )}
        
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredAndSortedRestaurants.map((restaurant, index) => (
            
//           <RestaurantCard key={index} restaurant={restaurant} />
//         ))}
//       </div>
      
//       {filteredAndSortedRestaurants.length === 0 && (
//         <div className="text-center py-12">
//           <h3 className="text-xl font-medium text-gray-700">No restaurants found</h3>
//           <p className="text-gray-500 mt-2">Try changing your filters or search criteria</p>
//         </div>
//       )}
//     </div>
//   );
// }

//-------------------------------------------------------------------------------------------------

'use client';

import { useState, useEffect } from 'react';
import RestaurantCard from './restaurant-card';
import { SortOption } from '@/lib/types';
import { useStore } from '@/zustand/zustand-store';

type RestaurantItem = {
  restaurant_name: string;
  dish_name: string;
  price: number;
  rating: number;
  description: string;
  location: string;
  image_url: string;
};

interface RestaurantGridProps {
  foodList: RestaurantItem[];
  cuisineFilters: string[];
  sortOption: SortOption;
}

export default function RestaurantGridExploreByMood({ 
  foodList, 
  cuisineFilters, 
  sortOption 
}: RestaurantGridProps) {
  
  const currentCuisines = useStore((state) => state.currentCuisines);
  const updateCuisines = useStore((state) => state.updateCuisines);
  
  // State for filtered and sorted restaurants
  const [filteredAndSortedRestaurants, setFilteredAndSortedRestaurants] = useState<RestaurantItem[]>([]);

  // Function to check if a food item matches any cuisine filter
  const matchesCuisineFilter = (item: RestaurantItem, cuisineFilters: string[]) => {
    if (cuisineFilters.length === 0) return true;
    
    const dishName = item.dish_name.toLowerCase();
    const description = item.description.toLowerCase();
    
    for (const cuisine of cuisineFilters) {
      const cuisineLower = cuisine.toLowerCase();
      
      if (description.includes(cuisineLower)) {
        console.log(`Match found: "${item.dish_name}" description contains "${cuisine}"`);
        return true;
      }

      // Check dish name
      if (dishName.includes(cuisineLower)) {
        console.log(`Match found: "${item.dish_name}" contains "${cuisine}"`);
        return true;
      }
      
      // Check description
      
    }
    
    return false;
  };

  // Filter and sort whenever dependencies change
  useEffect(() => {
    console.log('Starting filtering process with:', {
      totalItems: foodList.length,
      cuisineFilters
    });
    
    // Apply filtering
    let filtered: RestaurantItem[] = [];
    
    if (cuisineFilters.length === 0) {
      filtered = [...foodList];
      console.log('No filters applied, using all items');
    } else {
      filtered = foodList.filter(item => matchesCuisineFilter(item, cuisineFilters));
      console.log(`After filtering: ${filtered.length} items matched`);
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortOption) {
        case 'rating':
          return b.rating - a.rating;
        case 'costLowToHigh':
          return a.price - b.price;
        case 'costHighToLow':
          return b.price - a.price;
        case 'deliveryTime':
        default:
          return 0;
      }
    });
    
    console.log('Final filtered and sorted items:', 
      filtered.map(item => ({
        dish: item.dish_name,
        description: item.description.substring(0, 30) + '...',
        price: item.price,
        rating: item.rating
      }))
    );
    
    setFilteredAndSortedRestaurants(filtered);
  }, [foodList, cuisineFilters, sortOption]);

  return (
    <div>
      <h2 className="text-gray-800 text-4xl font-normal mb-7">
        Restaurants in Hyderabad
        {cuisineFilters.length > 0 && (
          <span className="text-lg font-normal ml-2 text-gray-600">
            with {cuisineFilters.join(', ')}
          </span>
        )}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
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
'use client';

import { useState } from 'react';
import { 
  Filter, ChevronDown, SlidersHorizontal, 
  ArrowDownUp, Star, Clock, TrendingUp, Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Cuisine, SortOption } from '@/lib/types';

interface FilterBarProps {
  cuisines: Cuisine[];
  onCuisineFilter: (cuisine: string) => void;
  onSortChange: (sort: SortOption) => void;
  activeCuisines: string[];
  activeSort: SortOption;
}

export default function FilterBar({ 
  cuisines, 
  onCuisineFilter, 
  onSortChange, 
  activeCuisines, 
  activeSort 
}: FilterBarProps) {
  const [showAllCuisines, setShowAllCuisines] = useState(false);
  
  const sortOptions: Array<{value: SortOption, label: string, icon: React.ReactNode}> = [
    { value: 'relevance', label: 'Relevance', icon: <TrendingUp size={16} /> },
    { value: 'rating', label: 'Rating', icon: <Star size={16} /> },
    { value: 'deliveryTime', label: 'Delivery Time', icon: <Clock size={16} /> },
    { value: 'costLowToHigh', label: 'Cost: Low to High', icon: <ArrowDownUp size={16} /> },
    { value: 'costHighToLow', label: 'Cost: High to Low', icon: <ArrowDownUp size={16} className="rotate-180" /> },
  ];
  
  const visibleCuisines = showAllCuisines ? cuisines : cuisines.slice(0, 8);

  return (
    <div className="py-4">
      {/* Cuisines Filter */}
      <div className="flex flex-wrap gap-2 mb-4">
        {visibleCuisines.map((cuisine) => (
          <Button
            key={cuisine.id}
            variant="outline"
            size="sm"
            className={cn(
              "border-gray-300 text-gray-700 hover:bg-gray-50",
              activeCuisines.includes(cuisine.name) && "bg-red-50 text-red-600 border-red-200"
            )}
            onClick={() => onCuisineFilter(cuisine.name)}
          >
            {cuisine.name}
          </Button>
        ))}
        
        {cuisines.length > 8 && (
          <Button 
            variant="outline" 
            size="sm" 
            className="border-gray-300 text-gray-700"
            onClick={() => setShowAllCuisines(!showAllCuisines)}
          >
            {showAllCuisines ? 'Show Less' : 'More'}
            <ChevronDown size={16} className={cn("ml-1", showAllCuisines && "rotate-180")} />
          </Button>
        )}
      </div>

      {/* moods caurousal */}
{/* <div className="flex overflow-x-auto space-x-4 p-2">
  {moods.map((mood) => (
    <button
      key={mood.name}
      className="flex flex-col items-center justify-center w-24 h-24 p-2 bg-white border rounded-lg shadow hover:bg-gray-100"
      onClick={() => handleMoodSelect(mood.id)}
    >
      <div className="text-2xl">{mood.icon}</div>
      <div className="text-sm mt-1 text-center">{mood.label}</div>
    </button>
  ))}
</div> */}


      
      {/* Sort and Filters */}
      <div className="flex items-center gap-3 border-t border-b border-gray-200 py-3">
        {/* Filters button */}
        <Button variant="outline" size="sm" className="border-gray-300 text-gray-700">
          <Filter size={16} className="mr-1" />
          Filters
        </Button>
        
        {/* Sort dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="border-gray-300 text-gray-700">
              <SlidersHorizontal size={16} className="mr-1" />
              Sort by: <span className="font-medium ml-1">{sortOptions.find(opt => opt.value === activeSort)?.label}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {sortOptions.map((option) => (
              <DropdownMenuItem 
                key={option.value}
                className={cn(
                  "flex items-center gap-2",
                  activeSort === option.value && "bg-gray-100"
                )}
                onClick={() => onSortChange(option.value)}
              >
                {option.icon}
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Cost filters */}
        <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hidden md:flex">
          Cost for two
          <ChevronDown size={16} className="ml-1" />
        </Button>
        
        {/* Rating filter */}
        <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hidden md:flex">
          Rating 4.0+
        </Button>
        
        {/* Pure Veg */}
        <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hidden lg:flex">
          Pure Veg
        </Button>
      </div>
    </div>
  );
}
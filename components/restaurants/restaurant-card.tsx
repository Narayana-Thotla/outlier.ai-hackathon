"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { RestaurantType } from "@/lib/types";

interface RestaurantCardProps {
  // restaurant: RestaurantType;
  restaurant: any;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  // console.log("restaurnat detail:", restaurant);
  return (
    <Link href={`/restaurant/${restaurant.id}`}>
      <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-full p-2">
        <div className="relative w-full aspect-video h-72">
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-md"
            priority={false}
          />
          {restaurant.discount && (
            <div className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
              {restaurant.discount}
            </div>
          )}
          {restaurant.promoted && (
            <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
              Promoted
            </div>
          )}
          {restaurant.deliveryTime ? (
            <div className="absolute bottom-2 right-2 bg-white text-xs px-1.5 py-0.5 rounded">
              {restaurant.deliveryTime} min
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="py-1">
          <div className="flex justify-between items-start">
            <h3
              className="font-semibold text-gray-800 truncate"
              title={restaurant.name}
            >
              {restaurant.name ? restaurant.name : restaurant.restaurant_name}
            </h3>
            <div className="flex items-center gap-1 px-1 py-0.5 text-white bg-green-600 rounded text-xs min-w-[36px]">
              <Star size={12} fill="white" strokeWidth={0} />
              <span>{restaurant.rating}</span>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <div
              className="truncate"
              title={
                restaurant.cuisines
                  ? restaurant.cuisines.join(", ")
                  : restaurant.dish_name
              }
            >
              {/* {console.log('restaurant.cuisines:',restaurant)} */}
              {restaurant.cuisines
                ? restaurant.cuisines.join(", ")
                : restaurant.dish_name}
            </div>
            <div>
              ₹
              {restaurant.costForTwo ? restaurant.costForTwo : restaurant.price}{" "}
            </div>
          </div>
          {restaurant.offers && (
            <div className="mt-2 text-xs text-orange-600 flex items-center gap-1 border-t border-dashed border-gray-100 pt-2">
              <span className="font-medium">{restaurant.offers}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

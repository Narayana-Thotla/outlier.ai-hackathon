"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collection, Moods } from "@/lib/types";
import { RestaurantType } from "@/lib/types";
import { useStore } from "@/zustand/zustand-store";

interface CollectionsCarouselProps {
  collections: Moods[];
}

export default function ExploreByMood({
  collections,
}: CollectionsCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const currentTab = useStore((state) => state.currentTab);
  const updateTab = useStore((state) => state.updateTab);
  const currentCuisines = useStore((state) => state.currentCuisines);
  const updateCuisines = useStore((state) => state.updateCuisines);

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { current: container } = carouselRef;
      const scrollAmount =
        direction === "left"
          ? -container.clientWidth / 2
          : container.clientWidth / 2;

      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScrollButtons, 400);
    }
  };

  return (
    <div className="relative py-0">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-4xl font-normal mb-6 text-gray-800 ">
            Pick a Mood
          </h2>
          <p className="text-gray-600">Explore dishes that match your mood.</p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      {/* <div
        ref={carouselRef}
        className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
        onScroll={checkScrollButtons}
      > */}
      {/* {collections.map((collection) => (
          <Link 
            key={collection.id}
            href={`/collections/${collection.id}`}
            className="min-w-[260px]  md:min-w-[370px] rounded-lg overflow-hidden shadow-sm flex-shrink-0"
          >
            <div className="relative h-[450px]">
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                sizes="300px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
              <div className="absolute bottom-0 left-0 p-2 text-white">
                <h3 className="font-bold text-lg">{collection.title}</h3>
                <p className="text-sm">{collection.places} Places</p>
              </div>
            </div> */}
      {/* --------------------------------------------------------------------------------------- */}

      <div className="bg-gray-00 w-full px- py-8">
        {/* <h2 className="text-2xl font-semibold mb-6">
            Inspiration for your first order
          </h2> */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto space-x-4 pb-4 gap-1 scrollbar-hide"
          onScroll={checkScrollButtons}
        >
          {collections.map((item: any) => (
            <div
              key={item.name}
              className="flex flex-col items-center min-w-[260px]  md:min-w-[230px]"
              onClick={(params) => {
                updateCuisines(item.tags);
              }}
            >
              
              <div className="w-40 h-40 gap-6 rounded-full overflow-hidden shadow-md bg-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-2 text-center text-sm font-medium">
                {item.moodType}
                {console.log('mood tags:',item.tags)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* </Link> */}
      {/* ))} */}
      {/* </div> */}
    </div>
  );
}

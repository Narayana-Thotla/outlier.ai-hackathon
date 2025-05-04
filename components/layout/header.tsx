"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, MapPin, ChevronDown, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useStore } from "./../../zustand/zustand-store";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("delivery");
  const currentTab = useStore((state) => state.currentTab);
  const updateTab = useStore((state) => state.updateTab);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container mx-auto px- py- md:py-">
          <div className="flex items-center justify-between p-2.5">
            {/* Logo and mobile menu toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
              <Link href="/" className="text-4xl font-extrabold  text-red-500">
                zomato
              </Link>
            </div>

            {/* Search bar - hidden on mobile */}
            <div className="hidden md:flex items-center flex-1 max-w-3xl ml-0 mr-6 p-2 border border-gray-300 rounded-md overflow-hidden shadow-lg">
              <div className="flex items-center gap-9  px-3 border-r border-gray-300">
                <div className="flex items-center justify-center ">
                  <MapPin size={20} className="text-red-500" />
                  <span className="ml-2 text-gray-700">Hyderabad</span>
                </div>
                <ChevronDown size={16} className="ml-1 text-gray-500" />
              </div>
              <div className="flex flex-1 items-center px-3">
                <Search size={18} className="text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for restaurant, cuisine or a dish"
                  className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            {/* User actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                className="hidden md:flex gap-1 items-center"
              >
                {/* <User size={18} /> */}
                <span className="text-[rgb(120,120,120)] text-xl font-light">
                  Log in
                </span>
              </Button>
              <Button
                variant="ghost"
                className="hidden md:flex text-[rgb(120,120,120)] text-xl font-light"
              >
                Sign up
              </Button>
            </div>
          </div>

          {/* Tab navigation */}
          <div className="flex mt-4 border-b border-gray-200">
            <button
              onClick={() => {
                setActiveTab("dining");
                updateTab("diningout");
              }}
              className={cn(
                "px-4 py-6 font-medium text-gray-600 border-b-2 transition-colors text-xl",
                activeTab === "dining"
                  ? "border-red-500 text-red-500"
                  : "border-transparent"
              )}
            >
              Dining Out
            </button>

            <button
              onClick={() => {
                setActiveTab("delivery");
                updateTab("delivery");
              }}
              className={cn(
                "px-4 py-6 font-medium text-gray-600 border-b-2 transition-colors text-xl",
                activeTab === "delivery"
                  ? "border-red-500 text-red-500"
                  : "border-transparent"
              )}
            >
              Delivery
            </button>

            <button
              onClick={() => {
                setActiveTab("nightlife");
                updateTab("nightlife");
              }}
              className={cn(
                "px-4 py-6 font-medium text-gray-600 border-b-2 transition-colors text-xl",
                activeTab === "nightlife"
                  ? "border-red-500 text-red-500"
                  : "border-transparent"
              )}
            >
              Nightlife
            </button>

            <button
              onClick={() => {
                setActiveTab("ExploreByMood");
                updateTab("explorebymood");
              }}
              className={cn(
                "px-4 py-6 font-medium text-gray-600 border-b-2 transition-colors text-xl",
                activeTab === "ExploreByMood"
                  ? "border-red-500 text-red-500"
                  : "border-transparent"
              )}
            >
              Explore by Mood
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-16 md:hidden">
          <div className="container px-4 py-4 flex flex-col gap-4">
            <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className="flex-1 border-0 outline-none"
              />
            </div>
            <Link href="/login" className="py-3 border-b border-gray-100">
              Log in
            </Link>
            <Link href="/signup" className="py-3 border-b border-gray-100">
              Sign up
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

"use client";
import React from "react";
import { SlidersHorizontal, Search, ChevronDown } from "lucide-react";

type PLPToolbarProps = {
  onOpenFilters: () => void;
};

export default function PLPToolbar({ onOpenFilters }: PLPToolbarProps) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <button onClick={onOpenFilters} className="lg:hidden inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
        <SlidersHorizontal className="h-4 w-4" /> Filters
      </button>
      <div className="relative flex-1 max-w-md hidden lg:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          placeholder="Search for anything..."
          className="w-full h-10 rounded-md border border-gray-300 bg-white pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900"
        />
      </div>
      <div className="ml-auto flex items-center gap-3">
        <label className="text-sm text-gray-600">Sort by:</label>
        <div className="relative">
          <select className="h-10 appearance-none rounded-md border border-gray-300 bg-white pl-3 pr-10 text-sm focus:outline-none cursor-pointer">
            <option>Most Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
      </div>
    </div>
  );
}



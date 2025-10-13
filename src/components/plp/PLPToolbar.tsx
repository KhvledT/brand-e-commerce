"use client";
import React from "react";
import { SlidersHorizontal, Search, ChevronDown } from "lucide-react";
import { SortOption } from "@/types";

type PLPToolbarProps = {
  onOpenFilters: () => void;
  onSearchClick: () => void;
  onSortChange: (value: SortOption) => void;
  currentSort: SortOption;
  totalResults: number;
};

export default function PLPToolbar({ 
  onOpenFilters, 
  onSearchClick, 
  onSortChange, 
  currentSort,
  totalResults 
}: PLPToolbarProps) {
  return (
    <div className="mb-6">
      {/* Results count */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Showing <span className="font-medium text-gray-900">{totalResults}</span> products
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-4 flex-wrap">
        <button 
          onClick={onOpenFilters} 
          className="lg:hidden inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
          aria-label="Open filters"
        >
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
        
        <div className="relative flex-1 max-w-md hidden lg:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          <input
            onClick={onSearchClick}
            placeholder="Search for anything..."
            readOnly
            className="w-full h-10 rounded-md border border-gray-300 bg-white pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 cursor-pointer"
            aria-label="Search products"
          />
        </div>
        
        <div className="ml-auto flex items-center gap-3">
          <label htmlFor="sort-select" className="text-sm text-gray-600 font-medium">
            Sort by:
          </label>
          <div className="relative">
            <select 
              id="sort-select"
              value={currentSort}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="h-10 appearance-none rounded-md border border-gray-300 bg-white pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 cursor-pointer transition-colors hover:border-gray-400"
              aria-label="Sort products by"
            >
              <option value="popular">Most Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest</option>
              <option value="name-asc">Name: A-Z</option>
              <option value="name-desc">Name: Z-A</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}



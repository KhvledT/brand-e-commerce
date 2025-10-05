"use client";
import React from "react";
import FilterContent from "./FilterContent";

type FilterSidebarProps = {
  onFilterClick: () => void;
};

export default function FilterSidebar({ onFilterClick }: FilterSidebarProps) {
  return (
    <aside className="hidden lg:block w-64 shrink-0 sticky top-24 self-start bg-white rounded-lg border border-gray-200 p-4 shadow-sm transition-shadow duration-200 hover:shadow-md" style={{ maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-gray-900">Filters</h2>
        <button 
          onClick={onFilterClick}
          className="text-xs text-gray-600 hover:text-gray-900 transition-colors underline"
          aria-label="Clear all filters"
        >
          Clear all
        </button>
      </div>
      <FilterContent namePrefix="d" onFilterClick={onFilterClick} />
    </aside>
  );
}



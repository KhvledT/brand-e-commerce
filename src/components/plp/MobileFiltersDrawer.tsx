"use client";
import React from "react";
import { Search, X } from "lucide-react";
import FilterContent from "./FilterContent";

type MobileFiltersDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileFiltersDrawer({ open, onClose }: MobileFiltersDrawerProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div onClick={onClose} className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-y-0 left-0 w-80 max-w-[85%] bg-white shadow-xl p-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-medium">Filters</h3>
          <button aria-label="Close filters" onClick={onClose} className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Search inside drawer */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            placeholder="Search for anything..."
            className="w-full h-10 rounded-md border border-gray-300 bg-white pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900"
          />
        </div>

        <FilterContent namePrefix="m" />
      </div>
    </div>
  );
}



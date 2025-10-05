"use client";
import React, { useEffect } from "react";
import { Search, X } from "lucide-react";
import FilterContent from "./FilterContent";

type MobileFiltersDrawerProps = {
  open: boolean;
  onClose: () => void;
  onFilterClick: () => void;
  onSearchClick: () => void;
};

export default function MobileFiltersDrawer({ open, onClose, onFilterClick, onSearchClick }: MobileFiltersDrawerProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [open, onClose]);

  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300" 
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <div className="absolute inset-y-0 left-0 w-80 max-w-[85%] bg-white shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-out">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-900">Filters</h3>
            <button 
              aria-label="Close filters" 
              onClick={onClose} 
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Search inside drawer */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            <input
              onClick={onSearchClick}
              placeholder="Search for anything..."
              readOnly
              className="w-full h-10 rounded-md border border-gray-300 bg-white pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 cursor-pointer"
              aria-label="Search products"
            />
          </div>
        </div>

        <div className="p-4">
          <FilterContent namePrefix="m" onFilterClick={onFilterClick} />
        </div>

        {/* Apply button at bottom */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          <button 
            onClick={onClose}
            className="w-full px-4 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}



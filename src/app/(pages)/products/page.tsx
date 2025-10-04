"use client";
import React from "react";
import { Search,X } from "lucide-react";
import Image from "@/assets/imgs/category-6.png";
import FilterSidebar from "@/components/plp/FilterSidebar";
import MobileFiltersDrawer from "@/components/plp/MobileFiltersDrawer";
import PLPToolbar from "@/components/plp/PLPToolbar";
import ProductGrid from "@/components/plp/ProductGrid";
import Pagination from "@/components/plp/Pagination";

const fakeProducts = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: "Shimmery Shirt",
  price: "$200",
  imageSrc: Image, // using pink bg placeholder as per spec
}));

export default function ProductsPage() {
  const [filtersOpen, setFiltersOpen] = React.useState(false);
  return (
    <main className="bg-[#EEEAE7] text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <FilterSidebar />

          {/* Main content */}
          <section className="flex-1">
            <PLPToolbar onOpenFilters={() => setFiltersOpen(true)} />

            {/* Mobile/Tablet Filters Drawer */}
            {filtersOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div onClick={() => setFiltersOpen(false)} className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-y-0 left-0 w-80 max-w-[85%] bg-white shadow-xl p-4 overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-medium">Filters</h3>
                    <button aria-label="Close filters" onClick={() => setFiltersOpen(false)} className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200">
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Search inside drawer for mobile/tablet */}
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      placeholder="Search for anything..."
                      className="w-full h-10 rounded-md border border-gray-300 bg-white pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900"
                    />
                  </div>

                  {/* Same filters as desktop */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-3">Category</h3>
                      <div className="space-y-2 text-sm">
                        {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((c, idx) => (
                          <label key={c} className="flex items-center gap-2">
                            <input type="radio" name="m-category" defaultChecked={idx === 0} className="h-4 w-4 border-gray-300 text-gray-900 focus:ring-gray-900" />
                            <span>{c}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-sm font-medium mb-3">Price Range</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <input placeholder="Min price" className="h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900" />
                        <input placeholder="Max price" className="h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900" />
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-medium">Colors</h3>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {["#ef4444", "#22c55e", "#10b981", "#f59e0b", "#fbbf24", "#eab308", "#3b82f6", "#8b5cf6", "#06b6d4", "#111827", "#ffffff"].map((color, idx) => (
                          <button key={color} className={`h-5 w-5 rounded-full ring-1 ring-inset ${idx === 5 ? "ring-gray-900" : "ring-gray-300"}`} style={{ backgroundColor: color }} aria-label={`Filter ${color}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <ProductGrid products={fakeProducts} />

            <Pagination />
          </section>
        </div>
      </div>
      <MobileFiltersDrawer open={filtersOpen} onClose={() => setFiltersOpen(false)} />
    </main>
  );
}

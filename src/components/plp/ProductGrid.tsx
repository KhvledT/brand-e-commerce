"use client";
import React from "react";
import ProductCard from "@/components/ProductCard";
import type { StaticImageData } from "next/image";

type Product = {
  id: number | string;
  name: string;
  price: string;
  imageSrc?: string | StaticImageData;
};

type ProductGridProps = {
  products: Product[];
  isLoading?: boolean;
  onQuickView?: (product: Product) => void;
};

// Loading Skeleton Component
const ProductSkeleton = () => (
  <div className="animate-pulse">
    <div className="aspect-square bg-gray-200 rounded-sm mb-3"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  </div>
);

// Empty State Component
const EmptyState = () => (
  <div className="col-span-full flex flex-col items-center justify-center py-16 px-4">
    <div className="w-24 h-24 mb-6 text-gray-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25-2.25M12 13.875l-2.25-2.25M12 13.875l2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
    <p className="text-gray-600 text-center mb-6 max-w-md">
      We couldn&apos;t find any products matching your filters. Try adjusting your search or filters.
    </p>
    <button 
      onClick={() => window.location.reload()}
      className="px-6 py-2.5 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
    >
      Clear Filters
    </button>
  </div>
);

export default function ProductGrid({ products, isLoading = false, onQuickView }: ProductGridProps) {
  // Show loading skeletons
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  // Show empty state
  if (products.length === 0) {
    return (
      <div className="grid grid-cols-1">
        <EmptyState />
      </div>
    );
  }

  // Show products with stagger animation
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p, index) => (
        <div
          key={p.id}
          className="animate-fadeInUp"
          style={{
            animationDelay: `${index * 50}ms`,
            animationFillMode: 'both'
          }}
        >
          <ProductCard product={p} onQuickView={onQuickView} />
        </div>
      ))}
    </div>
  );
}



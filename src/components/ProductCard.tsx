"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Product = {
  id: string | number;
  name: string;
  price: string;
  imageSrc?: StaticImageData | string;
};

type ProductCardProps = {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
};

export default function ProductCard({ product, onAddToCart, onToggleWishlist, onQuickView }: ProductCardProps) {
  const router = useRouter();
  const handleAdd = () => onAddToCart?.(product);
  const handleWish = () => onToggleWishlist?.(product);
  const handleImageClick = () => router.push(`/products/${product.id}`);
  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickView?.(product);
  };

  return (
    <article className="group">
      <div 
        className="relative aspect-square rounded-sm overflow-hidden border border-gray-900 transition-transform duration-300 group-hover:shadow-lg cursor-pointer"
        onClick={handleImageClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleImageClick();
          }
        }}
      >
        {product.imageSrc ? (
          <Image
            src={product.imageSrc}
            alt={`${product.name} - Product image`}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
            style={{ objectPosition: "0% 0%" }}
            loading="lazy"
          />
        ) : null}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
        
        {/* Quick View Button (appears on hover) */}
        {onQuickView && (
          <button
            onClick={handleQuickView}
            className="absolute inset-x-0 bottom-4 mx-auto w-[calc(100%-2rem)] px-4 py-2 bg-white text-gray-900 font-medium text-sm rounded-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-50 z-10"
          >
            Quick View
          </button>
        )}
        
        <button
          aria-label={`Add ${product.name} to wishlist`}
          onClick={(e) => {
            e.stopPropagation();
            handleWish();
          }}
          className="absolute top-2 right-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-red-500 shadow-sm transition-all duration-200 hover:bg-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="sr-only">Add to wishlist</span>
        </button>
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="flex-1">
          <Link 
            href={`/products/${product.id}`} 
            className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
          >
            {product.name}
          </Link>
          <p className="text-sm font-semibold text-gray-900 mt-1">{product.price}</p>
          {/* Star rating placeholder */}
          <div className="flex items-center mt-1" aria-label="Product rating">
            <div className="flex space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className="w-3.5 h-3.5 fill-current text-yellow-500" 
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-xs text-gray-600">(4.8)</span>
          </div>
        </div>
        <button
          aria-label={`Add ${product.name} to cart`}
          onClick={(e) => {
            e.stopPropagation();
            handleAdd();
          }}
          className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <span className="sr-only">Add to cart</span>
        </button>
      </div>
    </article>
  );
}



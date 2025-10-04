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
};

export default function ProductCard({ product, onAddToCart, onToggleWishlist }: ProductCardProps) {
  const router = useRouter();
  const handleAdd = () => onAddToCart?.(product);
  const handleWish = () => onToggleWishlist?.(product);
  const handleImageClick = () => router.push(`/products/${product.id}`);

  return (
    <div className="group">
      <div className="relative aspect-square rounded-sm overflow-hidden border border-gray-900">
        {product.imageSrc ? (
          <Image
            src={product.imageSrc}
            alt={product.name}
            fill
            onClick={handleImageClick}
            className="object-cover object-center cursor-pointer"
            style={{ objectPosition: "0% 0%" }}
          />
        ) : null}
        <button
          aria-label="Add to wishlist"
          onClick={handleWish}
          className="absolute top-2 right-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-red-500 shadow-sm transition-colors hover:bg-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <Link href={`/products/${product.id}`} className="text-sm text-gray-900 hover:underline">
            {product.name}
          </Link>
          <p className="text-sm text-gray-900 mt-1">{product.price}</p>
        </div>
        <button
          aria-label="Add to cart"
          onClick={handleAdd}
          className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}



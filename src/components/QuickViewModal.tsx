"use client";
import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { X, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

type Product = {
  id: number | string;
  name: string;
  price: string;
  imageSrc?: string | StaticImageData;
};

type QuickViewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
};

export default function QuickViewModal({ isOpen, onClose, product }: QuickViewModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-600 hover:text-gray-900 hover:bg-white shadow-md transition-all duration-200 hover:scale-110"
          aria-label="Close quick view"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
            {product.imageSrc && (
              <Image
                src={product.imageSrc}
                alt={`${product.name} - Product image`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="flex-1">
              <h2 id="quick-view-title" className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {product.name}
              </h2>
              
              <p className="text-3xl font-bold text-gray-900 mb-4">{product.price}</p>

              {/* Star Rating */}
              <div className="flex items-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current text-yellow-500"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">(4.8 out of 5)</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Crafted with premium materials and sustainable practices. This essential piece combines
                comfort, quality, and timeless style.
              </p>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">Size</label>
                <div className="flex gap-2">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:border-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full px-6 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
              <button className="w-full px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2">
                <Heart className="h-5 w-5" />
                Add to Wishlist
              </button>
              <Link
                href={`/products/${product.id}`}
                className="block text-center w-full px-6 py-3 text-gray-900 font-medium hover:underline"
              >
                View Full Details →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


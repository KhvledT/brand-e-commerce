"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

type ProductGalleryProps = {
  images: (StaticImageData | string)[];
  productName?: string;
};

export default function ProductGallery({ images, productName = "Product" }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const handlePrevious = () => {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(index);
    }
  };

  return (
    <div className="relative" role="region" aria-label="Product images">
      {/* Main Image */}
      <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] w-full rounded-sm overflow-hidden group">
        <Image
          src={images[active]}
          alt={`${productName} - Image ${active + 1} of ${images.length}`}
          fill
          className={`object-contain transition-transform duration-300 ${
            isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 40vw"
          priority={active === 0}
          onClick={() => setIsZoomed(!isZoomed)}
        />

        {/* Image Counter */}
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 text-white text-sm font-medium rounded-full backdrop-blur-sm">
          {active + 1} / {images.length}
        </div>

        {/* Expand Icon */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 hover:bg-white shadow-md transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-900"
          aria-label="View fullscreen"
        >
          <Maximize2 className="h-5 w-5" />
        </button>

        {/* Navigation Arrows (Desktop) */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 hover:bg-white shadow-md transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-900"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 hover:bg-white shadow-md transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-900"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      <div
        className="mt-4 ml-2 py-4 flex gap-3 overflow-x-auto lg:overflow-visible lg:mt-0 lg:absolute lg:-left-[35px] lg:top-0 lg:flex-col scrollbar-hide"
        role="tablist"
        aria-label="Product image thumbnails"
      >
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            role="tab"
            aria-selected={active === idx}
            aria-label={`View image ${idx + 1}`}
            aria-current={active === idx}
              className={`relative h-16 ml-2 lg:ml-0 w-16 lg:h-[60px] lg:w-[60px] shrink-0 rounded-sm overflow-hidden transition-all duration-200 ${
              active === idx
                ? "ring-2 ring-gray-900 scale-105"
                : "ring-1 ring-gray-300 hover:ring-gray-400 hover:scale-105"
            }`}
          >
            <Image
              src={img}
              alt={`${productName} thumbnail ${idx + 1}`}
              fill
              className="object-cover"
              sizes="70px"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={images}
        initialIndex={active}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </div>
  );
}

"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

type ProductGalleryProps = {
  images: (StaticImageData | string)[];
};

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [active, setActive] = React.useState(0);

  return (
    <div className="relative">
      {/* Big image behind */}
      <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden ">
        <Image src={images[active]} alt="product" fill className="object-contain" />
      </div>

      {/* Thumbnails: row on small screens, overlaid vertical strip on lg+ */}
      <div className="mt-3 ml-2 flex gap-3 overflow-x-auto lg:overflow-visible lg:mt-0 lg:absolute lg:-left-7 lg:top-3 lg:flex-col">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`relative h-14 w-14 shrink-0 rounded-sm overflow-hidden ring-1 backdrop-blur-sm shadow ${
              active === idx ? "ring-gray-900" : "ring-gray-200"
            }`}
            aria-label={`Thumbnail ${idx + 1}`}
          >
            <Image src={img} alt="thumb" fill className="object-cover object-center" />
          </button>
        ))}
      </div>
    </div>
  );
}



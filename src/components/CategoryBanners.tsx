'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import images
import category1 from '@/assets/imgs/home page imgs/category-1.jpg';
import category2 from '@/assets/imgs/home page imgs/category-2.jpg';
import category3 from '@/assets/imgs/home page imgs/category-3.jpg';

const CategoryBanners = () => {
  

  return (
    <section className="bg-neutral-50 overflow-hidden">
      <div className="relative h-[30vh] sm:h-[45vh] lg:h-[60vh] xl:h-[70vh] group">
        <div className="absolute inset-0">
          <Image
            src={category1}
            alt="Woman"
            fill
            className="object-cover scale-100"
            style={{ objectPosition: "70% 0%" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            priority
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center h-full">
              <div className="text-center ">
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 tracking-tight mb-4 sm:mb-6 font-zen-dots">
                  Woman
                </h2>
                <Link
                  href="/women"
                  className="inline-block border border-white text-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium hover:bg-white hover:text-gray-900 transition-colors"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[30vh] sm:h-[45vh] lg:h-[60vh] xl:h-[70vh] group">
        <div className="absolute inset-0">
          <Image
            src={category2}
            alt="Men"
            fill
            className="object-cover scale-100"
            style={{ objectPosition: "0% 0%" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center h-full">
              <div className="text-center ">
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 tracking-tight mb-4 sm:mb-6 font-zen-dots">
                  Men
                </h2>
                <Link
                  href="/men"
                  className="inline-block border border-white text-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium hover:bg-white hover:text-gray-900 transition-colors"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[30vh] sm:h-[45vh] lg:h-[60vh] xl:h-[70vh] group">
        <div className="absolute inset-0">
          <Image
            src={category3}
            alt="Children"
            fill
            className="object-cover scale-100"
            style={{ objectPosition: "0% 15%" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center h-full">
              <div className="text-center ">
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 tracking-tight mb-4 sm:mb-6 font-zen-dots">
                  Children
                </h2>
                <Link
                  href="/children"
                  className="inline-block border border-white text-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium hover:bg-white hover:text-gray-900 transition-colors"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryBanners;

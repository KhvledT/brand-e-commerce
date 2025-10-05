'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Modal from './ui/Modal';

// Import images
import category1 from '@/assets/imgs/home page imgs/category-1.jpg';
import category2 from '@/assets/imgs/home page imgs/category-2.jpg';
import category3 from '@/assets/imgs/home page imgs/category-3.jpg';

const CategoryBanners = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal 
        isOpen={isModalOpen}
        onClose={handleModalClose}
        message="This feature will be in the real version"
      />
    <section className="bg-neutral-50 overflow-hidden">
      {/* Woman Section */}
      <div className="relative h-[30vh] sm:h-[45vh] lg:h-[60vh] xl:h-[70vh] group">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={category1}
            alt="Woman wearing modern sustainable clothing"
            fill
            className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            style={{ objectPosition: "70% 0%" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            priority
            placeholder="blur"
          />
        </div>
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500"></div>
        <div className="relative h-full flex items-center">
          <div className="px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center h-full">
              <div className="text-center transform group-hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 tracking-tight mb-4 sm:mb-6 font-zen-dots">
                  Woman
                </h2>
                <Link
                  href="/women"
                  className="inline-block border-2 border-white text-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
                  aria-label="Shop women's collection"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Men Section */}
      <div className="relative h-[30vh] sm:h-[45vh] lg:h-[60vh] xl:h-[70vh] group">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={category2}
            alt="Men wearing quality essential clothing"
            fill
            className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            style={{ objectPosition: "0% 0%" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500"></div>
        <div className="relative h-full flex items-center">
          <div className="px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center h-full">
              <div className="text-center transform group-hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 tracking-tight mb-4 sm:mb-6 font-zen-dots">
                  Men
                </h2>
                <button
                  onClick={handleModalOpen}
                  className="inline-block border-2 border-white text-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 cursor-pointer"
                  aria-label="Shop men's collection - Coming soon"
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Children Section */}
      <div className="relative h-[30vh] sm:h-[45vh] lg:h-[60vh] xl:h-[70vh] group">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={category3}
            alt="Children wearing comfortable everyday clothing"
            fill
            className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            style={{ objectPosition: "0% 15%" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500"></div>
        <div className="relative h-full flex items-center">
          <div className="px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center h-full">
              <div className="text-center transform group-hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 tracking-tight mb-4 sm:mb-6 font-zen-dots">
                  Children
                </h2>
                <button
                  onClick={handleModalOpen}
                  className="inline-block border-2 border-white text-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 cursor-pointer"
                  aria-label="Shop children's collection - Coming soon"
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CategoryBanners;

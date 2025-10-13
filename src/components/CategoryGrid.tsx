'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Modal from './ui/Modal';

import category1 from '@/assets/imgs/category-1.jpg';
import category2 from '@/assets/imgs/category-2.jpg';
import category3 from '@/assets/imgs/category-3.jpg';
import category4 from '@/assets/imgs/category-4.jpg';
import category5 from '@/assets/imgs/category-5.jpg';
import category6 from '@/assets/imgs/category-6.jpg';
import category7 from '@/assets/imgs/category-7.jpg';
import category8 from '@/assets/imgs/category-8.jpg';
import category9 from '@/assets/imgs/category-9.jpg';

const categories = [
  { id: 1, name: 'Denim', image: category1, description: 'Timeless denim essentials' },
  { id: 2, name: 'T-Shirts', image: category2, description: 'Everyday basics' },
  { id: 3, name: 'Dresses', image: category3, description: 'Elegant & comfortable' },
  { id: 4, name: 'Shirts', image: category4, description: 'Classic button-ups' },
  { id: 5, name: 'Sweaters', image: category5, description: 'Cozy & warm' },
  { id: 6, name: 'Accessories', image: category6, description: 'Complete your look' },
];

const banners = [
  { id: 7, name: 'Women', image: category7 },
  { id: 8, name: 'Men', image: category8 },
  { id: 9, name: 'Essentials', image: category9 },
];

const CategoryGrid = () => {
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
      
      <section className="py-16 bg-[#EEEAE7]" aria-labelledby="category-heading">
        <div className="w-full mx-auto px-6 sm:px-6 lg:px-15">
          <h2 id="category-heading" className="text-3xl md:text-4xl font-semibold text-center mb-10 text-gray-900">Shop by Category</h2>
        
          {/* Small Categories Grid - 6 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
            {categories.map((category) => (
              <Link 
                href="#" 
                key={category.id} 
                className="group"
                aria-label={`Shop ${category.name} - ${category.description}`}
              >
                <div className="relative min-h-[220px] overflow-hidden  shadow-sm group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src={category.image}
                    alt={`${category.name} collection - ${category.description}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {category.name}
                  </p>
                  <p className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        
          {/* Large Banner Categories - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {banners.map((banner) => (
              <button
                key={banner.id}
                onClick={handleModalOpen}
                className="relative aspect-[3/4] overflow-hidden rounded-lg group cursor-pointer w-full"
                aria-label={`Shop ${banner.name} collection - Coming soon`}
              >
                <Image
                  src={banner.image}
                  alt={`${banner.name} collection banner`}
                  fill
                  className="object-cover filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0  bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-8 py-4 border-2 border-white text-white font-semibold text-xl transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-105 shadow-lg">
                    Shop {banner.name}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryGrid;

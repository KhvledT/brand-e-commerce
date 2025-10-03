import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import category1 from '@/assets/imgs/category-1.png';
import category2 from '@/assets/imgs/category-2.png';
import category3 from '@/assets/imgs/category-3.png';
import category4 from '@/assets/imgs/category-4.png';
import category5 from '@/assets/imgs/category-5.png';
import category6 from '@/assets/imgs/category-6.png';
import category7 from '@/assets/imgs/category-7.jpg';
import category8 from '@/assets/imgs/category-8.jpg';
import category9 from '@/assets/imgs/category-9.jpg';

const categories = [
  { id: 1, name: 'Denim', image: category1 },
  { id: 2, name: 'T-Shirts', image: category2 },
  { id: 3, name: 'Dresses', image: category3 },
  { id: 4, name: 'Shirts', image: category4 },
  { id: 5, name: 'Sweaters', image: category5 },
  { id: 6, name: 'Accessories', image: category6 },
];

const banners = [
  { id: 7, name: 'Women', image: category7 },
  { id: 8, name: 'Men', image: category8 },
  { id: 9, name: 'Essentials', image: category9 },
];

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-[#EEEAE7]">
      <div className=" w-full mx-auto px-6 sm:px-6 lg:px-15">
        <h2 className="text-3xl text-center mb-10">Shop by Category</h2>
        
        {/* Small Categories Grid - 6 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category) => (
            <Link href="#" key={category.id} className="group">
              <div className="relative aspect-square overflow-hidden rounded-md">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-center">{category.name}</p>
            </Link>
          ))}
        </div>
        
        {/* Large Banner Categories - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {banners.map((banner) => (
            <Link href="#" key={banner.id} className="relative aspect-[3/4] overflow-hidden group">
              <Image
                src={banner.image}
                alt={banner.name}
                fill
                className="object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-8 py-4 border border-white text-white font-medium text-xl transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                  Shop {banner.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;

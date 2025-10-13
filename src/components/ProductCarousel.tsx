"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import favorite1 from '@/assets/imgs/Everlane-Favorites-1.png';
import favorite2 from '@/assets/imgs/Everlane-Favorites-2.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    name: 'The Wool Sweater',
    price: 98,
    image: favorite1,
    rating: 4.8,
  },
  {
    id: 2,
    name: 'The Cotton Tee',
    price: 35,
    image: favorite2,
    rating: 4.9,
  },
  {
    id: 3,
    name: 'The Cashmere Scarf',
    price: 120,
    image: favorite1,
    rating: 4.7,
  },
  {
    id: 4,
    name: 'The Everyday Shirt',
    price: 72,
    image: favorite2,
    rating: 4.6,
  },
  {
    id: 5,
    name: 'The Perfect Jean',
    price: 85,
    image: favorite1,
    rating: 4.9,
  },
  {
    id: 6,
    name: 'The Silk Blouse',
    price: 98,
    image: favorite2,
    rating: 4.8,
  },
];

const ProductCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-16 bg-[#EEEAE7] w-full" aria-labelledby="favorites-heading">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 id="favorites-heading" className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Everlane Favorites</h2>
        <p className="text-center text-gray-700 mb-10 text-base md:text-lg">Beautifully Functional. Purposefully Designed. Consciously Crafted.</p>
        
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
        >
          <div className="relative">
            <CarouselContent className="-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="px-2">
                    <ProductCard product={{ id: product.id, name: product.name, price: product.price, imageSrc: product.image }} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Arrow Controls */}
            <CarouselPrevious 
              className="hidden sm:flex -left-4 bg-white hover:bg-gray-100 border border-gray-300 shadow-md transition-all duration-200 hover:scale-110" 
              aria-label="View previous products"
            />
            <CarouselNext 
              className="hidden sm:flex -right-4 bg-white hover:bg-gray-100 border border-gray-300 shadow-md transition-all duration-200 hover:scale-110" 
              aria-label="View next products"
            />
          </div>
        </Carousel>
        
        {/* Pagination Dots - Only show on mobile/tablet */}
        <div className="flex justify-center mt-8 space-x-2 lg:hidden" role="tablist" aria-label="Product carousel navigation">
          {Array.from({ length: Math.min(products.length, 6) }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                current === index + 1 ? 'bg-black w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={current === index + 1}
              role="tab"
            />
          ))}
        </div>
        
        {/* Current position indicator for desktop */}
        <p className="hidden lg:block text-center text-sm text-gray-600 mt-6" aria-live="polite">
          Showing {current} of {products.length}
        </p>
        
        {/* Mobile swipe instruction */}
        <p className="text-center text-sm text-gray-500 mt-4 sm:hidden">
          Swipe left or right to navigate
        </p>
        
                {/* View All Button */}
                <div className="mt-10 text-center">
                  <Link
                    href="/products"
                    className="inline-block px-8 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-md"
                    aria-label="View all products in women's collection"
                  >
                    View All Products
                  </Link>
                </div>
      </div>
    </section>
  );
};

export default ProductCarousel;

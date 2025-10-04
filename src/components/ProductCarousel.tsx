"use client";
import React, { useState } from 'react';
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
    price: '$98',
    image: favorite1,
  },
  {
    id: 2,
    name: 'The Cotton Tee',
    price: '$35',
    image: favorite2,
  },
  // For demonstration, we'll use the same images multiple times
  {
    id: 3,
    name: 'The Cashmere Scarf',
    price: '$120',
    image: favorite1,
  },
  {
    id: 4,
    name: 'The Everyday Shirt',
    price: '$72',
    image: favorite2,
  },
  {
    id: 5,
    name: 'The Perfect Jean',
    price: '$85',
    image: favorite1,
  },
  {
    id: 6,
    name: 'The Everyday Shirt',
    price: '$72',
    image: favorite2,
  },
  { 
    id: 7,
    name: 'The Perfect Jean',
    price: '$85',
    image: favorite1,
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
    <section className="py-16 bg-[#EEEAE7] w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Everlane Favorites</h2>
        <p className="text-center text-gray-700 mb-10">Beautifully Functional. Purposefully Designed. Consciously Crafted.</p>
        
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
                <CarouselItem key={product.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/4">
                  <div className="px-2">
                    <ProductCard product={{ id: product.id, name: product.name, price: product.price, imageSrc: product.image }} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Arrow Controls */}
            <CarouselPrevious className="hidden sm:flex -left-4 bg-gray-100 hover:bg-gray-200 border-none" />
            <CarouselNext className="hidden sm:flex -right-4 bg-gray-100 hover:bg-gray-200 border-none" />
          </div>
        </Carousel>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: products.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                current === index + 1 ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        {/* Mobile swipe instruction */}
        <p className="text-center text-sm text-gray-500 mt-4 md:hidden">
          Swipe left or right to navigate
        </p>
      </div>
    </section>
  );
};

export default ProductCarousel;

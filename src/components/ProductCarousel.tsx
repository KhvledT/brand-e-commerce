'use client';
import React, { useState } from 'react';
import Image from 'next/image';
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
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Create slides based on screen size
  const createSlides = () => {
    const slides = [];
    for (let i = 0; i < products.length; i++) {
      slides.push([products[i]]);
    }
    return slides;
  };

  const slides = createSlides();

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
              {products.map((product, index) => (
                <CarouselItem key={product.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/4">
                  <div className="flex justify-center">
                    <div className="w-64 sm:w-72 md:w-80 lg:w-96">
                      <div className="relative aspect-[3/4] overflow-hidden bg-pink-100 rounded-lg">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                        <button className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full bg-white hover:bg-gray-50">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4 text-red-500">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                        </button>
                      </div>
                      <div className="mt-3 sm:mt-4 flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-base sm:text-lg">{product.name}</h3>
                          <p className="text-gray-700 text-base sm:text-lg">{product.price}</p>
                        </div>
                        <button className="p-2 sm:p-3 rounded-full bg-black hover:bg-gray-800">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
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

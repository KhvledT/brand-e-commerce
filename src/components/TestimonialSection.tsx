'use client';
import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Import images
import category2 from '@/assets/imgs/home page imgs/category-2.jpg';
import category3 from '@/assets/imgs/home page imgs/category-3.jpg';

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote: "Great product! The material feels premium and the fit is perfect.",
    image: category3,
    alt: "Customer wearing shirt"
  },
  {
    id: 2,
    quote: "Amazing quality and comfort. This is exactly what I was looking for.",
    image: category2,
    alt: "Customer wearing shirt"
  },
  
];

const TestimonialSection = () => {

  return (
    <>
      {/* Testimonial Section */}
      <div className="relative px-4 md:px-12">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="grid grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-6">
                      <h3 className="text-lg text-gray-900">People Are Talking</h3>
                      
                      {/* 5 Star Rating */}
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current " viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        {testimonial.quote}
                      </blockquote>
                    </div>

                    {/* Right Column - Product Image */}
                    <div className="relative h-[700px]">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.alt}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                        style={{ objectPosition: "50% 0%" }}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:block lg:-left-15 xl:-left-20 2xl:-left-30 bg-transparent border-none shadow-none"  />
            <CarouselNext className="hidden lg:block lg:-right-15 xl:-right-20 2xl:-right-30 bg-transparent border-none shadow-none" />
          </Carousel>
        </div>




        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="mb-6">
            <h3 className="text-lg text-gray-900 mb-4">People Are Talking</h3>
            {/* 5 Star Rating */}
            <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current " viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="space-y-4">
                    {/* Quote */}
                    <blockquote className="text-xl font-bold text-gray-900 leading-tight">
                      {testimonial.quote}
                    </blockquote>
                    
                    {/* Product Image */}
                    <div className="relative h-[300px] w-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.alt}
                        fill
                        className="object-cover "
                        style={{ objectPosition: "0% 15%" }}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

    </>
  );
};

export default TestimonialSection;

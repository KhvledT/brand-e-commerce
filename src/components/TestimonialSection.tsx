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
    author: "Sarah M.",
    location: "New York, NY",
    image: category3,
    alt: "Customer wearing comfortable everyday essentials"
  },
  {
    id: 2,
    quote: "Amazing quality and comfort. This is exactly what I was looking for.",
    author: "Michael R.",
    location: "Los Angeles, CA",
    image: category2,
    alt: "Customer wearing quality sustainable clothing"
  },
  {
    id: 3,
    quote: "The transparency in pricing and ethical manufacturing makes me feel good about every purchase.",
    author: "Emma L.",
    location: "Chicago, IL",
    image: category3,
    alt: "Customer wearing ethically-made fashion"
  },
  {
    id: 4,
    quote: "Best investment in my wardrobe. These pieces last forever and never go out of style.",
    author: "David K.",
    location: "San Francisco, CA",
    image: category2,
    alt: "Customer wearing timeless wardrobe essentials"
  },
  {
    id: 5,
    quote: "Finally found a brand that aligns with my values without compromising on style or quality.",
    author: "Jessica T.",
    location: "Austin, TX",
    image: category3,
    alt: "Customer wearing sustainable fashion pieces"
  },
];

const TestimonialSection = () => {

  return (
    <>
      {/* Testimonial Section */}
      <div className="relative px-4 md:px-12" role="region" aria-label="Customer testimonials">
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
                  <article className="grid grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-6">
                      <h3 className="text-lg text-gray-900 font-semibold">People Are Talking</h3>
                      
                      {/* 5 Star Rating */}
                      <div className="flex space-x-1" aria-label="5 out of 5 stars" role="img">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current text-yellow-500" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      
                      {/* Author */}
                      <div className="text-sm text-gray-600">
                        <p className="font-medium">{testimonial.author}</p>
                        <p>{testimonial.location}</p>
                      </div>
                    </div>

                    {/* Right Column - Product Image */}
                    <div className="relative h-[700px] overflow-hidden rounded-lg">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.alt}
                        width={400}
                        height={700}
                        className="object-cover w-full h-full"
                        style={{ objectPosition: "50% 0%" }}
                        loading="lazy"
                      />
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className="hidden lg:block lg:-left-15 xl:-left-20 2xl:-left-30 bg-transparent border-none shadow-none hover:bg-transparent" 
              aria-label="Previous testimonial"
            />
            <CarouselNext 
              className="hidden lg:block lg:-right-15 xl:-right-20 2xl:-right-30 bg-transparent border-none shadow-none hover:bg-transparent" 
              aria-label="Next testimonial"
            />
          </Carousel>
        </div>




        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="mb-6">
            <h3 className="text-lg text-gray-900 mb-4 font-semibold">People Are Talking</h3>
            {/* 5 Star Rating */}
            <div className="flex space-x-1 mb-4" aria-label="5 out of 5 stars" role="img">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current text-yellow-500" viewBox="0 0 20 20" aria-hidden="true">
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
                  <article className="space-y-4">
                    {/* Quote */}
                    <blockquote className="text-xl font-bold text-gray-900 leading-tight">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    
                    {/* Author */}
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">{testimonial.author}</p>
                      <p>{testimonial.location}</p>
                    </div>
                    
                    {/* Product Image */}
                    <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.alt}
                        fill
                        className="object-cover"
                        style={{ objectPosition: "0% 15%" }}
                        loading="lazy"
                      />
                    </div>
                  </article>
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

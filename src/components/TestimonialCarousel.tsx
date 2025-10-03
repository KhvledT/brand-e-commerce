import React from 'react';
import Image from 'next/image';
import testimonial1 from '@/assets/imgs/category-7.jpg';
import testimonial2 from '@/assets/imgs/category-8.jpg';
import testimonial3 from '@/assets/imgs/category-9.jpg';

const testimonials = [
  {
    id: 1,
    quote: "Everlane's commitment to quality and transparency completely changed how I think about my wardrobe. Their pieces are timeless and last for years.",
    author: "Sarah Johnson",
    location: "New York, NY",
    image: testimonial1,
  },
  {
    id: 2,
    quote: "I appreciate how their essentials are both ethical and affordable. The quality is unmatched at this price point.",
    author: "Michael Chen",
    location: "Los Angeles, CA",
    image: testimonial2,
  },
  {
    id: 3,
    quote: "From casual basics to professional wear, Everlane has become my go-to for everything. Their sizing is consistent and the styles are versatile.",
    author: "Emma Peterson",
    location: "Chicago, IL",
    image: testimonial3,
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="py-16 bg-[#EEEAE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        
        <div className="relative">
          {/* Arrow Controls */}
          <div className="hidden md:block absolute top-1/2 -left-12 -translate-y-1/2 z-10">
            <button className="p-2 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
          </div>
          
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div className="flex">
              {/* Only showing the first testimonial, in a real app this would be dynamic */}
              <div className="w-full flex-none">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* Quote */}
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                    <svg className="h-10 w-10 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.582 7.552 1.5 13.451 1.5 20.087V28h8.784v-8.258H6.065c0-5.427 2.123-10.28 6.191-13.742L9.352 4zm16.908 0c-4.77 3.552-7.852 9.451-7.852 16.087V28h8.784v-8.258h-4.218c0-5.427 2.123-10.28 6.191-13.742L26.26 4z" />
                    </svg>
                    <p className="text-lg text-gray-700 mb-6">{testimonials[0].quote}</p>
                    <div>
                      <p className="font-medium">{testimonials[0].author}</p>
                      <p className="text-gray-500 text-sm">{testimonials[0].location}</p>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={testimonials[0].image}
                      alt={testimonials[0].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Arrow Controls */}
          <div className="hidden md:block absolute top-1/2 -right-12 -translate-y-1/2 z-10">
            <button className="p-2 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          <button className="w-2 h-2 rounded-full bg-gray-800"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

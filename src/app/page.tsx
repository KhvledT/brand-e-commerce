'use client';
import React from 'react';
import HeroSection from '@/components/heroSection';
import CategoryBanners from '@/components/CategoryBanners';
import UtilitySection from '@/components/UtilitySection';
import TestimonialSection from '@/components/TestimonialSection';
import UtiliySectionForMobile from '@/components/UtiliySectionForMobile';



const HomePage = () => {
  return (
    <>
      <div className="">
        <HeroSection />
        
        <CategoryBanners />

        {/* Testimonial & Utility Section */}
        <section className=" py-16 bg-[#EEEAE7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <UtilitySection />
            <TestimonialSection />
            <UtiliySectionForMobile />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;

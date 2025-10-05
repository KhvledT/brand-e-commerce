'use client';
import React, { useState } from "react";
import Image from "next/image";
import Modal from './ui/Modal';
import heroSection1 from "@/assets/imgs/home page imgs/heroSection 01.svg";
import heroSection2 from "@/assets/imgs/home page imgs/Frame 458.png";
import heroSection3 from "@/assets/imgs/home page imgs/heroSection 02.svg";

export default function HeroSection() {
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
      
      {/* Hero Banner Section */}
      <section className="relative w-full bg-white flex flex-col items-center justify-center" role="banner">
        <h1 className="sr-only">Everlane - Quality Modern Essentials</h1>
        
        {/* Main Hero Image */}
        <div className="relative w-full">
          <Image
            src={heroSection1}
            alt="Everlane sustainable fashion collection - modern essentials for everyday wear"
            width={1920}
            height={800}
            className="w-full h-auto"
            priority
          />
          
          {/* CTA Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handleModalOpen}
              className="bg-white text-gray-900 px-8 py-3 text-sm font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg opacity-0 hover:opacity-100 focus:opacity-100"
              aria-label="Explore new collection"
            >
              EXPLORE COLLECTION
            </button>
          </div>
        </div>
        
        {/* Mobile Secondary Hero */}
        <div className="relative block md:hidden w-full h-auto">
          <Image
            src={heroSection2}
            alt="Featured sustainable clothing products for mobile view"
            width={800}
            height={600}
            className="w-full h-auto -translate-y-10"
            loading="lazy"
          />
        </div>
        
        {/* Desktop Secondary Hero */}
        <div className="relative hidden md:block w-full h-auto">
          <Image
            src={heroSection3}
            alt="Featured sustainable clothing collection for desktop view"
            width={1920}
            height={800}
            className="w-full h-auto -translate-y-10"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

import Image from 'next/image';
import React from 'react';
import section12 from '@/assets/imgs/home page imgs/Frame 492.svg';

export default function UtilitySectionForMobile() {
  return (
    <section className="w-full" aria-label="Store features">
      <div className="relative w-full h-[60vh] sm:hidden overflow-hidden my-15">
        <Image
          src={section12} 
          alt="Free shipping and quality guarantee information" 
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
      </div>
    </section>
  );
}


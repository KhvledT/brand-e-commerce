import React from 'react';
import Image from 'next/image';
import heroImage from '@/assets/imgs/women page hero/Section 01.svg';

const HeroBanner = () => {
  return (
    <>
      <section className="relative w-full bg-white flex flex-col items-center justify-center" role="banner">
        <div className="relative w-full">
          <Image
            src={heroImage}
            alt="Everlane sustainable fashion collection - modern essentials for everyday wear"
            width={1920}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>
    </>
  );
};

export default HeroBanner;

import React from 'react';
import Image from 'next/image';
import heroImage from '@/assets/imgs/hero-image.png';
import bgHero from '@/assets/imgs/bg-hero.png';

const HeroBanner = () => {
  return (
    <section 
      className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] w-full overflow-hidden"
      style={{
        background: `linear-gradient(30deg, var(--hero-gradient-start) 0%, var(--hero-gradient-start) 30%, var(--hero-gradient-end) 70%, var(--hero-gradient-end) 100%)`
      }}
      role="banner"
      aria-label="Women's collection hero banner"
    >
      {/* Background Image with Low Opacity */}
      <div className="absolute top-[-60%] left-[-80%] w-[200%] h-[200%] z-0" aria-hidden="true">
        <Image
          src={bgHero}
          alt=""
          className="object-contain"
          style={{
            WebkitMaskImage: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,0.5) 0%,   
                rgba(0,0,0,0.3) 30%,  
                rgba(0,0,0,0.3) 40%,
                rgba(0,0,0,0.3) 40%,
                rgba(0,0,0,0.2) 50%,
                rgba(0,0,0,0.0) 60%,
                rgba(0,0,0,0) 100%
              )
            `,
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: 'cover',
            maskImage: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,0.6) 0%,
                rgba(0,0,0,0.6) 30%,
                rgba(0,0,0,0.3) 30%,
                rgba(0,0,0,0.3) 50%,
                rgba(0,0,0,0) 60%,
                rgba(0,0,0,0) 100%
              )
            `,
            maskRepeat: 'no-repeat',
            maskSize: 'cover',
          }}
          fill
          priority
          loading="eager"
        />
      </div>
      
      {/* Content - Left aligned for mobile, centered for larger screens */}
      <div className="relative z-10 h-full w-full flex items-center justify-center sm:pl-0 sm:pt-0">
        <h1 className="font-zen-dots text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-8xl w-[70%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[45%] font-normal text-gray-900 leading-[1.2] sm:leading-[1.3] md:leading-[1.4] tracking-[0.2px] text-left sm:text-center">
          Define Your Style. Elevate Your Look.
        </h1>
      </div>
      
      {/* Decorative Ellipses */}
      <div 
        className='absolute top-0 left-0 w-full h-full flex items-center justify-center'
        aria-hidden="true"
        style={{
          WebkitMaskImage: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.8) 0%,   
              rgba(0,0,0,0.6 ) 50%,
              rgba(0,0,0,0.4) 60%,
              rgba(0,0,0,0) 100%
            )
          `,
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'cover',
          maskImage: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.6) 0%,
              rgba(0,0,0,0.6) 30%,
              rgba(0,0,0,0.5) 30%,
              rgba(0,0,0,0.4) 60%,
              rgba(0,0,0,0.1) 70%,
              rgba(0,0,0,0) 80%,
              rgba(0,0,0,0) 100%
            )
          `,
          maskRepeat: 'no-repeat',
          maskSize: 'cover',
        }}
      >
        <div className="w-1/2 h-full flex items-center justify-center relative">
          {/* First ellipse - large, more oval */}
          <div 
            className="absolute border-3 border-white opacity-60"
            style={{
              width: 'clamp(300px, 50vw, 600px)',
              height: 'clamp(200px, 33vw, 400px)',
              borderRadius: '50%',
              transform: 'translate(-20%, -40%) rotate(90deg)',
            }}
          ></div>
          
          {/* Second ellipse - medium, rotated */}
          <div 
            className="absolute border-3 border-white opacity-60"
            style={{
              width: 'clamp(350px, 58vw, 700px)',
              height: 'clamp(175px, 29vw, 350px)',
              borderRadius: '50%',
              transform: 'translate(0%, -30%) rotate(150deg)',
            }}
          ></div>
          
          {/* Third ellipse - smaller, different rotation */}
          <div 
            className="absolute border-3 border-white opacity-60"
            style={{
              width: 'clamp(350px, 58vw, 700px)',
              height: 'clamp(200px, 33vw, 400px)',
              borderRadius: '50%',
              transform: 'translate(-40%, 30%) rotate(150deg)',
            }}
          ></div>
        </div>
      </div>
      
      {/* Hero Image - Above Text Layer */}
      <div className="absolute top-0 right-[-15%] sm:right-[-15%] md:right-[-10%] lg:right-[-8%] xl:right-[-5%] 2xl:right-[2%] h-full w-[60%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[45%] 2xl:w-[40%] z-20">
        <Image
          src={heroImage}
          alt="Elegant woman wearing sustainable fashion from Everlane women's collection"
          className="object-contain object-right scale-130 -translate-x-5 translate-y-25 sm:scale-120 md:translate-y-20 lg:scale-130 xl:scale-130 2xl:translate-y-30 2xl:scale-130 2xl:translate-x-10 sm:translate-y-20 md:scale-130"
          fill
          priority
          loading="eager"
        />
      </div>
    </section>
  );
};

export default HeroBanner;

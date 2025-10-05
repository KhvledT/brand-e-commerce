import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import HeroSection from '@/components/heroSection';
import BackToTop from '@/components/BackToTop';

// Dynamic imports for below-fold content (performance optimization)
const CategoryBanners = dynamic(() => import('@/components/CategoryBanners'), {
  loading: () => <div className="h-screen bg-neutral-50 animate-pulse" />,
});
const UtilitySection = dynamic(() => import('@/components/UtilitySection'));
const TestimonialSection = dynamic(() => import('@/components/TestimonialSection'));
const UtilitySectionForMobile = dynamic(() => import('@/components/UtilitySectionForMobile'));

// SEO Metadata
export const metadata: Metadata = {
  title: 'Everlane | Quality Modern Essentials - Sustainable Fashion',
  description: 'Shop sustainable, ethically-made clothing and accessories for women, men, and children. Quality essentials at transparent prices. Free shipping on orders over $50.',
  keywords: ['sustainable fashion', 'ethical clothing', 'quality essentials', 'transparent pricing', 'women clothing', 'men clothing'],
  openGraph: {
    title: 'Everlane | Quality Modern Essentials',
    description: 'Shop sustainable, ethically-made clothing at transparent prices.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Everlane',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Everlane | Quality Modern Essentials',
    description: 'Shop sustainable, ethically-made clothing at transparent prices.',
  },
};

// Structured Data for SEO (JSON-LD)
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Everlane',
  description: 'Quality modern essentials and sustainable fashion',
  url: typeof window !== 'undefined' ? window.location.origin : '',
  logo: typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : '',
  sameAs: [
    'https://facebook.com/everlane',
    'https://instagram.com/everlane',
    'https://twitter.com/everlane',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'support@everlane.com',
  },
};

const HomePage = () => {
  return (
    <>
      <BackToTop />
      
      <main>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Hero Section - Above the fold */}
        <HeroSection />
      
      {/* Category Banners */}
      <CategoryBanners />

        {/* Testimonial & Utility Section */}
        <section className="py-16 bg-[#EEEAE7]" aria-label="Customer testimonials and store features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <UtilitySection />
            <TestimonialSection />
            <UtilitySectionForMobile />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;

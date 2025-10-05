import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import HeroBanner from "@/components/HeroBanner";
import BackToTop from "@/components/BackToTop";
import Link from 'next/link';

// Dynamic imports for below-fold content (performance optimization)
const CategoryGrid = dynamic(() => import('@/components/CategoryGrid'), {
  loading: () => <div className="h-96 bg-[#EEEAE7] animate-pulse" />,
});
const ProductCarousel = dynamic(() => import('@/components/ProductCarousel'));

// SEO Metadata
export const metadata: Metadata = {
  title: "Women's Collection | Everlane - Sustainable Fashion",
  description: "Shop our women's collection of sustainable, ethically-made clothing. From denim to dresses, find quality essentials at transparent prices. Free shipping on orders over $50.",
  keywords: ['women clothing', 'sustainable fashion', 'ethical clothing', 'women dresses', 'women denim', 'quality basics'],
  openGraph: {
    title: "Women's Collection | Everlane",
    description: "Shop sustainable women's clothing at transparent prices.",
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Women's Collection | Everlane",
    description: "Shop sustainable women's clothing at transparent prices.",
  },
};

// Structured Data for SEO (JSON-LD)
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: "Women's Collection",
  description: 'Sustainable and ethically-made women\'s clothing',
  url: typeof window !== 'undefined' ? window.location.href : '',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: typeof window !== 'undefined' ? window.location.origin : '',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Women',
      },
    ],
  },
};

export default function WomenPage() {
  return (
    <>
      <BackToTop />
      
      <main>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-900 font-medium" aria-current="page">
            Women
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <HeroBanner />
      
      {/* Category Grid */}
      <CategoryGrid />

        {/* Product Carousel */}
        <ProductCarousel />
      </main>
    </>
  );
}

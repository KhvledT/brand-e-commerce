"use client";
import React from "react";
import Link from "next/link";
import ProductGallery from "@/components/pdp/ProductGallery";
import ProductInfo from "@/components/pdp/ProductInfo";
import ProductGrid from "@/components/plp/ProductGrid";
import BackToTop from "@/components/BackToTop";
import productDetailsImage from "@/assets/imgs/productDetailsImage.png";
import Img2 from "@/assets/imgs/category-8.jpg";
import Img3 from "@/assets/imgs/category-9.jpg";
import category1 from "@/assets/imgs/category-1.png";
import category2 from "@/assets/imgs/category-2.png";

// Demo Reviews Data
const demoReviews = [
  {
    id: "1",
    userName: "Sarah M.",
    rating: 5,
    title: "Perfect fit and great quality!",
    comment: "I absolutely love this shirt! The fabric is soft and breathable, and the fit is perfect. The stripes are exactly as shown in the pictures. Highly recommend!",
    date: "March 15, 2024",
    helpful: 12,
    verified: true,
  },
  {
    id: "2",
    userName: "Michael R.",
    rating: 4,
    title: "Great shirt, runs a bit large",
    comment: "Really nice quality shirt. The material feels premium and the construction is solid. Only issue is it runs slightly large, so I'd recommend sizing down if you're between sizes.",
    date: "March 10, 2024",
    helpful: 8,
    verified: true,
  },
  {
    id: "3",
    userName: "Emma L.",
    rating: 5,
    title: "Exceeded expectations!",
    comment: "This is now my favorite polo shirt. The attention to detail is impressive, and the color hasn't faded after multiple washes. Worth every penny!",
    date: "March 5, 2024",
    helpful: 15,
    verified: true,
  },
];

// SEO Metadata
const pageMetadata = {
  title: "Men Striped Polo Tee | Everlane - Premium Quality Polo Shirts",
  description: "Classic men's striped polo tee made with premium PQ fabric. Soft, breathable, and perfect for any occasion. Free shipping on orders over $50.",
};

// Structured Data
const structuredData = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Men Striped Polo Tee",
  "image": [productDetailsImage],
  "description": "Black, basic, striped polo tee featuring a collared neck with button detail. Half sleeves with stripes in a contrasting shade. Made with premium PQ fabric for ultimate comfort.",
  "sku": "MT4041-00S-BLK",
  "brand": {
    "@type": "Brand",
    "name": "Everlane"
  },
  "offers": {
    "@type": "Offer",
    "url": typeof window !== "undefined" ? window.location.href : "",
    "priceCurrency": "USD",
    "price": "200.00",
    "priceValidUntil": "2024-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Everlane"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
};

export default function PDPPage() {
  const images = [productDetailsImage, Img2, Img3, productDetailsImage, Img2];
  const related = Array.from({ length: 3 }).map((_, i) => ({
    id: i + 1,
    name: i === 0 ? "Cotton Crew Sweater" : i === 1 ? "Classic Tee" : "Striped Shirt",
    price: "$200.00",
    imageSrc: i % 2 === 0 ? category1 : category2,
  }));

  const productDescription = "Black, basic, striped polo tee featuring a collared neck with button detail. Half sleeves with stripes in a contrasting shade. Made with premium quality fabric that's soft, breathable, and designed to last. Perfect for both casual and smart-casual occasions.";
  
  const careInstructions = [
    "Machine or hand-wash up to 30°C/86°F",
    "Use gentle cycle with similar colors",
    "Do not dry in direct sunlight; do not bleach",
    "Do not iron directly on prints/embroidery",
    "Tumble dry low or hang to dry"
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{pageMetadata.title}</title>
      <meta name="description" content={pageMetadata.description} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <BackToTop />

      <main className="bg-[#EEEAE7] text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
            <ol className="flex items-center text-sm space-x-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  HOME
                </Link>
              </li>
              <li className="text-gray-400">›</li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">
                  MEN POLO SHIRTS
                </Link>
              </li>
              <li className="text-gray-400">›</li>
              <li className="text-gray-900 font-medium" aria-current="page">
                MEN STRIPED POLO TEE
              </li>
            </ol>
          </nav>

          {/* Product Main Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <ProductGallery images={images} productName="Men Striped Polo Tee" />
            <ProductInfo
              name="Men Striped Polo Tee"
              sku="MT4041-00S-BLK"
              price={200}
              originalPrice={300}
              colorImages={[productDetailsImage]}
              rating={4.8}
              reviewCount={127}
              stock={15}
              stockStatus="in-stock"
            />
          </div>

          {/* Related Products */}
          <section className="mt-20 border-t border-gray-400 pt-16" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              You May Also Like
            </h2>
            <ProductGrid products={related} />
          </section>
        </div>
      </main>
    </>
  );
}

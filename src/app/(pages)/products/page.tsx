"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import Modal from "@/components/ui/Modal";
import QuickViewModal from "@/components/QuickViewModal";
import BackToTop from "@/components/BackToTop";
import FilterSidebar from "@/components/plp/FilterSidebar";
import MobileFiltersDrawer from "@/components/plp/MobileFiltersDrawer";
import PLPToolbar from "@/components/plp/PLPToolbar";
import ProductGrid from "@/components/plp/ProductGrid";
import Pagination from "@/components/plp/Pagination";
import type { StaticImageData } from "next/image";

// Import different product images for variety
import category1 from "@/assets/imgs/category-1.png";
import category2 from "@/assets/imgs/category-2.png";
import category3 from "@/assets/imgs/category-3.png";
import category4 from "@/assets/imgs/category-4.png";
import category5 from "@/assets/imgs/category-5.png";
import category6 from "@/assets/imgs/category-6.png";

// Fake products with variety
const productImages = [category1, category2, category3, category4, category5, category6];
const productNames = [
  "The Cashmere Crew",
  "Organic Cotton Tee",
  "The Day Heel",
  "The Performance Chino",
  "The Quilted Coat",
  "The Wool Sweater",
  "Italian Leather Tote",
  "The Silk Shirt",
  "Modern Loafer",
  "The Perfect Jean",
  "Cashmere Beanie",
  "The Classic Tee",
];

const fakeProducts = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  name: productNames[i % productNames.length],
  price: Math.floor(Math.random() * (200 - 35) + 35),
  imageSrc: productImages[i % productImages.length],
}));

type SortOption = "popular" | "price-asc" | "price-desc" | "newest";

type Product = {
  id: number;
  name: string;
  price: number;
  imageSrc: string | StaticImageData;
};

// SEO Metadata (would be exported from layout in real implementation)
const pageMetadata = {
  title: "Shop All Products | Everlane - Quality Modern Essentials",
  description: "Discover our full collection of sustainable, ethically-made clothing and accessories. Shop quality essentials at transparent prices with free shipping on orders over $50.",
};

// Structured Data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'All Products',
  description: 'Shop our complete collection of sustainable fashion',
  url: typeof window !== 'undefined' ? window.location.href : '',
};

export default function ProductsPage() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Sort products
  const sortedProducts = useMemo(() => {
    const products = [...fakeProducts];
    
    switch (sortBy) {
      case "price-asc":
        return products.sort((a, b) => a.price - b.price);
      case "price-desc":
        return products.sort((a, b) => b.price - a.price);
      case "newest":
        return products.reverse();
      case "popular":
      default:
        return products;
    }
  }, [sortBy]);

  // Paginate products
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleSortChange = (value: SortOption) => {
    setSortBy(value);
    setCurrentPage(1); // Reset to first page when sorting
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleQuickView = (product: { id: number | string; name: string; price: string | number; imageSrc?: string | StaticImageData }) => {
    const numericPrice = typeof product.price === 'string' ? parseInt(product.price.replace('$', '')) : product.price;
    setQuickViewProduct({
      id: typeof product.id === 'string' ? parseInt(product.id) : product.id,
      name: product.name,
      price: numericPrice,
      imageSrc: product.imageSrc || category1
    });
  };

  return (
    <>
      {/* SEO Head Elements */}
      <title>{pageMetadata.title}</title>
      <meta name="description" content={pageMetadata.description} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Modal 
        isOpen={isModalOpen}
        onClose={handleModalClose}
        message="This feature will be in the real version"
      />

      <QuickViewModal
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        product={quickViewProduct ? { ...quickViewProduct, price: `$${quickViewProduct.price}` } : null}
      />

      <BackToTop />

      <main className="bg-[#EEEAE7] text-gray-900">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium" aria-current="page">
              All Products
            </li>
          </ol>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex gap-8">
            {/* Sidebar */}
            <FilterSidebar onFilterClick={handleModalOpen} />

            {/* Main content */}
            <section className="flex-1">
              <PLPToolbar 
                onOpenFilters={() => setFiltersOpen(true)}
                onSearchClick={handleModalOpen}
                onSortChange={handleSortChange}
                currentSort={sortBy}
                totalResults={sortedProducts.length}
              />

              <ProductGrid 
                products={paginatedProducts.map(p => ({
                  ...p,
                  price: `$${p.price}`
                }))} 
                onQuickView={handleQuickView}
              />

              <Pagination 
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                onModalOpen={handleModalOpen}
              />
            </section>
          </div>
        </div>
      </main>

      <MobileFiltersDrawer 
        open={filtersOpen} 
        onClose={() => setFiltersOpen(false)}
        onFilterClick={handleModalOpen}
        onSearchClick={handleModalOpen}
      />
    </>
  );
}

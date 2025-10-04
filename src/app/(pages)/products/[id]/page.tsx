"use client";
import React from "react";
import ProductGallery from "@/components/pdp/ProductGallery";
import ProductInfo from "@/components/pdp/ProductInfo";
import productDetailsImage from "@/assets/imgs/productDetailsImage.png";
import Img2 from "@/assets/imgs/category-8.jpg";
import Img3 from "@/assets/imgs/category-9.jpg";
import ProductGrid from "@/components/plp/ProductGrid";

export default function PDPPage() {
  const images = [productDetailsImage, Img2, Img3, productDetailsImage, Img2];
  const related = Array.from({ length: 3 }).map((_, i) => ({ id: i + 1, name: "Shimmery Shirt", price: "$200.00", imageSrc: Img2 }));

  return (
    <main className="bg-[#EEEAE7] text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumbs */}
        <nav className="text-xs text-gray-500 mb-6">
          <span>HOME</span>
          <span className="mx-2">›</span>
          <span>MEN POLO SHIRTS</span>
          <span className="mx-2">›</span>
          <span className="text-gray-700">MEN STRIPPED POLO TEE</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ProductGallery images={images} />
          <ProductInfo
            name="Men Striped Polo Tee"
            sku="MT4041-00S-BLK"
            price={200}
            originalPrice={300}
            colorImages={[productDetailsImage]}
          />
        </div>
        
        <div className="mt-20 border-t border-gray-400" />

        <section className="mt-16">
          <h2 className="text-center text-lg font-semibold mb-8">Related Products</h2>
          <ProductGrid products={related} />
        </section>
      </div>
    </main>
  );
}


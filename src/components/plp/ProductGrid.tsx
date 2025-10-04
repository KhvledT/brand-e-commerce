"use client";
import React from "react";
import ProductCard from "@/components/ProductCard";
import type { StaticImageData } from "next/image";

type Product = {
  id: number | string;
  name: string;
  price: string;
  imageSrc?: string | StaticImageData;
};

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}



"use client";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type PaginationProps = {
  totalPages?: number;
  current?: number;
};

export default function Pagination({ totalPages = 6, current = 1 }: PaginationProps) {
  const pages = Array.from({ length: totalPages }).map((_, i) => String(i + 1).padStart(2, "0"));
  return (
    <div className="mt-10 flex items-center justify-center gap-3">
      <button className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700">
        <ArrowLeft className="h-4 w-4" />
      </button>
      {pages.map((n, i) => (
        <button
          key={n}
          className={`h-9 w-9 rounded-full text-sm ${
            i + 1 === current ? "bg-gray-900 text-white" : "border border-gray-300 bg-white text-gray-800"
          }`}
        >
          {n}
        </button>
      ))}
      <button className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700">
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}



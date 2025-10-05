"use client";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onModalOpen: () => void;
};

export default function Pagination({ 
  totalPages, 
  currentPage, 
  onPageChange,
  onModalOpen 
}: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onModalOpen();
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onModalOpen();
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show max 5 page numbers
  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];
    
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="mt-10 flex items-center justify-center gap-2" role="navigation" aria-label="Pagination">
      <button 
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`h-9 w-9 inline-flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-all duration-200 ${
          currentPage === 1 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:bg-gray-50 hover:scale-110'
        }`}
        aria-label="Previous page"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      
      {pageNumbers.map((pageNum, i) => (
        pageNum === '...' ? (
          <span key={`ellipsis-${i}`} className="px-2 text-gray-400">...</span>
        ) : (
          <button
            key={pageNum}
            onClick={() => handlePageClick(pageNum as number)}
            className={`h-9 w-9 rounded-full text-sm font-medium transition-all duration-200 ${
              pageNum === currentPage 
                ? "bg-gray-900 text-white shadow-md" 
                : "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 hover:scale-110"
            }`}
            aria-label={`Go to page ${pageNum}`}
            aria-current={pageNum === currentPage ? 'page' : undefined}
          >
            {String(pageNum).padStart(2, "0")}
          </button>
        )
      ))}
      
      <button 
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`h-9 w-9 inline-flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-all duration-200 ${
          currentPage === totalPages 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:bg-gray-50 hover:scale-110'
        }`}
        aria-label="Next page"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}



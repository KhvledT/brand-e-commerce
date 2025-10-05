"use client";
import React, { useState } from "react";
import { Tag } from "lucide-react";

type CouponCodePanelProps = {
  onApply?: (code: string) => void;
};

export default function CouponCodePanel({ onApply }: CouponCodePanelProps) {
  const [couponCode, setCouponCode] = useState("");

  const handleApply = () => {
    if (couponCode.trim()) {
      onApply?.(couponCode);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleApply();
    }
  };

  return (
    <section className="bg-white rounded-md border border-gray-200 p-5 shadow-sm" aria-labelledby="coupon-heading">
      <h2 id="coupon-heading" className="text-base font-semibold mb-4 flex items-center gap-2">
        <Tag className="h-4 w-4" />
        Coupon Code
      </h2>
      <div className="space-y-3">
        <div>
          <label htmlFor="coupon-input" className="sr-only">
            Enter coupon code
          </label>
          <input
            id="coupon-input"
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter coupon code"
            className="w-full h-11 rounded-md border border-gray-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200"
            aria-label="Coupon code input"
          />
        </div>
        <button 
          onClick={handleApply}
          disabled={!couponCode.trim()}
          className="w-full px-4 inline-flex font-semibold items-center justify-center h-11 rounded-[3px] bg-gray-900 text-white hover:bg-gray-800 text-sm transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          APPLY COUPON
        </button>
        
        {/* Popular Coupons Hint */}
        <p className="text-xs text-gray-500 text-center mt-3">
          Have a promo code? Enter it above to get your discount
        </p>
      </div>
    </section>
  );
}

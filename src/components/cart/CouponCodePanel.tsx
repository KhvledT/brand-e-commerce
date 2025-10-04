"use client";
import React from "react";

export default function CouponCodePanel() {
  return (
    <aside className="bg-white rounded-md border border-gray-200 p-5">
      <h3 className="text-base font-semibold mb-4">Coupon Code</h3>
      <div className="space-y-3">
        <input
          type="email"
          placeholder="Email address"
          className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900"
        />
        <button className="w-fit px-4 inline-flex font-semibold items-center justify-center h-10 rounded-[3px] bg-gray-900 text-white hover:bg-gray-800 text-sm">
          APPLY COUPON
        </button>
      </div>
    </aside>
  );
}



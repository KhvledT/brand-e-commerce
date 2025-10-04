"use client";
import React from "react";

type FilterContentProps = {
  namePrefix?: string;
};

export default function FilterContent({ namePrefix = "filter" }: FilterContentProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Category</h3>
        <div className="space-y-2 text-sm">
          {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((c, idx) => (
            <label key={c} className="flex items-center gap-2">
              <input
                type="radio"
                name={`${namePrefix}-category`}
                defaultChecked={idx === 0}
                className="h-4 w-4 border-gray-300 text-gray-900 focus:ring-gray-900"
              />
              <span>{c}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-sm font-medium mb-3">Price Range</h3>
        <div className="grid grid-cols-2 gap-3">
          <input placeholder="Min price" className="h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900" />
          <input placeholder="Max price" className="h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900" />
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium">Colors</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {["#ef4444", "#22c55e", "#10b981", "#f59e0b", "#fbbf24", "#eab308", "#3b82f6", "#8b5cf6", "#06b6d4", "#111827", "#ffffff"].map((color, idx) => (
            <button key={color} className={`h-5 w-5 rounded-full ring-1 ring-inset ${idx === 5 ? "ring-gray-900" : "ring-gray-300"}`} style={{ backgroundColor: color }} aria-label={`Filter ${color}`} />
          ))}
        </div>
      </div>
    </div>
  );
}



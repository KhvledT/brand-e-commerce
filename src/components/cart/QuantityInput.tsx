"use client";
import React from "react";

type QuantityInputProps = {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  className?: string;
};

export default function QuantityInput({ value, min = 1, max = 99, onChange, className }: QuantityInputProps) {
  const decrement = () => onChange(Math.max(min, value - 1));
  const increment = () => onChange(Math.min(max, value + 1));

  return (
    <div className={`inline-flex items-center border border-gray-300 rounded-md h-10 ${className ?? ""}`}>
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={decrement}
        className="h-full px-3 text-gray-700 hover:bg-gray-50"
      >
        −
      </button>
      <input
        aria-label="Quantity"
        value={value.toString().padStart(2, "0")}
        onChange={(e) => {
          const parsed = parseInt(e.target.value.replace(/\D/g, ""), 10);
          if (!Number.isNaN(parsed)) onChange(Math.max(min, Math.min(max, parsed)));
        }}
        className="w-12 text-center outline-none text-sm"
      />
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={increment}
        className="h-full px-3 text-gray-700 hover:bg-gray-50"
      >
        +
      </button>
    </div>
  );
}



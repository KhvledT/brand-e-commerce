"use client";
import React from "react";
import { Minus, Plus } from "lucide-react";

type QuantityInputProps = {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  className?: string;
  disabled?: boolean;
};

export default function QuantityInput({ 
  value, 
  min = 1, 
  max = 99, 
  onChange, 
  className,
  disabled = false 
}: QuantityInputProps) {
  const decrement = () => {
    if (!disabled && value > min) {
      onChange(Math.max(min, value - 1));
    }
  };
  
  const increment = () => {
    if (!disabled && value < max) {
      onChange(Math.min(max, value + 1));
    }
  };

  const isAtMin = value <= min;
  const isAtMax = value >= max;

  return (
    <div 
      className={`inline-flex items-center border border-gray-300 rounded-md h-10 bg-white ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className ?? ""}`}
      role="group"
      aria-label="Quantity selector"
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={decrement}
        disabled={disabled || isAtMin}
        className={`h-full px-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent ${
          isAtMin ? 'text-gray-400' : ''
        }`}
      >
        <Minus className="h-3 w-3" />
      </button>
      <input
        aria-label="Quantity"
        type="text"
        inputMode="numeric"
        value={value.toString().padStart(2, "0")}
        onChange={(e) => {
          if (!disabled) {
            const parsed = parseInt(e.target.value.replace(/\D/g, ""), 10);
            if (!Number.isNaN(parsed)) onChange(Math.max(min, Math.min(max, parsed)));
          }
        }}
        disabled={disabled}
        className="w-12 text-center outline-none text-sm font-medium disabled:cursor-not-allowed disabled:bg-gray-50"
        readOnly={disabled}
      />
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={increment}
        disabled={disabled || isAtMax}
        className={`h-full px-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent ${
          isAtMax ? 'text-gray-400' : ''
        }`}
      >
        <Plus className="h-3 w-3" />
      </button>
    </div>
  );
}



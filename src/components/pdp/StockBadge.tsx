"use client";
import React from "react";
import { CheckCircle, XCircle, Clock } from "lucide-react";

type StockStatus = "in-stock" | "out-of-stock" | "low-stock";

type StockBadgeProps = {
  status: StockStatus;
  quantity?: number;
  lowStockThreshold?: number;
};

export default function StockBadge({ status, quantity = 0, lowStockThreshold = 5 }: StockBadgeProps) {
  const isLowStock = status === "in-stock" && quantity > 0 && quantity <= lowStockThreshold;

  if (status === "out-of-stock") {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 border border-red-200 rounded-md">
        <XCircle className="h-4 w-4 text-red-600" />
        <span className="text-sm font-medium text-red-700">Out of Stock</span>
      </div>
    );
  }

  if (isLowStock) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-md">
        <Clock className="h-4 w-4 text-orange-600" />
        <span className="text-sm font-medium text-orange-700">
          Only {quantity} left in stock!
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-md">
      <CheckCircle className="h-4 w-4 text-green-600" />
      <span className="text-sm font-medium text-green-700">In Stock</span>
    </div>
  );
}


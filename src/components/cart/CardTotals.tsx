"use client";
import React, { useMemo } from "react";
import { ArrowRight } from "lucide-react";

type Totals = {
  subTotal: number;
  shipping: number; // 0 for Free
  discount: number;
  tax: number;
};

type CardTotalsProps = {
  totals: Totals;
  onCheckout?: () => void;
};

export default function CardTotals({ totals, onCheckout }: CardTotalsProps) {
  const grandTotal = useMemo(() => {
    return totals.subTotal - totals.discount + totals.tax + totals.shipping;
  }, [totals]);

  const currency = (n: number) => `$${n.toFixed(2)}`;

  return (
    <aside className="bg-white rounded-md border border-gray-200 p-5">
      <h3 className="text-base font-semibold mb-4">Card Totals</h3>

      <dl className="space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <dt className="text-gray-600">Sub-total</dt>
          <dd className="text-gray-900">{currency(totals.subTotal)}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-gray-600">Shipping</dt>
          <dd className="text-gray-900">{totals.shipping === 0 ? "Free" : currency(totals.shipping)}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-gray-600">Discount</dt>
          <dd className="text-gray-900">{currency(totals.discount)}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-gray-600">Tax</dt>
          <dd className="text-gray-900">{currency(totals.tax)}</dd>
        </div>
      </dl>

      <div className="my-4 border-t border-gray-200" />

      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Total</span>
        <span className="font-semibold">{currency(grandTotal)} USD</span>
      </div>

      <button
        onClick={onCheckout}
        className="mt-5 w-full inline-flex items-center justify-center h-11 rounded-[3px] bg-gray-900 text-white hover:bg-gray-800 text-sm"
      >
        PROCEED TO CHECKOUT
       <ArrowRight className="h-4 w-4 ml-2" />
      </button>
    </aside>
  );
}



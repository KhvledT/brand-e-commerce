"use client";
import React, { useMemo } from "react";
import { ArrowRight } from "lucide-react";

type Totals = {
  subTotal: number;
  shipping: number; // 0 for Free
  discount: number;
  tax: number;
};

type CartTotalsProps = {
  totals: Totals;
  onCheckout?: () => void;
};

export default function CartTotals({ totals, onCheckout }: CartTotalsProps) {
  const grandTotal = useMemo(() => {
    return totals.subTotal - totals.discount + totals.tax + totals.shipping;
  }, [totals]);

  const currency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);

  return (
    <section className="bg-white rounded-md border border-gray-200 p-5 shadow-sm" aria-labelledby="cart-totals-heading">
      <h2 id="cart-totals-heading" className="text-base font-semibold mb-4">Cart Totals</h2>

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
          <dd className="text-green-600">-{currency(totals.discount)}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-gray-600">Tax</dt>
          <dd className="text-gray-900">{currency(totals.tax)}</dd>
        </div>
      </dl>

      <div className="my-4 border-t border-gray-200" />

      <div className="flex items-center justify-between text-base" aria-live="polite">
        <span className="text-gray-900 font-semibold">Total</span>
        <span className="font-bold text-lg">{currency(grandTotal)}</span>
      </div>

      <button
        onClick={onCheckout}
        className="mt-5 w-full inline-flex items-center justify-center h-11 rounded-[3px] bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200 hover:scale-105 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        aria-label="Proceed to checkout"
      >
        PROCEED TO CHECKOUT
       <ArrowRight className="h-4 w-4 ml-2" />
      </button>
    </section>
  );
}


"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowRight, ShoppingBag, Loader2 } from "lucide-react";
import Link from "next/link";

type OrderItem = {
  id: number | string;
  name: string;
  price: number;
  imageSrc: string | StaticImageData;
  quantity: number;
};

type OrderSummaryProps = {
  items: OrderItem[];
  subTotal: number;
  shipping: number;
  discount: number;
  tax: number;
  total: number;
  onPlaceOrder: () => void;
  isProcessing: boolean;
};

export default function OrderSummary({
  items,
  subTotal,
  shipping,
  discount,
  tax,
  total,
  onPlaceOrder,
  isProcessing,
}: OrderSummaryProps) {
  const currency = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

  return (
    <section
      className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
      aria-labelledby="summary-heading"
    >
      <h2 id="summary-heading" className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
        <ShoppingBag className="h-5 w-5" />
        Order Summary
      </h2>

      {/* Products List */}
      <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
        {items.map((item) => (
          <article key={item.id} className="flex gap-3">
            <div className="relative h-20 w-20 rounded-md overflow-hidden shrink-0 bg-gray-100">
              <Image
                src={item.imageSrc}
                alt={`${item.name} product image`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 truncate">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-1">Qty: {item.quantity}</p>
              <p className="text-sm font-semibold text-gray-900 mt-1">{currency(item.price)}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4">
        {/* Edit Cart Link */}
        <div className="mb-4">
          <Link
            href="/cart"
            className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors"
          >
            ← Edit Cart
          </Link>
        </div>

        {/* Totals Breakdown */}
        <dl className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <dt className="text-gray-600">Sub-total</dt>
            <dd className="text-gray-900 font-medium">{currency(subTotal)}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-gray-600">Shipping</dt>
            <dd className="text-gray-900 font-medium">
              {shipping === 0 ? (
                <span className="text-green-600 font-semibold">Free</span>
              ) : (
                currency(shipping)
              )}
            </dd>
          </div>
          {discount > 0 && (
            <div className="flex items-center justify-between">
              <dt className="text-gray-600">Discount</dt>
              <dd className="text-green-600 font-semibold">-{currency(discount)}</dd>
            </div>
          )}
          <div className="flex items-center justify-between">
            <dt className="text-gray-600">Tax</dt>
            <dd className="text-gray-900 font-medium">{currency(tax)}</dd>
          </div>
        </dl>

        <div className="my-4 border-t border-gray-200" />

        {/* Total */}
        <div className="flex items-center justify-between text-base mb-6" aria-live="polite">
          <span className="text-gray-900 font-bold">Total</span>
          <span className="font-bold text-xl text-gray-900">{currency(total)}</span>
        </div>

        {/* Place Order Button */}
        <button
          onClick={onPlaceOrder}
          disabled={isProcessing}
          className="w-full inline-flex items-center justify-center h-14 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200 hover:scale-105 text-base font-bold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          aria-label="Place your order"
        >
          {isProcessing ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              PLACE ORDER
              <ArrowRight className="h-5 w-5 ml-2" />
            </>
          )}
        </button>

        {/* Trust Badges */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Free Returns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


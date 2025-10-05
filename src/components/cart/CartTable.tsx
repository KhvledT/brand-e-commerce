"use client";
import React from "react";
import Image, { type StaticImageData } from "next/image";
import QuantityInput from "./QuantityInput";
import { ArrowLeft, X } from "lucide-react";
import Link from "next/link";

export type CartItem = {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  imageSrc: string | StaticImageData;
  quantity: number;
};

type CartTableProps = {
  items: CartItem[];
  onRemove: (id: CartItem["id"]) => void;
  onUpdateQuantity: (id: CartItem["id"], quantity: number) => void;
  onUpdateCart?: () => void;
};

export default function CartTable({ items, onRemove, onUpdateQuantity, onUpdateCart }: CartTableProps) {
  return (
    <div className="bg-white rounded-md border border-gray-200 overflow-hidden shadow-sm">
      <h2 className="text-lg font-semibold m-6">Shopping Cart</h2>
      
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto" role="region" aria-label="Shopping cart items">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-[11px] tracking-wider uppercase text-gray-500 border-b border-gray-200">
              <th className="text-left font-semibold px-4 py-3">Products</th>
              <th className="text-left font-semibold px-4 py-3">Price</th>
              <th className="text-left font-semibold px-4 py-3">Quantity</th>
              <th className="text-left font-semibold px-4 py-3">Sub-Total</th>
            </tr>
          </thead>
          <tbody aria-live="polite">
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-100 transition-all duration-300">
                {/* Products */}
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onRemove(item.id)}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 hover:text-red-500 hover:border-red-500 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <div className="relative h-14 w-14 rounded-sm overflow-hidden">
                      <Image 
                        src={item.imageSrc} 
                        alt={`${item.name} product image`} 
                        fill 
                        className="object-cover object-center" 
                        sizes="56px"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-gray-900 font-medium">{item.name}</span>
                  </div>
                </td>

                {/* Price */}
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    {item.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">${item.originalPrice}</span>
                    )}
                    <span className="text-gray-900 font-medium">${item.price}</span>
                  </div>
                </td>

                {/* Quantity */}
                <td className="px-4 py-4">
                  <QuantityInput
                    value={item.quantity}
                    onChange={(q) => onUpdateQuantity(item.id, q)}
                  />
                </td>

                {/* Subtotal */}
                <td className="px-4 py-4 text-gray-900 font-semibold">${(item.price * item.quantity).toFixed(0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden divide-y divide-gray-200" role="region" aria-label="Shopping cart items" aria-live="polite">
        {items.map((item) => (
          <article key={item.id} className="p-4 transition-all duration-300">
            <div className="flex gap-4">
              {/* Product Image */}
              <div className="relative h-24 w-24 rounded-sm overflow-hidden shrink-0">
                <Image
                  src={item.imageSrc}
                  alt={`${item.name} product image`}
                  fill
                  className="object-cover object-center"
                  sizes="96px"
                  loading="lazy"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-medium text-gray-900 text-base">{item.name}</h3>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 hover:text-red-500 hover:border-red-500 transition-all duration-200 shrink-0"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  {item.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">${item.originalPrice}</span>
                  )}
                  <span className="text-gray-900 font-semibold">${item.price}</span>
                </div>

                {/* Quantity and Subtotal */}
                <div className="flex items-center justify-between">
                  <QuantityInput
                    value={item.quantity}
                    onChange={(q) => onUpdateQuantity(item.id, q)}
                    className="scale-90 origin-left"
                  />
                  <div className="text-right">
                    <div className="text-xs text-gray-600 mb-1">Subtotal</div>
                    <div className="text-gray-900 font-bold">${(item.price * item.quantity).toFixed(0)}</div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 px-4 py-4 border-t border-gray-200 bg-gray-50">
        <Link 
          href="/products" 
          className="inline-flex items-center justify-center text-sm font-bold h-11 px-6 rounded-[3px] border-2 border-gray-900 text-gray-800 bg-white hover:bg-gray-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          RETURN TO SHOP
        </Link>
        <button 
          onClick={onUpdateCart}
          className="inline-flex items-center justify-center text-sm font-bold h-11 px-6 rounded-[3px] border-2 border-gray-900 text-gray-800 bg-white hover:bg-gray-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          UPDATE CART
        </button>
      </div>
    </div>
  );
}

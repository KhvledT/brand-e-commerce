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
};

export default function CartTable({ items, onRemove, onUpdateQuantity }: CartTableProps) {
  return (
    <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
            <h1 className="text-lg font-semibold m-6">Shopping Card</h1>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100 text-[11px] tracking-wider uppercase text-gray-500 border-b border-gray-200">
            <th className="text-left font-semibold px-4 py-3">Products</th>
            <th className="text-left font-semibold px-4 py-3">Price</th>
            <th className="text-left font-semibold px-4 py-3">Quantity</th>
            <th className="text-left font-semibold px-4 py-3">Sub-Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-100">
              {/* Products */}
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onRemove(item.id)}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 hover:text-red-500"
                    aria-label={`Remove ${item.name}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <div className="relative h-14 w-14 rounded-sm overflow-hidden">
                    <Image src={item.imageSrc} alt={item.name} fill className="object-cover object-center" />
                  </div>
                  <span className="text-gray-900">{item.name}</span>
                </div>
              </td>

              {/* Price */}
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  {item.originalPrice && (
                    <span className="text-gray-400 line-through">${item.originalPrice}</span>
                  )}
                  <span className="text-gray-900">${item.price}</span>
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
              <td className="px-4 py-4 text-gray-900">${(item.price * item.quantity).toFixed(0)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 px-4 py-4 border-t border-gray-200">
        <Link href="/products" className="inline-flex items-center text-sm font-bold justify-center h-10 px-4 rounded-[3px] border-2 border-gray-900 text-gray-800 bg-white hover:bg-gray-50">
          <ArrowLeft className="h-4 w-4 mr-2" />
          RETURN TO SHOP
        </Link>
        <button className="inline-flex items-center justify-center text-sm font-bold h-10 px-4 rounded-[3px] border-2 border-gray-900 text-gray-800 bg-white hover:bg-gray-50">
          UPDATE CART
        </button>
      </div>
    </div>
  );
}



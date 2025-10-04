"use client";
import React from "react";
import Image1 from "@/assets/imgs/category-7.jpg";
import Image2 from "@/assets/imgs/category-8.jpg";
import CartTable, { CartItem } from "@/components/cart/CartTable";
import CardTotals from "@/components/cart/CardTotals";
import CouponCodePanel from "@/components/cart/CouponCodePanel";

export default function CartPage() {
  const [items, setItems] = React.useState<CartItem[]>([
    { id: 1, name: "Shimmery Shirt", price: 150, originalPrice: 200, imageSrc: Image1, quantity: 1 },
    { id: 2, name: "Check Shirt", price: 250, imageSrc: Image2, quantity: 3 },
  ]);

  const removeItem = (id: CartItem["id"]) => setItems((prev) => prev.filter((i) => i.id !== id));
  const updateQty = (id: CartItem["id"], q: number) => setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: q } : i)));

  const subTotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <main className="bg-[#EEEAE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <CartTable items={items} onRemove={removeItem} onUpdateQuantity={updateQty} />
          </div>
          <div className="lg:col-span-4 space-y-6">
            <CardTotals totals={{ subTotal, shipping: 0, discount: 24, tax: 61.99 }} />
            <CouponCodePanel />
          </div>
        </div>
      </div>
    </main>
  );
}

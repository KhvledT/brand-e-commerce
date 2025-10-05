"use client";
import React, { useState } from "react";
import QuantityInput from "@/components/cart/QuantityInput";
import Image, { StaticImageData } from "next/image";
import { Heart } from "lucide-react";
import Modal from "@/components/ui/Modal";
import Toast, { ToastType } from "@/components/ui/Toast";

type VariantImage = StaticImageData | string;
type StockStatus = "in-stock" | "out-of-stock" | "low-stock";

type ProductInfoProps = {
  name: string;
  sku: string;
  price: number;
  originalPrice?: number;
  colorImages?: VariantImage[];
  rating?: number;
  reviewCount?: number;
  stock?: number;
  stockStatus?: StockStatus;
  onAddToCart?: (qty: number) => void;
  onAddToWishlist?: () => void;
};

export default function ProductInfo({
  name,
  sku,
  price,
  originalPrice,
  colorImages = [],
  stock = 15,
  stockStatus = "in-stock",
  onAddToCart,
  onAddToWishlist,
}: ProductInfoProps) {
  const [size, setSize] = useState("Medium");
  const [qty, setQty] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  const sizes = ["Small", "Medium", "Large", "X-Large"];
  const isOutOfStock = stockStatus === "out-of-stock";

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    
    // Simulate API call
    setTimeout(() => {
      onAddToCart?.(qty);
      setIsAddingToCart(false);
      setShowModal(true);
      setToast({ message: `${name} added to cart!`, type: "success" });
    }, 800);
  };

  const handleAddToWishlist = async () => {
    setIsAddingToWishlist(true);
    
    // Simulate API call
    setTimeout(() => {
      onAddToWishlist?.();
      setIsAddingToWishlist(false);
      setToast({ message: `${name} added to wishlist!`, type: "success" });
    }, 600);
  };

  return (
    <>
      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Added to Cart!"
        message={`${qty} x ${name} has been added to your cart.`}
      />

      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          isOpen={!!toast}
          onClose={() => setToast(null)}
          duration={2500}
        />
      )}

      <div className="lg:sticky lg:top-24">
        {/* Product Title & SKU */}
        <div className="mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{name}</h1>
          <p className="text-sm text-gray-500">SKU: {sku}</p>
        </div>
        <div className="my-6 border-t border-gray-300" />

        {/* Price */}
        <div className="flex items-center gap-3 mb-6">
          {originalPrice && originalPrice > price && (
            <span className="text-xl text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
          )}
          <span className="text-3xl font-bold text-green-600">${price.toFixed(2)}</span>
        </div>

        {/* Color Selection */}
        {colorImages.length > 0 && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900 mb-3">
              Color: <span className="text-gray-600 font-normal">Black</span>
            </label>
            <div className="flex gap-2">
              {colorImages.map((img, i) => (
                <button
                  key={i}
                  className="relative h-12 w-12 rounded-md overflow-hidden ring-2 ring-gray-900 hover:ring-gray-600 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  aria-label={`Select color ${i + 1}`}
                >
                  <Image src={img} alt={`Color ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Size Selection */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-medium text-gray-900">
              Size: <span className="text-gray-600 font-normal">{size}</span>
            </label>
            <button className="text-sm text-gray-600 hover:text-gray-900 underline">
              Size Guide
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`h-11 px-3 rounded-md border text-sm font-medium transition-all duration-200 ${
                  size === s
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-300 text-gray-900 hover:border-gray-900"
                }`}
                aria-pressed={size === s}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-3">Quantity</label>
          <QuantityInput value={qty} onChange={setQty} max={stock} disabled={isOutOfStock} />
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-8">
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock || isAddingToCart}
            className="w-full h-12 rounded-[3px] font-bold bg-gray-900 text-white text-sm hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            {isAddingToCart ? "ADDING..." : isOutOfStock ? "OUT OF STOCK" : "ADD TO CART"}
          </button>
          <button
            onClick={handleAddToWishlist}
            disabled={isAddingToWishlist}
            className="w-full h-12 rounded-[3px] font-bold border-2 border-gray-900 text-gray-900 text-sm hover:bg-gray-900 hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 flex items-center justify-center gap-2"
          >
            <Heart className="h-4 w-4" />
            {isAddingToWishlist ? "ADDING..." : "ADD TO WISHLIST"}
          </button>
        </div>

        {/* Product Information Section */}
        <div className="mt-10">
          <h3 className="text-sm font-semibold mb-3">Product Information</h3>
          <p className="text-sm text-gray-700">
            Black, basic, striped t-shirt featuring a collared neck with button detail. Half sleeves with stripes in a contrasting shade.
          </p>

          <p className="text-sm text-gray-900 py-5 font-bold">
            Fabric: <span className="text-gray-900 font-normal">PQ</span>
          </p>

          <h4 className="text-xs font-medium text-gray-600 mb-2">Care Instructions:</h4>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Machine or hand-wash up to 30C/86F</li>
            <li>Gentle cycle</li>
            <li>Do not dry in direct sunlight; do not bleach</li>
            <li>Do not iron directly on prints/embroidery</li>
          </ul>
        </div>
      </div>
    </>
  );
}

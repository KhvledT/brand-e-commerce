"use client";
import React from "react";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import BackToTop from "@/components/BackToTop";
import Toast, { ToastType } from "@/components/ui/Toast";
import { useState } from "react";
import Image from "next/image";
import { X, ShoppingCart, Heart } from "lucide-react";
import { formatCurrency } from "@/lib/cart-utils";

// SEO Metadata
const pageMetadata = {
  title: 'My Wishlist | Everlane - Saved Items',
  description: 'View and manage your saved items. Add items to cart or remove them from your wishlist.',
};

export default function WishlistPage() {
  const { items, removeItem } = useWishlist();
  const { addItem } = useCart();
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  const handleAddToCart = (item: typeof items[0]) => {
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      originalPrice: item.originalPrice,
      imageSrc: item.imageSrc,
      quantity: 1,
    };
    addItem(cartItem);
    setToast({ message: `${item.name} added to cart!`, type: 'success' });
  };

  const handleRemoveItem = (id: string | number) => {
    const item = items.find(i => i.id === id);
    removeItem(id);
    setToast({ message: `${item?.name || 'Item'} removed from wishlist`, type: 'success' });
  };

  const handleMoveAllToCart = () => {
    items.forEach(item => {
      const cartItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        originalPrice: item.originalPrice,
        imageSrc: item.imageSrc,
        quantity: 1,
      };
      addItem(cartItem);
    });
    setToast({ message: 'All items added to cart!', type: 'success' });
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{pageMetadata.title}</title>
      <meta name="description" content={pageMetadata.description} />
      <meta name="robots" content="noindex, nofollow" />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          isOpen={!!toast}
          onClose={() => setToast(null)}
          duration={2500}
        />
      )}

      <BackToTop />

      <main className="bg-[#EEEAE7] py-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium" aria-current="page">
              Wishlist
            </li>
          </ol>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
            {items.length > 0 && (
              <button
                onClick={handleMoveAllToCart}
                className="px-6 py-2 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Add All to Cart
              </button>
            )}
          </div>

          {items.length === 0 ? (
            /* Empty Wishlist State */
            <div className="flex flex-col items-center justify-center py-16 px-4 bg-white rounded-lg">
              <div className="w-32 h-32 mb-6 text-gray-300">
                <Heart className="w-full h-full" strokeWidth={1} />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
              <p className="text-gray-600 text-center mb-6 max-w-md">
                Looks like you haven&apos;t saved any items yet. Start browsing to add items to your wishlist!
              </p>
              <Link
                href="/products"
                className="px-8 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            /* Wishlist Items */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Product Image */}
                  <Link href={`/products/${item.id}`} className="block relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                      <Link href={`/products/${item.id}`} className="hover:text-gray-700 transition-colors">
                        {item.name}
                      </Link>
                    </h3>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        {item.originalPrice && item.originalPrice > item.price && (
                          <span className="text-xs text-gray-400 line-through mr-2">
                            {formatCurrency(item.originalPrice)}
                          </span>
                        )}
                        <span className="text-lg font-bold text-gray-900">
                          {formatCurrency(item.price)}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="flex-1 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </button>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                        aria-label="Remove from wishlist"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}


"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image1 from "@/assets/imgs/category-7.jpg";
import Image2 from "@/assets/imgs/category-8.jpg";
import CartTable, { CartItem } from "@/components/cart/CartTable";
import CartTotals from "@/components/cart/CartTotals";
import CouponCodePanel from "@/components/cart/CouponCodePanel";
import BackToTop from "@/components/BackToTop";
import Modal from "@/components/ui/Modal";
import Toast, { ToastType } from "@/components/ui/Toast";

// SEO Metadata (would be in metadata export in real app)
const pageMetadata = {
  title: 'Shopping Cart | Everlane - Review Your Items',
  description: 'Review your selected items, apply coupons, and proceed to checkout. Free shipping on orders over $50.',
};

export default function CartPage() {
  const router = useRouter();
  const [items, setItems] = useState<CartItem[]>([
    { id: 1, name: "Shimmery Shirt", price: 150, originalPrice: 200, imageSrc: Image1, quantity: 1 },
    { id: 2, name: "Check Shirt", price: 250, imageSrc: Image2, quantity: 3 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<CartItem["id"] | null>(null);
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  const removeItem = (id: CartItem["id"]) => {
    setItemToRemove(id);
    setIsRemoveModalOpen(true);
  };

  const confirmRemove = () => {
    if (itemToRemove !== null) {
      const item = items.find(i => i.id === itemToRemove);
      setItems((prev) => prev.filter((i) => i.id !== itemToRemove));
      setIsRemoveModalOpen(false);
      setItemToRemove(null);
      setToast({ message: `${item?.name || 'Item'} removed from cart`, type: 'success' });
    }
  };

  const updateQty = (id: CartItem["id"], q: number) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: q } : i)));
    setToast({ message: 'Quantity updated', type: 'success' });
  };

  const subTotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  
  // Dynamic discount calculation (10% off orders over $500)
  const discount = subTotal > 500 ? subTotal * 0.1 : 0;
  
  // Dynamic tax calculation (8% sales tax)
  const tax = (subTotal - discount) * 0.08;
  
  // Dynamic shipping (free over $50)
  const shipping = subTotal >= 50 ? 0 : 10;

  const handleCheckout = () => {
    // Navigate to checkout page
    router.push('/checkout');
  };

  const handleUpdateCart = () => {
    setIsModalOpen(true);
  };

  const handleApplyCoupon = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{pageMetadata.title}</title>
      <meta name="description" content={pageMetadata.description} />
      <meta name="robots" content="noindex, nofollow" />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="This feature will be in the real version"
      />

      {/* Remove Confirmation Modal */}
      <Modal
        isOpen={isRemoveModalOpen}
        onClose={() => {
          setIsRemoveModalOpen(false);
          setItemToRemove(null);
        }}
        title="Remove Item"
        message="Are you sure you want to remove this item from your cart?"
      >
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => {
              setIsRemoveModalOpen(false);
              setItemToRemove(null);
            }}
            className="flex-1 px-4 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={confirmRemove}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
          >
            Remove
          </button>
        </div>
      </Modal>

      <BackToTop />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          isOpen={!!toast}
          onClose={() => setToast(null)}
          duration={2500}
        />
      )}

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
              Shopping Cart
            </li>
          </ol>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

          {items.length === 0 ? (
            /* Empty Cart State */
            <div className="flex flex-col items-center justify-center py-16 px-4 bg-white rounded-lg">
              <div className="w-32 h-32 mb-6 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-600 text-center mb-6 max-w-md">
                Looks like you haven&apos;t added anything to your cart yet. Start shopping to fill it up!
              </p>
              <Link
                href="/products"
                className="px-8 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <CartTable 
                  items={items} 
                  onRemove={removeItem} 
                  onUpdateQuantity={updateQty}
                  onUpdateCart={handleUpdateCart}
                />
              </div>
              <div className="lg:col-span-4 space-y-6">
                <div className="lg:sticky lg:top-24">
                  <CartTotals 
                    totals={{ subTotal, shipping, discount, tax }} 
                    onCheckout={handleCheckout}
                  />
                  <div className="mt-6">
                    <CouponCodePanel onApply={handleApplyCoupon} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

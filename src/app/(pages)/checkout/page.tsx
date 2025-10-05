"use client";
import React, { useState } from "react";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import BillingForm from "@/components/checkout/BillingForm";
import PaymentOptions from "@/components/checkout/PaymentOptions";
import AdditionalInfo from "@/components/checkout/AdditionalInfo";
import OrderSummary from "@/components/checkout/OrderSummary";
import BackToTop from "@/components/BackToTop";
import Modal from "@/components/ui/Modal";
import Toast, { ToastType } from "@/components/ui/Toast";

// Import sample images for demo
import Image1 from "@/assets/imgs/category-7.jpg";
import Image2 from "@/assets/imgs/category-8.jpg";

// Types
export type BillingData = {
  firstName: string;
  lastName: string;
  companyName?: string;
  address: string;
  email: string;
  phone: string;
  shipToDifferent: boolean;
};

export type OrderItem = {
  id: number | string;
  name: string;
  price: number;
  imageSrc: string | StaticImageData;
  quantity: number;
};

type PaymentMethod = "cash" | "paypal" | "card";

// SEO Metadata
const pageMetadata = {
  title: 'Checkout | Everlane - Complete Your Purchase',
  description: 'Complete your secure checkout. Fast shipping and easy returns on all orders.',
};

export default function CheckoutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Form state
  const [billingData, setBillingData] = useState<BillingData>({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    email: "",
    phone: "",
    shipToDifferent: false,
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cash");
  const [orderNotes, setOrderNotes] = useState("");
  const [formErrors, setFormErrors] = useState<Partial<BillingData>>({});

  // Demo cart items (in real app, get from cart state/context)
  const [orderItems] = useState<OrderItem[]>([
    { id: 1, name: "Shimmery Shirt", price: 150, imageSrc: Image1, quantity: 1 },
    { id: 2, name: "Check Shirt", price: 250, imageSrc: Image2, quantity: 1 },
  ]);

  // Calculate totals
  const subTotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subTotal > 500 ? subTotal * 0.1 : 0;
  const tax = (subTotal - discount) * 0.08;
  const shipping = subTotal >= 50 ? 0 : 10;
  const total = subTotal - discount + tax + shipping;

  // Form validation
  const validateForm = (): boolean => {
    const errors: Partial<BillingData> = {};

    if (!billingData.firstName.trim()) errors.firstName = "First name is required";
    if (!billingData.lastName.trim()) errors.lastName = "Last name is required";
    if (!billingData.address.trim()) errors.address = "Address is required";
    if (!billingData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(billingData.email)) {
      errors.email = "Invalid email format";
    }
    if (!billingData.phone.trim()) {
      errors.phone = "Phone number is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle place order
  const handlePlaceOrder = () => {
    if (!validateForm()) {
      setToast({ message: "Please fill in all required fields correctly", type: "error" });
      return;
    }

    setIsProcessing(true);

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsModalOpen(true);
    }, 1500);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    // In real app, redirect to order confirmation page
    // router.push('/order-confirmation');
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{pageMetadata.title}</title>
      <meta name="description" content={pageMetadata.description} />
      <meta name="robots" content="noindex, nofollow" />

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Order Placed Successfully!"
        message="Thank you for your order. This feature will process payments in the real version. You will receive an email confirmation shortly."
      />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          isOpen={!!toast}
          onClose={() => setToast(null)}
          duration={3000}
        />
      )}

      <BackToTop />

      <main className="bg-[#EEEAE7] min-h-screen py-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/cart" className="text-gray-600 hover:text-gray-900 transition-colors">
                Cart
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium" aria-current="page">
              Checkout
            </li>
          </ol>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 lg:pb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              {/* Billing Information */}
              <BillingForm
                data={billingData}
                errors={formErrors}
                onChange={setBillingData}
              />

              {/* Payment Options */}
              <PaymentOptions
                selected={paymentMethod}
                onChange={setPaymentMethod}
              />

              {/* Additional Information */}
              <AdditionalInfo
                notes={orderNotes}
                onChange={setOrderNotes}
              />
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-5 order-first lg:order-last">
              <div className="lg:sticky lg:top-24">
                <OrderSummary
                  items={orderItems}
                  subTotal={subTotal}
                  shipping={shipping}
                  discount={discount}
                  tax={tax}
                  total={total}
                  onPlaceOrder={handlePlaceOrder}
                  isProcessing={isProcessing}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Fixed Bottom Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-40">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">Total:</span>
            <span className="text-xl font-bold text-gray-900">
              {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(total)}
            </span>
          </div>
          <button
            onClick={handlePlaceOrder}
            disabled={isProcessing}
            className="w-full inline-flex items-center justify-center h-12 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200 text-base font-bold disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            {isProcessing ? "Processing..." : "PLACE ORDER"}
          </button>
        </div>
      </main>
    </>
  );
}


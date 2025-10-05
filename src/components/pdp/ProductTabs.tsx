"use client";
import React, { useState } from "react";
import { Package, MessageSquare, Truck } from "lucide-react";

type Tab = "description" | "reviews" | "shipping";

type ProductTabsProps = {
  description: string;
  fabric?: string;
  careInstructions?: string[];
  reviewsContent: React.ReactNode;
  reviewCount?: number;
};

export default function ProductTabs({
  description,
  fabric,
  careInstructions = [],
  reviewsContent,
  reviewCount = 0,
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("description");

  const tabs = [
    { id: "description" as Tab, label: "Description", icon: Package },
    { id: "reviews" as Tab, label: `Reviews (${reviewCount})`, icon: MessageSquare },
    { id: "shipping" as Tab, label: "Shipping & Returns", icon: Truck },
  ];

  return (
    <section className="mt-16" aria-label="Product details tabs">
      {/* Tab Headers */}
      <div className="border-b border-gray-300">
        <div className="flex gap-8" role="tablist">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`${tab.id}-panel`}
                className={`flex items-center gap-2 px-4 py-4 text-sm font-medium border-b-2 transition-all duration-200 ${
                  activeTab === tab.id
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {/* Description Tab */}
        {activeTab === "description" && (
          <div id="description-panel" role="tabpanel" aria-labelledby="description">
            <div className="max-w-3xl">
              <h3 className="text-lg font-semibold mb-4">Product Information</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{description}</p>

              {fabric && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Fabric</h4>
                  <p className="text-gray-700">{fabric}</p>
                </div>
              )}

              {careInstructions.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Care Instructions</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    {careInstructions.map((instruction, idx) => (
                      <li key={idx}>{instruction}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === "reviews" && (
          <div id="reviews-panel" role="tabpanel" aria-labelledby="reviews">
            {reviewsContent}
          </div>
        )}

        {/* Shipping Tab */}
        {activeTab === "shipping" && (
          <div id="shipping-panel" role="tabpanel" aria-labelledby="shipping">
            <div className="max-w-3xl space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Truck className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Free Shipping</h4>
                      <p className="text-sm text-gray-600">
                        Free standard shipping on orders over $50. Orders under $50 have a flat
                        shipping fee of $10.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Package className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Delivery Time</h4>
                      <p className="text-sm text-gray-600">
                        Standard shipping: 5-7 business days. Express shipping available at
                        checkout for 2-3 business days delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold mb-4">Returns & Exchanges</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>
                    <strong>30-Day Returns:</strong> We offer free returns within 30 days of
                    delivery. Items must be unworn, unwashed, and in original condition with tags
                    attached.
                  </p>
                  <p>
                    <strong>How to Return:</strong> Log into your account, go to order history, and
                    select the items you&apos;d like to return. Print the prepaid return label and drop
                    off at any authorized shipping location.
                  </p>
                  <p>
                    <strong>Refunds:</strong> Refunds are processed within 5-7 business days after
                    we receive your return. The refund will be credited to your original payment
                    method.
                  </p>
                  <p>
                    <strong>Exchanges:</strong> We currently don&apos;t offer direct exchanges. Please
                    return your item for a refund and place a new order for the size or color you&apos;d
                    like.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


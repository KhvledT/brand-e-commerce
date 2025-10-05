"use client";
import React from "react";
import { Banknote, CreditCard } from "lucide-react";

type PaymentMethod = "cash" | "paypal" | "card";

type PaymentOptionsProps = {
  selected: PaymentMethod;
  onChange: (method: PaymentMethod) => void;
};

const paymentMethods = [
  {
    id: "cash" as PaymentMethod,
    name: "Cash on Delivery",
    icon: Banknote,
    description: "Pay when you receive your order",
  },
  {
    id: "paypal" as PaymentMethod,
    name: "Paypal",
    iconType: "image",
    description: "Pay securely with PayPal",
  },
  {
    id: "card" as PaymentMethod,
    name: "Debit/Credit Card",
    icon: CreditCard,
    description: "Pay with your debit or credit card",
  },
];

export default function PaymentOptions({ selected, onChange }: PaymentOptionsProps) {
  return (
    <section className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm" aria-labelledby="payment-heading">
      <h2 id="payment-heading" className="text-lg font-semibold text-gray-900 mb-6">
        Payment Option
      </h2>

      <fieldset>
        <legend className="sr-only">Payment method selection</legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {paymentMethods.map((method) => (
            <div key={method.id}>
              <input
                type="radio"
                id={method.id}
                name="payment-method"
                value={method.id}
                checked={selected === method.id}
                onChange={() => onChange(method.id)}
                className="peer sr-only"
              />
              <label
                htmlFor={method.id}
                className={`flex flex-col items-center justify-center p-6 bg-white border-2 rounded-lg cursor-pointer transition-all duration-200 hover:border-gray-400 hover:shadow-md ${
                  selected === method.id
                    ? "border-blue-500 ring-2 ring-blue-500 ring-offset-2 shadow-md"
                    : "border-gray-300"
                }`}
              >
                {/* Icon */}
                <div className="mb-3">
                  {method.iconType === "image" && method.id === "paypal" ? (
                    <div className="h-12 w-12 flex items-center justify-center">
                      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="#00457C">
                        <path d="M20.905 9.5c.21-1.335.106-2.247-.37-3.045-.527-.886-1.547-1.455-3.422-1.455h-5.2c-.377 0-.7.274-.76.648l-2.236 14.19c-.044.282.177.537.46.537h3.345l.84-5.32-.026.168c.06-.374.38-.648.76-.648h1.584c3.11 0 5.544-1.262 6.255-4.914.025-.13.045-.257.063-.38-.097-.052-.097-.052 0 0 .232-1.504.01-2.525-.795-3.281" />
                      </svg>
                    </div>
                  ) : method.icon ? (
                    <method.icon className="h-12 w-12 text-gray-700" />
                  ) : null}
                </div>

                {/* Label */}
                <span className="text-sm font-medium text-gray-900 text-center mb-1">
                  {method.name}
                </span>

                {/* Description */}
                <span className="text-xs text-gray-500 text-center hidden sm:block">
                  {method.description}
                </span>

                {/* Radio indicator */}
                <div className="mt-3">
                  <div
                    className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      selected === method.id
                        ? "border-blue-500 bg-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {selected === method.id && (
                      <div className="h-2 w-2 rounded-full bg-white" />
                    )}
                  </div>
                </div>
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      {/* Payment method description */}
      <div className="mt-6 p-4 bg-gray-50 rounded-md">
        <p className="text-sm text-gray-600">
          {selected === "cash" && (
            <>
              <strong>Cash on Delivery:</strong> Pay with cash when your order is delivered to your
              doorstep. This option is available for orders within our delivery area.
            </>
          )}
          {selected === "paypal" && (
            <>
              <strong>PayPal:</strong> You will be redirected to PayPal to complete your purchase
              securely. This feature will be available in the real version.
            </>
          )}
          {selected === "card" && (
            <>
              <strong>Debit/Credit Card:</strong> Pay securely using your debit or credit card.
              Card details will be processed in the real version.
            </>
          )}
        </p>
      </div>
    </section>
  );
}


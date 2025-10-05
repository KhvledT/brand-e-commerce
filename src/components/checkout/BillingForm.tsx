"use client";
import React from "react";
import { User, Building, MapPin, Mail, Phone } from "lucide-react";

type BillingData = {
  firstName: string;
  lastName: string;
  companyName?: string;
  address: string;
  email: string;
  phone: string;
  shipToDifferent: boolean;
};

type BillingFormProps = {
  data: BillingData;
  errors: Partial<BillingData>;
  onChange: (data: BillingData) => void;
};

export default function BillingForm({ data, errors, onChange }: BillingFormProps) {
  const handleChange = (field: keyof BillingData, value: string | boolean) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm" aria-labelledby="billing-heading">
      <h2 id="billing-heading" className="text-lg font-semibold text-gray-900 mb-6">
        Billing Information
      </h2>

      <div className="space-y-4">
        {/* User name - First and Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                required
                value={data.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className={`w-full h-11 pl-10 pr-4 rounded-md border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200`}
                placeholder="First name"
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? "firstName-error" : undefined}
              />
            </div>
            {errors.firstName && (
              <p id="firstName-error" className="mt-1 text-sm text-red-600">
                {errors.firstName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                required
                value={data.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className={`w-full h-11 pl-10 pr-4 rounded-md border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200`}
                placeholder="Last name"
                aria-invalid={!!errors.lastName}
                aria-describedby={errors.lastName ? "lastName-error" : undefined}
              />
            </div>
            {errors.lastName && (
              <p id="lastName-error" className="mt-1 text-sm text-red-600">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Company Name (Optional) */}
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name <span className="text-gray-500">(Optional)</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Building className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              id="companyName"
              name="companyName"
              autoComplete="organization"
              value={data.companyName || ""}
              onChange={(e) => handleChange("companyName", e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200"
              placeholder="Company name"
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
            Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              id="address"
              name="address"
              autoComplete="street-address"
              required
              value={data.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className={`w-full h-11 pl-10 pr-4 rounded-md border ${
                errors.address ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200`}
              placeholder="Street address"
              aria-invalid={!!errors.address}
              aria-describedby={errors.address ? "address-error" : undefined}
            />
          </div>
          {errors.address && (
            <p id="address-error" className="mt-1 text-sm text-red-600">
              {errors.address}
            </p>
          )}
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                value={data.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`w-full h-11 pl-10 pr-4 rounded-md border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200`}
                placeholder="Email address"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
            </div>
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                required
                value={data.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={`w-full h-11 pl-10 pr-4 rounded-md border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200`}
                placeholder="Phone number"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
            </div>
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-sm text-red-600">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Ship to different address checkbox */}
        <div className="flex items-center pt-2">
          <input
            type="checkbox"
            id="shipToDifferent"
            checked={data.shipToDifferent}
            onChange={(e) => handleChange("shipToDifferent", e.target.checked)}
            className="h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-2 focus:ring-gray-900 cursor-pointer"
          />
          <label htmlFor="shipToDifferent" className="ml-2 text-sm text-gray-700 cursor-pointer">
            Ship into different address
          </label>
        </div>
      </div>
    </section>
  );
}


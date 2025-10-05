"use client";
import React from "react";
import { FileText } from "lucide-react";

type AdditionalInfoProps = {
  notes: string;
  onChange: (notes: string) => void;
};

export default function AdditionalInfo({ notes, onChange }: AdditionalInfoProps) {
  return (
    <section className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm" aria-labelledby="additional-heading">
      <h2 id="additional-heading" className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
        <FileText className="h-5 w-5" />
        Additional Information
      </h2>

      <div>
        <label htmlFor="orderNotes" className="block text-sm font-medium text-gray-700 mb-2">
          Order Notes <span className="text-gray-500">(Optional)</span>
        </label>
        <textarea
          id="orderNotes"
          name="orderNotes"
          rows={5}
          value={notes}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200 resize-none"
          placeholder="Notes about your order, e.g. special notes for delivery"
          maxLength={500}
        />
        <p className="mt-2 text-xs text-gray-500 text-right">
          {notes.length} / 500 characters
        </p>
      </div>
    </section>
  );
}


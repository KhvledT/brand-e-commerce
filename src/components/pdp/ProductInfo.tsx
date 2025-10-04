"use client";
import React from "react";
import QuantityInput from "@/components/cart/QuantityInput";
import Image, { StaticImageData } from "next/image";

type VariantImage = StaticImageData | string;

type ProductInfoProps = {
  name: string;
  sku: string;
  price: number;
  originalPrice?: number;
  colorImages?: VariantImage[];
  onAddToCart?: (qty: number) => void;
  onAddToWishlist?: () => void;
};

export default function ProductInfo({ name, sku, price, originalPrice, colorImages = [], onAddToCart, onAddToWishlist }: ProductInfoProps) {
  const [size, setSize] = React.useState("Medium");
  const [qty, setQty] = React.useState(1);

  return (
    <div>
      <h1 className="text-xl font-semibold">{name}</h1>
      <p className="text-xs text-gray-500 mt-1">{sku}</p>
      
      <div className="my-4 border-t border-gray-400" />

      <div className="mt-6 flex items-center gap-3">
        {originalPrice ? <span className="text-gray-400 line-through">${originalPrice.toFixed(2)}</span> : null}
        <span className="text-green-500 font-medium">${price.toFixed(2)}</span>
      </div>

      {colorImages.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-medium mb-2">Color: <span className="text-gray-500">Black</span></p>
          <div className="flex gap-3">
            {colorImages.map((img, i) => (
              <button key={i} className="relative h-10 w-10 rounded-sm overflow-hidden ring-1 ring-gray-300">
                <Image src={img} alt="color" fill className="object-cover object-center" />
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6">
        <p className="text-sm font-medium mb-2">Select your size:</p>
        <div className="flex gap-2">
          {["Small", "Medium", "Large"].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`h-9 px-3 rounded-md border text-sm ${
                size === s ? "border-gray-300" : "border-gray-900 bg-gray-900 text-white"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium mb-2">Quantity</p>
        <QuantityInput value={qty} onChange={setQty} />
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <button onClick={() => onAddToCart?.(qty)} className="flex-1 py-5 h-11 rounded-[3px] font-bold bg-black text-white text-sm">ADD TO CART</button>
        <button onClick={onAddToWishlist} className="flex-1 py-5 h-11 rounded-[3px] font-bold border border-black text-black text-sm">ADD TO WISHLIST</button>
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-semibold mb-3">Product Information</h3>
        <p className="text-sm text-gray-700">
          Black, basic, striped t-shirt featuring a collared neck with button detail. Half sleeves with stripes in a contrasting shade.
        </p>
        <div className=" border-t border-gray-200" />

        <p className="text-sm text-gray-900 py-5 font-bold">Fabric: <span className="text-gray-900 font-normal">PQ</span></p>

        <h4 className="text-xs font-medium text-gray-600 mb-2">Care Instructions</h4>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>Machine or hand-wash up to 30C/86F</li>
          <li>Gentle cycle</li>
          <li>Do not dry in direct sunlight; do not bleach</li>
          <li>Do not iron directly on prints/embroidery</li>
        </ul>
      </div>
    </div>
  );
}



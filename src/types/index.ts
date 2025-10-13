import { StaticImageData } from 'next/image';

// Product Types
export interface Product {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  imageSrc?: string | StaticImageData;
  description?: string;
  sku?: string;
  stock?: number;
  stockStatus?: 'in-stock' | 'out-of-stock' | 'low-stock';
  category?: string;
  rating?: number;
  reviewCount?: number;
  colors?: string[];
  sizes?: string[];
}

// Cart Types
export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  imageSrc: string | StaticImageData;
  quantity: number;
  size?: string;
  color?: string;
  sku?: string;
}

export interface CartTotals {
  subTotal: number;
  shipping: number;
  discount: number;
  tax: number;
  total: number;
}

export interface CartState {
  items: CartItem[];
  totals: CartTotals;
  couponCode?: string;
}

// Wishlist Types
export interface WishlistItem {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  imageSrc: string | StaticImageData;
  sku?: string;
}

// Checkout Types
export interface BillingData {
  firstName: string;
  lastName: string;
  companyName?: string;
  address: string;
  email: string;
  phone: string;
  shipToDifferent: boolean;
}

export interface OrderItem {
  id: number | string;
  name: string;
  price: number;
  imageSrc: string | StaticImageData;
  quantity: number;
}

export type PaymentMethod = 'cash' | 'paypal' | 'card';

// Filter Types
export interface ProductFilters {
  categories?: string[];
  priceRange?: [number, number];
  sizes?: string[];
  colors?: string[];
  inStock?: boolean;
}

export type SortOption = 'popular' | 'price-asc' | 'price-desc' | 'newest' | 'name-asc' | 'name-desc';

// Toast Types
export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  message: string;
  type: ToastType;
}

// Cart Actions
export type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: string | number } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string | number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'APPLY_COUPON'; payload: { code: string } }
  | { type: 'REMOVE_COUPON' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

// Wishlist Actions
export type WishlistAction =
  | { type: 'ADD_ITEM'; payload: WishlistItem }
  | { type: 'REMOVE_ITEM'; payload: { id: string | number } }
  | { type: 'CLEAR_WISHLIST' }
  | { type: 'LOAD_WISHLIST'; payload: WishlistItem[] };


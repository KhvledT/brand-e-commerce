import { CartItem, CartTotals } from '@/types';

/**
 * Calculate cart totals including subtotal, tax, shipping, and discount
 */
export function calculateCartTotals(items: CartItem[], couponCode?: string): CartTotals {
  // Calculate subtotal
  const subTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Apply discount (10% off orders over $500)
  const discount = subTotal > 500 ? subTotal * 0.1 : 0;

  // Calculate tax (8% sales tax on subtotal after discount)
  const tax = (subTotal - discount) * 0.08;

  // Calculate shipping (free over $50)
  const shipping = subTotal >= 50 ? 0 : 10;

  // Calculate total
  const total = subTotal - discount + tax + shipping;

  return {
    subTotal,
    discount,
    tax,
    shipping,
    total,
  };
}

/**
 * Format currency to USD
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

/**
 * Check if item already exists in cart
 */
export function findCartItem(
  items: CartItem[],
  productId: string | number,
  size?: string,
  color?: string
): CartItem | undefined {
  return items.find(
    (item) =>
      item.id === productId &&
      (!size || item.size === size) &&
      (!color || item.color === color)
  );
}

/**
 * Generate unique cart item ID
 */
export function generateCartItemId(
  productId: string | number,
  size?: string,
  color?: string
): string {
  return `${productId}-${size || 'default'}-${color || 'default'}`;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (basic validation)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

/**
 * Get stock status message
 */
export function getStockStatusMessage(stock?: number, stockStatus?: string): string {
  if (stockStatus === 'out-of-stock') return 'Out of Stock';
  if (stockStatus === 'low-stock' || (stock && stock < 10)) return 'Low Stock';
  return 'In Stock';
}

/**
 * Calculate total cart items quantity
 */
export function getTotalCartItems(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.quantity, 0);
}


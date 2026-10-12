/**
 * Pricing utilities for Genuine Egypte
 * Enforces strict pricing display rules:
 * - Starting prices are per adult in USD
 * - Missing or unverified prices NEVER display as $0; they display "Custom Seasonal Rate" or "Quote on Request"
 * - Consistent formatting across cards, detail pages, search results, and metadata
 */

export interface PriceDisplay {
  hasPrice: boolean;
  formattedAmount: string;
  formattedWithPrefix: string;
  unit: string;
  rawPrice: number | null;
  label: string;
}

/**
 * Parses and formats a tour price safely
 * @param price Raw price number or null
 * @param isTransfer Whether the item is a transfer product
 */
export function getTourPriceDisplay(price: number | null | undefined, isTransfer = false): PriceDisplay {
  const validPrice = typeof price === 'number' && Number.isFinite(price) && price > 0;

  if (validPrice) {
    const formattedAmount = `$${price}`;
    return {
      hasPrice: true,
      formattedAmount,
      formattedWithPrefix: `From ${formattedAmount}`,
      unit: isTransfer ? '/ vehicle' : '/ adult',
      rawPrice: price,
      label: 'Starting Price'
    };
  }

  return {
    hasPrice: false,
    formattedAmount: isTransfer ? 'Quote on Request' : 'Custom Seasonal Rate',
    formattedWithPrefix: isTransfer ? 'Quote on Request' : 'Custom Seasonal Rate',
    unit: isTransfer ? 'Private Route' : 'Tailored To Group',
    rawPrice: null,
    label: isTransfer ? 'Route Pricing' : 'Custom Quote'
  };
}

/**
 * Returns a short price string for cards and lists (e.g. "From $105 / adult" or "Custom Seasonal Rate")
 */
export function formatShortPrice(price: number | null | undefined, isTransfer = false): string {
  const info = getTourPriceDisplay(price, isTransfer);
  if (!info.hasPrice) {
    return info.formattedAmount;
  }
  return `${info.formattedWithPrefix} ${info.unit}`;
}

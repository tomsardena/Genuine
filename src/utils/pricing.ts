/**
 * Pricing utilities for Genuine Egypte
 * Enforces strict pricing display rules:
 * - Starting prices for Day Tours are per adult in USD
 * - Starting prices for Private Transfers are per vehicle in USD (never per person)
 * - Missing or unverified prices NEVER display as $0; they display "Custom Seasonal Rate" or "Quote on Request"
 * - Consistent formatting across cards, detail pages, search results, and metadata
 */

import { TourItem, TransferVehicleOption } from '../data/tours';

export interface PriceDisplay {
  hasPrice: boolean;
  formattedAmount: string;
  formattedWithPrefix: string;
  unit: string;
  rawPrice: number | null;
  label: string;
  pricingBasis: 'per-adult' | 'per-vehicle' | 'custom-quote';
  currency: string;
  vehicleOptions?: TransferVehicleOption[];
}

/**
 * Parses and formats a tour price safely
 * @param price Raw price number, tour object, or null
 * @param isTransfer Whether the item is a transfer product
 * @param tour Optional TourItem for additional metadata
 */
export function getTourPriceDisplay(
  priceOrTour: number | null | undefined | TourItem,
  isTransferFallback = false
): PriceDisplay {
  let price: number | null | undefined;
  let isTransfer = isTransferFallback;
  let vehicleOptions: TransferVehicleOption[] | undefined;
  let currency = 'USD';

  if (typeof priceOrTour === 'object' && priceOrTour !== null) {
    const tour = priceOrTour as TourItem;
    price = tour.price;
    isTransfer = tour.category === 'Private Transfers' || tour.pricingBasis === 'per-vehicle';
    vehicleOptions = tour.vehicleOptions;
    currency = tour.currency || 'USD';
  } else {
    price = priceOrTour;
  }

  const validPrice = typeof price === 'number' && Number.isFinite(price) && price > 0;

  if (validPrice) {
    const formattedAmount = `$${price}`;
    const unit = isTransfer ? '/ vehicle' : '/ adult';
    const pricingBasis = isTransfer ? 'per-vehicle' : 'per-adult';
    const label = isTransfer ? 'Fleet Rate' : 'Starting Price';

    return {
      hasPrice: true,
      formattedAmount,
      formattedWithPrefix: `From ${formattedAmount}`,
      unit,
      rawPrice: price as number,
      label,
      pricingBasis,
      currency,
      vehicleOptions
    };
  }

  return {
    hasPrice: false,
    formattedAmount: isTransfer ? 'Quote on Request' : 'Custom Seasonal Rate',
    formattedWithPrefix: isTransfer ? 'Quote on Request' : 'Custom Seasonal Rate',
    unit: isTransfer ? 'Private Route' : 'Tailored To Group',
    rawPrice: null,
    label: isTransfer ? 'Route Pricing' : 'Custom Quote',
    pricingBasis: 'custom-quote',
    currency,
    vehicleOptions
  };
}

/**
 * Returns a short price string for cards and lists (e.g. "From $105 / adult" or "From $15 / vehicle")
 */
export function formatShortPrice(priceOrTour: number | null | undefined | TourItem, isTransfer = false): string {
  const info = getTourPriceDisplay(priceOrTour, isTransfer);
  if (!info.hasPrice) {
    return info.formattedAmount;
  }
  return `${info.formattedWithPrefix} ${info.unit}`;
}


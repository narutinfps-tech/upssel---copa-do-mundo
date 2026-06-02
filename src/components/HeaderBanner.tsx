import React from 'react';
import { PricingState } from '../types';

interface HeaderBannerProps {
  pricing: PricingState;
  setPricing: (pricing: PricingState) => void;
  orderAdded: boolean;
}

export default function HeaderBanner({ pricing, setPricing, orderAdded }: HeaderBannerProps) {
  return (
    <div className="w-full text-center py-4 px-4 border-b border-brand-blue/10 text-xs font-bold text-brand-red tracking-wider uppercase">
      Adicione esta oferta especial ao seu pedido atual com 65% de desconto!
    </div>
  );
}


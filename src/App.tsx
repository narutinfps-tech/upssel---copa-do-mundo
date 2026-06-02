/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { PricingState } from './types';

// Components
import HeaderBanner from './components/HeaderBanner';
import HeroSection from './components/HeroSection';
import WorldCupCarousel from './components/WorldCupCarousel';
import WhatYouReceive from './components/WhatYouReceive';
import VisualGallery from './components/VisualGallery';
import Benefits from './components/Benefits';
import Audience from './components/Audience';
import OfferSection from './components/OfferSection';
import Comparison from './components/Comparison';
import LastCall from './components/LastCall';

export default function App() {
  // Shared pricing and offer states
  const [pricing, setPricing] = useState<PricingState>({
    originalPrice: 67.00,
    promoPrice: 24.90,
    currency: 'R$'
  });
  
  const [orderAdded, setOrderAdded] = useState(false);

  // References to scroll sections
  const offerSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToOffer = () => {
    offerSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToOrder = () => {
    setOrderAdded(true);
  };

  // Image Asset paths generated via the image generation tool
  const heroImage = '/src/assets/images/combo_pack_mockup_1780358738170.png';
  const worldCupImage = '/src/assets/images/world_cup_sheets_1780358751617.png';
  const saoJoaoImage = '/src/assets/images/sao_joao_sheets_1780358764594.png';

  return (
    <div className="min-h-screen bg-brand-beige flex flex-col justify-between selection:bg-brand-yellow selection:text-brand-blue font-sans">
      
      {/* 1. Urgency timer and manual pricing preset config */}
      <HeaderBanner 
        pricing={pricing} 
        setPricing={setPricing} 
        orderAdded={orderAdded} 
      />

      {/* 2. Primary Hero Header Call */}
      <HeroSection 
        pricing={pricing} 
        onScrollToOffer={scrollToOffer} 
        onAddToOrder={handleAddToOrder} 
        orderAdded={orderAdded} 
        heroImage={heroImage}
      />

      {/* Infinite Carousel of World Cup Activities */}
      <WorldCupCarousel />

      {/* 3. Section 2: What You Will Receive */}
      <WhatYouReceive 
        worldCupImage={worldCupImage} 
        saoJoaoImage={saoJoaoImage}
        onScrollToOffer={scrollToOffer}
      />

      {/* 4. Section 3: Visual Grid and Previews */}
      <VisualGallery 
        onAddToOrder={handleAddToOrder} 
        orderAdded={orderAdded} 
      />

      {/* 5. Section 4: Benefits Grid */}
      <Benefits />

      {/* 7. Section 6: Target audiences list */}
      <Audience />

      {/* 8. Section 8: Comparison tabular block */}
      <Comparison />

      {/* 9. Section 7: Primary pricing offer box */}
      <OfferSection 
        pricing={pricing} 
        onAddToOrder={handleAddToOrder} 
        orderAdded={orderAdded}
        offerSectionRef={offerSectionRef}
      />

      {/* 10. Section 9: Last action trigger */}
      <LastCall 
        pricing={pricing} 
        onAddToOrder={handleAddToOrder} 
        orderAdded={orderAdded} 
        onScrollToOffer={scrollToOffer}
      />

    </div>
  );
}


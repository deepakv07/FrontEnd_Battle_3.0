'use client';

import { useState } from 'react';
import { pricingMatrix, Currency, Tier } from '@/data/pricingMatrix';
import CurrencySwitcher from '@/components/ui/CurrencySwitcher';
import BillingToggle from '@/components/ui/BillingToggle';

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  const region = pricingMatrix.tariffs[currency];
  const billingMod = isAnnual ? pricingMatrix.discountMultiplier : 1;

  const calculatePrice = (tier: Tier) => {
    const base = pricingMatrix.tiers[tier].baseRate;
    const finalPrice = (base * region.rate * billingMod).toFixed(2);
    return `${region.symbol}${finalPrice}`;
  };

  return (
    <section id="pricing">
      <h2>Pricing Plans</h2>
      
      <div className="controls">
        <CurrencySwitcher currency={currency} onChange={setCurrency} />
        <BillingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />
      </div>

      <div id="pricing-tiers">
        <div className="tier">
          <h3>Starter</h3>
          <p className="price-display" id="price-starter">{calculatePrice('starter')}</p>
        </div>
        <div className="tier">
          <h3>Pro</h3>
          <p className="price-display" id="price-pro">{calculatePrice('pro')}</p>
        </div>
        <div className="tier">
          <h3>Enterprise</h3>
          <p className="price-display" id="price-enterprise">{calculatePrice('enterprise')}</p>
        </div>
      </div>
    </section>
  );
}

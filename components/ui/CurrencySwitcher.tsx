'use client';

import { Currency } from '@/data/pricingMatrix';

interface Props {
  currency: Currency;
  onChange: (currency: Currency) => void;
}

export default function CurrencySwitcher({ currency, onChange }: Props) {
  return (
    <select 
      id="currency-select" 
      value={currency} 
      onChange={(e) => onChange(e.target.value as Currency)}
    >
      <option value="USD">USD ($)</option>
      <option value="EUR">EUR (€)</option>
      <option value="INR">INR (₹)</option>
    </select>
  );
}

'use client'
import { CURRENCY_CONFIG, Currency } from '@/data/pricingMatrix'

interface Props {
  onSwitch: (currency: Currency) => void
}

export default function CurrencySwitcher({ onSwitch }: Props) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <select
        className="currency-select"
        defaultValue="USD"
        onChange={e => onSwitch(e.target.value as Currency)}
        aria-label="Select currency"
      >
        {(Object.keys(CURRENCY_CONFIG) as Currency[]).map(c => (
          <option key={c} value={c}>
            {CURRENCY_CONFIG[c].label}
          </option>
        ))}
      </select>
    </div>
  )
}

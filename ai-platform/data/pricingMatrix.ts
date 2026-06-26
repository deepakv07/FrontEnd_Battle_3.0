// ── MULTI-DIMENSIONAL PRICING CONFIG ──
// Never hardcode display values — always compute from this matrix

export type Tier = 'starter' | 'pro' | 'enterprise'
export type Billing = 'monthly' | 'annual'
export type Currency = 'USD' | 'INR' | 'EUR'

export const BASE_RATES: Record<Tier, number> = {
  starter:    29,
  pro:        79,
  enterprise: 199,
}

export const CURRENCY_CONFIG: Record<Currency, { symbol: string; tariff: number; label: string }> = {
  USD: { symbol: '$',  tariff: 1.00,  label: 'USD ($)' },
  INR: { symbol: '₹', tariff: 83.50, label: 'INR (₹)' },
  EUR: { symbol: '€', tariff: 0.92,  label: 'EUR (€)' },
}

export const ANNUAL_DISCOUNT = 0.80 // 20% off

export function computePrice(tier: Tier, billing: Billing, currency: Currency): string {
  const base   = BASE_RATES[tier]
  const mult   = billing === 'annual' ? ANNUAL_DISCOUNT : 1
  const { symbol, tariff } = CURRENCY_CONFIG[currency]
  const value  = base * mult * tariff
  return `${symbol}${value < 100 ? value.toFixed(2) : Math.round(value).toLocaleString()}`
}

export const TIERS: Array<{
  id: Tier
  name: string
  tagline: string
  features: string[]
  featured: boolean
  cta: string
}> = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For indie builders & small teams',
    featured: false,
    cta: 'Start Free Trial',
    features: [
      '5,000 API calls / month',
      '3 automation pipelines',
      'Standard data connectors',
      'Community support',
      '99.5% uptime SLA',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For scaling products & growing teams',
    featured: true,
    cta: 'Get Started',
    features: [
      '100,000 API calls / month',
      'Unlimited pipelines',
      'Advanced AI connectors',
      'Priority support (24h)',
      '99.9% uptime SLA',
      'Custom model fine-tuning',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For orgs demanding full control',
    featured: false,
    cta: 'Contact Sales',
    features: [
      'Unlimited API calls',
      'Dedicated infrastructure',
      'SSO / SAML / SCIM',
      'White-glove onboarding',
      '99.99% uptime SLA',
      'On-premise deployment',
      'Custom contracts & SLAs',
    ],
  },
]

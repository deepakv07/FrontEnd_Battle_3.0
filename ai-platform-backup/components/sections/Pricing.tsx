// ── CRITICAL: All state lives HERE. No props leak upward. ──
'use client'
import { useRef, useCallback } from 'react'
import { TIERS, computePrice, Billing, Currency } from '@/data/pricingMatrix'
import BillingToggle from '@/components/ui/BillingToggle'
import CurrencySwitcher from '@/components/ui/CurrencySwitcher'

export default function Pricing() {
  // State stored in refs — changing these does NOT trigger re-render
  const billingRef  = useRef<Billing>('monthly')
  const currencyRef = useRef<Currency>('USD')

  // One ref map: tier id → the <span> DOM node holding the price text
  const priceNodeRefs = useRef<Record<string, HTMLSpanElement>>({})

  // ── ISOLATED UPDATE — only mutates targeted text nodes ──
  const updateAllPrices = useCallback(() => {
    const billing  = billingRef.current
    const currency = currencyRef.current
    TIERS.forEach(({ id }) => {
      const el = priceNodeRefs.current[id]
      if (el) el.textContent = computePrice(id, billing, currency)
    })
  }, [])

  const handleBillingToggle = useCallback((b: Billing) => {
    billingRef.current = b
    updateAllPrices()
  }, [updateAllPrices])

  const handleCurrencySwitch = useCallback((c: Currency) => {
    currencyRef.current = c
    updateAllPrices()
  }, [updateAllPrices])

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      style={{ padding: '7rem 2rem', maxWidth: '1200px', margin: '0 auto' }}
    >
      <h2
        id="pricing-heading"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          textAlign: 'center',
          marginBottom: '1rem',
        }}
      >
        Simple, transparent pricing
      </h2>
      <p style={{
        color: 'var(--color-text-secondary)',
        textAlign: 'center',
        marginBottom: '2.5rem',
        fontSize: '1.1rem',
      }}>
        Scale as you grow. No hidden fees.
      </p>

      {/* ── CONTROLS — scoped inside this section ── */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
        flexWrap: 'wrap',
        marginBottom: '3.5rem',
      }}>
        <BillingToggle onToggle={handleBillingToggle} />
        <CurrencySwitcher onSwitch={handleCurrencySwitch} />
      </div>

      {/* ── PRICING CARDS GRID ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        alignItems: 'center',
      }}>
        {TIERS.map(tier => (
          <article
            key={tier.id}
            className={`pricing-card${tier.featured ? ' featured' : ''}`}
            aria-label={`${tier.name} plan`}
          >
            {tier.featured && (
              <div style={{
                display: 'inline-block',
                background: 'var(--color-accent)',
                color: '#fff',
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.25rem 0.8rem',
                borderRadius: '999px',
                marginBottom: '1rem',
                letterSpacing: '0.05em',
              }}>
                MOST POPULAR
              </div>
            )}
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '0.4rem' }}>
              {tier.name}
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              {tier.tagline}
            </p>

            {/* ── PRICE NODE — this span is the ONLY thing that mutates ── */}
            <div style={{ marginBottom: '0.4rem' }}>
              <span
                ref={el => { if (el) priceNodeRefs.current[tier.id] = el }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.8rem',
                  fontWeight: 800,
                  color: tier.featured ? 'var(--color-accent)' : 'var(--color-text-primary)',
                }}
              >
                {computePrice(tier.id, 'monthly', 'USD')}
              </span>
              <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginLeft: '0.3rem' }}>
                /mo
              </span>
            </div>

            <div style={{
              height: '1px',
              background: 'var(--color-border)',
              margin: '1.5rem 0',
            }} />

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {tier.features.map((f, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--color-success)', flexShrink: 0 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={tier.featured ? 'btn-primary' : 'btn-ghost'}
              style={{ width: '100%', justifyContent: 'center' }}
              aria-label={`${tier.cta} for ${tier.name} plan`}
            >
              {tier.cta}
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

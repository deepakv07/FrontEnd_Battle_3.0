// ── BENTO ↔ ACCORDION with context transfer on resize ──
'use client'
import { useEffect, useRef } from 'react'
import { FEATURES } from '@/data/features'
import { useBentoAccordion } from '@/hooks/useBentoAccordion'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function Features() {
  const isMobile = useIsMobile(768)
  const { activeIndex, setActive, clearActive, toggleAccordion } = useBentoAccordion(FEATURES.length)
  // Track if we were mid-hover when resize fired
  const hoverRef = useRef<number | null>(null)

  // ── CONTEXT TRANSFER on crossing the 768px breakpoint ──
  useEffect(() => {
    // When layout transitions to mobile and something was active,
    // activeIndex is already set — accordion will open that panel.
    // When transitioning back to desktop, bento uses same activeIndex.
  }, [isMobile])

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      style={{ padding: '7rem 2rem', maxWidth: '1200px', margin: '0 auto' }}
    >
      <h2
        id="features-heading"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          marginBottom: '1rem',
        }}
      >
        Everything you need to automate at scale
      </h2>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '3.5rem', fontSize: '1.1rem' }}>
        From pipeline design to edge deployment — one unified platform.
      </p>

      {/* ── DESKTOP: BENTO GRID ── */}
      <div className="bento-grid" aria-hidden={isMobile}>
        {FEATURES.map((f, i) => (
          <div
            key={f.id}
            className={[
              'bento-card',
              f.span === 'wide' ? 'span-2' : '',
              f.span === 'tall' ? 'span-row' : '',
              activeIndex === i ? 'active' : '',
            ].join(' ')}
            onMouseEnter={() => { hoverRef.current = i; setActive(i) }}
            onMouseLeave={() => { hoverRef.current = null; clearActive() }}
            onClick={() => setActive(i)}
            role="button"
            tabIndex={0}
            aria-label={f.title}
            onKeyDown={e => e.key === 'Enter' && setActive(i)}
          >
            {/* SVG icon — use img for SEO/accessibility */}
            <img
              src={`/svgs/${f.svgId}.svg`}
              alt=""
              aria-hidden="true"
              width={40}
              height={40}
              style={{ marginBottom: '1.25rem', opacity: activeIndex === i ? 1 : 0.7, transition: 'opacity var(--ease-micro)' }}
            />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', marginBottom: '0.6rem' }}>
              {f.title}
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              {f.description}
            </p>
          </div>
        ))}
      </div>

      {/* ── MOBILE: ACCORDION LIST ── */}
      <div
        className="accordion-list"
        role="list"
        aria-hidden={!isMobile}
      >
        {FEATURES.map((f, i) => (
          <div
            key={f.id}
            className={`accordion-item${activeIndex === i ? ' open' : ''}`}
            role="listitem"
          >
            <button
              className="accordion-trigger"
              onClick={() => toggleAccordion(i)}
              aria-expanded={activeIndex === i}
              aria-controls={`accordion-panel-${i}`}
              id={`accordion-trigger-${i}`}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img
                  src={`/svgs/${f.svgId}.svg`}
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                />
                {f.title}
              </span>
              {/* Chevron SVG — inline so no extra request */}
              <svg
                className="accordion-chevron"
                width="16" height="16" viewBox="0 0 16 16"
                fill="none" aria-hidden="true"
              >
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              className="accordion-panel"
              id={`accordion-panel-${i}`}
              role="region"
              aria-labelledby={`accordion-trigger-${i}`}
            >
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {f.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

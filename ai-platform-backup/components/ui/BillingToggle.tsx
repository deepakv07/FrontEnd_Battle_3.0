'use client'
import { useRef } from 'react'

interface Props {
  onToggle: (billing: 'monthly' | 'annual') => void
}

export default function BillingToggle({ onToggle }: Props) {
  const isAnnualRef = useRef(false)
  const trackRef    = useRef<HTMLDivElement>(null)
  const labelRef    = useRef<HTMLSpanElement>(null)
  const badgeRef    = useRef<HTMLSpanElement>(null)

  function handleClick() {
    isAnnualRef.current = !isAnnualRef.current
    const isAnnual = isAnnualRef.current

    // Direct DOM update — zero React re-render
    if (trackRef.current) {
      trackRef.current.classList.toggle('on', isAnnual)
    }
    if (labelRef.current) {
      labelRef.current.textContent = isAnnual ? 'Annual' : 'Monthly'
    }
    if (badgeRef.current) {
      badgeRef.current.style.opacity = isAnnual ? '1' : '0'
    }

    onToggle(isAnnual ? 'annual' : 'monthly')
  }

  return (
    <div className="billing-toggle-wrap">
      <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
        <span ref={labelRef}>Monthly</span>
      </span>
      <div
        ref={trackRef}
        className="toggle-track"
        onClick={handleClick}
        role="switch"
        aria-checked="false"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && handleClick()}
      >
        <div className="toggle-thumb" />
      </div>
      <span
        ref={badgeRef}
        style={{
          opacity: 0,
          transition: 'opacity var(--ease-micro)',
          background: 'var(--color-success)',
          color: '#000',
          fontSize: '0.7rem',
          fontWeight: 700,
          padding: '0.15rem 0.5rem',
          borderRadius: '999px',
        }}
      >
        Save 20%
      </span>
    </div>
  )
}

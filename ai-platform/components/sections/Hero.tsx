'use client'
export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow — pure CSS, hardware accelerated */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(108,99,255,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="animate-fade-up delay-1" style={{ marginBottom: '1.25rem' }}>
        <span style={{
          background: 'rgba(108,99,255,0.15)',
          border: '1px solid rgba(108,99,255,0.3)',
          borderRadius: '999px',
          padding: '0.35rem 1rem',
          fontSize: '0.85rem',
          color: 'var(--color-accent)',
          fontWeight: 600,
          letterSpacing: '0.04em',
        }}>
          Now in Public Beta
        </span>
      </div>

      <h1
        className="animate-fade-up delay-2"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
          fontWeight: 900,
          lineHeight: 1.08,
          maxWidth: '900px',
          marginBottom: '1.75rem',
        }}
      >
        Automate everything.<br />
        <span style={{ color: 'var(--color-accent)' }}>Ship faster.</span>
      </h1>

      <p
        className="animate-fade-up delay-3"
        style={{
          color: 'var(--color-text-secondary)',
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          maxWidth: '580px',
          lineHeight: 1.7,
          marginBottom: '3rem',
        }}
      >
        The AI-native data automation platform that connects your entire stack,
        orchestrates complex workflows, and scales without friction.
      </p>

      <div className="animate-fade-up delay-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button className="btn-primary" aria-label="Start for free">
          Start for free
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="btn-ghost" aria-label="Watch the demo">
          Watch demo
        </button>
      </div>

      {/* Trust badges */}
      <div
        className="animate-fade-in delay-4"
        style={{
          marginTop: '5rem',
          display: 'flex',
          gap: '2.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          opacity: 0.5,
          fontSize: '0.85rem',
          letterSpacing: '0.05em',
          color: 'var(--color-text-secondary)',
        }}
        aria-label="Trusted by"
      >
        {['SOC2 CERTIFIED', 'GDPR READY', 'HIPAA COMPLIANT', 'ISO 27001'].map(badge => (
          <span key={badge}>{badge}</span>
        ))}
      </div>
    </section>
  )
}

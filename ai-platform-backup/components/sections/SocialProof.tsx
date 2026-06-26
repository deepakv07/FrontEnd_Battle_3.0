const TESTIMONIALS = [
  {
    quote: "Reduced our data pipeline build time from 3 weeks to 4 hours. The AI routing alone paid for itself in month one.",
    author: "Priya Mehta",
    role: "Head of Data, Finstack",
    avatar: "PM",
  },
  {
    quote: "Finally a platform that doesn't require a PhD to configure. We automated 14 manual workflows before lunch.",
    author: "James Okonkwo",
    role: "CTO, Loopify",
    avatar: "JO",
  },
  {
    quote: "The bento dashboard is the clearest overview we've ever had. Our entire ops team onboarded in an afternoon.",
    author: "Sofia Reyes",
    role: "VP Engineering, Clarix",
    avatar: "SR",
  },
]

const STATS = [
  { value: '10M+', label: 'API calls processed daily' },
  { value: '99.99%', label: 'Uptime last 12 months' },
  { value: '4 hrs', label: 'Average onboarding time' },
  { value: '340%', label: 'Avg ROI in 90 days' },
]

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-heading"
      style={{ padding: '7rem 2rem', maxWidth: '1200px', margin: '0 auto' }}
    >
      {/* Stats row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '6rem',
      }}>
        {STATS.map(s => (
          <div
            key={s.value}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '0.4rem' }}>
              {s.value}
            </div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <h2
        id="social-proof-heading"
        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '3rem', textAlign: 'center' }}
      >
        Trusted by engineering teams worldwide
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
      }}>
        {TESTIMONIALS.map(t => (
          <blockquote
            key={t.author}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '16px',
              padding: '2rem',
            }}
          >
            <p style={{ color: 'var(--color-text-primary)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              "{t.quote}"
            </p>
            <footer style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                aria-hidden="true"
                style={{
                  width: 40, height: 40,
                  borderRadius: '50%',
                  background: 'var(--color-accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.8rem', fontWeight: 700, color: '#fff', flexShrink: 0,
                }}
              >
                {t.avatar}
              </div>
              <div>
                <cite style={{ fontStyle: 'normal', fontWeight: 600, fontSize: '0.9rem' }}>
                  {t.author}
                </cite>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem' }}>
                  {t.role}
                </div>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

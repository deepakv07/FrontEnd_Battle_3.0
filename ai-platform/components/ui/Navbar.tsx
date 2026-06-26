'use client'

export default function Navbar() {
  return (
    <header
      role="banner"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        borderBottom: '1px solid var(--color-border)',
        background: 'rgba(10,10,15,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <nav
        aria-label="Main navigation"
        style={{
          maxWidth: '1200px', margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}
      >
        <a href="/" aria-label="Homepage" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--color-text-primary)', textDecoration: 'none' }}>
          Nexus<span style={{ color: 'var(--color-accent)' }}>AI</span>
        </a>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {[['Features', '#features'], ['Pricing', '#pricing'], ['Docs', '#docs']].map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                style={{
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color var(--ease-micro)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}>
          Get Started
        </button>
      </nav>
    </header>
  )
}

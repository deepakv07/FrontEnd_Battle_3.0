'use client'

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      style={{
        position: 'absolute', left: '-9999px',
        background: 'var(--color-accent)', color: '#fff',
        padding: '0.5rem 1rem', zIndex: 9999,
      }}
      onFocus={e => { e.currentTarget.style.left = '1rem' }}
      onBlur={e => { e.currentTarget.style.left = '-9999px' }}
    >
      Skip to main content
    </a>
  )
}

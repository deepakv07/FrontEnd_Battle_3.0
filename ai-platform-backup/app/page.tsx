import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Pricing from '@/components/sections/Pricing'
import SocialProof from '@/components/sections/SocialProof'
import Navbar from '@/components/ui/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Features />
        <Pricing />
        <SocialProof />
      </main>
      <footer
        role="contentinfo"
        style={{
          borderTop: '1px solid var(--color-border)',
          padding: '2.5rem 2rem',
          textAlign: 'center',
          color: 'var(--color-text-secondary)',
          fontSize: '0.85rem',
        }}
      >
        © 2026 NexusAI. All rights reserved.
      </footer>
    </>
  )
}

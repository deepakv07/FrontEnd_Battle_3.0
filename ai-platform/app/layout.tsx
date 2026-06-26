import type { Metadata } from 'next'
import './globals.css'
import SkipLink from '@/components/ui/SkipLink'

export const metadata: Metadata = {
  title: 'NexusAI — Next-Gen AI Data Automation Platform',
  description: 'Build, deploy, and scale AI-powered data pipelines. Connect your entire stack and automate complex workflows without code.',
  keywords: ['AI automation', 'data pipeline', 'ML orchestration', 'workflow automation'],
  authors: [{ name: 'NexusAI Team' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://nexusai.vercel.app',
    title: 'NexusAI — Next-Gen AI Data Automation Platform',
    description: 'Connect your entire stack and automate complex workflows without code.',
    siteName: 'NexusAI',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NexusAI Platform Screenshot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexusAI — AI Data Automation',
    description: 'Automate everything. Ship faster.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://nexusai.vercel.app" />
        <meta name="theme-color" content="#0A0A0F" />
      </head>
      <body>
        <SkipLink />
        {children}
      </body>
    </html>
  )
}

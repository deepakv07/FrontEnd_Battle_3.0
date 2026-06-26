import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'AI Platform Speed Run',
  description: 'Next-Gen AI Platform for Data Automation',
  openGraph: {
    title: 'AI Data Automation Platform',
    description: 'Premium, high-converting AI automation solutions.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header></header>
        {children}
      </body>
    </html>
  );
}

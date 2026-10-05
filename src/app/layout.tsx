import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import MotionExperience from '@/components/MotionExperience';
import '@/index.css';
import '@/styles/studio.css';
import '@/styles/portfolio.css';
import '@/styles/interior.css';
import '@/styles/chrome.css';
const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-studio' });
export const metadata: Metadata = {
  metadataBase: new URL('https://coaltech.in'),
  title: { default: 'Coaltech | Websites & AI creative', template: '%s | Coaltech' },
  description: 'Website design, development, hosting and AI-assisted graphics, videos and reels from Coaltech.',
  applicationName: 'Coaltech', manifest: '/manifest.json', icons: { icon: '/favicon.ico' },
};
export const viewport: Viewport = { themeColor: '#f4f3ed', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Coaltech', url: 'https://coaltech.in', logo: 'https://coaltech.in/coaltech-mark.webp', email: 'management@coaltech.in' };
  return <html lang="en" className={manrope.variable}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} /><MotionExperience />{children}</body></html>;
}

import type { Metadata, Viewport } from 'next';
import '@/index.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://coaltech.in'),
  title: { default: 'Coaltech | Websites & AI creative', template: '%s | Coaltech' },
  description: 'Website design, development, hosting and AI-assisted graphics, videos and reels from Coaltech.',
  applicationName: 'Coaltech', manifest: '/manifest.json', icons: { icon: '/favicon.ico' },
};
export const viewport: Viewport = { themeColor: '#f4f3ed', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Coaltech', url: 'https://coaltech.in', logo: 'https://coaltech.in/coaltech-mark.webp', email: 'management@coaltech.in' };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />{children}</body></html>;
}

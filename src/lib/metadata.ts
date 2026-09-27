import type { Metadata } from 'next';
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = title.includes('Coaltech') ? title : `${title} | Coaltech`;
  return { title: { absolute: fullTitle }, description, alternates: { canonical: path }, openGraph: { title: fullTitle, description, url: path, type: 'website', siteName: 'Coaltech', images: [{ url: '/coaltech-mark.webp', width: 1200, height: 1200, alt: 'Coaltech — Co + Al' }] }, twitter: { card: 'summary', title: fullTitle, description, images: ['/coaltech-mark.webp'] } };
}

import { ReactNode } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
export default function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="site-shell"><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main" tabIndex={-1}>{children}</main><footer className="site-footer"><div><p className="footer-call">Bring us something unfinished.</p><Link className="text-link" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link><a className="footer-email" href="mailto:management@coaltech.in">management@coaltech.in</a></div><div className="footer-signoff"><span>Coaltech</span><Link href="/services">All services</Link><Link href="/work">Selected work</Link><Link href="/about#process">The process</Link><span>Design / Development / AI creative</span></div></footer></div>;
}

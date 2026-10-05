import { ReactNode } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>{children}</main>
      <footer className="site-footer studio-footer" data-scene="footer">
        <div className="footer-inner">
          <div className="footer-opening">
            <p className="footer-call">Bring us something <span>unfinished.</span></p>
            <Link className="footer-start" href="/contact">
              <span>Start a conversation</span>
              <span className="footer-start-arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="footer-details">
            <a className="footer-email" href="mailto:management@coaltech.in">management@coaltech.in</a>
            <nav className="footer-signoff" aria-label="Footer navigation">
              <Link href="/services">All services <span aria-hidden="true">↗</span></Link>
              <Link href="/work">Selected work <span aria-hidden="true">↗</span></Link>
              <Link href="/about#process">The process <span aria-hidden="true">↗</span></Link>
            </nav>
          </div>
          <div className="footer-brand" aria-hidden="true">coaltech<span className="footer-brand-period">.</span></div>
          <div className="footer-colophon">
            <span>Coaltech</span>
            <span>Design / Development / AI creative</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

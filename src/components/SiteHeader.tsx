'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const nav = [
  { label: 'Work', href: '/work' },
  { label: 'Website development', href: '/services/web-development' },
  { label: 'AI marketing', href: '/services/ai-marketing' },
  { label: 'Studio', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const Wordmark = () => (
  <Link className="wordmark" href="/" aria-label="Coaltech home">
    <span>co</span><span>al</span><b>tech</b>
  </Link>
);

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      setOpen(false);
      toggle.current?.focus();
    }

    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !header.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    const desktop = window.matchMedia('(min-width: 901px)');
    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }

    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutside);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [open]);

  function renderLinks(mobile = false) {
    return nav.map((item, index) => (
      <Link
        key={item.href}
        href={item.href}
        aria-current={pathname === item.href ? 'page' : undefined}
        className={`${pathname?.startsWith(item.href) ? 'active ' : ''}${item.href === '/contact' ? 'nav-contact' : ''}`}
        onClick={() => setOpen(false)}
      >
        {mobile && <span className="nav-index" aria-hidden="true">0{index + 1}</span>}
        <span className="nav-label">{item.label}</span>
        {(mobile || item.href === '/contact') && <span className="nav-arrow" aria-hidden="true">↗</span>}
      </Link>
    ));
  }

  return (
    <header ref={header} className="site-header studio-header" data-menu-open={open}>
      <Wordmark />
      <nav className="desktop-nav" aria-label="Primary navigation">{renderLinks()}</nav>
      <button
        ref={toggle}
        className="menu-toggle"
        type="button"
        onClick={() => setOpen(current => !current)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
      >
        <span>{open ? 'Close' : 'Menu'}</span>
        <span className="menu-mark" aria-hidden="true"><i /><i /></span>
      </button>
      <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
        {renderLinks(true)}
      </nav>
    </header>
  );
}

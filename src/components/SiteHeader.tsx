'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
const nav = [{ label: 'Work', href: '/work' }, { label: 'Website development', href: '/services/web-development' }, { label: 'AI marketing', href: '/services/ai-marketing' }, { label: 'Studio', href: '/about' }, { label: 'Contact', href: '/contact' }];
export const Wordmark = () => <Link className="wordmark" href="/" aria-label="Coaltech home"><span>co</span><span>al</span><b>tech</b></Link>;
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const links = nav.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined} className={pathname?.startsWith(item.href) ? 'active' : ''} onClick={() => setOpen(false)}>{item.label}</Link>);
  return <header className="site-header" onKeyDown={event => { if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } }}><Wordmark /><nav className="desktop-nav" aria-label="Primary navigation">{links}</nav><button ref={toggle} className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu">{open ? 'Close' : 'Menu'}</button><nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>{links}</nav></header>;
}

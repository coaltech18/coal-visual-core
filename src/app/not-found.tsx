import Link from 'next/link';
import SiteLayout from '@/components/SiteLayout';
export default function NotFound() { return <SiteLayout><section className="not-found"><p className="meta-label">404</p><h1>Nothing here.<br />That was quick.</h1><Link className="text-link" href="/">Return home <span>↗</span></Link></section></SiteLayout>; }

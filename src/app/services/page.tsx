import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SiteLayout from '@/components/SiteLayout';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Website & AI creative services', 'Explore website design, development, hosting, AI graphic design, videos and reels from Coaltech.', '/services');
const services = [['web-development', 'Website design & hosting', 'Plan, design, build and host your place on the web.'], ['ai-marketing', 'AI marketing creative', 'AI-assisted graphics, videos and reels for a clear message.'], ['app-development', 'Web applications', 'Interfaces for products, dashboards and everyday tasks.'], ['social-media-marketing', 'Social media creative', 'Visual content for the next announcement, launch or post.']];
export default function ServicesPage() { return <SiteLayout><PageHero label="Services" title={<>What needs<br />to take shape?</>} intro="A website, a web interface or the creative for your next campaign. Start with the problem and choose the right format." /><section className="service-index" aria-label="Explore services">{services.map(([slug, title, copy]) => <Link key={slug} href={'/services/' + slug}><span>{title}</span><p>{copy}</p><b aria-hidden="true">↗</b></Link>)}</section></SiteLayout>; }

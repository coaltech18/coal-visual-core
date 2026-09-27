import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';
import SiteLayout from '@/components/SiteLayout';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Contact Coaltech', 'Discuss a website, hosting, AI graphics, video or reel with Coaltech.', '/contact');
export default function ContactPage() { return <SiteLayout><PageHero label="Contact" title={<>Bring us something<br />unfinished.</>} intro="A website that needs work. A video you can picture. An idea you need help explaining." /><section className="contact-layout"><div className="contact-direct"><p>Prefer email?</p><a href="mailto:management@coaltech.in">management@coaltech.in</a><p className="contact-hint">A few lines are enough to start. Include a link, a deadline or the part you are still figuring out.</p></div><ContactForm /></section></SiteLayout>; }

import Link from 'next/link';
import ElementIntro from '@/components/ElementIntro';
import ProjectWall from '@/components/ProjectWall';
import WebsiteIndex from '@/components/WebsiteIndex';
import SiteLayout from '@/components/SiteLayout';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Website design, hosting & AI creative', 'Coaltech designs and builds websites, provides hosting, and creates AI-assisted graphics, videos and reels.', '/');
export default function Home() {
  return <SiteLayout>
    <section className="home-hero">
      <div className="hero-top"><p className="meta-label">Website design + AI creative</p><ElementIntro /></div>
      <h1>Make your business <br />easier to <em>understand.</em></h1>
      <div className="home-hero__foot"><p>Websites that explain what you do. Graphics, videos and reels that give people a reason to look closer.</p><div className="action-row"><Link className="text-link" href="/work">See selected work <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/contact">Tell us what needs to change <span aria-hidden="true">↗</span></Link></div></div>
    </section>
    <section className="work-section" aria-labelledby="selected-work"><div className="section-heading"><p className="meta-label">01 / Selected work</p><h2 id="selected-work">A few different<br />kinds of problem.</h2></div><ProjectWall limit={4} /><Link className="section-link" href="/work">Explore the work <span aria-hidden="true">↗</span></Link></section>
    <WebsiteIndex preview />
    <section className="capability-section"><div><p className="meta-label">02 / What we do</p><h2>A clear website.<br />Something worth<br />sharing.</h2></div><div className="offering-list"><article><span className="meta-label">Design / Develop / Host</span><h3><Link href="/services/web-development">Your place on the web ↗</Link></h3><p>From the first page structure to the site people actually use. Website design, development and hosting, with the practical details considered together.</p><Link className="text-link" href="/services/web-development">Website services <span aria-hidden="true">↗</span></Link></article><article><span className="meta-label">Graphics / Video / Reels</span><h3><Link href="/services/ai-marketing">Creative for the feed ↗</Link></h3><p>AI-assisted graphics, videos and reels shaped around your message. Start with what you want to say, then choose the format.</p><Link className="text-link" href="/services/ai-marketing">AI marketing <span aria-hidden="true">↗</span></Link></article></div></section>
    <section className="process-section"><div><p className="meta-label">03 / The starting point</p><h2 className="process-statement">Start with the<br />questions people<br />bring.</h2></div><div className="process-notes"><p>What is this? Is it for me? What happens next? A useful website answers those questions before asking someone to get in touch.</p><Link className="text-link" href="/about#process">How the work takes shape <span aria-hidden="true">↗</span></Link></div></section>
    <section className="studio-note"><p className="meta-label">04 / Coaltech</p><div><h2>Different elements.<br />Better together.</h2><p>Structure gives an idea somewhere to go. Design makes it worth paying attention to. Coaltech brings the two into the same conversation.</p><Link className="text-link" href="/about">Meet Coaltech <span aria-hidden="true">↗</span></Link></div></section>
  </SiteLayout>;
}



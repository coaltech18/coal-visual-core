import Link from 'next/link';
import Image from 'next/image';
import ProjectWall from '@/components/ProjectWall';
import WebsiteIndex from '@/components/WebsiteIndex';
import SiteLayout from '@/components/SiteLayout';
import StudioHero from '@/components/StudioHero';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Website design, hosting & AI creative', 'Coaltech designs and builds websites, provides hosting, and creates AI-assisted graphics, videos and reels.', '/');
export default function Home() {
  return <SiteLayout>
    <StudioHero />
    <section className="studio-origin" data-scene aria-labelledby="origin-title">
      <div className="origin-equation" aria-label="Cobalt plus Aluminium" data-scene-part><span><small>Cobalt</small><b>Co</b></span><i aria-hidden="true">+</i><span><small>Aluminium</small><b>Al</b></span></div>
      <div className="origin-copy"><h2 id="origin-title">Different elements.<br />Better together.</h2><p>The weight of engineering. The freedom of design. Our name brings them together. So does our work.</p></div>
    </section>
    <section className="work-section studio-work" aria-labelledby="selected-work" data-scene>
      <div className="studio-section-title" data-scene-part><p className="meta-label">Selected work</p><h2 id="selected-work">Less talk.<br /><span>More proof.</span></h2></div>
      <ProjectWall limit={4} />
      <Link className="section-link" href="/work">See selected work <span aria-hidden="true">↗</span></Link>
    </section>
    <section className="studio-capabilities" aria-labelledby="capabilities-title">
      <div className="capabilities-heading" data-scene><h2 id="capabilities-title" data-scene-part>Good ideas deserve<br /><span>a bigger presence.</span></h2><p>We make the website. We make the creative that brings people to it.</p></div>
      <article className="capability-scene capability-scene--web" data-scene>
        <div className="capability-copy" data-scene-part><span className="meta-label">Design / Develop / Host</span><h3>Your place<br />on the <em>web.</em></h3><p>From the first page structure to the site people actually use. Website design, development and hosting, considered together.</p><Link className="text-link" href="/services/web-development">Website services <span aria-hidden="true">↗</span></Link></div>
        <div className="web-scene-art" data-scene-part><div className="web-scene-word" aria-hidden="true">ONLINE.</div><div className="web-scene-screen"><Image src="/projects/live/greyturn.webp" alt="Greyturn website with a bold visual introduction" width={1265} height={712} sizes="(max-width: 768px) 90vw, 46vw" /></div><p className="scene-caption">A real website. A clear first impression.</p></div>
      </article>
      <article className="capability-scene capability-scene--creative" data-scene>
        <div className="creative-scene-art" data-scene-part aria-hidden="true"><div className="creative-poster creative-poster--square"><small>Graphic</small><strong>LOOK<br />CLOSER.</strong><span>One message.<br />A different perspective.</span></div><div className="creative-poster creative-poster--reel"><small>Video / Reels</small><div className="reel-type"><span>MAKE</span><span>IT</span><span>MOVE.</span></div><div className="reel-frames"><i /><i /><i /><i /><i /></div></div></div>
        <div className="capability-copy" data-scene-part><span className="meta-label">Graphics / Video / Reels</span><h3>Made for<br />a second <em>look.</em></h3><p>AI-assisted graphics, videos and reels shaped around your message. An idea worth seeing, in the format it needs.</p><Link className="text-link" href="/services/ai-marketing">AI marketing <span aria-hidden="true">↗</span></Link></div>
      </article>
    </section>
    <WebsiteIndex preview />
    <section className="studio-method" data-scene aria-labelledby="method-title">
      <div className="studio-method-heading" data-scene-part><h2 id="method-title">A good-looking site<br />has a job to do.</h2><p>What is this? Is it for me? What happens next? We build around the questions your visitors bring.</p></div>
      <div className="method-sequence"><div data-scene-part><h3>Get clear.</h3><p>Start with the audience, the message and what needs to change.</p></div><div data-scene-part><h3>Make it real.</h3><p>Bring design and development into the same conversation.</p></div><div data-scene-part><h3>Put it to work.</h3><p>Check the details. Agree the hosting and support. Launch with care.</p></div></div>
      <Link className="text-link" href="/about#process">How the work takes shape <span aria-hidden="true">↗</span></Link>
    </section>
    <section className="studio-statement-scene" data-scene aria-labelledby="studio-title"><h2 id="studio-title" data-scene-part>Thought through.<br /><span>Built with feeling.</span></h2><div><p>Structure gives an idea somewhere to go. Design makes it worth paying attention to. We bring the two together.</p><Link className="text-link" href="/about">Meet Coaltech <span aria-hidden="true">↗</span></Link></div></section>
  </SiteLayout>;
}



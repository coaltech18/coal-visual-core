import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SiteLayout from '@/components/SiteLayout';
import { getProject } from '@/data/projects';
export const serviceContent = {
  web: { label: 'Website design, development & hosting', title: 'Give your business a clearer home.', intro: 'A new website, a better version of the one you have, or help keeping it online. Design, development and hosting belong in the same conversation.', items: [['Website design', 'Page structure, content hierarchy and responsive layouts built around what visitors need to know.'], ['Development', 'Business websites, landing pages and web interfaces, with forms and navigation that work across screen sizes.'], ['Hosting & website support', 'A place for your site to run, with domain, launch and ongoing support requirements agreed around your setup.']], question: 'What happens after the design?', answer: 'The next step is building and checking the site. Before launch, agree who manages hosting, domain access, content updates and ongoing maintenance. The scope should make each responsibility clear.', related: '/work/matchpod', relatedLabel: 'Explore MatchPod', cta: 'Tell us about your website' },
  ai: { label: 'AI marketing / Graphics, videos & reels', title: 'Give your message a visual life.', intro: 'AI-assisted graphic design, videos and reels for the things your business needs to say. A product introduction, an offer, a launch, or the next post.', items: [['AI graphic design', 'Visual concepts and graphics for your brand, campaign or social posts. Bring your existing identity, product images and the message you want people to remember.'], ['AI videos & reels', 'Short-form creative built around an idea, a sequence and a format. Define the channel, length and available footage before production begins.'], ['Creative adaptation', 'Shape the agreed creative for its intended placements. Confirm aspect ratios, versions and final file formats as part of the brief.']], question: 'Where does AI fit?', answer: 'AI is part of making the creative. The brief still needs a clear audience, accurate product details and permission to use the supplied material. Agree the review and approval steps before anything is published.', related: '/services/web-development', relatedLabel: 'Need a website for the campaign?', cta: 'Tell us what you want to make' },
  product: { label: 'Web applications & interfaces', title: 'Make the next task easier to find.', intro: 'Web interfaces for products, dashboards and operational tools. Start with the people using the system and the decisions they need to make.', items: [['Structure', 'Map screens, information and the paths between tasks.'], ['Interface design', 'Make forms, tables and navigation readable in everyday use.'], ['Web implementation', 'Agree the frontend, integrations and supporting systems the project needs.']], question: 'What should the first conversation cover?', answer: 'Bring the current workflow, the people who use it and the point where it gets difficult. Existing screens or a simple walkthrough are useful starting material.', related: '/work/hybits-suite', relatedLabel: 'Explore Hybits Suite', cta: 'Describe the workflow' },
  social: { label: 'Social media creative', title: 'Give the next post a reason to exist.', intro: 'Graphics, videos and reels for a specific message and audience. Build the creative around what you need to communicate.', items: [['The message', 'An offer, announcement or product story with a clear point.'], ['The format', 'Choose a graphic, video or reel based on the idea and placement.'], ['The assets', 'Agree which versions, dimensions and files are needed for publishing.']], question: 'Looking for AI-assisted production?', answer: 'Explore the AI marketing service for graphic design, videos and reels. Publishing, account management and paid media should be discussed separately when defining the scope.', related: '/services/ai-marketing', relatedLabel: 'Explore AI marketing', cta: 'Start with the message' },
} as const;
export default function ServiceDetail({ type }: { type: keyof typeof serviceContent }) {
  const item = serviceContent[type];
  const creative = type === 'ai' || type === 'social';
  const project = getProject(type === 'web' ? 'matchpod' : 'hybits-suite');

  return (
    <SiteLayout>
      <PageHero label={item.label} title={item.title} intro={item.intro} />
      <section className={'service-composition studio-service-composition service-composition--' + type} aria-label="Service approach">
        {creative ? (
          <div className="service-art service-art--creative" data-scene="service-art" aria-hidden="true">
            <span className="meta-label">One idea. Different formats.</span>
            <div className="service-poster-stage" data-scene-part>
              <div className="service-poster service-poster--square">
                <small>Graphic / 1:1</small>
                <strong>LOOK<br />CLOSER.</strong>
                <span>One message.<br />A different perspective.</span>
              </div>
              <div className="service-poster service-poster--reel">
                <small>Video / Reels</small>
                <strong><span>MAKE</span><span>IT</span><span>MOVE.</span></strong>
                <div className="service-reel-sequence"><i /><i /><i /><i /><i /></div>
              </div>
            </div>
            <p>Message → Image → Motion</p>
          </div>
        ) : project ? (
          <figure className={'service-art service-art--site service-art--' + type} data-scene="service-art">
            <span className="meta-label">From first impression to next step</span>
            <div className="service-site-stage" data-scene-part>
              <div className="service-site-frame">
                <div className="service-site-rail" aria-hidden="true"><span>{project.name}</span><span>↗</span></div>
                <Image
                  src={project.image}
                  alt={type === 'web' ? 'MatchPod homepage introducing roommate compatibility.' : 'Hybits Suite operational dashboard with inventory and billing navigation.'}
                  width={project.width}
                  height={project.height}
                  sizes="(max-width: 900px) calc(100vw - 72px), (max-width: 1440px) 42vw, 560px"
                />
              </div>
            </div>
            <figcaption>Structure → Design → Build</figcaption>
          </figure>
        ) : null}
        <div className="service-deliverables">
          <p className="meta-label">What we can work on</p>
          {item.items.map(([title, copy], index) => (
            <article key={title}>
              <span className="meta-label">0{index + 1}</span>
              <div><h2>{title}</h2><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="service-question studio-service-question">
        <h2>{item.question}</h2>
        <div><p>{item.answer}</p><Link className="text-link" href={item.related}>{item.relatedLabel} <span aria-hidden="true">↗</span></Link></div>
      </section>
      <section className="closing-cta studio-service-cta">
        <p className="meta-label">A useful starting point</p>
        <h2>{item.cta}.</h2>
        <Link className="text-link" href="/contact">Send a brief <span aria-hidden="true">↗</span></Link>
      </section>
    </SiteLayout>
  );
}

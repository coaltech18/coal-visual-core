import Link from 'next/link';
import Image from 'next/image';
import { websites } from '@/data/websites';

export default function WebsiteIndex({ preview = false }: { preview?: boolean }) {
  const items = preview ? websites.slice(0, 4) : websites;
  return <section className="website-index" aria-labelledby="website-index-title">
    <div className="section-heading"><p className="meta-label">More websites</p><div><h2 id="website-index-title">More places<br />to explore.</h2><p className="website-index-intro">Venues, businesses, events and communities. Explore the websites.</p></div></div>
    <div className="website-index-list">{items.map(website => <a key={website.url} href={website.url} target="_blank" rel="noopener noreferrer" className="website-index-entry"><div className="website-index-visual"><Image src={website.image} alt={`${website.name} website preview`} width={website.width} height={website.height} sizes="(max-width: 700px) calc(100vw - 32px), (max-width: 1504px) calc(50vw - 32px), 704px" /></div><div className="website-index-meta"><div><h3>{website.name}</h3><span className="meta-label">{website.category}</span></div><span className="website-index-domain">{new URL(website.url).hostname}</span><span aria-hidden="true" className="website-index-arrow">↗</span></div><span className="sr-only"> (opens in a new tab)</span></a>)}</div>
    {preview && <Link className="section-link" href="/work#website-index-title">See all ten websites <span aria-hidden="true">↗</span></Link>}
  </section>;
}

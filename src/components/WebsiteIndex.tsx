import Link from 'next/link';
import Image from 'next/image';
import { websites } from '@/data/websites';

export default function WebsiteIndex({ preview = false }: { preview?: boolean }) {
  const items = preview ? websites.slice(0, 4) : websites;

  return (
    <section
      className={'website-index portfolio-index' + (preview ? ' website-index--preview' : '')}
      aria-labelledby="website-index-title"
    >
      <div className="section-heading" data-scene="heading">
        <p className="meta-label">The website collection</p>
        <div>
          <h2 id="website-index-title">Different worlds.<br /><em>Same attention.</em></h2>
          <p className="website-index-intro">Venues, businesses, events and communities. Open a website and take a look around.</p>
        </div>
      </div>
      <div className="website-index-list">
        {items.map((website, index) => (
          <a
            key={website.url}
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="website-index-entry"
            data-scene="website"
          >
            <div className="website-index-visual">
              <Image
                src={website.image}
                alt={`${website.name} website preview`}
                width={website.width}
                height={website.height}
                sizes="(max-width: 700px) calc(100vw - 32px), (max-width: 1504px) calc(50vw - 48px), 680px"
              />
              <span className="website-index-visit" aria-hidden="true">Visit website ↗</span>
            </div>
            <div className="website-index-meta">
              <span className="website-index-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className="website-index-caption">
                <span className="meta-label">{website.category}</span>
                <h3>{website.name}</h3>
              </div>
              <span className="website-index-domain">{new URL(website.url).hostname}</span>
              <span aria-hidden="true" className="website-index-arrow">↗</span>
            </div>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ))}
      </div>
      {preview && (
        <Link className="section-link" href="/work#website-index-title">
          See all ten websites <span aria-hidden="true">↗</span>
        </Link>
      )}
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export default function StudioHero() {
  return <section className="studio-hero" aria-labelledby="hero-title">
    <div className="studio-hero-intro"><p className="meta-label">Website design + AI creative</p><span className="hero-intro-note">Coaltech creative studio</span></div>
    <div className="studio-hero-grid">
      <div className="studio-hero-copy">
        <h1 id="hero-title" aria-label="Built to stand out."><span className="hero-line" aria-hidden="true"><span data-hero-enter="type">Built to</span></span><span className="hero-line" aria-hidden="true"><span data-hero-enter="type">stand <em>out.</em></span></span></h1>
        <p>Websites with presence. Graphics, videos and reels that give people a reason to look closer.</p>
        <Link className="studio-button" href="/work"><span>See selected work</span><span aria-hidden="true">↗</span></Link>
      </div>
      <div className="hero-project-stage" aria-label="A selection of Coaltech website projects">
        <div className="hero-stage-backdrop" aria-hidden="true"><span>Co.</span></div>
        <div className="hero-sheet hero-sheet--back" data-hero-enter="image"><Image src="/projects/live/nature-knots.webp" alt="Nature Knots website" width={1265} height={712} sizes="(max-width: 768px) 70vw, 32vw" /></div>
        <div className="hero-sheet hero-sheet--middle" data-hero-enter="image"><Image src="/projects/live/greyturn.webp" alt="Greyturn website" width={1265} height={712} sizes="(max-width: 768px) 75vw, 34vw" /></div>
        <Link href="/work/matchpod" className="hero-sheet hero-sheet--front" data-hero-enter="image" aria-label="Explore the MatchPod project"><Image src="/projects/live/matchpod-current.webp" alt="MatchPod current website" width={1265} height={712} sizes="(max-width: 768px) 82vw, 38vw" preload /><span className="hero-sheet-caption">MatchPod <span aria-hidden="true">↗</span></span></Link>
      </div>
    </div>
    <div className="hero-endnote"><span>Design with intention.</span><span>Build with precision.</span></div>
  </section>;
}

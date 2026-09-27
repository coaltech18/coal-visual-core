import { ReactNode } from 'react';

const PageHero = ({ label, title, intro }: { label: string; title: ReactNode; intro: string }) => (
  <header className="page-hero">
    <p className="meta-label">{label}</p>
    <h1>{title}</h1>
    <p className="page-hero__intro">{intro}</p>
  </header>
);

export default PageHero;

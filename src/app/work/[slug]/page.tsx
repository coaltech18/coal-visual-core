import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteLayout from '@/components/SiteLayout';
import { getProject, projects } from '@/data/projects';
import { pageMetadata } from '@/lib/metadata';
export const generateStaticParams = () => projects.map(({ slug }) => ({ slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? pageMetadata(project.name, project.summary, '/work/' + project.slug) : { title: 'Project not found', robots: { index: false } };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <SiteLayout><article className="case-study"><header className="case-hero"><div><Link className="text-link" href="/work">← Selected work</Link><p className="meta-label">{project.category}</p><h1>{project.name}</h1></div><p>{project.summary}</p></header><figure className={'case-image case-image--' + project.tone}><Image src={project.image} alt={project.name + ' interface overview'} width={project.width} height={project.height} sizes="(max-width: 1500px) 90vw, 1300px" /><figcaption>Interface snapshot / {project.name}</figcaption></figure><section className="case-copy"><h2>A closer look</h2><div><p>{project.detail}</p><p>{project.observation}</p></div></section><div className="case-actions"><a className="text-link" href={project.url} target="_blank" rel="noreferrer">Visit {project.name} <span className="sr-only">(opens in a new tab)</span><span aria-hidden="true">↗</span></a><Link className="next-project" href={'/work/' + next.slug}><span>Next project</span><strong>{next.name} ↗</strong></Link></div></article></SiteLayout>;
}

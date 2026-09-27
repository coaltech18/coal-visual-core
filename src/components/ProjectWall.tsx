import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
export default function ProjectWall({ limit, headingLevel: Heading = 'h3' }: { limit?: number; headingLevel?: 'h2' | 'h3' }) {
  const items = typeof limit === 'number' ? projects.slice(0, limit) : projects;
  return <div className="project-wall">{items.map((project, index) => <article className={'project-tile project-tile--' + project.tone} key={project.slug}><Link href={'/work/' + project.slug} className="project-image-link" aria-label={'Explore ' + project.name}><Image src={project.image} alt={project.name + ' website interface'} width={project.width} height={project.height} sizes="(max-width: 900px) calc(100vw - 32px), (max-width: 1500px) 58vw, 840px" /></Link><div className="project-meta"><div><span>{project.category}</span><span>0{index + 1}</span></div><Heading><Link href={'/work/' + project.slug}>{project.name} <span aria-hidden="true">↗</span></Link></Heading><p>{project.summary}</p></div></article>)}</div>;
}

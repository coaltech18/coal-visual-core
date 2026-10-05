import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectWall({ limit, headingLevel: Heading = 'h3' }: { limit?: number; headingLevel?: 'h2' | 'h3' }) {
  const items = typeof limit === 'number' ? projects.slice(0, limit) : projects;

  return (
    <div className="project-wall portfolio-wall">
      {items.map((project, index) => (
        <article
          className={'project-tile project-tile--' + project.tone}
          data-scene="project"
          key={project.slug}
        >
          <Link
            href={'/work/' + project.slug}
            className="project-image-link"
            aria-label={'Explore ' + project.name}
          >
            <span className="project-frame-rail" aria-hidden="true">
              <span>Selected work / {String(index + 1).padStart(2, '0')}</span>
              <span className="project-frame-arrow">↗</span>
            </span>
            <div className="project-image-stage">
              <Image
                src={project.image}
                alt={project.name + ' website interface'}
                width={project.width}
                height={project.height}
                sizes="(max-width: 700px) calc(100vw - 56px), (max-width: 1100px) 55vw, 780px"
              />
            </div>
            <span className="project-frame-action" aria-hidden="true">Explore project</span>
          </Link>
          <div className="project-meta">
            <div><span>{project.category}</span><span>Case study</span></div>
            <Heading>
              <Link href={'/work/' + project.slug}>
                {project.name} <span aria-hidden="true">↗</span>
              </Link>
            </Heading>
            <p>{project.summary}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

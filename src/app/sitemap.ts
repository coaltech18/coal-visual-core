import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://coaltech.in';
  const routes = ['', '/work', '/about', '/services', '/services/web-development', '/services/ai-marketing', '/services/app-development', '/services/social-media-marketing', '/contact'];
  return [
    ...routes.map((route) => ({ url: base + route, changeFrequency: 'monthly' as const, priority: route === '' ? 1 : .7 })),
    ...projects.map((project) => ({ url: base + '/work/' + project.slug, changeFrequency: 'monthly' as const, priority: .8 })),
  ];
}


import { MetadataRoute } from 'next';
import { children, stories } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gwfef.org';

  const staticRoutes = [
    '/',
    '/about',
    '/sponsorship',
    '/impact',
    '/stories',
    '/team',
    '/what-we-do',
    '/donate',
  ].map((route) => {
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '/' ? 1.0 : 0.8,
    }
  });

  const childrenRoutes = children.map((child) => {
    return {
      url: `${baseUrl}/sponsorship/${child.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    }
  });

  const storiesRoutes = stories.map((story) => {
    return {
      url: `${baseUrl}/stories/${story.slug}`,
      lastModified: new Date(story.date),
      changeFrequency: 'weekly',
      priority: 0.7,
    }
  });

  return [
    ...staticRoutes,
    ...childrenRoutes,
    ...storiesRoutes,
  ];
}

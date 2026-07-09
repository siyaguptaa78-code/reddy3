import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://reddy-online.com';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/abu-dhabi-t10-2026/`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
  ];
}

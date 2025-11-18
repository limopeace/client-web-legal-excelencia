import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://legalexcelencia.com'

  // Static date representing the last major site update
  // Update this manually when you make significant content changes
  const lastUpdated = '2025-11-19T00:00:00.000Z'

  return [
    {
      url: baseUrl,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}

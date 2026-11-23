import { siteConfig, absoluteUrl } from '@/config/site'
import { siteContent } from '@/data/siteContent'

export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kingwood',
      addressRegion: 'TX',
      postalCode: '77345',
      addressCountry: 'US',
    },
    description: siteConfig.description,
    image: absoluteUrl(siteContent.hero.productImage),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

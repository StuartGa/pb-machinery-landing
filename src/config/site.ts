/**
 * Global site configuration — SEO, canonical URLs, and deployment settings.
 */
export const siteConfig = {
  name: 'PB Machinery',
  legalName: 'Pastry & Bakery Machinery USA Inc.',
  title: 'PB Machinery — Maquinaria para pastelería y panadería',
  description:
    'Soluciones de maquinaria especializada para pastelerías, galleterías y panaderías artesanales. Más de 40 años. Fabricación en Estados Unidos.',
  keywords: [
    'PB Machinery',
    'maquinaria pastelería',
    'panadería artesanal',
    'Robotina PN-300',
    'Cream Levain',
    'Silex',
    'Made in USA',
  ],
  url: 'https://stuartga.github.io/pb-machinery-landing',
  locale: 'es_MX',
  lang: 'es',
  ogImage: '/images/hero-cake.webp',
  themeColor: '#0A1F3D',
  email: 'eduardo@pbmachineryusa.com',
  phone: '+1-281-814-9941',
  website: 'https://www.pbmachineryusa.com',
  address: 'Kingwood, TX 77345, USA',
  country: 'US',
  basePath: '/pb-machinery-landing/',
  requiredNavAnchors: [
    '#inicio',
    '#pasteleria',
    '#panaderia',
    '#por-que-pb',
    '#contacto',
  ] as const,
} as const

export function absoluteUrl(path = ''): string {
  if (!path) return siteConfig.url
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteConfig.url}${normalized}`
}

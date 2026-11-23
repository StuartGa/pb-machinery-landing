export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

export interface CtaLink {
  label: string
  href: string
}

export interface TrustItem {
  id: string
  label: string
  icon: 'calendar' | 'gear' | 'flag'
}

export interface IndustryCard {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  href: string
  icon: 'cupcake' | 'bread'
}

export interface BenefitItem {
  id: string
  title: string
  description: string
  icon: 'capacity' | 'consistency' | 'control'
}

export interface ProductFeature {
  id: string
  text: string
}

export interface LineItem {
  id: string
  title: string
  image: string
  imageAlt: string
}

export interface FeaturedProduct {
  id: string
  category: string
  name: string
  description: string
  image: string
  imageAlt: string
  features: ProductFeature[]
  cta: CtaLink
  variants?: { id: string; name: string; capacity: string; image: string }[]
}

export interface ProcessStep {
  id: string
  step: number
  title: string
  description: string
  icon: 'clipboard' | 'search' | 'gear' | 'document'
}

export interface QuoteFormField {
  id: string
  label: string
  name: string
  type: 'text' | 'email' | 'tel' | 'select'
  required?: boolean
  options?: string[]
  colSpan?: 1 | 2
}

export interface SiteContent {
  brand: {
    name: string
    fullName: string
    logoHeader: string
    logoFooter: string
  }
  navigation: NavLink[]
  headerCta: CtaLink
  hero: {
    eyebrow: string
    title: string
    description: string
    background: string
    productImage: string
    productImageAlt: string
    trust: TrustItem[]
    form: {
      title: string
      subtitle: string
      submitLabel: string
      footnote: string
      fields: QuoteFormField[]
    }
  }
  industries: {
    title: string
    description: string
    items: IndustryCard[]
  }
  evolve: {
    eyebrow: string
    title: string
    paragraphs: string[]
    image: string
    imageAlt: string
    benefits: BenefitItem[]
  }
  pastry: {
    title: string
    description: string
    featured: FeaturedProduct
    moreTitle: string
    line: LineItem[]
  }
  bakery: {
    title: string
    description: string
    products: FeaturedProduct[]
  }
  process: {
    title: string
    subtitle: string
    steps: ProcessStep[]
  }
  cta: {
    title: string
    description: string
    button: CtaLink
    background: string
  }
  footer: {
    linkGroups: { title: string; links: NavLink[] }[]
    contact: { email: string; website: string; address: string }
    madeInUsa: string
    copyright: string
  }
}

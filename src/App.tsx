import type { ComponentType } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SkipLink } from '@/components/seo/SkipLink'
import { StructuredData } from '@/components/seo/StructuredData'
import {
  BakerySection,
  CtaSection,
  EvolveSection,
  HeroSection,
  IndustriesSection,
  PastrySection,
  ProcessSection,
} from '@/components/sections'
import { enabledSections, type SectionId } from '@/config/sections'

const sectionMap: Record<SectionId, ComponentType> = {
  hero: HeroSection,
  industries: IndustriesSection,
  evolve: EvolveSection,
  pastry: PastrySection,
  bakery: BakerySection,
  process: ProcessSection,
  cta: CtaSection,
}

/**
 * Root landing composition.
 * Order/visibility controlled by `src/config/sections.ts`.
 */
export default function App() {
  return (
    <>
      <StructuredData />
      <SkipLink />
      <Header />
      <main id="main-content">
        {enabledSections.map((id) => {
          const Section = sectionMap[id]
          return <Section key={id} />
        })}
      </main>
      <Footer />
    </>
  )
}

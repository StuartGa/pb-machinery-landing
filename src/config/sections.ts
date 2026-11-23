/**
 * Sections available on the PB Machinery landing page.
 * Edit `enabledSections` to show, hide, or reorder blocks.
 */
export const sectionIds = [
  'hero',
  'industries',
  'evolve',
  'pastry',
  'bakery',
  'process',
  'cta',
] as const

export type SectionId = (typeof sectionIds)[number]

export const enabledSections: SectionId[] = [
  'hero',
  'industries',
  'evolve',
  'pastry',
  'bakery',
  'process',
  'cta',
]

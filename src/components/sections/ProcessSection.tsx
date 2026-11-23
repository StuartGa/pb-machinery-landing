import { siteContent } from '@/data/siteContent'
import { Container } from '@/components/ui/Container'
import {
  IconArrow,
  IconClipboard,
  IconDocument,
  IconGear,
  IconSearch,
} from '@/components/ui/icons'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/cn'

const icons = {
  clipboard: IconClipboard,
  search: IconSearch,
  gear: IconGear,
  document: IconDocument,
} as const

export function ProcessSection() {
  const { process } = siteContent
  const { ref, visible } = useScrollReveal<HTMLElement>()

  return (
    <section className="bg-white py-12 md:py-16" ref={ref}>
      <Container
        className={cn(
          'grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-start',
          'scroll-reveal',
          visible && 'scroll-reveal--visible',
        )}
      >
        <div className="max-w-xs">
          <h2 className="text-2xl font-extrabold text-navy md:text-3xl">{process.title}</h2>
          <p className="mt-2 text-sm text-on-surface-muted">{process.subtitle}</p>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {process.steps.map((step, index) => {
            const Icon = icons[step.icon]
            return (
              <li key={step.id} className="relative">
                {index < process.steps.length - 1 && (
                  <IconArrow
                    className="absolute -right-2 top-5 hidden h-3.5 w-3.5 text-primary lg:block"
                    aria-hidden
                  />
                )}
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">
                    {step.step}
                  </span>
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-extrabold text-navy md:text-base">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-on-surface-muted md:text-sm">
                  {step.description}
                </p>
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}

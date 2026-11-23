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
    <section className="bg-white py-16 md:py-20" ref={ref}>
      <Container className={cn('scroll-reveal', visible && 'scroll-reveal--visible')}>
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold text-navy md:text-4xl">{process.title}</h2>
          <p className="mt-2 text-on-surface-muted">{process.subtitle}</p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, index) => {
            const Icon = icons[step.icon]
            return (
              <li key={step.id} className="relative">
                {index < process.steps.length - 1 && (
                  <IconArrow
                    className="absolute -right-4 top-8 hidden h-4 w-4 text-primary lg:block"
                    aria-hidden
                  />
                )}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {step.step}
                </p>
                <h3 className="mt-3 text-lg font-extrabold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-muted">
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

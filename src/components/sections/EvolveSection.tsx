import { siteContent } from '@/data/siteContent'
import { assetUrl } from '@/lib/assetUrl'
import { Container } from '@/components/ui/Container'
import { IconCapacity, IconConsistency, IconControl } from '@/components/ui/icons'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/cn'

const icons = {
  capacity: IconCapacity,
  consistency: IconConsistency,
  control: IconControl,
} as const

export function EvolveSection() {
  const { evolve } = siteContent
  const { ref, visible } = useScrollReveal<HTMLElement>()

  return (
    <section id="por-que-pb" className="bg-navy text-white" ref={ref}>
      <div
        className={cn(
          'grid lg:grid-cols-[1.05fr_0.85fr_0.95fr]',
          'scroll-reveal',
          visible && 'scroll-reveal--visible',
        )}
      >
        <Container className="py-12 lg:max-w-none lg:px-10 lg:py-14 xl:pl-[max(2rem,calc((100vw-72rem)/2))]">
          <p className="text-label-caps text-accent">{evolve.eyebrow}</p>
          <h2 className="mt-3 max-w-md text-2xl font-extrabold leading-tight md:text-3xl">
            {evolve.title}
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/85">
            {evolve.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>

        <div className="border-t border-white/15 px-5 py-10 sm:px-8 lg:border-l lg:border-t-0 lg:px-8 lg:py-14">
          <ul className="space-y-6">
            {evolve.benefits.map((benefit) => {
              const Icon = icons[benefit.icon]
              return (
                <li key={benefit.id} className="flex gap-3.5">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold">
                      {benefit.title}{' '}
                      <span className="font-normal text-white/80">{benefit.description}</span>
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <div
          className="min-h-48 bg-cover bg-center lg:min-h-full"
          style={{ backgroundImage: `url(${assetUrl(evolve.image)})` }}
          role="img"
          aria-label={evolve.imageAlt}
        />
      </div>
    </section>
  )
}

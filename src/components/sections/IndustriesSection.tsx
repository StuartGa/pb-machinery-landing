import { siteContent } from '@/data/siteContent'
import { Container } from '@/components/ui/Container'
import { PublicImage } from '@/components/ui/PublicImage'
import { IconArrow, IconBread, IconCupcake } from '@/components/ui/icons'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/cn'

const icons = {
  cupcake: IconCupcake,
  bread: IconBread,
} as const

export function IndustriesSection() {
  const { industries } = siteContent
  const { ref, visible } = useScrollReveal<HTMLElement>()

  return (
    <section id="industrias" className="bg-surface-muted py-16 md:py-20" ref={ref}>
      <Container
        className={cn(
          'grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start',
          'scroll-reveal',
          visible && 'scroll-reveal--visible',
        )}
      >
        <div>
          <h2 className="max-w-xs text-3xl font-extrabold leading-tight text-navy md:text-4xl">
            {industries.title}
          </h2>
          <div className="mt-3 h-1.5 w-16 rounded-full bg-accent" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-on-surface-muted md:text-base">
            {industries.description}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {industries.items.map((item) => {
            const Icon = icons[item.icon]
            return (
              <a
                key={item.id}
                href={item.href}
                className="card-surface group overflow-hidden transition hover:-translate-y-1"
              >
                <PublicImage
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-40 w-full object-cover"
                  width={640}
                  height={320}
                />
                <div className="p-5">
                  <Icon className="mb-3 h-7 w-7 text-primary" />
                  <h3 className="text-lg font-extrabold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-surface-muted">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                    Conoce las soluciones
                    <IconArrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

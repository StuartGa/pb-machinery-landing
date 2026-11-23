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
    <section id="industrias" className="bg-white py-12 md:py-16" ref={ref}>
      <Container
        className={cn(
          'grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center',
          'scroll-reveal',
          visible && 'scroll-reveal--visible',
        )}
      >
        <div>
          <h2 className="max-w-xs text-2xl font-extrabold leading-tight text-navy md:text-3xl">
            {industries.title}
          </h2>
          <div className="mt-3 h-1 w-14 rounded-full bg-accent" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-on-surface-muted">
            {industries.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {industries.items.map((item) => {
            const Icon = icons[item.icon]
            return (
              <a
                key={item.id}
                href={item.href}
                className="card-surface group flex h-full flex-col overflow-hidden transition hover:-translate-y-0.5"
              >
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <PublicImage
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover"
                    width={960}
                    height={540}
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 md:p-5">
                  <div className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                    <div className="min-h-[5.5rem]">
                      <h3 className="text-base font-extrabold text-navy md:text-lg">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-on-surface-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-bold text-primary">
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

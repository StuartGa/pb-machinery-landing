import { siteContent } from '@/data/siteContent'
import { Container } from '@/components/ui/Container'
import { PublicImage } from '@/components/ui/PublicImage'
import { IconArrow, IconCheck } from '@/components/ui/icons'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/cn'

export function BakerySection() {
  const { bakery } = siteContent
  const { ref, visible } = useScrollReveal<HTMLElement>()
  const [cream, silex] = bakery.products

  return (
    <section id="panaderia" className="bg-surface-muted py-12 md:py-16" ref={ref}>
      <Container className={cn('scroll-reveal', visible && 'scroll-reveal--visible')}>
        <div className="flex items-start gap-3">
          <span className="mt-1 h-9 w-1.5 shrink-0 bg-primary" />
          <div>
            <h2 className="text-2xl font-extrabold text-navy md:text-3xl lg:text-[2rem]">
              {bakery.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-on-surface-muted md:text-[15px]">
              {bakery.description}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-border">
          {/* Cream Levain: image left + text right */}
          <article className="grid gap-5 sm:grid-cols-[0.85fr_1.15fr] sm:items-center lg:pr-8">
            <PublicImage
              src={cream.image}
              alt={cream.imageAlt}
              className="mx-auto h-52 w-full object-contain sm:h-60"
              width={720}
              height={900}
            />
            <div>
              <p className="text-label-caps text-primary">{cream.category}</p>
              <h3 className="mt-1.5 text-xl font-extrabold text-navy">{cream.name}</h3>
              <p className="mt-2 text-sm text-on-surface-muted">{cream.description}</p>
              <ul className="mt-4 space-y-2">
                {cream.features.map((feature) => (
                  <li key={feature.id} className="flex items-start gap-2 text-sm text-on-surface">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <a href={cream.cta.href} className="btn-primary mt-5">
                {cream.cta.label}
                <IconArrow className="h-4 w-4" />
              </a>
            </div>
          </article>

          {/* Silex: text left + twin images right */}
          <article className="grid gap-5 sm:grid-cols-[1.1fr_0.9fr] sm:items-start lg:pl-8">
            <div>
              <p className="text-label-caps text-primary">{silex.category}</p>
              <h3 className="mt-1.5 text-xl font-extrabold text-navy">{silex.name}</h3>
              <p className="mt-2 text-sm text-on-surface-muted">{silex.description}</p>
              <ul className="mt-4 space-y-2">
                {silex.features.map((feature) => (
                  <li key={feature.id} className="flex items-start gap-2 text-sm text-on-surface">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <a href={silex.cta.href} className="btn-primary mt-5 whitespace-nowrap">
                {silex.cta.label}
                <IconArrow className="h-4 w-4" />
              </a>
            </div>

            {silex.variants ? (
              <div className="grid grid-cols-2 gap-3 self-center">
                {silex.variants.map((variant) => (
                  <div key={variant.id} className="flex flex-col items-center text-center">
                    <div className="flex h-44 w-full items-center justify-center sm:h-48">
                      <PublicImage
                        src={variant.image}
                        alt={variant.name}
                        className="max-h-full max-w-full object-contain"
                        width={720}
                        height={720}
                      />
                    </div>
                    <p className="mt-2 text-[11px] font-extrabold uppercase tracking-wide text-primary">
                      {variant.name}
                    </p>
                    <p className="whitespace-nowrap text-[11px] text-on-surface-muted">
                      {variant.capacity}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </article>
        </div>
      </Container>
    </section>
  )
}

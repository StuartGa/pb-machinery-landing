import { siteContent } from '@/data/siteContent'
import { Container } from '@/components/ui/Container'
import { PublicImage } from '@/components/ui/PublicImage'
import { IconArrow, IconCheck } from '@/components/ui/icons'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/cn'

export function BakerySection() {
  const { bakery } = siteContent
  const { ref, visible } = useScrollReveal<HTMLElement>()

  return (
    <section id="panaderia" className="bg-surface-muted py-16 md:py-20" ref={ref}>
      <Container className={cn('scroll-reveal', visible && 'scroll-reveal--visible')}>
        <div className="flex items-start gap-3">
          <span className="mt-1 h-10 w-1.5 shrink-0 bg-primary" />
          <div>
            <h2 className="text-3xl font-extrabold text-navy md:text-4xl">{bakery.title}</h2>
            <p className="mt-2 max-w-3xl text-sm text-on-surface-muted md:text-base">
              {bakery.description}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-0">
          {bakery.products.map((product, index) => (
            <article
              key={product.id}
              className={cn(
                'flex flex-col',
                index > 0 ? 'lg:border-l lg:border-border lg:pl-10' : 'lg:pr-10',
              )}
            >
              <p className="text-label-caps text-primary">{product.category}</p>
              <h3 className="mt-2 text-2xl font-extrabold text-navy">{product.name}</h3>
              <p className="mt-2 text-sm text-on-surface-muted">{product.description}</p>

              <ul className="mt-5 space-y-2.5">
                {product.features.slice(0, 4).map((feature) => (
                  <li key={feature.id} className="flex items-start gap-2.5 text-sm text-on-surface">
                    <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              {product.variants ? (
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {product.variants.map((variant) => (
                    <div key={variant.id} className="text-center">
                      <PublicImage
                        src={variant.image}
                        alt={variant.name}
                        className="mx-auto h-36 w-full object-contain"
                        width={240}
                        height={200}
                      />
                      <p className="mt-2 text-xs font-extrabold uppercase tracking-wide text-navy">
                        {variant.name}
                      </p>
                      <p className="text-[11px] text-on-surface-muted">{variant.capacity}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <PublicImage
                  src={product.image}
                  alt={product.imageAlt}
                  className="mx-auto mt-6 max-h-56 w-auto object-contain"
                  width={420}
                  height={320}
                />
              )}

              <a href={product.cta.href} className="btn-primary mt-6 self-start">
                {product.cta.label}
                <IconArrow className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

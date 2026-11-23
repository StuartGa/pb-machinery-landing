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
          <span className="mt-1 h-10 w-1.5 shrink-0 rounded-full bg-primary" />
          <div>
            <h2 className="text-3xl font-extrabold text-navy md:text-4xl">{bakery.title}</h2>
            <p className="mt-2 max-w-3xl text-sm text-on-surface-muted md:text-base">
              {bakery.description}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {bakery.products.map((product, index) => (
            <article
              key={product.id}
              className={cn(
                'card-surface p-6',
                index > 0 && 'lg:border-l lg:border-border lg:pl-8',
              )}
            >
              <p className="text-label-caps text-primary">{product.category}</p>
              <h3 className="mt-2 text-2xl font-extrabold text-navy">{product.name}</h3>
              <p className="mt-2 text-sm text-on-surface-muted">{product.description}</p>

              {product.variants ? (
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {product.variants.map((variant) => (
                    <div key={variant.id} className="rounded-xl bg-surface-muted p-3 text-center">
                      <PublicImage
                        src={variant.image}
                        alt={variant.name}
                        className="mx-auto h-28 w-full object-contain"
                        width={220}
                        height={180}
                      />
                      <p className="mt-2 text-xs font-extrabold text-navy">{variant.name}</p>
                      <p className="text-[11px] text-on-surface-muted">{variant.capacity}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <PublicImage
                  src={product.image}
                  alt={product.imageAlt}
                  className="mx-auto mt-5 max-h-56 w-auto object-contain"
                  width={420}
                  height={320}
                />
              )}

              <ul className="mt-5 space-y-2.5">
                {product.features.map((feature) => (
                  <li key={feature.id} className="flex items-start gap-2.5 text-sm text-on-surface">
                    <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <a href={product.cta.href} className="btn-primary mt-6">
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

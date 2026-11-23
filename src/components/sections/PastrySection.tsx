import { siteContent } from '@/data/siteContent'
import { Container } from '@/components/ui/Container'
import { PublicImage } from '@/components/ui/PublicImage'
import { IconArrow, IconCheck } from '@/components/ui/icons'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/cn'

export function PastrySection() {
  const { pastry } = siteContent
  const { featured } = pastry
  const { ref, visible } = useScrollReveal<HTMLElement>()

  return (
    <section id="pasteleria" className="bg-white py-12 md:py-16" ref={ref}>
      <Container className={cn('scroll-reveal', visible && 'scroll-reveal--visible')}>
        <div className="flex items-start gap-3">
          <span className="mt-1 h-9 w-1.5 shrink-0 bg-primary" />
          <div>
            <h2 className="text-2xl font-extrabold text-navy md:text-3xl lg:text-[2rem]">
              {pastry.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-on-surface-muted md:text-[15px]">
              {pastry.description}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-0 lg:divide-x lg:divide-border">
          {/* Featured: image left + copy right — matches PDF */}
          <div className="grid gap-6 sm:grid-cols-[0.9fr_1.1fr] sm:items-start lg:pr-8">
            <PublicImage
              src={featured.image}
              alt={featured.imageAlt}
              className="mx-auto h-56 w-full object-contain sm:h-64 lg:h-72"
              width={720}
              height={720}
            />
            <div>
              <p className="text-label-caps text-primary">{featured.category}</p>
              <h3 className="mt-1.5 text-xl font-extrabold text-navy md:text-2xl">
                {featured.name}
              </h3>
              <p className="mt-2 text-sm text-on-surface-muted">{featured.description}</p>
              <ul className="mt-4 space-y-2">
                {featured.features.map((feature) => (
                  <li key={feature.id} className="flex items-start gap-2 text-sm text-on-surface">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <a href={featured.cta.href} className="btn-primary mt-5">
                {featured.cta.label}
                <IconArrow className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Line products: single horizontal row of 4 */}
          <div className="lg:pl-8">
            <h4 className="text-base font-extrabold text-primary md:text-lg">{pastry.moreTitle}</h4>
            <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-4 sm:gap-x-4">
              {pastry.line.map((item) => (
                <div key={item.id} className="flex h-full flex-col items-center text-center">
                  <div className="flex h-32 w-full items-center justify-center sm:h-36">
                    <PublicImage
                      src={item.image}
                      alt={item.imageAlt}
                      className="max-h-full max-w-full object-contain"
                      width={720}
                      height={720}
                    />
                  </div>
                  <p className="mt-3 min-h-[2.5rem] text-xs font-bold leading-snug text-navy sm:text-sm">
                    {item.title}
                  </p>
                  <span className="mt-1 h-0.5 w-8 bg-primary" aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

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
    <section id="pasteleria" className="bg-white py-16 md:py-20" ref={ref}>
      <Container className={cn('scroll-reveal', visible && 'scroll-reveal--visible')}>
        <div className="flex items-start gap-3">
          <span className="mt-1 h-10 w-1.5 shrink-0 bg-primary" />
          <div>
            <h2 className="text-3xl font-extrabold text-navy md:text-4xl">{pastry.title}</h2>
            <p className="mt-2 max-w-3xl text-sm text-on-surface-muted md:text-base">
              {pastry.description}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <PublicImage
              src={featured.image}
              alt={featured.imageAlt}
              className="mx-auto max-h-72 w-full object-contain"
              width={640}
              height={480}
            />
            <div className="mt-6 max-w-xl">
              <p className="text-label-caps text-primary">{featured.category}</p>
              <h3 className="mt-2 text-2xl font-extrabold text-navy md:text-3xl">{featured.name}</h3>
              <p className="mt-2 text-sm text-on-surface-muted md:text-base">{featured.description}</p>
              <ul className="mt-5 space-y-2.5">
                {featured.features.map((feature) => (
                  <li key={feature.id} className="flex items-start gap-2.5 text-sm text-on-surface">
                    <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <a href={featured.cta.href} className="btn-primary mt-6">
                {featured.cta.label}
                <IconArrow className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-2">
            <h4 className="text-lg font-extrabold text-primary">{pastry.moreTitle}</h4>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6">
              {pastry.line.map((item) => (
                <div key={item.id} className="text-center">
                  <PublicImage
                    src={item.image}
                    alt={item.imageAlt}
                    className="mx-auto h-28 w-full object-contain"
                    width={240}
                    height={180}
                  />
                  <p className="mt-3 text-sm font-bold leading-snug text-navy">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

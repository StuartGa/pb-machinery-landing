import { siteContent } from '@/data/siteContent'
import { assetUrl } from '@/lib/assetUrl'
import { Container } from '@/components/ui/Container'
import { IconArrow } from '@/components/ui/icons'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/cn'

export function CtaSection() {
  const { cta } = siteContent
  const { ref, visible } = useScrollReveal<HTMLElement>()

  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 bg-cover bg-left"
        style={{ backgroundImage: `url(${assetUrl(cta.background)})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(5,22,46,0.35) 0%, rgba(5,22,46,0.82) 42%, rgba(5,22,46,0.95) 100%)',
        }}
        aria-hidden
      />
      <Container
        className={cn(
          'relative flex min-h-56 flex-col items-center justify-center py-16 text-center text-white',
          'scroll-reveal',
          visible && 'scroll-reveal--visible',
        )}
      >
        <h2 className="max-w-2xl text-3xl font-extrabold md:text-4xl">{cta.title}</h2>
        <p className="mt-3 max-w-xl text-sm text-white/85 md:text-base">{cta.description}</p>
        <a
          href={cta.button.href}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-primary transition hover:-translate-y-0.5"
        >
          {cta.button.label}
          <IconArrow className="h-4 w-4" />
        </a>
      </Container>
    </section>
  )
}

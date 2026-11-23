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
            'linear-gradient(90deg, rgba(5,22,46,0.25) 0%, rgba(5,22,46,0.72) 38%, rgba(5,22,46,0.94) 70%)',
        }}
        aria-hidden
      />
      <Container
        className={cn(
          'relative flex min-h-[200px] flex-col items-start justify-center py-14 text-left text-white md:items-end md:text-right',
          'scroll-reveal',
          visible && 'scroll-reveal--visible',
        )}
      >
        <div className="max-w-xl md:ml-auto">
          <h2 className="text-2xl font-extrabold md:text-3xl">{cta.title}</h2>
          <p className="mt-3 text-sm text-white/85 md:text-base">{cta.description}</p>
          <a
            href={cta.button.href}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-primary transition hover:-translate-y-0.5"
          >
            {cta.button.label}
            <IconArrow className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  )
}

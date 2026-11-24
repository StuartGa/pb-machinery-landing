import { siteContent } from '@/data/siteContent'
import { assetUrl } from '@/lib/assetUrl'
import { Container } from '@/components/ui/Container'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { IconCalendar, IconFlag, IconGear } from '@/components/ui/icons'

const trustIcons = {
  calendar: IconCalendar,
  gear: IconGear,
  flag: IconFlag,
} as const

export function HeroSection() {
  const { hero } = siteContent

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[center_right] sm:bg-center"
        style={{ backgroundImage: `url(${assetUrl(hero.background)})` }}
        role="img"
        aria-label={hero.productImageAlt}
      />
      <div className="hero-overlay absolute inset-0" aria-hidden />

      <Container className="relative grid gap-8 py-12 lg:grid-cols-[1fr_minmax(300px,400px)] lg:items-start lg:gap-10 lg:py-16">
        <div className="flex flex-col text-white lg:min-h-[28rem] lg:justify-between">
          <div>
            <p className="text-label-caps text-white/90">{hero.eyebrow}</p>
            <h1 className="mt-3 max-w-xl text-[2rem] font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              <span className="relative inline-block">
                Lleva tu
                <span className="absolute -bottom-1 left-0 h-[4px] w-16 rounded-sm bg-primary" />
              </span>{' '}
              producción al siguiente nivel.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
              {hero.description}
            </p>
          </div>

          <ul className="mt-8 grid max-w-xl gap-0 sm:grid-cols-3 sm:divide-x sm:divide-white/25 lg:mt-10">
            {hero.trust.map((item) => {
              const Icon = trustIcons[item.icon]
              return (
                <li
                  key={item.id}
                  className="flex items-start gap-2.5 py-2 sm:px-3 sm:first:pl-0 sm:last:pr-0"
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[11px] font-semibold leading-snug text-white/95">
                    {item.label}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        <QuoteForm className="self-start lg:sticky lg:top-24" />
      </Container>
    </section>
  )
}

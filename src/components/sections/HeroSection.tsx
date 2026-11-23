import { siteContent } from '@/data/siteContent'
import { assetUrl } from '@/lib/assetUrl'
import { Container } from '@/components/ui/Container'
import { PublicImage } from '@/components/ui/PublicImage'
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
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${assetUrl(hero.background)})` }}
        aria-hidden
      />
      <div className="hero-overlay absolute inset-0" aria-hidden />

      <Container className="relative grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-10 lg:py-16">
        <div className="text-white">
          <p className="text-label-caps text-white/90">{hero.eyebrow}</p>
          <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            <span className="relative inline-block">
              Lleva tu
              <span className="absolute -bottom-1 left-0 h-[5px] w-[4.5rem] rounded-sm bg-primary" />
            </span>{' '}
            producción
            <br className="hidden sm:block" /> al siguiente nivel.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
            {hero.description}
          </p>

          <div className="relative mt-8 max-w-md">
            <PublicImage
              src={hero.productImage}
              alt={hero.productImageAlt}
              className="w-full object-contain drop-shadow-[0_28px_50px_rgba(0,0,0,0.55)]"
              width={640}
              height={720}
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <ul className="mt-8 grid gap-0 sm:grid-cols-3 sm:divide-x sm:divide-white/25">
            {hero.trust.map((item) => {
              const Icon = trustIcons[item.icon]
              return (
                <li key={item.id} className="flex items-start gap-3 py-2 sm:px-4 sm:first:pl-0 sm:last:pr-0">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold leading-snug text-white/95">{item.label}</span>
                </li>
              )
            })}
          </ul>
        </div>

        <QuoteForm className="lg:sticky lg:top-24 lg:justify-self-end lg:w-full lg:max-w-md" />
      </Container>
    </section>
  )
}

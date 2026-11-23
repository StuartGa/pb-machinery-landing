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

      <Container className="relative grid gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:py-20">
        <div className="text-white">
          <p className="text-label-caps text-white/85">{hero.eyebrow}</p>
          <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            <span className="relative inline-block">
              Lleva
              <span className="absolute -bottom-1 left-0 h-1 w-14 rounded-full bg-primary" />
            </span>{' '}
            tu producción al siguiente nivel.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/88 sm:text-lg">
            {hero.description}
          </p>

          <div className="relative mt-8 max-w-md">
            <PublicImage
              src={hero.productImage}
              alt={hero.productImageAlt}
              className="w-full rounded-2xl object-cover shadow-[0_30px_60px_-28px_rgba(0,0,0,0.55)]"
              width={640}
              height={480}
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {hero.trust.map((item) => {
              const Icon = trustIcons[item.icon]
              return (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-medium leading-snug text-white/90">{item.label}</span>
                </li>
              )
            })}
          </ul>
        </div>

        <QuoteForm className="lg:justify-self-end lg:w-full lg:max-w-md" />
      </Container>
    </section>
  )
}

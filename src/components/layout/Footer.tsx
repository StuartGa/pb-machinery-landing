import { siteContent } from '@/data/siteContent'
import { assetUrl } from '@/lib/assetUrl'
import { Container } from '@/components/ui/Container'
import { IconGlobe, IconMail, IconPin } from '@/components/ui/icons'

export function Footer() {
  const { footer, brand } = siteContent

  return (
    <footer className="bg-footer text-white">
      <Container className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        <div className="lg:pr-8">
          <img
            src={assetUrl(brand.logoFooter)}
            alt={brand.fullName}
            className="h-12 w-auto"
            width={220}
            height={44}
          />
        </div>

        {footer.linkGroups.map((group) => (
          <div
            key={group.title}
            className="border-white/10 lg:border-l lg:px-8"
          >
            <p className="text-sm font-extrabold">{group.title}</p>
            <ul className="mt-3 space-y-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/80 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="border-white/10 lg:border-l lg:px-8">
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex items-center gap-2">
              <IconMail className="h-4 w-4 shrink-0" />
              <a href={`mailto:${footer.contact.email}`} className="hover:text-white">
                {footer.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <IconGlobe className="h-4 w-4 shrink-0" />
              <a
                href={`https://${footer.contact.website}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {footer.contact.website}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <IconPin className="h-4 w-4 shrink-0" />
              <span>{footer.contact.address}</span>
            </li>
          </ul>
        </div>

        <div className="border-white/10 lg:border-l lg:px-8">
          <div className="inline-flex items-center gap-3 rounded-xl border border-white/15 px-4 py-3">
            <span className="text-2xl" aria-hidden>
              🇺🇸
            </span>
            <p className="text-sm font-bold leading-snug">{footer.madeInUsa}</p>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-4 text-xs text-white/60">{footer.copyright}</Container>
      </div>
    </footer>
  )
}

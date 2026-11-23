import { useState } from 'react'
import { siteContent } from '@/data/siteContent'
import { assetUrl } from '@/lib/assetUrl'
import { useScrollHeader } from '@/hooks/useScrollHeader'
import { Container } from '@/components/ui/Container'
import { IconChevron, IconClose, IconMenu } from '@/components/ui/icons'
import { cn } from '@/lib/cn'

export function Header() {
  const scrolled = useScrollHeader()
  const [open, setOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-transparent bg-white/95 backdrop-blur transition',
        scrolled && 'border-border shadow-[0_8px_24px_-18px_rgba(10,31,61,0.45)]',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="PB Machinery">
          <img
            src={assetUrl(siteContent.brand.logoHeader)}
            alt={siteContent.brand.fullName}
            className="h-10 w-auto"
            width={200}
            height={40}
          />
        </a>

        <nav className="hidden items-center gap-4 xl:gap-6 lg:flex" aria-label="Principal">
          {siteContent.navigation.map((item) =>
            item.children ? (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 whitespace-nowrap text-[13px] font-semibold text-on-surface hover:text-primary xl:text-sm"
                  aria-expanded={solutionsOpen}
                  onClick={() => setSolutionsOpen((v) => !v)}
                  onBlur={() => setTimeout(() => setSolutionsOpen(false), 150)}
                >
                  {item.label}
                  <IconChevron className="h-4 w-4" />
                </button>
                {solutionsOpen && (
                  <div className="absolute left-0 top-full mt-2 min-w-64 rounded-xl border border-border bg-white p-2 shadow-lg">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-on-surface hover:bg-surface-muted hover:text-primary"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-[13px] font-semibold text-on-surface hover:text-primary xl:text-sm"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a href={siteContent.headerCta.href} className="btn-header hidden sm:inline-flex">
            {siteContent.headerCta.label}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-navy lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {siteContent.navigation.flatMap((item) =>
              item.children
                ? item.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      className="rounded-lg px-3 py-3 text-sm font-semibold text-on-surface"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))
                : [
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-lg px-3 py-3 text-sm font-semibold text-on-surface"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>,
                  ],
            )}
            <a
              href={siteContent.headerCta.href}
              className="btn-header mt-2"
              onClick={() => setOpen(false)}
            >
              {siteContent.headerCta.label}
            </a>
          </Container>
        </div>
      )}
    </header>
  )
}

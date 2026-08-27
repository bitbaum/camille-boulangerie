import Link from 'next/link'
import { BRAND, NAV } from '@/lib/content/site'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-espresso/10">
      <div className="section-pad flex items-center justify-between h-16 sm:h-[4.5rem]">
        <Link href="/" className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
          {BRAND.name}
          <span className="text-terracotta font-normal text-lg sm:text-xl ml-1.5">{BRAND.tagline}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-espresso/80">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-terracotta transition-colors min-h-[44px] flex items-center"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/catering" className="btn-primary text-xs sm:text-sm px-4 sm:px-6">
          Bestellen
        </Link>
      </div>
      <nav className="md:hidden flex overflow-x-auto gap-1 px-4 pb-3 -mt-1 scrollbar-none">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 px-3 py-1.5 rounded-full text-xs font-medium bg-cream-dark text-espresso hover:bg-wheat/60"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

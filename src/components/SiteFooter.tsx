import Link from 'next/link'
import { BRAND, CONTACT, DEMO } from '@/lib/content/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-espresso/10 bg-cream-dark mt-16">
      <div className="section-pad py-10 sm:py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">{BRAND.fullName}</p>
          <p className="mt-2 text-sm text-espresso/70 max-w-xs">
            Demo-Website erstellt mit OrangeCat Site Factory. Import-Quelle dokumentiert in{' '}
            <code className="text-xs bg-white/60 px-1 rounded">imports/</code>.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold mb-2">Kontakt (fiktiv)</p>
          <p className="text-sm text-espresso/70">
            <a href={`mailto:${CONTACT.email}`} className="hover:text-terracotta">{CONTACT.email}</a>
            <br />
            {CONTACT.phone}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold mb-2">Quelle</p>
          <p className="text-xs text-espresso/60">
            Struktur inspiriert von öffentlich zugänglichen Bäckerei-Websites (
            <a href={DEMO.sourceUrl} className="underline hover:text-terracotta" rel="noopener noreferrer" target="_blank">
              Referenz
            </a>
            ). Keine echte Organisation.
          </p>
        </div>
      </div>
      <div className="border-t border-espresso/10 py-4 text-center text-xs text-espresso/60">
        © {new Date().getFullYear()} {BRAND.name} Demo · hosted on orangecat.ch
      </div>
    </footer>
  )
}

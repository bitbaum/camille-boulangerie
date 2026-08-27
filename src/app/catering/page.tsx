import type { Metadata } from 'next'
import Link from 'next/link'
import { CATERING, CONTACT } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Events & Catering',
}

export default function CateringPage() {
  return (
    <div className="section-pad py-12 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-terracotta mb-2">
        {CATERING.title}
      </p>
      <h1 className="font-display text-4xl sm:text-5xl font-semibold max-w-2xl">
        Catering für Momente, die zählen
      </h1>
      <p className="mt-4 text-lg text-espresso/80 max-w-xl">{CATERING.intro}</p>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {CATERING.services.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-espresso/10 bg-white p-6 hover:border-terracotta/30 transition-colors"
          >
            <h2 className="font-display text-xl font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm text-espresso/75 leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-2xl bg-wheat/50 border border-wheat p-8 sm:p-10 max-w-xl">
        <h2 className="font-display text-2xl font-semibold">Demo-Anfrage</h2>
        <p className="mt-2 text-sm text-espresso/75">
          In einer echten Prospect-Version wäre hier ein Formular mit CRM-Anbindung. Für den OrangeCat-Test:
        </p>
        <p className="mt-4 font-medium">
          <a href={`mailto:${CONTACT.email}?subject=Catering%20Demo`} className="text-terracotta hover:underline">
            {CONTACT.email}
          </a>
        </p>
        <Link href="/" className="inline-block mt-6 btn-outline text-sm">
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  )
}

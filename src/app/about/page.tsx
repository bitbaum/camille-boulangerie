import type { Metadata } from 'next'
import Link from 'next/link'
import { DEMO, FOUNDER } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Über Camille',
}

export default function AboutPage() {
  return (
    <div className="section-pad py-12 sm:py-16 max-w-3xl">
      <h1 className="font-display text-4xl sm:text-5xl font-semibold">{FOUNDER.name}</h1>
      <p className="text-terracotta font-medium mt-1">{FOUNDER.role}</p>

      <div className="mt-8 prose prose-espresso max-w-none">
        <p className="text-lg text-espresso/85 leading-relaxed whitespace-pre-line">{FOUNDER.bio}</p>
        <blockquote className="my-8 pl-6 border-l-4 border-terracotta font-display text-2xl italic text-espresso/80">
          «{FOUNDER.quote}»
        </blockquote>
      </div>

      <section className="mt-12 p-6 rounded-xl bg-cream-dark border border-espresso/10 text-sm">
        <h2 className="font-semibold text-espresso mb-2">OrangeCat Site Factory — wie diese Seite entstand</h2>
        <ol className="list-decimal list-inside space-y-2 text-espresso/75">
          <li>Öffentliche Referenz-Website importiert (<code className="text-xs bg-white px-1 rounded">import-site.ts</code>)</li>
          <li>Struktur (Nav, Standorte, FAQ, Sortiment) in SSOT überführt</li>
          <li>Pseudonyme Figur & fiktive Marke «Camille» erstellt</li>
          <li>Next.js-Seite gebaut und auf <strong>camille.orangecat.ch</strong> deployed</li>
        </ol>
        <p className="mt-4 text-xs text-espresso/60">
          Referenz-URL:{' '}
          <a href={DEMO.sourceUrl} className="underline" target="_blank" rel="noopener noreferrer">
            {DEMO.sourceUrl}
          </a>
          — keine Verbindung zur echten Organisation.
        </p>
      </section>

      <Link href="/" className="inline-block mt-8 btn-primary">
        Zur Boulangerie
      </Link>
    </div>
  )
}

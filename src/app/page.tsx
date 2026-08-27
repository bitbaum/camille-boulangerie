import Link from 'next/link'
import {
  FAQ,
  FOUNDER,
  HERO,
  LOCATIONS,
  PRODUCTS,
} from '@/lib/content/site'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-wheat/40 via-cream to-terracotta/10" />
        <div className="section-pad relative py-16 sm:py-24 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-terracotta mb-4">
            {HERO.eyebrow}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-espresso max-w-2xl leading-tight">
            {HERO.title}
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-espresso/80 max-w-xl leading-relaxed">
            {HERO.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#sortiment" className="btn-primary">
              {HERO.ctaPrimary}
            </Link>
            <Link href="/catering" className="btn-outline">
              {HERO.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Founder teaser */}
      <section className="section-pad py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center bg-white/60 rounded-2xl p-8 sm:p-10 border border-espresso/5 shadow-sm">
          <div className="aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-terracotta/20 to-wheat flex items-end p-6">
            <div className="w-full">
              <div className="w-24 h-24 rounded-full bg-terracotta/30 border-4 border-cream mb-4 flex items-center justify-center text-4xl">
                👩‍🍳
              </div>
              <p className="font-display text-2xl font-semibold">{FOUNDER.name}</p>
              <p className="text-sm text-espresso/70">{FOUNDER.role}</p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold mb-4">Die Frau hinter dem Ofen</h2>
            <p className="text-espresso/80 leading-relaxed whitespace-pre-line">{FOUNDER.bio}</p>
            <blockquote className="mt-6 pl-4 border-l-4 border-terracotta italic text-espresso/70">
              «{FOUNDER.quote}»
            </blockquote>
            <Link href="/about" className="inline-block mt-6 text-terracotta font-medium hover:underline">
              Mehr über Camille →
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="sortiment" className="section-pad py-12 sm:py-16 scroll-mt-24">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-center mb-2">Aus dem Ofen</h2>
        <p className="text-center text-espresso/70 mb-10 max-w-lg mx-auto">
          Handwerklich, jeden Tag frisch — wie auf der importierten Referenz-Seite, aber mit Camilles Rezepturen.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="group rounded-2xl bg-white border border-espresso/8 p-6 hover:border-terracotta/30 hover:shadow-md transition-all"
            >
              <span className="text-4xl" aria-hidden>{p.emoji}</span>
              <h3 className="font-display text-xl font-semibold mt-4">{p.name}</h3>
              <p className="text-sm text-espresso/70 mt-2 leading-relaxed">{p.description}</p>
              <p className="mt-4 font-semibold text-terracotta">{p.price}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section id="standorte" className="bg-espresso text-cream py-14 sm:py-20 scroll-mt-24">
        <div className="section-pad">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-10">Unsere Standorte</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {LOCATIONS.map((loc) => (
              <div key={loc.name} className="rounded-2xl bg-cream/10 border border-cream/20 p-6 sm:p-8">
                <p className="text-wheat text-xs font-semibold uppercase tracking-wider mb-1">{loc.note}</p>
                <h3 className="font-display text-2xl font-semibold">{loc.name}</h3>
                <p className="mt-3 text-cream/90">{loc.address}</p>
                <p className="text-cream/80">{loc.phone}</p>
                <ul className="mt-4 space-y-1 text-sm text-cream/75">
                  {loc.hours.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad py-14 sm:py-20">
        <h2 className="font-display text-3xl font-semibold text-center mb-10">Gut zu wissen</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl bg-white border border-espresso/10 open:border-terracotta/30 open:shadow-sm"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-medium flex justify-between items-center min-h-[44px]">
                {item.q}
                <span className="text-terracotta group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="px-5 pb-4 text-sm text-espresso/75 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}

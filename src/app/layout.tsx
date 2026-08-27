import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import { BRAND, DEMO } from '@/lib/content/site'
import { DemoBanner } from '@/components/DemoBanner'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
})

const sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    default: `${BRAND.fullName} · Zürich`,
    template: `%s · ${BRAND.name}`,
  },
  description:
    'Französische Boulangerie am Limmatquai — OrangeCat Site Factory Demo (fiktiv).',
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-CH" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <DemoBanner />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}

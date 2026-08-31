import type { Metadata } from 'next';
import Script from 'next/script';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import { DemoBanner } from '@/components/DemoBanner';
import { siteChrome } from '@/config/site-content';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

const body = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

const chrome = siteChrome();

export const metadata: Metadata = {
  title: {
    default: `${chrome.name} — ${chrome.tagline} · Zürich`,
    template: `%s · ${chrome.name}`,
  },
  description: 'Französische Boulangerie am Limmatquai — OrangeCat Site Factory Demo (fiktiv).',
  // openGraph is what LinkedIn, WhatsApp and Slack read. Without it they fall
  // back to guessing, and a demo shown to a prospect previews as a bare link.
  // noindex above is about SEARCH, which is a different question from sharing.
  openGraph: {
    title: `${chrome.name} — ${chrome.tagline} · Zürich`,
    description: 'Französische Boulangerie am Limmatquai — OrangeCat Site Factory Demo (fiktiv).',
    type: 'website',
    locale: 'de_CH',
  },
  // A demo about a fictional business has no business in a search index.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-CH" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col">
        <DemoBanner />
        {children}

        {/* FleetCrown feedback widget — env-gated, see docs/architecture/feedback-widget.md */}
        {process.env.NEXT_PUBLIC_FC_WIDGET_TOKEN && (
          <Script
            src="https://fleetcrown.orangecat.ch/widget.js"
            strategy="afterInteractive"
            data-fc-project={process.env.NEXT_PUBLIC_FC_WIDGET_TOKEN}
          />
        )}
      </body>
    </html>
  );
}

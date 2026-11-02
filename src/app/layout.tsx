import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { DemoBanner } from '@/components/DemoBanner';
import { siteChrome } from '@/config/site-content';
// Cormorant Garamond and DM Sans ship in @bitbaum/design-tokens; ./fonts is generated from it.
import { body, display } from './fonts';

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

        {/* Loki feedback widget — env-gated, see docs/architecture/feedback-widget.md */}
        {process.env.NEXT_PUBLIC_FC_WIDGET_TOKEN && (
          <Script
            src="https://loki.orangecat.ch/widget.js"
            strategy="afterInteractive"
            data-fc-project={process.env.NEXT_PUBLIC_FC_WIDGET_TOKEN}
          />
        )}
      </body>
    </html>
  );
}

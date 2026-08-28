/**
 * The whole site, as data against the sitekit schema.
 *
 * Camille is the Site Factory's fictional demo prospect — every name,
 * address and phone number here is invented, and the DemoBanner says so on
 * every page. What the rebuild proved (2026-08-28): the hand-rolled site
 * could not be expressed in sitekit's original union, so `feature`,
 * `contact`, `faq`, hero actions and card icons were added to the package —
 * cheaper to learn on a site we own than on a stranger's.
 *
 * One deliberate change from the hand-rolled original: its founder
 * "portrait" was a gradient with an emoji — a fake image slot. The feature
 * section simply omits the image. Showing nothing is honest, and honest
 * absence is the Site Factory's whole pitch.
 */

import type { SiteChrome, SitePage } from 'sitekit';

export const DEMO = {
  label: 'OrangeCat Site Factory · Demo prospect',
  disclaimer:
    'Fiktives Geschäft — Demo der OrangeCat Site Factory. Keine echte Bäckerei, keine echten Kontaktdaten.',
  sourceUrl: 'https://juliette-boulangerie.ch/en',
} as const;

export function siteChrome(): SiteChrome {
  return {
    name: 'Camille',
    tagline: 'pain du Quai',
    footerNote:
      'Fiktive Demo-Website der OrangeCat Site Factory. Struktur inspiriert von öffentlich ' +
      'zugänglichen Bäckerei-Websites; alle Namen, Adressen und Kontaktdaten sind erfunden. ' +
      'Kontakt (fiktiv): hello@camille-demo.orangecat.ch · +41 44 000 12 34.',
    host: 'camille.orangecat.ch',
  };
}

export function sitePages(): SitePage[] {
  return [
    {
      path: '',
      navLabel: 'Willkommen',
      title: 'Camille — boulangerie du Quai',
      sections: [
        {
          kind: 'hero',
          eyebrow: 'Frisch gebacken in Zürich',
          statement: 'Bienvenue chez Camille',
          lead: [
            'Französische Boulangerie & Pâtisserie am Limmatquai — vom Buttercroissant am Morgen bis zur Aperitif-Platte am Abend.',
          ],
          actions: [
            { label: 'Sortiment ansehen', href: '#sortiment' },
            { label: 'Catering anfragen', href: '/catering' },
          ],
        },
        {
          kind: 'feature',
          heading: 'Die Frau hinter dem Ofen',
          paragraphs: [
            'Camille lernte das Handwerk in Lyon und eröffnete 2019 ihre erste kleine Boulangerie am Zürcher Limmatquai.',
            'Sie backt wie in Frankreich: lange Teigführung, Mehl aus der Beauce, Butter aus der Normandie — und jeden Morgen vor Sonnenaufgang im Ofen. Für Camille ist Brot keine Ware, sondern ein tägliches Ritual für die Nachbarschaft.',
          ],
          quote: 'Jeder Croissant erzählt, ob jemand zuhört hat.',
          cta: { label: 'Mehr über Camille', href: '/about' },
        },
        {
          kind: 'cards',
          heading: 'Aus dem Ofen',
          blurb: 'Handwerklich, jeden Tag frisch.',
          anchor: 'sortiment',
          columns: 4,
          cards: [
            {
              title: 'Croissant au beurre',
              body: 'Klassisch französisch: 27 Schichten, echte AOP-Butter, goldene Kruste.',
              meta: 'CHF 3.20',
              icon: '🥐',
            },
            {
              title: 'Tarte aux pommes',
              body: 'Saftige Äpfel aus dem Zürcher Oberland auf Mürbeteig — Rezept aus Lyon.',
              meta: 'CHF 6.50',
              icon: '🥧',
            },
            {
              title: 'Pain de campagne',
              body: 'Natursauerteig, 48 Stunden Teigführung, knusprige Kruste.',
              meta: 'CHF 7.80',
              icon: '🍞',
            },
            {
              title: 'Royal au chocolat',
              body: 'Dunkle Schokolade in drei Texturen — Camilles Signature-Kuchen.',
              meta: 'CHF 8.90',
              icon: '🍫',
            },
          ],
        },
        {
          kind: 'contact',
          heading: 'Unsere Standorte',
          anchor: 'standorte',
          locations: [
            {
              name: 'Boulangerie & Café',
              note: 'Sonntags geöffnet',
              address: 'Limmatquai 42, 8001 Zürich',
              phone: '+41 44 000 12 34',
              hours: ['Mo–Fr: 06:30 – 18:00', 'Sa–So: 08:00 – 14:00'],
            },
            {
              name: 'Atelier Pâtisserie',
              note: 'Nur Take-away & Vorbestellung',
              address: 'Hardstrasse 15, 8004 Zürich',
              phone: '+41 44 000 12 35',
              hours: ['Mo: geschlossen', 'Di–Fr: 07:30 – 14:30', 'Sa–So: 08:00 – 13:00'],
            },
          ],
        },
        {
          kind: 'faq',
          heading: 'Gut zu wissen',
          items: [
            {
              question: 'Kann ich online bestellen und abholen?',
              answer:
                'Ja. Bestellungen für den nächsten Tag bis 05:00 Uhr in unserem Demo-Shop — Abholung an beiden Standorten.',
            },
            {
              question: 'Liefern Sie nach Hause?',
              answer:
                'Im Demo: ja, im Raum Zürich (fiktiv). In der echten Prospect-Version würde hier die echte Lieferlogik stehen.',
            },
            {
              question: 'Bieten Sie Catering für Firmen an?',
              answer:
                'Frühstücksplatten, Business-Lunch und Apéro — massgeschneidert. Kontaktformular oder Anruf genügt.',
            },
          ],
        },
      ],
    },
    {
      path: 'catering',
      navLabel: 'Events & Catering',
      title: 'Catering für Momente, die zählen',
      intro:
        'Geburtstag, Team-Event oder Hochzeit — Camille liefert Platten, Fingerfood und saisonale Spezialitäten.',
      sections: [
        {
          kind: 'cards',
          columns: 3,
          cards: [
            {
              title: 'Frühstück & Brunch',
              body: 'Viennoiserie, Säfte, Kaffee — für 8 bis 80 Personen.',
            },
            {
              title: 'Business Lunch',
              body: 'Quiches, Salate, Baguette-Sandwiches — pünktlich ins Büro.',
            },
            {
              title: 'Apéro & Events',
              body: 'Canapés, Tartelettes, petits fours — stilvoll und handwerklich.',
            },
          ],
        },
        {
          kind: 'prose',
          heading: 'Demo-Anfrage',
          paragraphs: [
            'In einer echten Prospect-Version wäre hier ein Formular mit CRM-Anbindung. Für den OrangeCat-Test genügt eine E-Mail an hello@camille-demo.orangecat.ch (Betreff «Catering Demo»).',
          ],
        },
      ],
    },
    {
      path: 'about',
      navLabel: 'Über Camille',
      title: 'Camille Rousseau',
      intro: 'Bäckerin & Gründerin',
      sections: [
        {
          kind: 'feature',
          paragraphs: [
            'Camille lernte das Handwerk in Lyon und eröffnete 2019 ihre erste kleine Boulangerie am Zürcher Limmatquai.',
            'Sie backt wie in Frankreich: lange Teigführung, Mehl aus der Beauce, Butter aus der Normandie — und jeden Morgen vor Sonnenaufgang im Ofen. Für Camille ist Brot keine Ware, sondern ein tägliches Ritual für die Nachbarschaft.',
          ],
          quote: 'Jeder Croissant erzählt, ob jemand zuhört hat.',
        },
        {
          kind: 'prose',
          heading: 'OrangeCat Site Factory — wie diese Seite entstand',
          paragraphs: [
            '1. Öffentliche Referenz-Website importiert und ihre Struktur (Nav, Standorte, FAQ, Sortiment) in eine Content-SSOT überführt.',
            '2. Pseudonyme Figur und fiktive Marke «Camille» erstellt — nichts hier repräsentiert eine echte Organisation.',
            '3. Seit 2026-08-28 ist die SSOT Daten gegen das sitekit-Schema: dieselben Renderer wie jede andere generierte Site, eigene Farben und Schrift.',
            '4. Deployed auf camille.orangecat.ch. Referenz-Struktur: juliette-boulangerie.ch — keine Verbindung zur echten Organisation.',
          ],
        },
      ],
    },
  ];
}

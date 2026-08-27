/**
 * Site content SSOT — Camille boulangerie (OrangeCat Site Factory demo).
 *
 * Source inspiration: public structure scraped from juliette-boulangerie.ch
 * (see imports/source-manifest.json). All names, contacts, and addresses here
 * are fictional. Camille Rousseau is a pseudonymous demo character.
 */

export const DEMO = {
  label: 'OrangeCat Site Factory · Demo prospect',
  disclaimer:
    'Fictional business for testing how OrangeCat clones and hosts prospect sites. Not affiliated with any real bakery.',
  sourceUrl: 'https://juliette-boulangerie.ch/en',
  importManifest: 'imports/source-manifest.json',
} as const

export const BRAND = {
  name: 'Camille',
  tagline: 'pain du Quai',
  fullName: 'Camille — boulangerie du Quai',
  locale: 'de-CH',
} as const

/** Pseudonymous founder — inspired by public profiles of Zurich artisan bakers, entirely fictional. */
export const FOUNDER = {
  name: 'Camille Rousseau',
  role: 'Bäckerin & Gründerin',
  bio: `Camille lernte das Handwerk in Lyon und eröffnete 2019 ihre erste kleine Boulangerie am Zürcher Limmatquai. 
  Sie backt wie in Frankreich: lange Teigführung, Mehl aus der Beauce, Butter aus der Normandie — und jeden Morgen 
  vor Sonnenaufgang im Ofen. Für Camille ist Brot keine Ware, sondern ein tägliches Ritual für die Nachbarschaft.`,
  quote: 'Jeder Croissant erzählt, ob jemand zuhört hat.',
} as const

export const NAV = [
  { href: '/#sortiment', label: 'Sortiment' },
  { href: '/#standorte', label: 'Standorte' },
  { href: '/catering', label: 'Events & Catering' },
  { href: '/about', label: 'Über Camille' },
] as const

export const HERO = {
  eyebrow: 'Frisch gebacken in Zürich',
  title: 'Bienvenue chez Camille',
  subtitle:
    'Französische Boulangerie & Pâtisserie am Limmatquai — vom Buttercroissant am Morgen bis zum Aperitif-Platten am Abend.',
  ctaPrimary: 'Sortiment ansehen',
  ctaSecondary: 'Catering anfragen',
} as const

export const PRODUCTS = [
  {
    name: 'Croissant au beurre',
    description: 'Klassisch französisch: 27 Schichten, echte AOP-Butter, goldene Kruste.',
    price: 'CHF 3.20',
    emoji: '🥐',
  },
  {
    name: 'Tarte aux pommes',
    description: 'Saftige Äpfel aus dem Zürcher Oberland auf Mürbeteig — Rezept aus Lyon.',
    price: 'CHF 6.50',
    emoji: '🥧',
  },
  {
    name: 'Pain de campagne',
    description: 'Natursauerteig, 48 Stunden Teigführung, knusprige Kruste.',
    price: 'CHF 7.80',
    emoji: '🍞',
  },
  {
    name: 'Royal au chocolat',
    description: 'Dunkle Schokolade in drei Texturen — Camilles Signature-Kuchen.',
    price: 'CHF 8.90',
    emoji: '🍫',
  },
] as const

export const LOCATIONS = [
  {
    name: 'Boulangerie & Café',
    address: 'Limmatquai 42, 8001 Zürich',
    phone: '+41 44 000 12 34',
    hours: [
      'Mo–Fr: 06:30 – 18:00',
      'Sa–So: 08:00 – 14:00',
    ],
    note: 'Sonntags geöffnet',
  },
  {
    name: 'Atelier Pâtisserie',
    address: 'Hardstrasse 15, 8004 Zürich',
    phone: '+41 44 000 12 35',
    hours: [
      'Mo: geschlossen',
      'Di–Fr: 07:30 – 14:30',
      'Sa–So: 08:00 – 13:00',
    ],
    note: 'Nur Take-away & Vorbestellung',
  },
] as const

export const FAQ = [
  {
    q: 'Kann ich online bestellen und abholen?',
    a: 'Ja. Bestellungen für den nächsten Tag bis 05:00 Uhr in unserem Demo-Shop — Abholung an beiden Standorten.',
  },
  {
    q: 'Liefern Sie nach Hause?',
    a: 'Im Demo: ja, im Raum Zürich (fiktiv). In der echten Prospect-Version würde hier die echte Lieferlogik stehen.',
  },
  {
    q: 'Bieten Sie Catering für Firmen an?',
    a: 'Frühstücksplatten, Business-Lunch und Apéro — massgeschneidert. Kontaktformular oder Anruf genügt.',
  },
] as const

export const CONTACT = {
  email: 'hello@camille-demo.orangecat.ch',
  phone: '+41 44 000 12 34',
} as const

export const CATERING = {
  title: 'Moments that matter',
  intro:
    'Geburtstag, Team-Event oder Hochzeit — Camille liefert Platten, Fingerfood und saisonale Spezialitäten.',
  services: [
    { title: 'Frühstück & Brunch', description: 'Viennoiserie, Säfte, Kaffee — für 8 bis 80 Personen.' },
    { title: 'Business Lunch', description: 'Quiches, Salate, Baguette-Sandwiches — pünktlich ins Büro.' },
    { title: 'Apéro & Events', description: 'Canapés, Tartelettes, petits fours — stilvoll und handwerklich.' },
  ],
} as const

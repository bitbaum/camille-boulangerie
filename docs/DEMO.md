# Camille — OrangeCat Site Factory demo

**created_date:** 2026-08-20  
**last_modified_date:** 2026-08-20  
**last_modified_summary:** Live demo prospect — pseudonymous bakery from scraped reference site.

---

## What this is

A **fictional** French bakery in Zurich, built end-to-end through the OrangeCat Site Factory pipeline:

| Step | Artifact |
|------|----------|
| 1. Import | `imports/source-manifest.json` (scraped from public juliette-boulangerie.ch) |
| 2. Transform | Pseudonym **Camille Rousseau**, brand **Camille — pain du Quai** |
| 3. Build | Next.js marketing site, content SSOT in `src/lib/content/site.ts` |
| 4. Host | `camille.orangecat.ch` on bitbaum |

**Not a real business.** All addresses, phones, and emails are fake (+41 44 000 …). Demo banner on every page.

---

## Pseudonymous character

**Camille Rousseau** — entirely fictional founder. Inspired by the *structure* of real Zurich artisan bakery websites (multi-location, catering, FAQ, product grid), not by any real person's identity.

---

## Commands

```bash
npm run dev          # local
npm run verify       # lint + typecheck + build
# Deploy via fleetcrown:
bash /home/g/dev/fleetcrown/scripts/hetzner/deploy.sh camille-boulangerie
```

---

## Infrastructure

| Field | Value |
|-------|--------|
| App key | `camille-boulangerie` |
| URL | https://camille.orangecat.ch |
| Box | bitbaum (`167.233.22.31`) |
| DB | none |

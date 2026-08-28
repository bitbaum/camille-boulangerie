# Handing this site to its owner

Rehearsed end-to-end on 2026-08-27 against this repository. Everything below
was executed except the transfer itself, which needs a destination account.

The claim being tested: *"you own this — cancel any time and take the code."*
It survives, with four things that had to be fixed first.

## What the rehearsal found

**1. It was not in version control.** Serving production since 2026-08-19 with
no repository. A site that is not in a repository cannot be handed to anyone, so
handover was impossible for the one site that exists to demonstrate handover.
Fixed: committed as-is, pushed to `bitbaum/camille-boulangerie`.

**2. It was not in the register.** Running on port 4020 behind a Caddy block,
absent from `fleetcrown/scripts/hetzner/apps.conf`. Nothing would have told you
it existed. Fixed: registered.

**3. It carries 2 high-severity vulnerabilities.** Next 14.2.35; the fleet
standard is 16.2.4. Handing a paying client a site with known highs is not
acceptable — **upgrade before any real handover**, and treat "dependencies
current" as part of the deliverable, not hygiene.

**4. The content is not the client's to receive.** This site was generated from
a scrape of `juliette-boulangerie.ch` and pseudonymised. That is fine for a
demo, and it is *not* transferable: you would be handing someone a restyled copy
of a competitor's copy. For a real engagement the first draft must be rewritten
from the client's own material before it goes anywhere near a transfer.

## What passed

Clean-room test — cloned with no access to the original working copy, no
`node_modules`, no env file:

```
npm ci        ✓
npm run build ✓   4 pages, all static
npx next start ✓  HTTP 200
```

**The repository is portable by construction.** It depends on nothing of ours:
no bitbaum path, no Caddy assumption, no shared package, no secret. The only
env var is a public URL. That is not luck — it is because deploy logic lives in
`fleetcrown`, not in the app repo, so an app repo is an ordinary Next app.

## The procedure

1. **Bring dependencies current** and re-run the clean-room test above.
2. **Rewrite any generated content** that is not the client's own.
3. **Transfer the repository:**
   ```bash
   gh api -X POST repos/bitbaum/camille-boulangerie/transfer \
     -f new_owner='<their-github-username-or-org>'
   ```
   They accept, and it is theirs — history, issues and all.
4. **Delete `.github/workflows/deploy.yml`** if present. It is the only file
   that points at our infrastructure; without it the repo is a plain Next app.
5. **They deploy.** For most owners "their server" is not a server:
   - **Vercel / Cloudflare Pages** — import the repo, done. Free tier covers a
     bakery. This is the realistic answer for almost every client.
   - **Their own VPS** — only where they have IT.
6. **DNS.** While on `camille.orangecat.ch` we hold the record; on their own
   domain they point it wherever they deploy. Nothing in the repo changes.
7. **Remove from our side:** delete the `apps.conf` line, `sync-infra.sh` to
   drop the unit and Caddy block, archive the local checkout.

## What they are giving up

The FleetCrown widget — the reason changes are a button rather than an email.
Transferring the code and keeping the service is the normal case, and worth
saying out loud when offering the exit: **the exit is what makes the service
trustworthy, not what makes it optional.**

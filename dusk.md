---
dusk: v1alpha1
namespace: stout
kind: repository
name: fishid
title: FishID
attributes:
  language: typescript
  visibility: public
  deploys_to: cloudflare-workers
  url: https://fishid.theoutdoorprogrammer.com
---

A Duolingo-style trainer for identifying Ohio and Lake Erie fish, in the browser and installable as a PWA.
Next.js 16 App Router with React 19, Tailwind 4 and Zustand.
There is no backend and no account, so everything the player earns (hearts, XP, streaks, per-lesson stars) lives in `localStorage`, and clearing site data is a full reset.

Content is the bulk of the repository.
Each of the 128 species is its own module at `src/fish/<id>/index.ts`, exporting a `Fish` alongside the `featureOptions` and `trueFalseQuestions` the quiz engine draws from, with photos under `public/img/fish/<id>/`.
`src/fish/index.ts` re-exports every species by hand, so adding one means adding a directory and a line there.
`CONTENT_QUALITY_PLAN.md` is the style guide for the entries themselves: habitat as short reusable tokens rather than sentences, roughly four true/false statements per fish, and authoritative references (ODNR, USGS, USFWS) over Wikipedia.

## Gotchas

**The vanilla-JS app this grew out of is still sitting in the repository root.** `index.html`, `js/app.js`, `js/data.js`, `js/svg.js`, `css/styles.css` and `generate_data.py` are the pre-migration application, superseded by `src/`. `scripts/migrate-fish-data.ts` was the one-way conversion of `js/data.js` into `src/fish/*`, and `generate_data.py` writes to a hard-coded absolute path that no longer exists on any machine. Editing any of them changes nothing that ships.

**The Docker deployment described in `README.md` does not work as written.** `next.config.ts` hard-codes `output: 'export'` and the Dockerfile needs `standalone`. What actually deploys is the static export in `out/`, served as Cloudflare Workers assets per `wrangler.jsonc`. `MIGRATION_STATUS.md` is a snapshot of the February 2026 migration, not a description of the current deployment, and the GitHub Pages workflow it predates has since been deleted.

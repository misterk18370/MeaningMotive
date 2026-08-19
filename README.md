# The Meaning Motive — themeaningmotive.org

The public source of themeaningmotive.org: the website of the Meaning Motive research
programme. Built in the open; the site never gets ahead of the deposits.

**Published record:** paper doi:10.5281/zenodo.21386302 · dataset (MMBP-1)
doi:10.5281/zenodo.21348087 · founding statement doi:10.5281/zenodo.21303219

Correspondence: info@themeaningmotive.org

## Architecture (August 2026 rebuild)

Six doors, one room. Every page lives behind one of six relationships to the work:
**The Idea** (understand it) · **Research** (try to break it) · **Evidence** (check what
happened) · **State of the Bridge** (watch what changes) · **Tools** (use it) ·
**Commons** (join it). The complete static listing is at `/sitemap/`.

- `nav.js` is the single source of truth for the masthead, header and footer, injected on
  every page. Structural navigation changes are a one-file edit.
- `style.css` is the base design system; the dated v2 extension block (tags, six-door nav,
  footer sitemap) sits beneath the original tokens, which are unchanged.
- Every page follows one template: a one-line `<noscript>` fallback pointing at `/sitemap/`,
  `<main id="main">` for the skip link, content, then the `nav.js` script tag.
- Status tags come in two families plus one badge, defined in `TERMS_REGISTER.md`. The
  hatched UNDER CONSTRUCTION badge is load-bearing: unbuilt artefacts are tagged, never
  dead-linked.

## House rules

1. **URLs are permanent.** Existing pages keep their paths forever; new content gets new
   paths. Anchors on `/research/programme/` never redirect and never empty.
2. **The record is protected.** No evidence, result, correction or substantive public
   commitment is silently removed. Editorial copy may improve; the record may not vanish.
   Corrections are content: dated, owned, public, never deleted (`/evidence/#corrections`).
3. **The site never gets ahead of the deposits.** Frozen numbers are used exactly as
   deposited; the claim vocabulary and the canonical public lines live in
   `LANGUAGE_REGISTER.md`; technical terms and their boundary disciplines live in
   `TERMS_REGISTER.md`.
4. **Folder rule.** New folders are created via GitHub's "Create new file" path-typing
   method (`folder/index.html`), never by uploading loose files.
5. **Licensing is split.** The MM-1 Clause alone is CC0. Site text and figures are
   © 2026 Keiron Allen, CC BY 4.0. The paper and dataset carry the licences stated on their
   Zenodo records. Details at `/licence/`.
6. **Sponsorship firewall.** Karl Finance LLP sponsors the programme and buys no influence
   over scores, scenarios, results or wording. Governance at `/colophon/`.

## Deploying

GitHub Pages serves `main` at https://themeaningmotive.org (CNAME in repo root,
HTTPS enforced). Work lands on a feature branch and merges to `main` only after the
Definition of Done passes: all URLs resolve, no dead links, frozen numbers exact, tags
readable without colour, reduced-motion honoured, noscript fallback present, and the
claim boundary intact on every page that carries a number.

No tracking, no cookies, nothing recorded.

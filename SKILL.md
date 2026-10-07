---
name: engage-assets
description: Build Engage and Appi assets from this repo. Use for playbooks, guides, explainers, one-pagers and any printed or PDF document (Appi document mode), for web and campaign assets that match the website (Appi website mode), and for Engage CMS or Engage Mobile mock-ups.
---

# Engage assets

How to produce Engage assets from this repo. Read `MESSAGING.md` before writing any copy.

## 1. Choose the system

| You are making | Use | Start from |
| --- | --- | --- |
| A playbook, guide, explainer, one-pager or overview; anything printed or shared as a PDF | Appi **document mode** | `engage-appi-design-system/templates/playbook/playbook.html` |
| A web page, landing page, campaign or social asset that should look like the website | Appi **website mode** | `engage-appi-design-system/styles.css` and its `readme.md` |
| CMS or admin-console screens | Engage CMS | `engage-cms-design-system/README.md` |
| Mobile app screens | Engage Mobile | `engage-mobile-design-system/README.md` |

- Not sure between the two Appi modes? If someone reads it page by page, use document mode.
- Load one design system stylesheet per page. Never mix website-mode panels or serif words into a document.
- Logos: `engage-appi-design-system/assets/logo-charcoal.svg` in documents; `engage-logo/` everywhere else.

## 2. Document mode: how to start

1. Look at `engage-appi-design-system/templates/playbook/previews/sheet.png` (and `p-01.png` to `p-09.png`). That is the target look.
2. Copy `templates/playbook/` to a new folder at the same depth, for example `templates/<your-doc>/`, so the relative links to `styles.css`, `documents/` and `assets/` keep working. New template folders are git-ignored; force-add (`git add -f`) only public, placeholder-only templates. Do not commit finished documents that hold non-public content.
3. Keep the page types. Delete pages you do not need; duplicate a page type when you need more of it. Do not invent new page furniture.
4. Replace every placeholder. Each one says what goes there ("A section headline that states one benefit").
5. Keep `<body class="doc">` for US Letter. For A4 use `<body class="doc" data-size="a4">`.
6. Keep the inline icon sprite. A new icon goes into the sprite and into `documents/icons.svg`, identical in both.
7. Render and check (section 7).

| Page | Type | What it holds |
| --- | --- | --- |
| 01 | Cover | Logo, edition label, type pill, centred title and subtitle, scaled ask-and-answer mock-up, suggestion chips, line field |
| 02 | Intro | Eyebrow, h2, lead, two columns under a hairline, product window bleeding off the bottom (no footer) |
| 03 | How it works | Numbered 2x2 steps, window bleeding off the bottom with a callout (no footer) |
| 04 | Before and after | Drawn flow diagram (routes in, hub, outcomes out), closing note |
| 05 | Icon list | Five rows split by hairlines, small icon tiles, tag pills |
| 06 | Feature overview | One feature row and a tall grey stage with two overlapping windows, a callout and a dashed leader |
| 07 | Feature rows | Split row (text left, stage right), then a feature row with a mock-up on a grey stage |
| 08 | Summary | One mock-up on a grey stage, Today versus With the product comparison, closing note |
| 09 | Closing | Centred statement, subtitle, ink pill call to action, faded logo |

## 3. Document mode: hard rules

**Page**
- White pages (`--doc-bg`, which is `--paper-0`). Never warm paper (`--paper-50`) behind a document.
- US Letter by default; A4 for UK or metric readers.
- Grid from `doc.css`: 0.8in side margins, running header at 0.55in, content from 1.25in, footer at 0.5in. Use the `--doc-*` tokens; do not set your own page padding.
- Inner pages carry the running header (logo, document title) and a footer with a two-digit folio (leave `<span class="folio"></span>` empty). The cover and closing pages have neither. A page whose window bleeds off the bottom (`.doc-bleed`, pages 02 and 03) has the header but no footer; the folio count still includes it, and the window's content fades out over the last 0.6in.
- One idea per page: eyebrow, h2, a one-sentence lead, one visual. The intro page may run its lead to a short paragraph.

**Type**
- Use the classes, not new sizes: cover 68px, h2 42px, closing 40px, h3 15 to 17px, lead 17 to 19px, body 14px, small 12px, eyebrow 12px uppercase, header and footer 10.5px.
- Headings are plain Inter Display in sentence case. No serif-italic accent word in any heading.
- Numbers are set open on the page at text size (step numerals, a figure in a sentence). Never box them in stat cards, and nothing is larger than the h2 except the cover title.

**Visuals**
- The product is the main visual: build UI mock-ups in HTML with `ui-mock.css` and fictional content. Never paste screenshots.
- Frame mock-ups on a grey stage (`.doc-stage`) or let a window bleed off the page (`.doc-bleed`); shrink them with `.ui-scale`. Size a mock-up to fill about 70 to 90% of its stage, so it reads as a product view and not a thumbnail. For a hero visual, layer two windows on one stage (`.doc-layer`, `.doc-leader`), as on page 06.
- No cards around text. Body copy sits on white, split by hairlines (`.doc-cols`, `.doc-iconlist`, `.doc-compare`).
- Diagrams are drawn (SVG lines, outline pills, a hub tile, as in `.doc-flow`), not built from boxed card grids.
- Periwinkle for small accents only: tag pills, step numerals, 32px icon tiles, flow lines, callout dots. No large periwinkle panels, no blobs.
- Icons only from `documents/icons.svg`. No emoji.
- Radii 9 to 22px (the `--doc-radius-*` tokens). Reuse design-system tokens; any new value goes in a `--doc-*` or `--ui-*` custom property, not raw hex in a rule.
- Plain HTML and CSS with relative paths. It must render from `file://` with no network and no JavaScript.

## 4. Website mode in brief

Warm paper, pale periwinkle panels, cards, and one serif-italic emphasis word per headline (`.display em`). The full rules are in `engage-appi-design-system/readme.md`. Use them only for website and campaign assets.

## 5. Words (from MESSAGING.md)

- UK English. No em dashes anywhere: copy, headings, alt text, comments. Use a full stop, comma, colon or brackets.
- Sentence case; uppercase only for the small eyebrow label.
- None of the words or phrases in the MESSAGING.md avoid table.
- Do not name Appi in a cover or hero headline, its subheading or the eyebrow above them.
- Do not write new claims or positioning lines. Approved wording comes from Engage's internal messaging framework, and every number needs an approved source.

## 6. Public safety (this repo is public)

- No customer, partner or competitor names. Engage is the only organisation named.
- No real people: fictional first names ("Sam"), initials if a face is needed, never photos.
- No screenshots of the real product and no raster images in templates. `previews/` holds renders of the template only.
- No unreleased features. Mock up only public patterns: ask a question, an answer with a source chip, suggestion chips, a list of answers or documents, a document card. Anything outside that list needs sign-off that the feature is released before it appears in a public template. Tag pills say "Feature tag" until a released name is approved.
- Placeholder copy doubles as guidance: say what goes there, not what the product claims.

## 7. Render and check

```sh
node scripts/render-previews.mjs                       # the playbook template, Letter
node scripts/render-previews.mjs --template engage-appi-design-system/templates/<your-doc>/<file>.html
node scripts/render-previews.mjs --size a4 --out /path/to/a4-previews
```

- Needs Node 18 or later and Playwright with Chromium. One-time setup in a clean clone: `npm install --no-save playwright && npx playwright install chromium` (`node_modules/` is git-ignored). If Playwright is installed elsewhere, set `PLAYWRIGHT_MODULE` to its `index.mjs`.
- Paths given to `--template` and `--out` are relative to the current directory. `--help` prints the options; an unknown option stops the script before it overwrites anything.
- Writes `p-01.png` onwards, a PDF and `sheet.png` to the template's `previews/` folder (or `--out`).
- Checks Letter and A4. Exits with code 1 if anything sits outside its page, is clipped by a stage or window, or runs into the footer; or if a request fails, a font, image or icon is missing, the sprite drifts from `icons.svg`, or an em dash appears. Content inside a bleed frame (`data-bleed`) may run off the page bottom. Pure decoration can opt out of the fit check with `data-fit-ignore`.

## Before you export

- [ ] The render script reports no problems at Letter and A4
- [ ] Folios run in order; the header title matches the document
- [ ] White pages, plain sans headings, no cards around text, no boxed numbers
- [ ] The MESSAGING.md checklist passes
- [ ] No customer names, real people, photos, screenshots or unreleased features

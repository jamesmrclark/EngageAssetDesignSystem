# Engage / Appi: Design System

A brand + UI design system for **Engage** and its AI assistant **Appi**. It has two modes: **website mode**, sampled
from the live site, and **document mode**, for **polished, client-facing documents** (playbooks, guides, explainers,
one-pagers) that read as warm, confident, and editorial, and export cleanly to print / PDF.

> **Tagline vibe:** "Simple enough for the frontline." Answers in seconds, not searches in minutes.

---

## Two modes

Pick one mode per asset and do not mix them.

| | Website mode | Document mode |
| --- | --- | --- |
| **Use it for** | Web pages, landing pages, campaign and social assets: anything that should look like the live website | Playbooks, guides, explainers, one-pagers: anything printed or shared as a PDF |
| **Page** | Flat warm paper (`--paper-50`) | White pages (`--paper-0`), US Letter or A4, fixed print grid |
| **Headings** | Inter sans with one serif-italic emphasis word | Plain Inter Display sans, no serif accent |
| **Main visual** | Pale periwinkle panels, feature cards, blobs, the sparkle rosette | Product UI mock-ups built in HTML, on a grey stage or bleeding off the page |
| **Periwinkle** | Panels and accents | Small accents only: tag pills, step numerals, icon tiles, diagram lines |
| **Start from** | `styles.css` and the rules in this guide | `templates/playbook/playbook.html`, which links `documents/doc.css` and `documents/ui-mock.css` after `styles.css` |

Voice, casing, fonts, ink and the colour tokens apply to both modes. The visual rules further down were sampled
from the live website and describe **website mode** unless a line says otherwise. Document-mode rules are in
`../SKILL.md` (repo root) and in the header comments of `documents/doc.css` and `documents/ui-mock.css`; rendered
pages are in `templates/playbook/previews/`.

---

## Sources provided

- `uploads/engagelogo.svg`: the Engage wordmark + chat-bubble mark (ink `#202020`). *This is the only real brand mark provided; it is copied to `assets/brand/engage-logo.svg`. No separate Appi logo was supplied.*
- ~37 product SVGs (`uploads/svg-image-*.svg`): the live product/marketing icon set: UI glyphs, pastel "feature tile" icons, organic blob shapes, trust badges, and social marks. All copied and renamed semantically into `assets/`.
- Full **Inter** family (18 / 24 / 28 pt optical sizes, all weights + italics) in `uploads/*.ttf`.

- **Six screenshots of the live Engage site** (`uploads/Screenshot*.png`): hero, benefit cards, the "Five outcomes" pastel bento, the Products mega-menu, and the capabilities section. All colour values, the serif-italic treatment, panel tints, and website-mode layouts below are sampled directly from these.

*The uploads and the `assets/brand/`, `assets/icons/` and `assets/feature-icons/` folders named in this guide are in the Claude Design project, not in this repo.*

**Not provided (assumptions / substitutions flagged below):**
- **The Appi mascot**, a small translucent-purple character, appears on the site (top-right of each screen) but no isolated asset was supplied. The **sparkle rosette** (`assets/brand/sparkle-rosette.svg`) stands in as the Appi mark. **→ Send the mascot artwork to use it on covers/openers.**

---

## Content fundamentals: how Engage / Appi writes

- **Voice:** warm, human, confident, plain-spoken. Benefit-led and active. "Simple enough for the frontline." No jargon, no acronym soup.
- **Person:** address the reader as **you**; the product/company is **we**. Speak *to* the frontline worker and the comms lead, not *about* them.
- **Casing:** **sentence case everywhere**: headlines, buttons, nav, card titles. The *only* uppercase is the small letter-spaced **eyebrow label** (e.g. `WHY ENGAGE`, `FIVE OUTCOMES`).
- **The signature line move (website mode):** a plain Inter sans headline with the **key word(s) set in a high-contrast serif italic**, set in **ink** (the same colour as the headline; it's a *type* contrast, not a colour one). Straight from the site: "Five *outcomes* a thriving community needs", "Reach every person at the right *moment*", "The capabilities behind each *outcome*", "*Appi AI*: autonomous intelligence…". In website mode, use it on the hero or cover and every section header; once per headline. Document mode does not use it: document headings are plain sans.
- **Periwinkle is for accents, not the italic:** links, icons, key UI elements, section-opener panels and blobs are periwinkle/indigo. The serif emphasis stays ink.
- **Length & rhythm:** short, declarative sentences. One idea per section. Lots of white space around a single clear statement.
- **Numbers:** used sparingly and only when they earn their place (a real outcome, a real stat). Avoid decorative stat-slop.
- **Emoji:** **not used.** The sparkle motif (✧) is a graphic mark, not an inline emoji.
- **Example copy:** eyebrow "COMMUNICATIONS AI" · headline "Reach every person at the right *moment*" (moment in serif italic ink) · lead "Personalised messages, in the right language, on the right channel, at the moment each person will actually act on them."

---

## Visual foundations

**Palette (sampled from the live site).** In website mode, warm off-white **paper** (`--paper-50 #faf7f1`) and near-black **ink**
(`--ink-900 #202020`) are the base; document pages are white (`--paper-0`) with the same ink. **Periwinkle/indigo is Appi's signature**: brand periwinkle
`--periwinkle-400 #9191ff` (icons, blobs), soft-lavender section panels `--periwinkle-100 #ececff`, and
links/key accents `--periwinkle-600 #4e52cc`. A restrained set of **soft pastel tints** supports cards and
callouts, each a *pale fill + saturated icon*, all sampled from the site: sky (`#cefcff / #3bb9fe`, text `#0780b8`),
mint (`#d3f5e2 / #3fc98a`, text `#098a5e`), amber (`#fff6d3 / #f7ba21`, text `#b27001`), rose
(`#fce9f0 / #e0348a`, text `#be2877`). Colour is used **with restraint against lots of white space**: no coral/orange as a primary.

**Typography.** Headlines and body are **Inter**. The website-mode brand device is the **sans + serif
bold-italic** contrast: the emphasis word set in **Georgia bold italic** (a system serif, no
webfont) in **ink**. Document-mode headings are plain Inter Display with no serif word. Sentence case throughout; eyebrows are the sole uppercase, small and
letter-spaced in muted grey.

**Shape language.** Fully-rounded **pill** buttons (black = primary, light/outline = secondary).
Generously **rounded cards** (16–24px). In website mode, large soft **panels** for hero/section openers, often in
pale periwinkle (`--radius-2xl 32px`, `--radius-3xl 44px`), and optional organic **blob** shapes in
vivid sky/periwinkle as *sparing* decoration (`assets/brand/blob-*.svg`). Document mode has no opener panels,
no blobs and no cards around body text; its radii run from 9px (icon tiles) through 18px (stages and windows) to 22px (the hub tile in a flow diagram).

**Backgrounds.** Website mode: flat warm paper, **no gradients, no textures, no full-bleed photography** by
default. Depth comes from soft shadows and pale-tint panels, not imagery. Blobs and the sparkle
rosette are the only decorative graphics, used once or twice per page max. Document mode: white pages, still no
gradients, textures or photography. Text sits on white, divided by hairlines; the visuals are HTML product
mock-ups on a grey stage (`--doc-stage`), drawn flow diagrams and the cover line field.

**Elevation.** Soft, low, warm-tinted shadows (`--shadow-sm/md/lg`; alpha off `#202020`). Cards
rest on a hairline (`--border-hairline #e4e1da`) + `--shadow-sm`, and lift to `--shadow-md` on
hover. A periwinkle-tinted lift (`--shadow-accent`) is reserved for the primary hero card.

**Motion.** Calm and short. Fades + small ease-out translations (`--ease-out`, 120–360ms). No
bounces or infinite loops on content. Respects `prefers-reduced-motion`.

**Interaction states.** Hover: primary button → pure black; secondary → border darkens + faint
tint fill; links → indigo + underline. Press: subtle `scale(0.98)`, no colour flip. Focus: 2px
periwinkle ring (`--focus-ring`) with offset.

**Borders & radii.** Hairline 1px warm-grey borders; radii from `--radius-sm 10px` (inputs) →
`--radius-xl 24px` (containers) → `--radius-pill` (buttons/chips). Cards = white fill + hairline +
soft shadow + 16–20px radius.

**Layout.** Spacious and editorial: one idea per section. Website mode uses comfortable fluid margins
(`--page-margin`) and caps the prose measure at `--container-prose 68ch`. Document mode uses the fixed print grid
in `documents/doc.css` (0.8in side margins, running header at 0.55in, content from 1.25in, footer at 0.5in).

---

## Iconography

- **Primary set (website mode):** the brand's own SVGs, copied into `assets/` in the Claude Design project (not in this repo). Three flavours:
  - **UI glyphs** (`assets/icons/`): line icons at ~1.6–2px stroke, ink-coloured: `arrow-right`, `arrow-right-bold`, `chevron-down`, `triangle-left`, `plus`, `minus`, `login`, `chart-up`, `refresh`, `article`, `handshake`, `chat-bubble`, `book`, `heart`, `workflow`, `users`, `gauge`, plus social `linkedin`, `x`, `facebook`.
  - **Feature tiles** (`assets/feature-icons/`): rounded-square (`rx≈4/32`) tiles with a **pale tint fill and a saturated/ink glyph**: `paintbrush`, `community`, `calendar-heart`, `sparkle-tile`, `sparkle-badge` (sky `#cefcff`), `app-tile` (amber `#fff6d3`). Use these for feature grids and callouts.
  - **Brand graphics** (`assets/brand/`): organic `blob-sky`, `blob-sky-2`, `blob-periwinkle`; the `sparkle-rosette` mark; trust badges `badge-gdpr`, `badge-iso-amber`, `badge-iso-periwinkle`.
- **Sparkle motif ✧**: Appi's signature mark, present inside `sparkle-tile` / `sparkle-badge` / `sparkle-rosette`. Use sparingly beside the Appi name and as a section marker.
- **Emoji:** never used. **Unicode-as-icon:** avoided except the ✧ sparkle where a brand asset isn't practical.
- **Website mode: no hand-drawn SVGs.** Icons are the real brand assets listed above. If a needed glyph is missing, substitute the closest match from a line-icon set at matching stroke weight and flag it.
- **Document mode:** use the 16px line icons in `documents/icons.svg` (stroke 1.5, `currentColor`), inlined as a sprite in the template so they work from `file://`. Diagrams, callouts and the cover line field are drawn in SVG and CSS, as in `templates/playbook/playbook.html`.

---

## Index / manifest

**In this repo**
- `styles.css`: global entry (import this). `tokens/`: `colors`, `typography`, `spacing`, `radius`, `shadow`, `fonts`, `base`.
- `assets/fonts/`: Inter and Inter Display, with `LICENSE-Inter.txt`.
- `assets/logo-charcoal.svg`: the charcoal Engage lockup (the same artwork as the `Logo` component) as a plain SVG, for documents built without React.
- `documents/`: document mode, loaded after `styles.css`.
  - `doc.css`: page box (Letter, or A4 via `data-size="a4"`), print grid, type scale and page patterns; new values in `--doc-*` tokens.
  - `ui-mock.css`: kit for fictional product UI mock-ups (window, question, answer with source chip, document card, input, suggestion chips, answer and document lists); new values in `--ui-*` tokens. Its header lists the screens never to mock up.
  - `icons.svg`: sprite of 16px line icons.
- `templates/playbook/`: `playbook.html`, a nine-page document-mode template with placeholder copy (cover, intro, steps, flow diagram, icon list, two feature-row pages, summary, closing), and `previews/` (one PNG per page, `sheet.png`, `playbook.pdf`) rendered by `../scripts/render-previews.mjs`.
- `_ds_bundle.js`: the compiled components: **Button**, **Pill** (actions); **Eyebrow**, **DisplayHeading**, **Lead** (typography); **Card**, **FeatureCard**, **FeatureIcon**, **Callout** (content); **Logo**, **SparkleMark**, **Divider** (brand). They were built for website mode (`DisplayHeading` sets its emphasis word in the serif).
- `_ds_manifest.json`, `_adherence.oxlintrc.json`: Claude Design export metadata and lint rules. The manifest's paths point at files in the Claude Design project (listed below). Its one template entry, the website-mode deck, has been removed so that it no longer offers that deck as the starting point for documents.
- Agent instructions: `../SKILL.md` at the repo root.

**In the Claude Design project, not in this repo**
- `guidelines/`: foundation specimen cards (Design System tab): Colors, Type, Spacing, Brand.
- `assets/brand/`, `assets/icons/`, `assets/feature-icons/`: the brand SVGs described under Iconography. Documents use `documents/icons.svg` and `assets/logo-charcoal.svg` instead.
- `components/`: component source files. The compiled versions are in `_ds_bundle.js`.
- `ui_kits/website/`: Engage/Appi marketing site recreation (hero, features, Appi section, footer), in website mode.
- `templates/playbook-deck/`: a deck built as a Design Component (cover, section opener, feature grid, big quote, close), in website mode. For documents, use `templates/playbook/` instead.
- A `SKILL.md` inside this folder: replaced by `../SKILL.md` at the repo root.

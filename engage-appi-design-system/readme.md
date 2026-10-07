# Engage / Appi: Design System

A brand + UI design system for **Engage** and its AI assistant **Appi**. This system is tuned for **polished, client-facing
documents** (playbooks, guides, decks, one-pagers) that read as warm, confident, and
editorial, and export cleanly to print / PDF.

> **Tagline vibe:** "Simple enough for the frontline." Answers in seconds, not searches in minutes.

---

## Sources provided

- `uploads/engagelogo.svg`: the Engage wordmark + chat-bubble mark (ink `#202020`). *This is the only real brand mark provided; it is copied to `assets/brand/engage-logo.svg`. No separate Appi logo was supplied.*
- ~37 product SVGs (`uploads/svg-image-*.svg`): the live product/marketing icon set: UI glyphs, pastel "feature tile" icons, organic blob shapes, trust badges, and social marks. All copied and renamed semantically into `assets/`.
- Full **Inter** family (18 / 24 / 28 pt optical sizes, all weights + italics) in `uploads/*.ttf`.

- **Six screenshots of the live Engage site** (`uploads/Screenshot*.png`): hero, benefit cards, the "Five outcomes" pastel bento, the Products mega-menu, and the capabilities section. All colour values, the serif-italic treatment, panel tints, and layouts below are sampled directly from these.

**Not provided (assumptions / substitutions flagged below):**
- **The Appi mascot**, a small translucent-purple character, appears on the site (top-right of each screen) but no isolated asset was supplied. The **sparkle rosette** (`assets/brand/sparkle-rosette.svg`) stands in as the Appi mark. **→ Send the mascot artwork to use it on covers/openers.**

---

## Content fundamentals: how Engage / Appi writes

- **Voice:** warm, human, confident, plain-spoken. Benefit-led and active. "Simple enough for the frontline." No jargon, no acronym soup.
- **Person:** address the reader as **you**; the product/company is **we**. Speak *to* the frontline worker and the comms lead, not *about* them.
- **Casing:** **sentence case everywhere**: headlines, buttons, nav, card titles. The *only* uppercase is the small letter-spaced **eyebrow label** (e.g. `WHY ENGAGE`, `FIVE OUTCOMES`).
- **The signature line move:** a plain Inter sans headline with the **key word(s) set in a high-contrast serif italic**, set in **ink** (the same colour as the headline; it's a *type* contrast, not a colour one). Straight from the site: "Five *outcomes* a thriving community needs", "Reach every person at the right *moment*", "The capabilities behind each *outcome*", "*Appi AI*: autonomous intelligence…". Use it on the cover and every section header; once per headline.
- **Periwinkle is for accents, not the italic:** links, icons, key UI elements, section-opener panels and blobs are periwinkle/indigo. The serif emphasis stays ink.
- **Length & rhythm:** short, declarative sentences. One idea per section. Lots of white space around a single clear statement.
- **Numbers:** used sparingly and only when they earn their place (a real outcome, a real stat). Avoid decorative stat-slop.
- **Emoji:** **not used.** The sparkle motif (✧) is a graphic mark, not an inline emoji.
- **Example copy:** eyebrow "COMMUNICATIONS AI" · headline "Reach every person at the right *moment*" (moment in serif italic ink) · lead "Personalised messages, in the right language, on the right channel, at the moment each person will actually act on them."

---

## Visual foundations

**Palette (sampled from the live site).** Warm off-white **paper** (`--paper-50 #faf7f1`) and near-black **ink**
(`--ink-900 #202020`) are the base. **Periwinkle/indigo is Appi's signature**: brand periwinkle
`--periwinkle-400 #9191ff` (icons, blobs), soft-lavender section panels `--periwinkle-100 #ececff`, and
links/key accents `--periwinkle-600 #4e52cc`. A restrained set of **soft pastel tints** supports cards and
callouts, each a *pale fill + saturated icon*, all sampled from the site: sky (`#cefcff / #3bb9fe`, text `#0780b8`),
mint (`#d3f5e2 / #3fc98a`, text `#098a5e`), amber (`#fff6d3 / #f7ba21`, text `#b27001`), rose
(`#fce9f0 / #e0348a`, text `#be2877`). Colour is used **with restraint against lots of white space**: no coral/orange as a primary.

**Typography.** Headlines and body are **Inter**. The brand device is the **sans + serif
bold-italic** contrast: the emphasis word set in **Georgia bold italic** (a system serif, no
webfont) in **ink**. Sentence case throughout; eyebrows are the sole uppercase, small and
letter-spaced in muted grey.

**Shape language.** Fully-rounded **pill** buttons (black = primary, light/outline = secondary).
Generously **rounded cards** (16–24px). Large soft **panels** for hero/section openers, often in
pale periwinkle (`--radius-2xl 32px`, `--radius-3xl 44px`). Optional organic **blob** shapes in
vivid sky/periwinkle as *sparing* decoration (`assets/brand/blob-*.svg`).

**Backgrounds.** Flat warm paper: **no gradients, no textures, no full-bleed photography** by
default. Depth comes from soft shadows and pale-tint panels, not imagery. Blobs and the sparkle
rosette are the only decorative graphics, used once or twice per page max.

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

**Layout.** Spacious and editorial: one idea per section, comfortable margins
(`--page-margin`), calm page rhythm suited to PDF. Prose measure capped at `--container-prose 68ch`.

---

## Iconography

- **Primary set:** the brand's own SVGs, copied into `assets/`. Three flavours:
  - **UI glyphs** (`assets/icons/`): line icons at ~1.6–2px stroke, ink-coloured: `arrow-right`, `arrow-right-bold`, `chevron-down`, `triangle-left`, `plus`, `minus`, `login`, `chart-up`, `refresh`, `article`, `handshake`, `chat-bubble`, `book`, `heart`, `workflow`, `users`, `gauge`, plus social `linkedin`, `x`, `facebook`.
  - **Feature tiles** (`assets/feature-icons/`): rounded-square (`rx≈4/32`) tiles with a **pale tint fill and a saturated/ink glyph**: `paintbrush`, `community`, `calendar-heart`, `sparkle-tile`, `sparkle-badge` (sky `#cefcff`), `app-tile` (amber `#fff6d3`). Use these for feature grids and callouts.
  - **Brand graphics** (`assets/brand/`): organic `blob-sky`, `blob-sky-2`, `blob-periwinkle`; the `sparkle-rosette` mark; trust badges `badge-gdpr`, `badge-iso-amber`, `badge-iso-periwinkle`.
- **Sparkle motif ✧**: Appi's signature mark, present inside `sparkle-tile` / `sparkle-badge` / `sparkle-rosette`. Use sparingly beside the Appi name and as a section marker.
- **Emoji:** never used. **Unicode-as-icon:** avoided except the ✧ sparkle where a brand asset isn't practical.
- **No hand-drawn SVGs** are authored in this system: all icons are real brand assets copied in. If a needed glyph is missing, substitute the closest match from a line-icon set at matching stroke weight and flag it.

---

## Index / manifest

**Foundations (root)**
- `styles.css`: global entry (import this). `tokens/`: `colors`, `typography`, `spacing`, `radius`, `shadow`, `fonts`, `base`.
- `guidelines/`: foundation specimen cards (Design System tab): Colors, Type, Spacing, Brand.

**Assets**: `assets/brand/`, `assets/icons/`, `assets/feature-icons/`, `assets/fonts/`.

**Components**: `components/` (cards tagged `group="Components"`). Full inventory:
- `actions/`: **Button**, **Pill**
- `typography/`: **Eyebrow**, **DisplayHeading**, **Lead**
- `content/`: **Card**, **FeatureCard**, **FeatureIcon**, **Callout**
- `brand/`: **Logo**, **SparkleMark**, **Divider**

**UI kits**: `ui_kits/website/`, Engage/Appi marketing site recreation (hero, features, Appi section, footer).

**Templates**: `templates/playbook-deck/`, an editorial client-facing deck (cover, section opener, feature grid, big quote, close) built as a Design Component. Copy the folder and edit its `.dc.html`.

**SKILL.md**: Agent-Skill wrapper so this system can be used inside Claude Code.

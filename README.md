# Engage Asset Design System

Design systems and brand assets for **Engage** and its AI assistant **Appi**, exported from Claude Design.

## What is in this repo

| Folder | What it is | Use it for |
| --- | --- | --- |
| `engage-appi-design-system/` | Brand and document system: Inter, warm paper and ink, periwinkle accents, sans plus serif-italic headlines. Tokens, fonts, compiled components, lint rules. | Client-facing documents: playbooks, guides, decks, one-pagers |
| `engage-mobile-design-system/` | The Engage Mobile app's default look: Open Sans, greyscale chrome, tenant-skin tokens. Tokens, fonts, lint rules, guide. | Mobile mock-ups and anything that must match the app |
| `engage-cms-design-system/` | The Engage CMS admin: indigo and gold, Open Sans, motion utilities. Tokens, fonts, lint rules, guide. | CMS and admin-console screens |
| `engage-logo/` | The Engage logo as SVG, EPS and PNG, plus the icon alone. | Anywhere the logo is needed |
| `MESSAGING.md` | Language rules every asset follows: UK English, no em dashes, words to avoid. | Writing copy for any of the above |

Each design system folder has its own guide (`readme.md` or `README.md`) covering voice, colour, type, shape and motion.

## Engage / Appi: use the tokens

```html
<link rel="stylesheet" href="engage-appi-design-system/styles.css">

<span class="eyebrow">Communications AI</span>
<h1 class="display">Reach every person at the right <em>moment</em></h1>
<p class="lead">Personalised messages, in the right language, on the right channel.</p>
```

`.display em` gives the signature move: an Inter Display headline with one key word in Georgia bold italic, in ink.

### Core tokens

- **Base:** paper `--paper-50 #faf7f1`, ink `--ink-900 #202020`
- **Appi signature:** periwinkle `--periwinkle-400 #9191ff`, panels `--periwinkle-100 #ececff`, links `--periwinkle-600 #4e52cc`
- **Pastels (fill / accent / text):** sky `#cefcff / #3bb9fe / #0780b8`, mint `#d3f5e2 / #3fc98a / #098a5e`, amber `#fff6d3 / #f7ba21 / #b27001`, rose `#fce9f0 / #e0348a / #be2877`
- **Type:** `--font-sans` Inter, `--font-display` Inter Display, `--font-serif` Georgia (emphasis only)
- **Radius:** `--radius-sm 10px` to `--radius-xl 24px` to `--radius-pill 999px`
- **Spacing:** 4px base, `--space-1` (4px) to `--space-20` (144px)

### Components

Load React and ReactDOM, then the bundle. Components register on `window.EngageAppiDesignSystem_32c458`:

```html
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="engage-appi-design-system/_ds_bundle.js"></script>
<script>
  const { Button, Card, DisplayHeading } = window.EngageAppiDesignSystem_32c458;
</script>
```

| Group | Components |
| --- | --- |
| Actions | `Button`, `Pill` |
| Typography | `Eyebrow`, `DisplayHeading`, `Lead` |
| Content | `Card`, `FeatureCard`, `FeatureIcon`, `Callout` |
| Brand | `Logo`, `SparkleMark`, `Divider` |

## Engage Mobile and Engage CMS: use the tokens

Both are token systems with no component bundle. Link the stylesheet and use the CSS variables.

```html
<!-- Engage CMS: colour, type and motion tokens -->
<link rel="stylesheet" href="engage-cms-design-system/styles.css">

<!-- Engage Mobile: colour and type tokens -->
<link rel="stylesheet" href="engage-mobile-design-system/colors_and_type.css">
```

- **CMS:** brand indigo `#6B6BD1`, gold `#FFDE8E` for the active sidebar item, canvas `#F6F5F4`, text `#222`, 8px radius, one soft card shadow, 14px base size. Motion utilities `.motion-fade-in`, `.motion-fade-slide-in`, `.motion-spring-in` and `.motion-stagger`.
- **Mobile:** greyscale defaults that a tenant skin recolours through the `--skin-*` tokens. Light and dark values for every theme-aware token.

Load the stylesheet of **one** design system per page. A few variable names, such as `--font-sans`, `--text-muted` and the `--space-*` scale, exist in more than one system with different values.

## Messaging

See `MESSAGING.md` for the language rules every asset follows (UK English, no em dashes, words to avoid).
Approved wording lives in Engage's internal messaging framework and is not published in this repo.

## Not in this repo

Some of the source exports held material that is deliberately kept out of this public repo:
client playbook pages, screenshots and product images, the Engage Mobile sample screens, and the internal diagram style page.

The design system guides also list files that live in the Claude Design projects but were not part of the exports, such as component source files, specimen cards, brand SVGs, a website UI kit and a deck template.
The compiled Engage / Appi components are in `engage-appi-design-system/_ds_bundle.js`.

## Fonts

- **Inter and Inter Display** (`engage-appi-design-system/assets/fonts/`): © The Inter Project Authors, SIL Open Font License 1.1 (`LICENSE-Inter.txt`).
- **Open Sans** (`engage-mobile-design-system/fonts/` and `engage-cms-design-system/fonts/`): © The Open Sans Project Authors, SIL Open Font License 1.1 (`OFL.txt`). One older Mobile file is under the Apache License 2.0, see `engage-mobile-design-system/fonts/LICENSES.md`.

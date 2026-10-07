# Engage Asset Design System

Design systems and brand assets for **Engage** and its AI assistant **Appi**, exported from Claude Design.

## What is in this repo

| Folder | What it is | Use it for |
| --- | --- | --- |
| `engage-appi-design-system/` | Brand and document system with two modes. **Website mode:** Inter, warm paper and ink, periwinkle panels and accents, sans plus serif-italic headlines. **Document mode:** white print pages, plain sans headings, product UI mock-ups in HTML (`documents/`, `templates/playbook/`). Tokens, fonts, compiled components, lint rules. | Website mode: web and campaign assets. Document mode: playbooks, guides, explainers, one-pagers, anything printed or PDF |
| `engage-mobile-design-system/` | The Engage Mobile app's default look: Open Sans, greyscale chrome, tenant-skin tokens. Tokens, fonts, lint rules, guide. | Mobile mock-ups and anything that must match the app |
| `engage-cms-design-system/` | The Engage CMS admin: indigo and gold, Open Sans, motion utilities. Tokens, fonts, lint rules, guide. | CMS and admin-console screens |
| `engage-logo/` | The Engage logo as SVG, EPS and PNG, plus the icon alone. | Anywhere the logo is needed |
| `MESSAGING.md` | Language rules every asset follows: UK English, no em dashes, words to avoid. | Writing copy for any of the above |
| `SKILL.md` | Agent instructions: which system and mode to pick, document-mode rules, public-safety rules, how to render. | Anyone, person or agent, starting a new asset |
| `scripts/render-previews.mjs` | Renders a document-mode template to PNG previews, a PDF and a contact sheet, and checks that every page fits. | Checking a document before export |

Each design system folder has its own guide (`readme.md` or `README.md`) covering voice, colour, type, shape and motion.

## Engage / Appi: two modes

- **Document mode** is for playbooks, guides, explainers, one-pagers and anything printed or shared as a PDF: white pages, plain sans headings, product UI mock-ups built in HTML. Start from `engage-appi-design-system/templates/playbook/playbook.html` (previews in `templates/playbook/previews/`) and follow `SKILL.md`.
- **Website mode** is for web and campaign assets that should look like the live website: warm paper, periwinkle panels and the serif-italic headline word. Its rules are in `engage-appi-design-system/readme.md`.

### Document mode

```html
<link rel="stylesheet" href="../../styles.css">
<link rel="stylesheet" href="../../documents/doc.css">
<link rel="stylesheet" href="../../documents/ui-mock.css">

<body class="doc">                  <!-- US Letter; add data-size="a4" for A4 -->
  <section class="page">            <!-- one per printed page -->
    <header class="doc-header"><img class="doc-logo" src="../../assets/logo-charcoal.svg" alt="Engage"><span class="doc-header-title">Document title</span></header>
    <div class="doc-body">
      <span class="doc-eyebrow">Section label</span>
      <h2 class="doc-h2">A section headline that states one benefit</h2>
      <p class="doc-lead">One sentence that frames the visual below.</p>
    </div>
    <footer class="doc-footer"><span>Engage · Document title</span><span class="folio"></span></footer>
  </section>
</body>
```

The paths are relative to `engage-appi-design-system/templates/<name>/`. Copy the playbook template rather than starting from scratch; it holds the running header, footer and folio, the page patterns and the inline icon sprite. Render your copy with `node scripts/render-previews.mjs --template engage-appi-design-system/templates/<name>/<file>.html` (with no options it renders the playbook template itself). New template folders are git-ignored, so a document with non-public content is not committed by accident.

### Website mode

```html
<link rel="stylesheet" href="engage-appi-design-system/styles.css">

<span class="eyebrow">Communications AI</span>
<h1 class="display">Reach every person at the right <em>moment</em></h1>
<p class="lead">Personalised messages, in the right language, on the right channel.</p>
```

`.display em` gives the website-mode signature move: an Inter Display headline with one key word in Georgia bold italic, in ink. Do not use it in document mode, where headings are plain sans.

### Core tokens

- **Base:** paper `--paper-50 #faf7f1` (website mode; document pages are white, `--paper-0`), ink `--ink-900 #202020`
- **Appi signature:** periwinkle `--periwinkle-400 #9191ff`, panels `--periwinkle-100 #ececff`, links `--periwinkle-600 #4e52cc`
- **Pastels (fill / accent / text):** sky `#cefcff / #3bb9fe / #0780b8`, mint `#d3f5e2 / #3fc98a / #098a5e`, amber `#fff6d3 / #f7ba21 / #b27001`, rose `#fce9f0 / #e0348a / #be2877`
- **Type:** `--font-sans` Inter, `--font-display` Inter Display, `--font-serif` Georgia (emphasis only)
- **Radius:** `--radius-sm 10px` to `--radius-xl 24px` to `--radius-pill 999px`
- **Spacing:** 4px base, `--space-1` (4px) to `--space-20` (144px)

### Components

The components were built for website mode; document mode needs no JavaScript. Load React and ReactDOM, then the bundle. Components register on `window.EngageAppiDesignSystem_32c458`:

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
The document template in `engage-appi-design-system/templates/playbook/` reproduces the playbook layout with fictional placeholder copy, HTML mock-ups and drawn diagrams instead, so none of that material is needed to make a document.

The design system guides also list files that live in the Claude Design projects but were not part of the exports, such as component source files, specimen cards, brand SVGs, a website UI kit and a website-mode deck template. The Engage / Appi guide marks which of its files these are.
The compiled Engage / Appi components are in `engage-appi-design-system/_ds_bundle.js`.

## Fonts

- **Inter and Inter Display** (`engage-appi-design-system/assets/fonts/`): © The Inter Project Authors, SIL Open Font License 1.1 (`LICENSE-Inter.txt`).
- **Open Sans** (`engage-mobile-design-system/fonts/` and `engage-cms-design-system/fonts/`): © The Open Sans Project Authors, SIL Open Font License 1.1 (`OFL.txt`). One older Mobile file is under the Apache License 2.0, see `engage-mobile-design-system/fonts/LICENSES.md`.

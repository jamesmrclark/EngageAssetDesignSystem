# Engage Asset Design System

Brand and UI design system for **Engage** and its AI assistant **Appi**, exported from Claude Design.
Tuned for polished client-facing documents (playbooks, guides, decks, one-pagers) that print cleanly to PDF.

## Where things are

| Path | What it is |
| --- | --- |
| `appi-ai-playbook-cover/_ds/engage-appi-design-system-32c458dd-…/` | The design system: tokens, fonts, compiled components, manifest, lint rules |
| `…/readme.md` | Full brand guide: voice, palette, typography, shape, iconography |
| `…/styles.css` | Single entry point; imports every token file |
| `…/tokens/` | `colors`, `typography`, `spacing`, `radius`, `shadow`, `fonts`, `base` |
| `…/assets/fonts/` | Inter and Inter Display (`.ttf`), SIL Open Font License in `LICENSE-Inter.txt` |
| `…/_ds_bundle.js` | Compiled React components (needs `React` on `window`) |
| `…/_ds_manifest.json` | Component, token, card and template index |
| `…/_adherence.oxlintrc.json` | Lint rules: no raw hex, no raw px, design-system fonts only |

The folder layout matches the Claude Design export, so relative paths keep working and it can be re-imported.

## Use the tokens

```html
<link rel="stylesheet" href="appi-ai-playbook-cover/_ds/engage-appi-design-system-32c458dd-e32d-4217-b0fe-d9275b50e356/styles.css">

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
- **Radius:** `--radius-sm 10px` → `--radius-xl 24px` → `--radius-pill 999px`
- **Spacing:** 4px base, `--space-1` (4px) → `--space-20` (144px)

## Use the components

Load React and ReactDOM, then the bundle. Components register on `window.EngageAppiDesignSystem_32c458`:

```html
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="appi-ai-playbook-cover/_ds/engage-appi-design-system-32c458dd-e32d-4217-b0fe-d9275b50e356/_ds_bundle.js"></script>
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

## Not in this export

The design system's `readme.md` index lists files that live in the Claude Design project but were not part of this export:
the `.jsx` component sources, `guidelines/` specimen cards, `assets/brand|icons|feature-icons/` SVGs, `ui_kits/website/`, `templates/playbook-deck/` and `SKILL.md`.
The compiled versions of the components and website UI kit are in `_ds_bundle.js`.

## Fonts

Inter and Inter Display are © The Inter Project Authors, licensed under the SIL Open Font License 1.1 (see `LICENSE-Inter.txt` beside the fonts).

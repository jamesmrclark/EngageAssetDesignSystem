# Engage CMS: Design System

Engage CMS is the admin/management surface of the **Engage** platform. It's where programme owners (HR, Internal Comms, People Ops) configure communities, publish content pages, schedule notifications, build smart audience groups, and moderate user activity. Imagine the operations console for an internal social platform.

The product handles sensitive HR/engagement data, so the surface is calm, confident and uncluttered, closer to **Notion / Linear** than to classic enterprise admin. Density is moderate (workflows are data‑heavy, but whitespace is respected) and the brand intentionally avoids electric blues, vibrant purples, gradients, heavy shadows, and decorative dividers.

## Brand mark vs UI colour

The Engage mark uses a **dark navy** gradient (`#15385B → #00001A`), not the indigo brand colour. Treat the navy as a **mark-only** colour and the indigo `#6B6BD1` as the **UI** brand colour.

## Index: what's in this folder

```
README.md                  ← you are here
styles.css                 ← single entry point; imports the two sheets below
colors_and_type.css        ← CSS variables, @font-face rules + semantic tags
motion.css                 ← fade / slide / spring / stagger utility classes
fonts/                     ← Open Sans variable fonts (roman + italic), self-hosted
_adherence.oxlintrc.json   ← lint rules: no raw hex, no raw px, Open Sans only
```

This design system covers **one product**: the Engage CMS admin web app. It ships tokens only, with no component bundle.

---

## Content fundamentals: how copy is written

Tone is **calm, confident, helpful**. It speaks to a working admin who knows what they're doing: never condescending, never bureaucratic, almost never playful. Short sentences. Sentence case for in‑page labels and instructions; **Title Case for page headings and primary CTAs** ("Create Automation", "Community Groups", "Quick Create").

- **Voice & person**: Mostly neutral / instructional ("Manage and monitor automated tasks", "Create, customise and monitor your groups"). When it does address the user, it's second‑person warm‑but‑brief: "What would you like to work on?", "Welcome back!", "Let's get you started." It rarely uses "I" and never uses "we" in product chrome.
- **Spelling**: British English: `customise`, `personalisation`, `behaviour`. Keep this. American spellings feel off‑brand here.
- **Casing**:
  - Page headers / section titles → **Title Case** ("Community Groups", "Recent Changes", "Quick Create")
  - Buttons → **Title Case** for primary actions ("Create Page", "View All", "Apply Filters") but **single‑word lowercase** is fine for tertiary verbs ("apply", "select")
  - Labels above inputs → **Sentence case** ("Group Name", "Days after", "Notification title")
  - Helper / hint text → **Sentence case**, ends with a full stop
- **Errors & success**: Friendly, non‑blaming. The standard messages are, word for word:
  - Error: *"Oops! An error occurred. Please try again."*
  - Success: *"Action completed successfully."*
  - No results (title): *"No results found"*
  - No results (description): *"Oops! We can't find what you're looking for. Try searching for something else."*
- **Empty states** lean encouraging, e.g. *"It looks like there's nothing here yet! Ready to connect with others? Create your first community group."*
- **Numbers / counts** are inlined in copy: *"1 user group selected"*, *"12 groups selected (500 max)"*. `<strong>` is used to weight just the number+noun, not the whole sentence.
- **No emoji.** Anywhere. Not in copy, not in empty states, not in success toasts.
- **No exclamation overuse**: one per message at most, usually in empty‑state intros only.
- **Microcopy patterns**:
  - Wizard step labels are one word: *When*, *Who*, *What*, *Review*.
  - Confirm‑to‑delete dialogs ask the user to type a word ("delete" or the entity's title), friction by design.
  - Prefer **inline hint text** underneath the field over tooltips.

**Do not write**: marketing fluff, exclamation‑heavy hype, AI‑coded phrases like "unlock", "supercharge", "effortlessly", "Let's dive in". Engage admins are professionals; address them like one.

---

## Visual foundations

### Colour
- **Brand primary** `#6B6BD1`: soft indigo / periwinkle. Used for primary CTAs, active selection, focus, link hover, the 3px inset hover bar on list rows. **Muted, never vibrant**: if it looks electric, you've picked the wrong purple.
- **Brand secondary** `#FFDE8E`: warm pale gold. **This is the sidebar active/hover colour**: a gold pill behind the active nav item with dark text. Also used for featured/pinned highlights. **Never a primary CTA**: primary actions are indigo.
- **Semantic**: success `#47A58D` (muted teal), danger `#D64545` (warm red), warning surface `#F5A623` / warning icon `#E06C00` (the `#E06C00` variant is mandatory for icon‑on‑white contrast).
- **Text** is `#222`, never `#000`. Secondary `#555`, muted `#64676B`. Body copy is **never** the muted grey. That's reserved for labels, metadata and placeholders.
- **Surfaces**: cards/inputs sit on `#FFFFFF` over a soft canvas of `#F6F5F4` (warm off‑white, not pure white).
- **Borders / dividers**: `#E8E8E8`. One weight. Decorative dividers are explicitly avoided. Let whitespace and the soft card shadow do the work.
- A second **analytics palette** (navy, teal, gold, coral, cool grey, plum) exists for data viz only. Do **not** reuse those for UI chrome.

### Type
- **Open Sans**: SemiBold (600) for headings and button labels, Regular (400) for body, Light (300) for header subtitles.
- **Base size 14px** (`1rem = 14px`). This is unusual; remember it. Body is `0.875rem` (12.25px), section titles `1.25rem / 600`, page header `1.5rem / 600`, inline metadata `0.75rem`.
- **Tight leading** (~1.2 for headings, ~1.45 for body). Sentence case for labels, Title Case for page headings and primary CTAs.

### Shape & corners
- **8px radius** is the workhorse: cards, inputs, buttons, list rows, alerts, menus.
- **Modals** step up to **12px**.
- **Pagination pills, badges, tags** use **16px or full pill** (`999px`).
- **Checkboxes** are 4px square, brand‑filled when checked, with a small white tick.

### Elevation
- **One soft, diffused shadow**: `0 4px 4px rgba(0,0,0,0.10)`. Every card uses this.
- **Lifted/dragged** items: `0 8px 24px rgba(0,0,0,0.18)`.
- **No heavy drop shadows. No layered shadow stacks.** Cards float on canvas; if you find yourself adding a border to "anchor" a card, you don't need the border. The canvas/surface contrast is enough.

### Backgrounds & imagery
- App canvas is the warm off‑white `#F6F5F4`. **No** repeating patterns, **no** gradients, **no** background textures, **no** hand‑drawn illustrations in chrome.
- Empty‑state illustrations exist and are rendered with `filter: grayscale(100%)`. Colour is intentionally drained so empty states feel quiet, not festive.
- The Events page has a single decorative background illustration, used full‑bleed behind the page header, very lightly. It's the exception, not the pattern.
- Photographic imagery (community/event preview thumbnails) is shown at 16:9, no filter, no overlay, straight content.

### Borders, transparency & blur
- Borders are 1px `#E8E8E8` for dividers; inputs use a 1px text‑primary border by default that recolours to brand primary on focus (no glow).
- **Floating pagination** uses `rgba(255,255,255,0.5)` + `backdrop-filter: blur(10px)`, frosted‑glass pill, fixed bottom‑centre over the content area. This is **the** place blur shows up. Don't use blur elsewhere for chrome.
- Tooltips and small popovers use a white surface with the soft shadow, no transparency.

### Hover & press
- **List rows**: 3px inset left bar in `#6B6BD1` plus a *very* faint indigo wash on the row. We deliberately avoid full‑bleed background fills on rows. It produces the "striped table" look the brand rejects.
- **Primary buttons**: hover darkens to `#4A4A92`. No transform, no shadow change.
- **Secondary / outlined buttons**: ghost → solid. Transparent bg with a 1.5px border in the relevant semantic colour, fills to that colour on hover with white text. (Destructive: red. Warning: `#E06C00`.)
- **Icon‑only actions**: 32×32 square hit area, same ghost‑to‑solid pattern.
- **Press**: no shrink, no bounce. Just the colour change. The product is restrained.
- **Focus**: input border recolours to brand primary; **no blue browser glow**: the default focus shadow is suppressed everywhere.

### Motion
Motion in the CMS is restrained, functional and predictable. It reinforces cause‑and‑effect. It never decorates. A button press, a drop‑zone appearing, items arriving from a fetch: each is a moment where a short deliberate transition tells the user what just happened. Anything longer or louder distracts power users moving through dense workflows.

**Principles**
1. **Motion is a signal, not a flourish.** If an animation doesn't answer *"what changed?"*, remove it.
2. **Short beats long.** 120–220ms is the working range. Anything over 300ms feels sluggish next to a 14‑day CMS session.
3. **Ease for state, spring for space.** Ease curves for colour, opacity, rotation, small position shifts. Springs only when the surface itself has to make room: layout shifts, drop zones, cards resizing.
4. **Don't fight the pointer.** Active drag, scroll and typing are untouched. Motion never layers on top of an in‑progress gesture.
5. **Respect reduced motion.** Every consumer of the motion tokens flattens to an instant transition when `prefers-reduced-motion` is set. The tokens in `colors_and_type.css` already do this. Keep it that way downstream.

**Tokens**: four durations, three easings, two springs.
- **Durations**: `--d-xs` 120ms · `--d-sm` 180ms · `--d-md` 220ms · `--d-lg` 300ms (large surfaces only: sidebar collapse, dialog enter)
- **Easings**: `--e-standard` · `--e-emphasized` (entries) · `--e-exit` (departures)
- **Springs** (for JS spring animation): `gentle` stiffness 260 / damping 30 · `snappy` stiffness 400 / damping 32
- **Variants**: fade in · fade-slide in · stagger, available as `.motion-fade-in`, `.motion-fade-slide-in`, `.motion-stagger` in `motion.css`.

**When to reach for what**

| Situation | Reach for |
|---|---|
| Icon rotating, colour shift, focus ring appearing | CSS `transition` + `--d-xs`/`--d-sm` |
| Hover state revealing hidden controls | CSS opacity crossfade, `--d-sm` |
| List items arriving from a fetch | `.motion-fade-slide-in` items inside a `.motion-stagger` parent |
| Element appearing/disappearing that takes up space | Gentle spring (`--spring-gentle`, or `.motion-spring-in` in CSS) with an animated layout change |
| Modals, drawers, dialogs | The component library's default transitions. Don't reinvent |
| Active drag transform | The drag library's native transform. Don't wrap |

**Don'ts**
- No bounce for pure feedback (use `gentle`, not high‑amplitude springs).
- No decorative idle animation: loaders, pulses, ambient motion.
- No motion longer than 300ms unless the surface itself is large (sidebar collapse, dialog enter).
- No motion on dense data tables beyond the first‑load stagger.
- No `!important` overrides of component transitions: extend through the motion tokens.

**Reference surfaces**: the Pages list and its folder cards. Pattern‑match any new motion against those two surfaces.
- No bounces, no springs, no parallax, no entrance animations on lists. Restrained.

### Cards
- White surface, **8px radius**, soft shadow (`0 4px 4px rgba(0,0,0,0.10)`), padding **24px** for forms / **16px 24px** for detail bodies.
- No border. The shadow is the boundary.
- Cards at the dashboard tier sometimes use a slightly tighter shadow `0 2px 4px rgba(0,0,0,0.08)`, same family, less weight.

### Layout language
- **Left sidebar** on a **dark near-black surface** (`#1F1F23`) with white text. The **active nav item is a gold pill** (`#FFDE8E` background, dark text). This is *the* place the gold secondary colour lives. Hover is a subtle lighter-dark wash (`#2A2A2F`), not gold. Sidebar is collapsed `70px` / expanded `250px`, transition `0.3s ease`. The brand lock-up at the top is the navy icon + **ENGAGE** wordmark in bold uppercase.
- The sidebar has **grouped sections** with chevron-toggle dropdowns: *Insights*, *My Sections*, *Content Management*, *User Management*, *Setup* (contains Admin Access, Automation, Menus, Platform Settings, Sections), *Look & Feel*. Dashboard sits above the groups as a single flat item. Section labels are white, SemiBold, 0.9375rem.
- **List + detail panel** is the canonical content layout (see Sections / Page list, Smart Groups, Automation detail).
- **Search bar** sits above the list, capped at `max-width: 450px`. Has the soft card shadow.
- **Floating pagination** as described above: frosted pill, fixed bottom‑centre.
- **Page padding**: `25px` left/right, `15px` top/bottom on the inner content area.
- **Header** uses 1.5rem / 600 title with a 1rem / 300 subtitle directly underneath. The "create" CTA sits on the right of the header row.

### Form & input feel
- Low‑chrome. 1px border, 8px radius. Focus → border becomes `#6B6BD1`, no glow.
- Labels live above inputs, in `#222`, plain weight.
- Helper text is `0.8125rem` `#222`, not pilled, not in a callout box, not muted grey.
- The inline editing pattern: clicking a title swaps it for an inline text field with a soft pale‑indigo `#DCEDFF` background and `2px #C2E1FF` border, distinct, but quiet.

### What to avoid (recap)
True black, pure white‑on‑saturated CTAs, Bootstrap default button blues/purples, gradients, heavy drop shadows, thin (`fal`) icon weights, text‑muted grey for body copy, pill/callout backgrounds on hint text, decorative dividers, emoji, exclamation‑heavy copy, AI‑slop phrases, full‑background hover rows, blue browser focus glow, electric/vibrant indigo.

---

## Iconography

- **Font Awesome** is the icon system: the **regular** weight (`far`) is the **default UI weight**, **solid** (`fa`) is for emphasis / filled states, and **light** (`fal`) is **deliberately avoided** because it's too thin for the product's density.
- For prototypes, use **Font Awesome Free 6**, which covers `regular` and `solid` for the core icons used (file, folder, user-group, calendar, bell, magnifying-glass, plus, pencil, trash, copy, ellipsis, chevrons, etc.).
- **Custom SVGs** (a small set of product icons) are used for product‑specific concepts: web, iOS, Android, like, comment, attendees, books, calendar‑clock, page‑checkbox, subdirectory, upload‑image, etc. These are simple line drawings, single‑colour, that match the FA‑regular stroke weight. Use them as `<img>` or inline SVG.
- **Empty‑state illustrations** are full‑colour SVGs but rendered with `filter: grayscale(100%)` per the brand rule.
- **Emoji**: never. Not in any UI surface.
- **Unicode glyphs**: occasionally for `>` separators in breadcrumbs and `•` separators in metadata. Fine.
- **Brand mark** (the Engage icon) uses a navy gradient and is reserved for the logo lock‑up in the sidebar collapsed state and the login screen. Do **not** recolour it to indigo.

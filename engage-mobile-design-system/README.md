# Engage Mobile: Design System

A working design system for **Engage Mobile**, the mobile client of the Engage platform. The platform builds branded communities across an organisation that drive performance and loyalty (colleagues, customers, and wider communities), and the mobile app is the primary surface for end users.

This system documents the **default** look (the platform skin shipped before tenant branding loads) and the **tenant-overridable** surface (header / menu / login chrome that customers re-skin per organisation). Most surface chrome is dynamic; type, layout, density, iconography and core component shapes are fixed.

---

## Sources

Derived from the default (un-skinned) theme of the shipping Engage Mobile app; `colors_and_type.css` is the authoritative copy of the tokens.

---

## Index

```
README.md                  ← you are here
colors_and_type.css        ← all design tokens, ready to import
fonts/                     ← Open Sans (8 ttf weights), with licences
_adherence.oxlintrc.json   ← lint rules: no raw hex, no raw px, Open Sans only
```

The Engage mark is in `../engage-logo/`.

---

## Product context

Engage Mobile is a **mobile-first community engagement** app. Tenants (organisations) ship branded builds with their own colours, logo, splash, and assistant. Each build loads its tenant configuration on first launch, and an in-app **skin** can repaint the header / menu / side-menu / page-background at runtime.

Core experiences:

- **Feed**: paginated news + social posts, group filter, search.
- **Posts**: rich-text articles with cover image, like / comment / share / translate bar.
- **Social posts**: short user-generated posts, image/video grid attachments.
- **Comments**: threaded replies with @mentions.
- **Community Groups**: discoverable / joinable groups; feed filter chips.
- **Chat & Threads**: 1:1 + group messaging with media tiles, emoji picker, reactions.
- **Events**: list with All / Mine / Past tabs, RSVP states (going / interested), calendar add.
- **Notifications**: bell with red badge, unread state has a soft-blue row tint.
- **Profile / Followers**: avatar, edit, follower lists.
- **Awards & Thank-you Cards**: recognition surfaces.
- **Polls**.
- **Translate**: language picker + per-post translate toggle.
- **Discover**: explore / posts / your-groups tabs, large empty-state illustrations.
- **Login**: three-step (tenant → username/password → loading), heavily branded per tenant.
- **AI assistant**: accessed from a small icon next to the profile in the feed header.

---

## CONTENT FUNDAMENTALS

The product copy is **plain, friendly, and instruction-shaped**: second person ("you"), short imperative sentences, no marketing sparkle. It reads like a workplace tool that wants to stay out of the way.

**Voice & tone**
- *Helpful colleague*, not brand mascot. The app rarely "speaks" with a personality; it states what something is and what to do.
- Informational > promotional. Tenants supply emotional copy (e.g. a tenant's own welcome greeting, such as "Hello!"); Engage chrome stays neutral.
- Empty states are **gentle and inviting**, not cheeky. Example surface: feed empty state has a calm illustration, a one-line title, and a softer one-line description below it.

**Person & address**
- Second person to the user: "your groups", "your profile", "you'll find your posts here".
- First person ("My", "Mine") is reserved for *tab names* on Events and similar lists ("Mine", "Past"): UI labels, not body copy.
- Possessives are explicit: "Your Groups", "Your Posts" (Title Case for tabs and headers).

**Casing**
- **Title Case** for tab labels, navigation titles, button labels.
- **Sentence case** for body, hints, helper text, descriptions.
- **UPPERCASE** appears only as a typographic device (the dashed-line `OR` divider between login buttons).

**Examples lifted from the app**
- Inline hint above the share box: *"Share something with your community…"*-style hint.
- Login button: **Verify** / SSO step: **Continue with [provider]**: single verb per primary action.
- Forgot-password link: small (12px), low-emphasis, right-aligned under the password field.
- Search results empty: short title + 2–3 lines of guidance, never an animated "oops".
- Translate / Translated state uses the same word with a state change rather than a snarky alternate ("Translate" → "Show original").
- Contact-support label is rendered as **HTML link** with a tenant-supplied colour. Copy is per tenant, e.g. *"Need Help? Contact Us"*.

**Emoji**
- Used **only as content** (chat reactions, user-typed messages). Jumbo-emoji rendering is a thing: a chat message that is "all emoji" renders at 36pt instead of the usual 14pt. 
- **Never** used as iconography in chrome: every UI affordance is a vector or FontAwesome glyph.

**Microcopy patterns**
- Action + object: "Like", "Comment", "Share", "Translate", "Register", "Going", "Interested".
- Binary toggles use a verb that swaps between past/present states ("Like" / "Liked"; "Going": same word, filled vs outline icon to show state).
- Numeric badges (notifications, like counts) are bare numerals, no "+".

**Vibe**
Restrained, work-appropriate, slightly clinical by default: a deliberate canvas that lets the tenant's brand do the colouring. The product gets warmth from the **content** users post (faces, places, events), not from the chrome.

---

## VISUAL FOUNDATIONS

Engage's visual identity is **a neutral, honest mobile chrome** that yields the stage to whichever tenant is paying for the deployment. Default = grey-on-white iOS/Android-ish surfaces; tenant skin = bright header bars, brand-coloured primary buttons, branded login wallpapers. Content cards are flat with thin separators; tabs use a "selected pill" pattern; bottom sheets round only their top corners; everything is mobile-first.

### Colour system
- **Default palette is greyscale.** Headers, menus, and side menus all default to `#FFF` background with `#000` foreground. Page background `#FFF` light / `#262626` dark; secondary surface `#F1F1F1` light / `#121212` dark.
- **Tenant skin colours** override every chrome surface at runtime: header bar background/foreground, menu bar background/foreground and selected state, side menu, page background, title / subtitle / forward-arrow colour, and loading indicator (the `--skin-*` tokens). These are the ONLY surfaces a tenant can recolour.
- **Login chrome** is its own per-tenant palette: button bg/fg, dots, label colour, textbox bg/fg/border, hover, forgot-password link. Tenants typically pick one **brand accent** and use it everywhere, e.g. a tenant's brand accent on buttons, dots, and the "Forgot password" link, paired with a near-black label colour.
- **The only "Engage blue"** in defaults is the progress bar: `#0C6EFD`, a Bootstrap-ish blue that effectively functions as the system accent before a tenant skin loads.
- **Likes** flash pink-red: the like animation bursts colour when toggled.
- **Notification unread row** uses a tint of the accent: `#E2F1FF` light / `#334251` dark.
- **Image placeholder fill** is `#EEE`. Empty avatars use the same.
- **Dark mode** is fully supported: every theme-aware token has a Light + Dark pair.

### Typography
- **Open Sans** is the only family, 8 weights bundled (Light, Regular, Semibold, Bold + italics).
- **Sizes** (as used in the app):
  - Display (page titles in HTML headers): 18px Bold
  - Nav title / Header bar: 18px Bold
  - Empty-state title: 17px Semibold
  - List rows / bullets: 16px Regular
  - Rich editor body / long-form: 15px Regular
  - Like / Comment / Share bar labels: 14px Regular
  - Search-result description: 12px Regular, max 2 lines, tail truncation
  - Forgot-password link: 12px
  - Notification badge number: 11px Semibold, white on red
- **Italic** is available but rare in chrome; reserved for blockquotes, mentioned italic spans in rich text.
- **Default casing**: sentence/title as described above; uppercase is used only on the OR-divider word in login.

### Layout
- **Mobile-first column.** Primary safe area: 24px horizontal padding for blocks, 16px around content rows. Cards bleed edge-to-edge in the feed (only a 4px top padding on the feed bar).
- **Top status bar grid + bottom safe spacer.** The navigation bar draws a separate strip for the status-bar tint, then a 56px-ish content row with three columns: left items (auto width) / title (fills) / right items (auto width).
- **Bottom safe spacer** of 80px is added on iOS feed footers (0 on Android) to clear the floating tab bar.
- **Tab bar** is custom and can either let content stop above the bar or extend behind it.
- **Rows** for media + text use a fixed 150px image column plus a fluid text column on search result cards (image left, text right). Pin the image, let text fill.

### Backgrounds
- **Solid colours dominate.** Cards live on the page background; the feed itself paints a slightly cooler grey behind the cards (`--bg-feed`: `#C7C7C7` light / `#121212` dark) so the white card silhouettes pop.
- **Tenant login screens are full-bleed wallpapers.** The Username/Password step paints the tenant's login background colour and lays a full-bleed, aspect-fill background image over it. Logo is centred, capped at 168×168.
- **No gradient meshes, no marketing illustrations in chrome.** Empty states use bespoke flat-style SVG illustrations (e.g. the feed and discover empty states): line-art with a touch of colour, 280–350px wide.
- **Content imagery is tenant-supplied**: photos of people, events, internal news. Treatment is whatever the customer uploads; Engage doesn't filter or grain them.

### Animation
- **Restrained.** Likes play a short burst animation. Loading uses a shimmer with light/dark fills and a left→right wave. Refresh uses native iOS/Android pull-to-refresh, no custom curve.
- **No bounce, no parallax (except a header-on-scroll parallax on detail pages: gentle, not theatrical).**
- **Transitions** are platform-native page transitions; nothing custom.

### States
- **Hover** doesn't apply on mobile, but tenant login branding defines a button hover colour for web parity.
- **Press**: native ripple on Android, opacity dim on iOS: both platform defaults.
- **Selected**: chip-style pill in the feed group bar (background = skin header background `--skin-header-bg`, text = skin header foreground `--skin-header-fg`); legacy lists use `#D1D1D5` (`--collection-selected`) for the selected row.
- **Liked**: same row, swap outline → solid heart, play the burst animation.
- **Pinned**: small grey label `#656565`.

### Borders
- **Most borders are transparent.** They are only used for shape clipping (rounded corners), not visible outlines.
- **Login inputs** are a 1px `#B4B4B4` rounded border with a 16px corner radius and a 40px height: minimal and greyscale by default; tenants tint the stroke and BG.
- **Icon buttons** are 2px stroke, 10px radius: a heavier "tappable card" treatment.
- **Profile circles** are stroked at 1.5px (Android) / 2px (iOS), filled with the profile image, clipped to a 16px-radius rounded rectangle.

### Shadows
- **Bottom sheets** carry a single soft shadow: `Opacity 0.1, Radius 3, Offset 0,-4` (lifts up off the page). Top corners are rounded at 30px; bottom corners stay square.
- **Cards in the feed are flat**: no shadow. They're separated by the cooler grey gutter and a 1px hairline separator.
- **No inner shadows** anywhere in the system.

### Corner radii
- 2px: sheet grabber pill
- 8px: chat media tiles
- 10px: icon buttons, document attachments
- 16px: primary buttons + login inputs (the dominant "rounded" feel)
- 20px: circular back button (40×40 ÷ 2)
- 30px: bottom sheet top corners only
- pill: group-filter chips, notification badge

### Transparency / blur
- **Blur** is used for the media-viewer share bar (`#484848`-ish chrome) and overlays, sparingly, only when content sits behind UI.
- **40% black overlay (`#66000000`)** is the canonical "image dimmer", used on chat document tiles, video previews to ensure white-on-image text is legible.
- The status bar background can flip between fully opaque and fully transparent: a clean transparent header is a simple opt-in.

### Iconography vibe
- Single-stroke + occasional duotone, monochrome by default and **tinted at runtime** to match the header foreground (`--skin-header-fg`) or the text colour (`--text`). Same icon recolours per tenant.
- See `ICONOGRAPHY` below for the full breakdown.

### Imagery vibe
- **Content-led.** No filter, no grain, no enforced palette. The chrome is so quiet that whatever image the tenant or user uploads sets the mood.
- Rounded-corner thumbnails (8px on chat media, 0px in feed cards which are full-bleed inside their card boundary).

### Cards
- Feed cards: full-width, page background (`--bg-page`; white / dark grey). No outer shadow. Internal padding is 18px horizontal for body, image edge-to-edge. Like / Comment / Share bar at the bottom is a flex row with consistent 40px row height.
- Search result row: 150px square thumbnail left, vertical stack of title (16px Semibold) + 2-line description (12px) right.
- Notification row: vertically padded list row, soft-blue tint when unread.

### Layout rules / fixed elements
- **Header bar**: fixed top, 56pt+ tall.
- **Bottom tab bar**: fixed bottom, custom view, can be transparent over content.
- **FAB-like**: not a thing. Compose actions live in a header row ("Share something with your community" tappable strip above the feed), or as a `+` icon in the right-items area.
- **Bottom sheet**: grabber, top-rounded, slides up; doesn't blur.

### Density
- Comfortable but not airy: 40–44px tappable targets, 14–16px inter-row spacing, 4–8px micro-spacing between icons + labels in a row.

---

## ICONOGRAPHY

Engage uses a **two-source icon system**:

1. **Bundled SVGs** for product-specific affordances (like, comment, events calendar, bell, and the discover / events tab icons) plus large empty-state illustrations (feed, discover, comments, empty collection).
2. **Font Awesome glyphs** (Solid, Light and Regular styles) for general UI: back arrow, magnifying glass, chevron-down, person, key, eye/eye-slash, share, comment, translate, bell.

Prototypes should use the same Font Awesome styles as the app (Solid / Regular / Light) so mockup glyphs match what ships.

**Iconography rules**
- Icons are **always tinted** to either the header foreground (`--skin-header-fg`, in the nav bar) or the text colour (`--text`, in content). They don't carry their own colour.
- **Stroke style** in product SVGs is mostly **filled black silhouettes** (good for any background tint). Tint them at runtime to recolour.
- **Empty-state illustrations** are larger (200–350px), more colourful than chrome icons, and not tinted. They sit centred above an empty-state title + description.
- **Icon sizes** in chrome:
  - 18px: like/comment bar inline
  - 22px: input prefix (lock, person), back glyph
  - 24px: bell, search, header glyphs
  - 28px: AI assistant entry point next to profile
- **No emoji as iconography**. Emoji is content-only.
- **No unicode glyphs as icons**. Everything is a vector source.

**Logo**: `../engage-logo/engage-icon-dark.svg` is the corporate Engage mark: a chat-bubble silhouette with three horizontal "menu" lines (community + content/menu metaphor). Inverse / on-dark variant uses the same shape with white fill. Tenants ship their own logo. Never overlay both marks.

---

## CONTRIBUTING

When the app's default theme changes, update `colors_and_type.css` first and keep this README in step; to mock a tenant-branded demo, override the `--skin-*` tokens and the login accent.

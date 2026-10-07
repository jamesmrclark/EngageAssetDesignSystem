#!/usr/bin/env node
/*
  Render previews of a document-mode template and check that it fits.

  Usage (from the repo root; --template and --out are relative to the
  current directory):
    node scripts/render-previews.mjs
    node scripts/render-previews.mjs --template engage-appi-design-system/templates/playbook/playbook.html
    node scripts/render-previews.mjs --size a4 --out /tmp/a4-previews
    node scripts/render-previews.mjs --help

  One-time setup in a clean clone (Node 18+):
    npm install --no-save playwright && npx playwright install chromium

  What it does:
  - Opens the template over file:// with every non-file request blocked, so
    the page must render offline (fonts, logo and icons all local).
  - Waits for document.fonts.ready and checks Inter and Inter Display loaded.
  - Screenshots each .page as p-01.png, p-02.png ... at deviceScaleFactor 2.
  - Writes <name>.pdf with preferCSSPageSize (one .page per printed page).
  - Builds sheet.png, a contact sheet of every page, in the browser.
  - Checks Letter AND A4: reports any element that runs outside its page box,
    out of a clipping container (stage, window), or into the footer zone.
    Elements inside [data-bleed] may run off the page bottom on purpose.
    The cover line field, the closing rule and anything marked
    data-fit-ignore are decoration and are not checked.
  - Reports failed or blocked requests, broken images, unresolved icons,
    drift between the inline icon sprite and documents/icons.svg, and em
    dashes in the template or document stylesheets.

  Exit code 1 if anything is reported.

  Needs Node 18+ and Playwright with Chromium. Playwright is resolved from
  the usual module path, then $PLAYWRIGHT_MODULE, then a known local path.
*/
import { readFile, writeFile, mkdir, readdir, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, resolve, join, basename, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, '..');

// ---------- arguments ----------
const USAGE = `Usage (from the repo root):
  node scripts/render-previews.mjs [--template <file.html>] [--size letter|a4] [--out <dir>]

  --template  template to render (default: the playbook template)
  --size      page size for the PNGs and PDF (default: letter; the fit check runs at both)
  --out       folder for the previews (default: previews/ next to the template)
Paths are relative to the current directory.
One-time setup in a clean clone: npm install --no-save playwright && npx playwright install chromium`;
const fail = (msg) => { console.error(`${msg}\n\n${USAGE}`); process.exit(2); };
const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) { console.log(USAGE); process.exit(0); }
const KNOWN = ['--template', '--out', '--size'];
for (let i = 0; i < args.length; i += 2) {
  if (!KNOWN.includes(args[i])) fail(`Unknown option ${args[i]}`);
  if (args[i + 1] === undefined || args[i + 1].startsWith('--')) fail(`${args[i]} needs a value`);
}
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
};
const template = opt('template') ? resolve(process.cwd(), opt('template'))
  : join(repo, 'engage-appi-design-system/templates/playbook/playbook.html');
const outDir = opt('out') ? resolve(process.cwd(), opt('out')) : join(dirname(template), 'previews');
const size = opt('size', 'letter').toLowerCase();
if (!['letter', 'a4'].includes(size)) fail('--size must be letter or a4');
if (!existsSync(template)) fail(`Template not found: ${template}`);

// ---------- Playwright ----------
async function loadPlaywright() {
  const candidates = ['playwright', 'playwright-core', process.env.PLAYWRIGHT_MODULE,
    '/opt/node-tools/node_modules/playwright/index.mjs'].filter(Boolean);
  for (const c of candidates) {
    try {
      const spec = c.startsWith('/') ? pathToFileURL(c).href : c;
      const mod = await import(spec);
      const pw = mod.chromium ? mod : mod.default;
      if (pw?.chromium) return pw;
    } catch { /* try the next one */ }
  }
  console.error('Playwright not found. Run: npm install --no-save playwright && npx playwright install chromium\n'
    + 'or set PLAYWRIGHT_MODULE to an existing Playwright index.mjs.');
  process.exit(2);
}
const { chromium } = await loadPlaywright();

const problems = [];
const report = (kind, msg) => problems.push(`${kind}: ${msg}`);

// ---------- static checks: em dashes and sprite drift ----------
const dsRoot = resolve(dirname(template), '../..');
const EM_DASH = String.fromCharCode(0x2014);
const docFiles = [template, join(dsRoot, 'documents/doc.css'), join(dsRoot, 'documents/ui-mock.css'),
  join(dsRoot, 'documents/icons.svg')].filter(existsSync);
for (const f of docFiles) {
  const lines = (await readFile(f, 'utf8')).split('\n');
  lines.forEach((l, i) => { if (l.includes(EM_DASH)) report('em dash', `${relative(repo, f)}:${i + 1}`); });
}
const symbols = (txt) => {
  const map = new Map();
  for (const m of txt.matchAll(/<symbol\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/symbol>/g)) {
    map.set(m[1], m[0].replace(/\s+/g, ' ').trim());
  }
  return map;
};
const spritePath = join(dsRoot, 'documents/icons.svg');
const html = await readFile(template, 'utf8');
if (existsSync(spritePath)) {
  const file = symbols(await readFile(spritePath, 'utf8'));
  const inline = symbols(html);
  for (const [id, s] of file) {
    if (!inline.has(id)) report('sprite', `#${id} is in icons.svg but not inlined in the template`);
    else if (inline.get(id) !== s) report('sprite', `#${id} differs between icons.svg and the template`);
  }
  for (const id of inline.keys()) if (!file.has(id)) report('sprite', `#${id} is inlined but missing from icons.svg`);
}

// ---------- browser ----------
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1000, height: 1200 }, deviceScaleFactor: 2 });
const blocked = [];
await context.route('**/*', (route) => {
  const url = route.request().url();
  if (url.startsWith('file:') || url.startsWith('data:') || url.startsWith('blob:')) return route.continue();
  blocked.push(url);
  return route.abort('blockedbyclient');
});
const page = await context.newPage();
page.on('requestfailed', (r) => {
  const url = r.url();
  if (!blocked.includes(url)) report('request failed', `${url} (${r.failure()?.errorText ?? 'unknown'})`);
});
page.on('pageerror', (e) => report('page error', String(e).slice(0, 300)));
page.on('console', (m) => { if (m.type() === 'error') report('console', m.text().slice(0, 300)); });

await page.goto(pathToFileURL(template).href, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);

// fonts, images and icon references
const assets = await page.evaluate(() => {
  const fonts = [...document.fonts].filter((f) => f.status === 'loaded').map((f) => `${f.family.replace(/"/g, '')} ${f.weight}`);
  const badImages = [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.getAttribute('src'));
  const missingIcons = [...document.querySelectorAll('use')]
    .map((u) => u.getAttribute('href') || u.getAttribute('xlink:href'))
    .filter((h) => h && h.startsWith('#') && !document.getElementById(h.slice(1)));
  return { fonts, badImages, missingIcons: [...new Set(missingIcons)] };
});
for (const fam of ['Inter', 'Inter Display']) {
  if (!assets.fonts.some((f) => f.startsWith(fam + ' '))) report('font', `${fam} did not load`);
}
assets.badImages.forEach((s) => report('image', `${s} did not load`));
assets.missingIcons.forEach((h) => report('icon', `${h} has no matching symbol`));
for (const u of blocked) report('network blocked', u);

// ---------- fit check (runs in the page) ----------
async function fitCheck(label) {
  const found = await page.evaluate(() => {
    const tol = 0.75;
    const name = (el) => {
      const cls = [...el.classList].slice(0, 2).join('.');
      return el.tagName.toLowerCase() + (el.id ? `#${el.id}` : '') + (cls ? `.${cls}` : '');
    };
    const clips = (el) => { const s = getComputedStyle(el); return /hidden|clip/.test(`${s.overflowX} ${s.overflowY}`); };
    const out = [];
    document.querySelectorAll('.page').forEach((pg, pi) => {
      const pr = pg.getBoundingClientRect();
      const body = pg.querySelector(':scope > .doc-body');
      const br = body?.getBoundingClientRect();
      const flagged = new Map();
      for (const el of pg.querySelectorAll('*')) {
        if (el.closest('svg') && el.tagName.toLowerCase() !== 'svg') continue;
        if (el.closest('.doc-linefield, .doc-closing-rule, [data-fit-ignore]')) continue;   // explicit decoration only
        const cs = getComputedStyle(el);
        if (cs.display === 'none' || cs.visibility === 'hidden' || cs.display === 'contents') continue;
        const r = el.getBoundingClientRect();
        if (r.width < 0.5 && r.height < 0.5) continue;
        const bleed = !!el.closest('[data-bleed]');
        const why = [];
        if (r.left < pr.left - tol || r.right > pr.right + tol || r.top < pr.top - tol) why.push('outside the page box');
        else if (!bleed && r.bottom > pr.bottom + tol) why.push('below the page edge');
        // nearest clipping ancestor inside the page
        let a = el.parentElement;
        while (a && a !== pg && !clips(a)) a = a.parentElement;
        if (a && a !== pg) {
          const ar = a.getBoundingClientRect();
          const below = !bleed && r.bottom > ar.bottom + tol;           // a bleed may run off the bottom
          if (r.left < ar.left - tol || r.right > ar.right + tol || r.top < ar.top - tol || below) {
            why.push(`clipped by ${name(a)}`);
          }
        }
        if (br && body.contains(el) && !bleed && r.bottom > br.bottom + tol) why.push('runs into the footer zone');
        // an in-flow box that spills out of its parent (for example text wrapping
        // to an extra line inside a fixed-height tile)
        const par = el.parentElement;
        if (par && par !== pg && !/absolute|fixed/.test(cs.position)) {
          const ps = getComputedStyle(par);
          if (!/inline|contents/.test(ps.display)) {
            const qr = par.getBoundingClientRect();
            const down = !bleed && r.bottom > qr.bottom + 1;
            if (r.left < qr.left - 1 || r.right > qr.right + 1 || r.top < qr.top - 1 || down) why.push(`spills out of ${name(par)}`);
          }
        }
        // text that spills out of a fixed-size box
        if (el.children.length === 0 && el.textContent.trim() && (el.scrollWidth > el.clientWidth + 1 && cs.overflowX !== 'visible')) why.push('text cut off');
        if (why.length) flagged.set(el, why.join('; '));
      }
      for (const [el, why] of flagged) {
        const p = el.parentElement;
        if (p && flagged.get(p) === why) continue;             // report the outermost offender only
        out.push(`page ${String(pi + 1).padStart(2, '0')}: ${name(el)} "${el.textContent.trim().replace(/\s+/g, ' ').slice(0, 50)}" ${why}`);
      }
    });
    return out;
  });
  found.forEach((f) => report(`fit ${label}`, f));
  return found.length;
}

const setSize = (s) => page.evaluate((v) => {
  if (v === 'a4') document.body.setAttribute('data-size', 'a4'); else document.body.removeAttribute('data-size');
}, s);

await setSize('letter');
const pageBox = await page.evaluate(() => {
  const r = document.querySelector('.page').getBoundingClientRect(); return `${Math.round(r.width)}x${Math.round(r.height)}`;
});
const fitLetter = await fitCheck('letter');
await setSize('a4');
const pageBoxA4 = await page.evaluate(() => {
  const r = document.querySelector('.page').getBoundingClientRect(); return `${Math.round(r.width)}x${Math.round(r.height)}`;
});
const fitA4 = await fitCheck('a4');
await setSize(size);
await page.evaluate(() => document.fonts.ready);

// ---------- screenshots ----------
await mkdir(outDir, { recursive: true });
for (const f of await readdir(outDir)) if (/^p-\d+\.png$/.test(f)) await unlink(join(outDir, f));
const pages = await page.$$('.page');
const shots = [];
for (let i = 0; i < pages.length; i++) {
  const file = join(outDir, `p-${String(i + 1).padStart(2, '0')}.png`);
  await pages[i].screenshot({ path: file });
  shots.push(file);
}

// ---------- PDF ----------
const pdfPath = join(outDir, `${basename(template, '.html')}.pdf`);
await page.pdf({ path: pdfPath, preferCSSPageSize: true, printBackground: true });
const pdfText = (await readFile(pdfPath)).toString('latin1');
const pdfPages = (pdfText.match(/\/Type\s*\/Page(?![s\w])/g) || []).length;
if (pdfPages !== pages.length) report('pdf', `${pdfPages} PDF pages for ${pages.length} .page sections`);

// ---------- contact sheet ----------
const thumbs = await Promise.all(shots.map(async (f) => `data:image/png;base64,${(await readFile(f)).toString('base64')}`));
const sheet = await context.newPage();
const cols = Math.min(5, pages.length);
const thumbW = 330;
await sheet.setViewportSize({ width: cols * thumbW + (cols + 1) * 12, height: 800 });
await sheet.setContent(`<!doctype html><html><head><style>
  html,body{margin:0;background:#c9c8c4}
  .g{display:grid;grid-template-columns:repeat(${cols},${thumbW}px);gap:12px;padding:12px}
  img{display:block;width:${thumbW}px;height:auto;background:#fff}
</style></head><body><div class="g">${thumbs.map((t) => `<img src="${t}">`).join('')}</div></body></html>`);
await sheet.evaluate(() => Promise.all([...document.images].map((i) => i.decode())));
await sheet.screenshot({ path: join(outDir, 'sheet.png'), fullPage: true });

await browser.close();

// ---------- summary ----------
const show = (p) => { const r = relative(repo, p); return !r || r.startsWith('..') ? p : r; };
const summary = {
  template: show(template),
  out: show(outDir),
  size,
  pages: pages.length,
  pageBox: { letter: pageBox, a4: pageBoxA4 },
  pdfPages,
  fontsLoaded: assets.fonts,
  fit: { letter: fitLetter, a4: fitA4 },
  problems,
};
console.log(JSON.stringify(summary, null, 2));
process.exitCode = problems.length ? 1 : 0;

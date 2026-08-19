# B&Z Visuals

A modern, dark, minimalist marketing & portfolio site for **B&Z Visuals**, a graphic design studio founded by Zach and Brody.

Built as plain, editable **HTML / CSS / JavaScript** — no framework, no build step, no database. Open `index.html` in a browser and it runs.

---

## What's inside

```
bzvisuals/
├── index.html      # Page structure & content
├── styles.css      # All styling (design tokens at the top)
├── script.js       # Interactivity (menu, modal, forms, reveal)
└── README.md       # You are here
```

## Run locally

Just open `index.html` in a browser. Or, for the mailto form and smooth scrolling to behave like production, serve it over http:

```bash
# Python
python -m http.server 8000
# then visit http://localhost:8000

# Node (if you have npx)
npx serve
```

## Deploy (free, with GitHub Pages)

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** = *Deploy from a branch*, **Branch** = `main` / `root`, and **Save**.
4. Your site goes live at `https://<your-username>.github.io/<repo-name>/` in a minute or two.

Works equally well on Netlify, Vercel, or Cloudflare Pages — just connect the repo, no build command needed.

---

## How to edit things

All edits happen in `index.html` unless noted.

### Contact email / where bookings are sent
In `script.js`, inside `buildMailto()`, change `contact@bzvisuals.com` (appears twice). Also update the visible address in `index.html` (search for `contact@bzvisuals.com`).

### Brand name & tagline
Search `index.html` for `B&Z` and `VISUALS`, and the footer tagline `Modern, minimalist graphic design…`.

### Hero text
The hero heading is `We help bring your ideas to life.` — the gold italic word is wrapped in `<em>`, e.g. `<em>to life.</em>`. Wrap any word you want gold-italic in `<em>`.

### Portfolio items
Each portfolio card is a `<li class="portfolio-item">` in the `<!-- PORTFOLIO -->` section. To add one, copy an existing `<li>` and change:
- the inner `<svg>` (the preview visual),
- `<p class="portfolio-cat">` (small gold label),
- `<h3 class="portfolio-name">` (the title).

To use a real image instead of the SVG mock, replace the `<svg>...</svg>` with:
```html
<img src="assets/your-image.jpg" alt="Describe the project" />
```
and drop the file in an `assets/` folder.

### About / people
Edit the `.person-card` blocks under `<!-- ABOUT -->`. Change the initial letter, name, and role.

### Contact form services
The "What do you need?" dropdown options live in two places (the contact form and the booking modal) — search for `Logo & Brand Identity` and edit both `<select>` lists to keep them in sync.

### Logo (header, footer, browser tab)
Your logo lives in the `assets/` folder:
- `logo-white.png` — white logo (shown on the dark theme)
- `logo-dark.png` — black logo (shown on the light theme)
- `favicon.png` — the browser tab icon

To use a new logo, replace those files with your own (keep the same filenames). PNG with a transparent background works best. If you only have a black-on-white or white-on-white JPEG, the easiest path is to make a transparent PNG in Figma/Canva/Photoshop and drop it in as `logo-white.png` (and a black version as `logo-dark.png`). The site automatically picks the right color for the active theme.

To change the logo size, edit `.brand-logo` (header) and `.footer-logo` (footer) in `styles.css` — change the `height` value.

### Fonts
Fonts are loaded from Fontshare + Google Fonts in the `<head>` of `index.html` (the two `<link>` tags). The font families used are:
- `--font-display` (Clash Display) — headings
- `--font-body` (Satoshi) — body text
- `--font-serif` (Instrument Serif) — the gold italic emphasis words

To change a font, define it at the top of `styles.css` under `:root`, e.g. swap `--font-body` to another family. To use a Google Font, grab its `<link>` from fonts.google.com, paste it in the `<head>`, and set the variable to that font's name.

### Colors
In `styles.css`, under `:root` and `[data-theme="dark"]` / `[data-theme="light"]`, the `--gold` variable controls the accent color. Change that one value to retheme the whole site. Backgrounds use `--bg`, surfaces use `--surface`, text uses `--text`.

### Social links
In the footer, update the `href` on the Instagram and Facebook links (currently `https://instagram.com` and `https://facebook.com`).

---

## How the "Book Now" / contact form works

Forms submit via [Formsubmit.co](https://formsubmit.co) to **contact@bzvisuals.com** — a free service that forwards submissions to your inbox as real emails. No backend, no database, no signup needed.

**One-time activation:** the very first time someone submits, Formsubmit sends a confirmation email to contact@bzvisuals.com. Click the link in it to activate delivery. After that, all submissions come straight through.

To change the destination email, search `index.html` for `formsubmit.co/contact@bzvisuals.com` (appears twice: contact form + booking modal) and replace it. Also update the visible address in the `<!-- CONTACT -->` section.

To swap for a different provider (Formspree, Web3Forms, a Google Form), change the form `action` and hidden fields in `index.html`.

---

## Accessibility & performance notes

- Default dark theme; light theme available via `[data-theme="light"]` on `<html>` if you wire up a toggle.
- Fully keyboard-navigable: modal closes on `Esc`, focus moves into the form on open.
- Respects `prefers-reduced-motion`.
- Fluid type and a 4px spacing system keep it crisp on phones and large monitors.

---

© 2026 B&Z Visuals. Designed & built with intention.

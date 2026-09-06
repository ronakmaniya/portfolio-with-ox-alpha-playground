# ronak.dev — Portfolio

A fast, responsive, single-page developer portfolio for **Ronak Maniya**, built with pure HTML, CSS, and JavaScript. No frameworks, no build step — just open and deploy.

## ✨ Features

- **Hero section** — availability badge, typing animation (`web. / web apps. / APIs. / UIs. / experiences.`), CTA buttons, social links
- **Sticky navbar** — scroll blur + gradient border, scroll-progress bar, active-link highlighting, mobile hamburger menu
- **About** — intro, pull-quote, animated stat counters (3+ years, 25+ projects, 15+ clients), 4-step journey timeline (2022 → Today)
- **Skills** — 3 cards (Frontend / Backend / Tools & Workflow) with animated progress bars + "also familiar with" chips
- **Projects** — 3 cards (DevBoard, ShopSwift, Snippetly) with gradient art thumbnails, tech chips, GitHub + live-demo links
- **Contact** — info panel (email + copy button, location, availability) + mailto contact form with toast notifications
- **Footer** — nav, contact summary, giant `RONAK` watermark, back-to-top button
- **Polish** — dark theme (`#0a0a10` + `#7c6cff` accent), Space Grotesk + Inter fonts, scroll-reveal animations, `prefers-reduced-motion` support, fully responsive

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Markup | HTML5 (semantic, accessible) |
| Styling | Vanilla CSS3 (custom properties, grid/flex, animations) |
| Logic | Vanilla JavaScript (IntersectionObserver, typed effect, counters) |
| Fonts | Google Fonts — Space Grotesk + Inter |
| Assets | Inline SVG icons (no image dependencies) |

## 📁 Project Structure

```
ox-playground/
├── index.html   # All sections: hero, about, skills, projects, contact, footer
├── styles.css   # Theme, layout, components, responsive breakpoints
├── script.js    # Nav, scroll, typing, reveal, skills, counters, form, toast
└── README.md    # This file
```

## 🚀 Getting Started

No install needed.

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# 2. Run locally — just open the file
# Option A: double-click index.html
# Option B: VS Code Live Server
# Option C: any static server
npx serve .
# or
python -m http.server 8000
```

Then visit `http://localhost:8000` (or whichever port is shown).

## 🌐 Deploy

This is a static site — deploy anywhere:

**GitHub Pages (free, recommended for portfolios):**
1. Push this repo to GitHub
2. Go to repo → `Settings` → `Pages`
3. Source: `Deploy from a branch` → `main` / `(root)` → Save
4. Your site goes live at `https://<your-username>.github.io/<your-repo>/`

**Netlify / Vercel:**
- Drag-and-drop the folder, or connect the GitHub repo. No build command needed. Publish directory: `.`

## 🎨 Customization

- **Name / links:** search `ronakmaniya` in `index.html` and replace GitHub, LinkedIn, and `hello@ronakmaniya.dev` with yours.
- **Projects:** edit the 3 `.project-card` blocks in `index.html` (title, description, chips, links).
- **Skills:** edit `.skill-fill[data-level]` values + labels in `index.html`.
- **Stats:** edit `.stat-card__num[data-count]` values in `index.html`.
- **Theme:** tweak CSS variables in `styles.css` (`--bg`, `--accent`, `--gradient`, etc.).
- **Typing words:** edit the `phrases` array in `script.js`.

## 📄 License

Free to use for learning and personal portfolios. If you fork it, a credit line is appreciated but not required.

---

Designed & built with ♥ and too much chai — by [Ronak Maniya](https://github.com/ronakmaniya).

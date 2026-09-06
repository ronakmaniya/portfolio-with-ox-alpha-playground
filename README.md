# ✨ ronak.dev — Static Portfolio Demo

![Live](https://img.shields.io/badge/Live-GitHub_Pages-7c6cff?style=for-the-badge&logo=github)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![No Build](https://img.shields.io/badge/No_Build-Required-2dd4a7?style=flat-square)

A fast, responsive, single-page **demo portfolio** for **Ronak Maniya** — built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no build step.

> 🌐 **Live Demo (this repo):** https://ronakmaniya.github.io/portfolio-with-ox-alpha-playground/
>
> 💼 **Looking for my main portfolio?** It's here → https://ronak-maniya.vercel.app/ ([source](https://github.com/ronakmaniya/My-Portfolio-Ronak-2.0))

---

## 📌 About This Repo

This repository (`portfolio-with-ox-alpha-playground`) is a **lightweight static playground / demo** — ideal for experimenting with layout, animations, and responsive design without a backend.

My **production portfolio** is a separate full-stack project with a blog, projects API, and admin panel:

| Project | Live | Source | Stack |
|---------|------|--------|-------|
| **Main Portfolio 2.0** (production) | [ronak-maniya.vercel.app](https://ronak-maniya.vercel.app/) | [My-Portfolio-Ronak-2.0](https://github.com/ronakmaniya/My-Portfolio-Ronak-2.0) | React + Vite, Django DRF, PostgreSQL |
| **Backend API** | [API on Render](https://my-portfolio-ronak-2-0-backend.onrender.com/) | Same repo (`/backend`) | Django + DRF, Cloudinary |
| **Legacy Portfolio v1** (archived static) | — | [My-Portfolio-Ronak](https://github.com/ronakmaniya/My-Portfolio-Ronak) | HTML / CSS / JS |
| **This Demo** (you are here) | [GitHub Pages](https://ronakmaniya.github.io/portfolio-with-ox-alpha-playground/) | [portfolio-with-ox-alpha-playground](https://github.com/ronakmaniya/portfolio-with-ox-alpha-playground) | HTML / CSS / JS |

> **Recruiters / visitors:** please evaluate me on the **Main Portfolio 2.0** above. This repo is for practice, UI experiments, and quick static hosting demos.

---

## ✨ Features

- **Hero** — availability badge, typing animation (`web. / web apps. / APIs. / UIs. / experiences.`), CTAs, GitHub / LinkedIn / Email links
- **Navbar** — sticky glass effect, gradient border, scroll-progress bar, active-section highlight, mobile hamburger menu
- **About** — bio, design×engineering pull-quote, animated counters (3+ years, 25+ projects, 15+ clients), 2022 → Today timeline
- **Skills** — Frontend / Backend / Tools cards with scroll-triggered progress bars + extra tech chips
- **Projects** — DevBoard, ShopSwift, Snippetly cards with gradient art thumbnails, tech chips, source + demo links
- **Contact** — info panel (copy-email button, location, availability) + `mailto:` form with toast feedback
- **Footer** — sitemap, contact summary, giant `RONAK` watermark, back-to-top button
- **Polish** — dark theme (`#0a0a10` / `#7c6cff`), Space Grotesk + Inter, scroll-reveal, `prefers-reduced-motion` support, fully responsive

## 🛠️ Tech Stack

| Layer | Details |
|-------|---------|
| Markup | Semantic HTML5, accessible labels |
| Styling | Vanilla CSS3 — custom properties, Grid/Flex, keyframe animations |
| Logic | Vanilla JS — IntersectionObserver, typed effect, counters, toast |
| Fonts | Google Fonts (Space Grotesk + Inter) |
| Icons | Inline SVG (zero image dependencies) |
| Hosting | GitHub Pages (this demo) · Vercel + Render (main portfolio) |

## 📁 Project Structure

```
portfolio-with-ox-alpha-playground/
├── index.html   # Hero, About, Skills, Projects, Contact, Footer
├── styles.css   # Theme, layout, components, breakpoints
├── script.js    # Nav, scroll, typing, reveal, bars, counters, form
└── README.md
```

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/ronakmaniya/portfolio-with-ox-alpha-playground.git
cd portfolio-with-ox-alpha-playground

# Run — pick one, no install needed
npx serve .
# or
python -m http.server 8000
# or just double-click index.html
```

Open `http://localhost:8000` (or the port shown).

## 🌐 Deployment

This demo is already live via **GitHub Pages** (`main` → `/`):

- Live URL: https://ronakmaniya.github.io/portfolio-with-ox-alpha-playground/
- To redeploy: just `git push origin main` — Pages rebuilds in ~1 min.
- To deploy your own fork: repo → `Settings` → `Pages` → `Deploy from a branch` → `main` / `(root)`.

The main portfolio deploys differently (see its [README](https://github.com/ronakmaniya/My-Portfolio-Ronak-2.0)): frontend on **Vercel** (`npm run build` → `dist`), backend on **Render** (`gunicorn core.wsgi`).

## 🎨 Customization

- **Identity/links:** search `ronakmaniya` in `index.html` → replace GitHub, LinkedIn, `hello@ronakmaniya.dev`.
- **Projects:** edit the three `.project-card` blocks (title, description, chips, URLs).
- **Skills:** edit labels + `.skill-fill[data-level]` percentages.
- **Stats:** edit `.stat-card__num[data-count]` values.
- **Theme:** tweak `:root` vars in `styles.css` (`--bg`, `--accent`, `--gradient`, …).
- **Typing:** edit the `phrases` array in `script.js`.

## 👤 Author

**Ronak Maniya** — Full-Stack Developer (Remote · India)

- GitHub: [@ronakmaniya](https://github.com/ronakmaniya)
- LinkedIn: [ronak-maniya](https://linkedin.com/in/ronak-maniya)
- Main portfolio: [ronak-maniya.vercel.app](https://ronak-maniya.vercel.app/)

## 📄 License

Personal demo project — free to fork for learning. Credit appreciated but not required. For the production codebase and its terms, see [My-Portfolio-Ronak-2.0](https://github.com/ronakmaniya/My-Portfolio-Ronak-2.0).

---

<p align="center">Designed & built with ♥ and too much chai</p>

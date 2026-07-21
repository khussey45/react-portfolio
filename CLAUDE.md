# CLAUDE.md

Personal portfolio site for Kieren Hussey (full stack developer), deployed to https://kierenhussey.com via GitHub Pages.

## Stack

- Create React App (react-scripts 5) + React 18
- Tailwind CSS 3 (theme customized in `tailwind.config.js`)
- No TypeScript, no router in use, no backend

## Commands

- `npm start` — dev server at localhost:3000
- `npm run build` — production build into `build/`
- `npm run deploy` — builds and publishes `build/` to GitHub Pages (gh-pages branch). `public/CNAME` maps the custom domain — don't delete it.
- `npm test` — Jest via react-scripts (watch mode)

## Architecture

- `src/data/portfolio.js` — **all site content lives here** (name, bio, skills, experience, projects, contact). To add a project or update text, edit this file only; components just render it.
- `src/components/Portfolio.js` — page shell: nav, section layout, footer.
- `src/components/sections/` — one component per page section (Hero, About, Experience, Projects, Skills, Contact).
- `src/index.css` — Tailwind directives plus a small set of custom utilities (grid background, glow effects). Prefer Tailwind classes in JSX over adding CSS here; never use `!important` overrides.
- `public/` — project screenshots and profile images referenced by `src/data/portfolio.js` (root-relative paths like `/flyfall.png`).

## Design system

See `docs/DESIGN.md`. Short version: dark terminal/engineering aesthetic, single accent color (`accent` in the Tailwind theme), monospace labels via `font-mono`, numbered sections. Stay within the theme tokens defined in `tailwind.config.js` — don't introduce raw hex values in JSX.

## Conventions

- `build/` is committed output from gh-pages deploys — never hand-edit it.
- Images: add to `public/`, reference root-relative (`/name.png`).
- External links need `target="_blank" rel="noopener noreferrer"`.

# kierenhussey.com

Personal portfolio for Kieren Hussey — technology developer exploring robotics, AI, and software. Live at [kierenhussey.com](https://kierenhussey.com).

Built with React 18 (Create React App) and Tailwind CSS 3, deployed to GitHub Pages.

## Development

```bash
npm install
npm start        # dev server at http://localhost:3000
```

## Updating content

All site content (bio, skills, experience, projects, contact links) lives in one file:

```
src/data/portfolio.js
```

To add a project: drop a screenshot in `public/`, then add an entry to the `projects` array with a root-relative image path (e.g. `/myproject.png`).

## Deploying

```bash
npm run deploy
```

This builds the site and pushes `build/` to the `gh-pages` branch. The custom domain is configured via `public/CNAME`.

## Project layout

```
src/
  data/portfolio.js        # all content
  components/Portfolio.js  # page shell (nav, layout, footer)
  components/sections/     # CurrentFocus, AI, Skills, Projects, Contact
  index.css                # Tailwind + a few custom utilities
docs/DESIGN.md             # design system notes
```

## Current design

A minimalist dark portfolio led by the robotic arm project, followed by AI, the broader toolkit, projects, and contact. “Technology Developer” is a working title.

To replace the temporary robotic arm visual, add your photo to `public/` and update the entries in `currentFocus.images` (`src`, `alt`, and `caption`) in `src/data/portfolio.js`. The `public/robot-arm*-placeholder.png` files are AI-generated concept images. Add more entries to `currentFocus.images` to expand the carousel; its arrows and counter update automatically. `public/og.png` is the generated social preview. Existing project images are unchanged.

Add your specific AI tools and examples in `ai`; replace the temporary note when ready. Engineering topics are currently labeled as study, rather than professional credentials.

# kierenhussey.com

Personal portfolio for Kieren Hussey — full stack developer. Live at [kierenhussey.com](https://kierenhussey.com).

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
  components/sections/     # Hero, About, Experience, Projects, Skills, Contact
  index.css                # Tailwind + a few custom utilities
docs/DESIGN.md             # design system notes
```

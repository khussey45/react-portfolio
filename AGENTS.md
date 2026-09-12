# Portfolio direction

- Present Kieren Hussey as a multidisciplinary technology builder, moving away from the “Full Stack Developer” identity. “Technology Developer” is a working title, not a final choice.
- Keep the page minimalist: clear typography, generous spacing, restrained color and motion, and concise, concrete copy.

## Page order

1. **Navigation:** keep Kieren’s name prominent, similar to the current navbar, with links to the page sections.
2. **Current focus:** lead with the current project or focus of study and a short explanation of what Kieren is building or learning.
3. **AI stack and experience:** highlight practical work with LLMs, agents, agent harnesses, and Model Context Protocol (MCP), supported by specific tools and examples when supplied.
4. **Broader technical stack:** cover CAD, web development, C/C++, Python, and mechanical and electrical engineering. Distinguish hands-on experience from areas of study.
5. **Background & experience:** show the existing work and education history in its own section below the toolkit.
6. **Projects:** include all portfolio projects with brief descriptions, technologies, and links to their websites or repositories where available.
7. **Contact:** finish with email and links to relevant profiles and websites.

## Implementation

- Never commit code or push to Git remotes. Kieren controls all Git commits and pushes.
- Keep work local. Do not deploy, publish, or push to hosting services unless Kieren explicitly asks.
- Use the existing React and Tailwind setup. Keep content in `src/data/portfolio.js`, page composition in `src/components/Portfolio.js`, and sections in `src/components/sections/`.
- Preserve existing project and contact information unless asked to change it. Do not invent experience, credentials, tools used, current work, or URLs; ask for missing details when needed.
- Keep the layout responsive, navigation accessible, and links descriptive. Reuse the existing design tokens where practical.
- Run `npm run build` after code changes; documentation-only edits do not need a build.

# Design direction

Styling follows the supplied portfolio mockup: deep black and navy backgrounds, pale typography, blue gradient headings, cyan accents, subtle grid and glow effects, rounded calls to action, and outlined cards. Preserve the existing portfolio information, photos, and section order. CSS variables in `src/index.css` define the palette; fonts remain Space Grotesk and JetBrains Mono.

Page order: current robotic arm project, AI and tools, broader toolkit, standalone background and experience, existing projects, contact. Keep the name in the navigation and use natural anchor links.

Use concise, factual copy. AI-specific tools and project notes remain to be supplied. Clearly label generated imagery as a concept until replaced with project photography. Preserve the original three project images and links.

Responsive layouts collapse to one column on phones, with a toggleable navigation menu. Maintain keyboard focus styles, a skip link, semantic headings, and reduced-motion support.

The current-project image carousel is manual, with previous/next buttons, a counter, clickable thumbnails, and left/right keyboard navigation. Store slides in `currentFocus.images`; use meaningful alt text and captions.

Decorative background images live in `public/backgrounds/`: `engineering-blueprint.webp` for the current project and toolkit, and `circuit-board.webp` for AI and contact. Both are generated artwork, not project documentation. CSS pseudo-elements apply dark overlays and edge fades; backgrounds are noninteractive and decorative. Keep existing project photography separate.

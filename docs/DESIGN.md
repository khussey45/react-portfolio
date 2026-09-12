# Design direction

A minimalist engineering notebook: charcoal background, pale type, muted teal accents, generous spacing, fine borders, and understated numbered sections. CSS variables in `src/index.css` define the palette; fonts remain Space Grotesk and JetBrains Mono.

Page order: current robotic arm project, AI and tools, broader toolkit, standalone background and experience, existing projects, contact. Keep the name in the navigation and use natural anchor links.

Use concise, factual copy. AI-specific tools and project notes remain to be supplied. Clearly label generated imagery as a concept until replaced with project photography. Preserve the original three project images and links.

Responsive layouts collapse to one column on phones, with a toggleable navigation menu. Maintain keyboard focus styles, a skip link, semantic headings, and reduced-motion support.

The current-project image carousel is manual, with previous/next buttons, a counter, and left/right keyboard navigation. Store slides in `currentFocus.images`; use meaningful alt text and captions.

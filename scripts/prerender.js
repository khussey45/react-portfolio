/**
 * Post-build step: bakes the content of src/data/portfolio.js into build/index.html
 * as real, crawlable HTML.
 *
 * The React app is client-rendered, so the shipped index.html is an empty
 * <div id="root">. Anything that reads raw HTML without running JavaScript —
 * AI crawlers (GPTBot, ClaudeBot, PerplexityBot), link unfurlers, resume/ATS
 * scrapers, curl — sees a blank page. This injects a semantic fallback inside
 * #root plus JSON-LD structured data, and writes a plain-text llms.txt.
 *
 * The fallback is hidden in JS-capable browsers via the `js` class on <html>
 * (set by an inline script in public/index.html), and React clears #root on
 * mount anyway, so there is no flash and no duplicate content for users.
 *
 * Runs automatically after `npm run build` via the `postbuild` script.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DATA_FILE = path.join(ROOT, "src", "data", "portfolio.js");
const BUILD_DIR = path.join(ROOT, "build");
const INDEX_FILE = path.join(BUILD_DIR, "index.html");
const SITE_URL = "https://kierenhussey.com";

/** Load the ES-module data file from a CommonJS script without a bundler. */
function loadPortfolioData() {
  const source = fs.readFileSync(DATA_FILE, "utf8");
  const body = source.replace(
    /export\s+default\s+portfolioData\s*;?/,
    "return portfolioData;"
  );
  if (body === source) {
    throw new Error(
      "prerender: could not find `export default portfolioData` in src/data/portfolio.js"
    );
  }
  // eslint-disable-next-line no-new-func
  return new Function(body)();
}

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function buildFallbackHtml(data) {
  const { contact } = data;

  const skills = data.broaderStack
    .map(
      (group) => `      <li><strong>${escapeHtml(group.label)}:</strong> ${group.skills
        .map(escapeHtml)
        .join(", ")}</li>`
    )
    .join("\n");

  const experience = data.experience
    .map(
      (job) => `      <li>
        <h3>${escapeHtml(job.position)} — ${escapeHtml(job.company)}</h3>
        <p>${escapeHtml(job.period)}</p>
        <p>${escapeHtml(job.description)}</p>
      </li>`
    )
    .join("\n");

  const projects = data.projects
    .map(
      (project) => `      <li>
        <h3><a href="${escapeHtml(project.url)}">${escapeHtml(project.title)}</a></h3>
        <p>${escapeHtml(project.description)}</p>
        <p>Built with: ${project.technologies.map(escapeHtml).join(", ")}</p>
      </li>`
    )
    .join("\n");

  return `<div id="prerender-fallback">
  <header>
    <h1>${escapeHtml(data.name)}</h1>
    <p>${escapeHtml(data.title)} — ${escapeHtml(contact.location)}</p>
    <p>${escapeHtml(data.bio)}</p>
  </header>
  <main>
    <section>
      <h2>Current focus: ${escapeHtml(data.currentFocus.title)}</h2>
      <p>${escapeHtml(data.currentFocus.description)}</p>
    </section>
    <section>
      <h2>AI &amp; tools</h2>
      <p>${escapeHtml(data.ai.description)}</p>
      <ul>${data.ai.areas.map(area => `<li><strong>${escapeHtml(area.title)}</strong>: ${escapeHtml(area.description)}</li>`).join("")}</ul>
      <p>${escapeHtml(data.ai.note)}</p>
    </section>
    <section>
      <h2>Skills</h2>
      <ul>
${skills}
      </ul>
    </section>
    <section>
      <h2>Experience</h2>
      <ul>
${experience}
      </ul>
    </section>
    <section>
      <h2>Projects</h2>
      <ul>
${projects}
      </ul>
    </section>
    <section>
      <h2><a href="/research">${escapeHtml(data.studies.title)}</a></h2>
      <p>${escapeHtml(data.studies.description)}</p>
    </section>
    <section>
      <h2>Contact</h2>
      <ul>
        <li>Email: <a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></li>
        <li>Location: ${escapeHtml(contact.location)}</li>
        <li>GitHub: <a href="${escapeHtml(contact.github.url)}">${escapeHtml(contact.github.label)}</a></li>
        <li>LinkedIn: <a href="${escapeHtml(contact.linkedin.url)}">${escapeHtml(contact.linkedin.label)}</a></li>
      </ul>
    </section>
  </main>
</div>`;
}

function buildJsonLd(data) {
  const { contact } = data;

  const graph = [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: data.name,
      jobTitle: data.title,
      description: data.bio,
      email: `mailto:${contact.email}`,
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        addressRegion: "Ontario",
        addressCountry: "CA",
      },
      sameAs: [contact.github.url, contact.linkedin.url],
      knowsAbout: data.broaderStack.flatMap((group) => group.skills),
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Georgian College",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: `${data.name} — ${data.title}`,
      about: { "@id": `${SITE_URL}/#person` },
      hasPart: data.projects.map((project) => ({
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        url: project.url,
        applicationCategory: "WebApplication",
        author: { "@id": `${SITE_URL}/#person` },
        keywords: project.technologies.join(", "),
      })),
    },
  ];

  const payload = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
  // Guard against the JSON closing the script tag early.
  return `<script type="application/ld+json">${payload.replace(/</g, "\\u003c")}</script>`;
}

function buildLlmsTxt(data) {
  const { contact } = data;
  const lines = [
    `# ${data.name}`,
    "",
    `> ${data.title} based in ${contact.location}. ${data.bio}`,
    "",
    "## Current focus",
    data.currentFocus.title.replace(/\n/g, " "),
    data.currentFocus.description,
    "",
    "## AI & tools",
    data.ai.description,
    ...data.ai.areas.map(area => `- ${area.title}: ${area.description}`),
    data.ai.note,
    "",
    "## Skills",
    ...data.broaderStack.map((group) => `- ${group.label}: ${group.skills.join(", ")}`),
    "",
    "## Experience",
    ...data.experience.flatMap((job) => [
      `- ${job.position}, ${job.company} (${job.period})`,
      `  ${job.description}`,
    ]),
    "",
    "## Projects",
    ...data.projects.flatMap((project) => [
      `- [${project.title}](${project.url})`,
      `  ${project.description}`,
      `  Tech: ${project.technologies.join(", ")}`,
    ]),
    "",
    "## Contact",
    `- Email: ${contact.email}`,
    `- Location: ${contact.location}`,
    `- GitHub: ${contact.github.url}`,
    `- LinkedIn: ${contact.linkedin.url}`,
    "",
  ];
  return lines.join("\n");
}

function main() {
  if (!fs.existsSync(INDEX_FILE)) {
    throw new Error(`prerender: ${INDEX_FILE} not found — run \`npm run build\` first.`);
  }

  const data = loadPortfolioData();
  let html = fs.readFileSync(INDEX_FILE, "utf8");

  const rootTag = '<div id="root"></div>';
  if (!html.includes(rootTag)) {
    throw new Error("prerender: empty <div id=\"root\"></div> not found in build/index.html");
  }

  const studies = data.studies;
  const researchBody = `<div id="prerender-fallback"><header><a href="/">${escapeHtml(data.name)}</a></header><main><h1>${escapeHtml(studies.title)} — ${escapeHtml(studies.heading)}</h1><p>${escapeHtml(studies.description)}</p>${studies.topics.map(topic => `<article><h2><a href="/research/${escapeHtml(topic.slug)}">${escapeHtml(topic.title)}</a></h2></article>`).join('')}${studies.entries.length ? studies.entries.map(entry => `<article id="${escapeHtml(entry.id)}"><h2>${escapeHtml(entry.title)}</h2><p>${escapeHtml(entry.summary)}</p>${entry.paragraphs.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('')}</article>`).join('') : ''}</main></div>`;
  const researchTitle = `${studies.title} — ${data.name}`;
  const researchHtml = html.replace(rootTag, `<div id="root">${researchBody}</div>`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(researchTitle)}</title>`)
    .replaceAll(`${SITE_URL}/"`, `${SITE_URL}/research"`)
    .replaceAll('Kieren Hussey — Technology Developer', escapeHtml(researchTitle))
    .replaceAll('Kieren Hussey — exploring robotics, AI, and software. Current work, technical toolkit, and projects.', escapeHtml(studies.description))
    .replace('content="profile"', 'content="website"');
  fs.mkdirSync(path.join(BUILD_DIR, 'research'), { recursive: true });
  fs.writeFileSync(path.join(BUILD_DIR, 'research', 'index.html'), researchHtml);
  for (const topic of studies.topics) {
    const topicTitle = `${topic.title} — ${data.name}`;
    const topicBody = `<div id="prerender-fallback"><header><a href="/research">${escapeHtml(studies.backToResearchLabel)}</a></header><main><h1>${escapeHtml(topic.title)}</h1><h2>${escapeHtml(studies.emptyTitle)}</h2><p>${escapeHtml(studies.emptyDescription)}</p></main></div>`;
    const topicHtml = researchHtml.replace(researchBody, topicBody)
      .replaceAll(escapeHtml(researchTitle), escapeHtml(topicTitle))
      .replaceAll(`${SITE_URL}/research"`, `${SITE_URL}/research/${topic.slug}"`)
      .replaceAll(escapeHtml(studies.description), escapeHtml(`${topic.title}. ${studies.emptyDescription}`));
    const topicDir = path.join(BUILD_DIR, 'research', topic.slug);
    fs.mkdirSync(topicDir, { recursive: true });
    fs.writeFileSync(path.join(topicDir, 'index.html'), topicHtml);
  }
  const sitemapFile = path.join(BUILD_DIR, 'sitemap.xml');
  const sitemap = fs.readFileSync(sitemapFile, 'utf8').replace('</urlset>',
    studies.topics.map(topic => `  <url><loc>${SITE_URL}/research/${topic.slug}</loc><changefreq>monthly</changefreq></url>`).join('\n') + '\n</urlset>');
  fs.writeFileSync(sitemapFile, sitemap);


  html = html.replace(rootTag, `<div id="root">${buildFallbackHtml(data)}</div>`);
  html = html.replace("</head>", `${buildJsonLd(data)}</head>`);

  fs.writeFileSync(INDEX_FILE, html);
  fs.writeFileSync(path.join(BUILD_DIR, "llms.txt"), buildLlmsTxt(data));

  const kb = (Buffer.byteLength(html) / 1024).toFixed(1);
  console.log(`prerender: injected content + JSON-LD into build/index.html (${kb} kB)`);
  console.log("prerender: wrote build/llms.txt");
}

main();

import React, { useEffect, useState } from 'react';
import data from '../data/portfolio';
import CurrentFocus from './sections/CurrentFocus';
import AI from './sections/AI';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Studies from './sections/Studies';
import Research from './sections/Research';
import ResearchTopic from './sections/ResearchTopic';

const links = [['focus', 'Now'], ['ai', 'AI'], ['skills', 'Toolkit'], ['experience', 'Experience'], ['projects', 'Projects'], ['research', 'Research'], ['contact', 'Contact']];

export default function Portfolio() {
  const pathname = window.location.pathname.replace(/\/$/, '');
  const topic = data.studies.topics.find(item => pathname === `/research/${item.slug}`);
  const isResearch = pathname === '/research' || Boolean(topic);
  const homeLink = (id) => `${isResearch ? '/' : ''}#${id}`;
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.title = isResearch ? `${topic ? topic.title : data.studies.title} — ${data.name}` : `${data.name} — ${data.title}`;
  }, [isResearch, topic]);
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <nav className="container nav" aria-label="Main navigation">
          <a className="brand" href={homeLink('focus')} onClick={() => setMenuOpen(false)}><span className="brand-monogram" aria-hidden="true">K<span>H</span></span><span className="brand-name">KIEREN HUSSEY</span></a>
          <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close −' : 'Menu +'}</button>
          <div id="nav-links" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            {links.map(([id, label]) => <a key={id} href={id === 'research' ? '/research' : homeLink(id)} aria-current={id === 'research' && isResearch ? (topic ? 'location' : 'page') : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </div>
          <a className="nav-cta" href={homeLink('contact')}>Let’s build <span aria-hidden="true">→</span></a>
        </nav>
      </header>
      <main id="main" className="container" style={{
        '--blueprint-background': `url("${process.env.PUBLIC_URL}/backgrounds/engineering-blueprint.webp")`,
        '--circuit-background': `url("${process.env.PUBLIC_URL}/backgrounds/circuit-board.webp")`,
      }}>
        {topic ? <ResearchTopic topic={topic} /> : isResearch ? <Research /> : <>
        <CurrentFocus />
        <AI />
        <Skills />
        <Experience />
        <Projects />
        <Studies />
        <Contact />
        </>}
      </main>
      <footer className="container footer"><span>© {new Date().getFullYear()} {data.name}</span><span>Always a work in progress.</span><a href={homeLink('focus')}>Back to top ↑</a></footer>
    </>
  );
}

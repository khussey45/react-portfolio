import React, { useState } from 'react';
import data from '../data/portfolio';
import CurrentFocus from './sections/CurrentFocus';
import AI from './sections/AI';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const links = [['focus', 'Now'], ['ai', 'AI'], ['skills', 'Toolkit'], ['experience', 'Experience'], ['projects', 'Projects'], ['contact', 'Contact']];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <nav className="container nav" aria-label="Main navigation">
          <a className="brand" href="#focus" onClick={() => setMenuOpen(false)}>KIEREN <span>/</span> HUSSEY<span className="brand-dot">.</span></a>
          <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close −' : 'Menu +'}</button>
          <div id="nav-links" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </div>
        </nav>
      </header>
      <main id="main" className="container">
        <CurrentFocus />
        <AI />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="container footer"><span>© {new Date().getFullYear()} {data.name}</span><span>Always a work in progress.</span><a href="#focus">Back to top ↑</a></footer>
    </>
  );
}

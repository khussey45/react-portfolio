import React, { useEffect, useState } from 'react';
import portfolioData from '../data/portfolio';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

const SECTIONS = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Track which section is on screen so the nav highlight follows scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (section) => {
    setMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = (
    <>
      {SECTIONS.map((item, index) => (
        <button
          key={item}
          onClick={() => handleNavClick(item)}
          className={`font-mono text-sm capitalize transition-colors ${
            activeSection === item ? 'text-accent' : 'text-fog-300 hover:text-accent'
          }`}
        >
          <span className="text-fog-500 mr-1">0{index}.</span>
          {item}
        </button>
      ))}
    </>
  );

  return (
    <div className="min-h-screen overflow-hidden">
      <nav className="fixed top-0 w-full z-20 border-b border-ink-800/80 bg-ink-950/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 font-mono font-bold text-fog-100 hover:text-accent transition-colors"
          >
            <span className="brand-mark" aria-hidden="true">KH</span>
            <span className="hidden sm:block text-xs tracking-[0.16em]">KIEREN / HUSSEY</span>
          </button>
          <div className="hidden md:flex gap-7">{navLinks}</div>
          <button
            className="md:hidden text-fog-300 hover:text-accent transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="font-mono text-xs tracking-widest">{menuOpen ? 'CLOSE' : 'INDEX'}</span>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 px-6 pb-6 border-t border-ink-800 pt-4 items-start">
            {navLinks}
          </div>
        )}
      </nav>

      <main>
        <Hero onContactClick={() => handleNavClick('contact')} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-ink-800 py-8 bg-ink-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-sm text-fog-500">
            © {new Date().getFullYear()} {portfolioData.name} — React / Three.js / Toronto
          </p>
          <div className="flex gap-5 font-mono text-xs">
            <a
              href={portfolioData.contact.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fog-500 hover:text-accent transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={portfolioData.contact.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fog-500 hover:text-accent transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

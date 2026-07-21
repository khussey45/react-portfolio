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
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-20 border-b border-ink-800 bg-ink-950/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => handleNavClick('home')}
            className="font-mono font-bold text-fog-100 hover:text-accent transition-colors"
          >
            <span className="text-accent"></span>kierenhussey
          </button>
          <div className="hidden md:flex gap-6">{navLinks}</div>
          <button
            className="md:hidden text-fog-300 hover:text-accent transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 px-6 pb-6 border-t border-ink-800 pt-4 items-start">
            {navLinks}
          </div>
        )}
      </nav>

      <main className="pt-16">
        <Hero onContactClick={() => handleNavClick('contact')} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-ink-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-sm text-fog-500">
            © {new Date().getFullYear()} {portfolioData.name} — built with React & Tailwind
          </p>
          <div className="flex gap-5">
            <a
              href={portfolioData.contact.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-fog-500 hover:text-accent transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={portfolioData.contact.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-fog-500 hover:text-accent transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

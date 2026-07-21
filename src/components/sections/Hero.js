import React, { useEffect, useState } from 'react';
import portfolioData from '../../data/portfolio';

const Hero = ({ onContactClick }) => {
  const [typed, setTyped] = useState('');
  const name = portfolioData.name;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setTyped(name.slice(0, i));
      if (i >= name.length) clearInterval(timer);
    }, 70);
    return () => clearInterval(timer);
  }, [name]);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid grid-fade" aria-hidden="true" />
      <div className="relative max-w-3xl mx-auto px-6 w-full animate-fade-up">
        <div className="rounded-lg border border-ink-800 bg-ink-900/80 backdrop-blur px-6 py-5 mb-10 font-mono text-sm">
          <div className="flex gap-2 mb-4" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-ink-700" />
            <span className="w-3 h-3 rounded-full bg-ink-700" />
            <span className="w-3 h-3 rounded-full bg-accent/60" />
          </div>
          <p className="text-fog-500">
            <span className="text-accent">~</span> $ whoami
          </p>
          <p className="text-fog-100 text-2xl sm:text-4xl font-bold mt-2 font-sans">
            {typed}
            <span className="text-accent animate-blink">▍</span>
          </p>
          <p className="text-fog-500 mt-4">
            <span className="text-accent">~</span> $ cat role.txt
          </p>
          <p className="text-fog-300 mt-1">{portfolioData.title}</p>
        </div>

        <p className="text-lg text-fog-300 max-w-2xl mb-8">{portfolioData.bio}</p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={onContactClick}
            className="px-6 py-3 rounded font-mono text-sm bg-accent text-ink-950 font-semibold hover:bg-accent/80 transition-colors"
          >
            Get in touch →
          </button>
          <a
            href={portfolioData.contact.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded font-mono text-sm border border-ink-700 text-fog-300 hover:border-accent/40 hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

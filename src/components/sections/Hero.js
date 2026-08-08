import React from 'react';
import portfolioData from '../../data/portfolio';
import OrbitScene from '../OrbitScene';

const Hero = ({ onContactClick }) => {
  return (
    <section id="home" className="hero-observatory relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid grid-fade" aria-hidden="true" />
      <div className="hero-coordinate-lines" aria-hidden="true" />
      <OrbitScene />
      <div className="relative max-w-6xl mx-auto px-6 w-full py-28 md:py-36">
        <div className="max-w-2xl animate-fade-up">
          <p className="eyebrow mb-7"><span>SYS.01</span> Portfolio / 2026</p>
          <h1 className="hero-title text-fog-100 font-bold leading-none tracking-[-0.055em]">
            I build systems<br />
            <span className="text-accent">that hold orbit.</span>
          </h1>
          <p className="text-lg sm:text-xl text-fog-300 max-w-xl mt-8 leading-relaxed">
            {portfolioData.name} is a full stack developer turning complex requirements into clear, dependable digital products.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
          <button
            onClick={onContactClick}
            className="signal-button signal-button-primary"
          >
            Start a conversation <span aria-hidden="true">↗</span>
          </button>
          <a
            href={portfolioData.contact.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="signal-button"
          >
            Explore GitHub <span aria-hidden="true">↗</span>
          </a>
          </div>
        </div>
        <div className="hero-status" aria-label="Current status">
          <span className="status-pulse" aria-hidden="true" />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fog-500">Current signal</p>
            <p className="text-sm text-fog-100 mt-1">Available for the next build</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

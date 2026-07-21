import React from 'react';
import portfolioData from '../../data/portfolio';
import SectionHeading from './SectionHeading';

const About = () => (
  <section id="about" className="py-24 max-w-4xl mx-auto px-6">
    <SectionHeading number="01" title="About" />
    <div className="flex flex-col md:flex-row gap-10 items-start">
      <div className="relative shrink-0 mx-auto md:mx-0 group">
        <div
          className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg border border-accent/40 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"
          aria-hidden="true"
        />
        <img
          src="/profile.jpeg"
          alt={`${portfolioData.name} profile`}
          className="relative w-64 h-64 object-cover rounded-lg border border-ink-700"
        />
      </div>
      <div>
        <p className="text-fog-300 mb-4 leading-relaxed">{portfolioData.bio}</p>
        <p className="text-fog-300 leading-relaxed">
          I like working across the whole stack — shipping CRUD apps used by real
          people, and building games when I want to get closer to the metal.
        </p>
        <p className="font-mono text-sm text-fog-500 mt-6">
          <span className="text-accent">{'//'}</span> based in {portfolioData.contact.location}
        </p>
      </div>
    </div>
  </section>
);

export default About;

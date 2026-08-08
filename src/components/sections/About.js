import React from 'react';
import portfolioData from '../../data/portfolio';
import SectionHeading from './SectionHeading';

const About = () => (
  <section id="about" className="signal-section py-28 max-w-6xl mx-auto px-6">
    <SectionHeading number="01" title="About" />
    <div className="grid md:grid-cols-[1.25fr_0.75fr] gap-10 md:gap-20 items-end">
      <div>
        <p className="text-fog-100 text-3xl sm:text-4xl md:text-5xl leading-[1.12] tracking-[-0.04em]">
          {portfolioData.bio}
        </p>
      </div>
      <div className="border-l border-accent/30 pl-6 md:pl-8">
        <p className="font-mono text-[10px] tracking-[0.2em] text-accent mb-5">WORKING PRINCIPLE</p>
        <p className="text-fog-300 text-lg leading-relaxed">
          I like working across the whole stack — shipping CRUD apps used by real
          people, and building games when I want to get closer to the metal.
        </p>
      </div>
    </div>
    <div className="data-strip mt-14">
          <p><span>BASE</span>{portfolioData.contact.location}</p>
          <p><span>MODE</span>Frontend ↔ Backend</p>
          <p><span>FOCUS</span>Useful systems</p>
    </div>
  </section>
);

export default About;

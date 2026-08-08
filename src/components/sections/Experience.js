import React from 'react';
import portfolioData from '../../data/portfolio';
import SectionHeading from './SectionHeading';

const Experience = () => (
  <section id="experience" className="signal-section py-28 max-w-6xl mx-auto px-6">
    <SectionHeading number="02" title="Experience" />
    <div className="border-t border-ink-700">
      {portfolioData.experience.map((job, index) => (
        <div
          key={job.company}
          className="experience-row grid md:grid-cols-[0.12fr_0.88fr_1fr] gap-5 md:gap-10 py-8 border-b border-ink-800"
        >
          <span className="font-mono text-xs text-accent">0{index + 1}</span>
          <div>
            <h3 className="text-xl font-bold text-fog-100">{job.position}</h3>
            <p className="font-mono text-xs text-fog-500 mt-2">{job.period}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-accent mb-3">{job.company}</p>
            <p className="text-fog-300 leading-relaxed">{job.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;

import React from 'react';
import portfolioData from '../../data/portfolio';
import SectionHeading from './SectionHeading';

const Experience = () => (
  <section id="experience" className="py-24 max-w-4xl mx-auto px-6">
    <SectionHeading number="02" title="Experience" />
    <div className="space-y-4">
      {portfolioData.experience.map((job) => (
        <div
          key={job.company}
          className="rounded-lg border border-ink-800 bg-ink-900 p-6 hover:border-accent/40 transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
            <h3 className="text-xl font-bold text-fog-100">{job.position}</h3>
            <span className="font-mono text-sm text-fog-500">{job.period}</span>
          </div>
          <p className="font-mono text-sm text-accent mb-3">{job.company}</p>
          <p className="text-fog-300 leading-relaxed">{job.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;

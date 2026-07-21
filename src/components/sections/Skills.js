import React from 'react';
import portfolioData from '../../data/portfolio';
import SectionHeading from './SectionHeading';

const Skills = () => (
  <section id="skills" className="py-24 max-w-4xl mx-auto px-6">
    <SectionHeading number="04" title="Skills" />
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {portfolioData.skillGroups.map((group) => (
        <div
          key={group.label}
          className="rounded-lg border border-ink-800 bg-ink-900 p-6"
        >
          <p className="font-mono text-sm text-accent mb-4">
            <span className="text-fog-500">$</span> {group.label.toLowerCase().replace(/[^a-z]+/g, '_')}
          </p>
          <ul className="space-y-2">
            {group.skills.map((skill) => (
              <li key={skill} className="flex items-center gap-2 text-fog-300">
                <span className="text-accent text-xs" aria-hidden="true">▸</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;

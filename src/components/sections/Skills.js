import React from 'react';
import portfolioData from '../../data/portfolio';
import SectionHeading from './SectionHeading';

const Skills = () => (
  <section id="skills" className="signal-section py-28 max-w-6xl mx-auto px-6">
    <SectionHeading number="04" title="Capability map" />
    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-ink-800">
      {portfolioData.skillGroups.map((group, index) => (
        <div
          key={group.label}
          className="capability-cell border-r border-b border-ink-800 p-7 sm:p-9"
        >
          <p className="font-mono text-[10px] tracking-[0.2em] text-accent mb-8">
            NODE / 0{index + 1}
          </p>
          <h3 className="text-xl text-fog-100 font-bold mb-5">{group.label}</h3>
          <ul className="space-y-2">
            {group.skills.map((skill) => (
              <li key={skill} className="flex items-center gap-3 text-fog-300">
                <span className="w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
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

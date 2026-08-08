import React from 'react';

const SectionHeading = ({ number, title }) => (
  <div className="section-heading mb-12">
    <span className="font-mono text-accent text-xs tracking-[0.2em]">SYS.{number}</span>
    <h2 className="text-4xl sm:text-5xl font-bold text-fog-100 tracking-[-0.04em] mt-3">{title}</h2>
  </div>
);

export default SectionHeading;

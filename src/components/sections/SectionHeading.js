import React from 'react';

const SectionHeading = ({ number, title }) => (
  <div className="flex items-baseline gap-3 mb-12">
    <span className="font-mono text-accent text-lg">{number}.</span>
    <h2 className="text-3xl font-bold text-fog-100">{title}</h2>
    <div className="hidden sm:block flex-1 h-px bg-ink-800 self-center ml-4" />
  </div>
);

export default SectionHeading;

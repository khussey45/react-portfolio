import React from 'react';
import data from '../../data/portfolio';
import SectionHeading from './SectionHeading';
export default function AI() {
  return <section id="ai" className="section ai-section">
    <SectionHeading number="01" title="AI" />
    <div className="section-intro"><h3>{data.ai.title}<br /><span>Beyond the prompt.</span></h3><p>{data.ai.description}</p></div>
    <div className="ai-grid">{data.ai.areas.map((area, i) => <article className="ai-card" key={area.title}><div className="card-meta"><span>0{i + 1}</span><span>{area.subtitle}</span></div><h4>{area.title}<span aria-hidden="true">{['✳', '↗', '⌘', '↔'][i]}</span></h4><p>{area.description}</p></article>)}</div>
    <p className="section-note">{data.ai.note}</p>
  </section>;
}

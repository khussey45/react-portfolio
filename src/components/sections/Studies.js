import React from 'react';
import data from '../../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Studies() {
  const studies = data.studies;
  return <section id="studies" className="section">
    <SectionHeading number="05" title={studies.title} />
    <a className="studies-tile" href="/research">
      <div><h3>{studies.heading}</h3><p>{studies.description}</p><span className="studies-link">{studies.linkLabel}</span></div>
      <span className="studies-arrow" aria-hidden="true">→</span>
    </a>
  </section>;
}

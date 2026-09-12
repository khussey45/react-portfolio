import React from 'react';
import data from '../../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return <section id="experience" className="section">
    <SectionHeading number="03" title="Background & experience" />
    <div className="experience">
      {data.experience.map(job => <article key={job.company}>
        <span className="tiny-label">{job.period}</span>
        <h3>{job.position}</h3>
        <p className="company">{job.company}</p>
        <p>{job.description}</p>
      </article>)}
    </div>
  </section>;
}

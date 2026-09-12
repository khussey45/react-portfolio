import React from 'react';
import data from '../../data/portfolio';
import SectionHeading from './SectionHeading';
export default function Skills() {
  return <section id="skills" className="section">
    <SectionHeading number="02" title="The broader toolkit" />
    <div className="section-intro"><h3>From pixels<br /><span>to physical things.</span></h3><p>A foundation in software, with a growing interest in the mechanics and electronics that make things move.</p></div>
    <div className="stack-list">{data.broaderStack.map(group => <article className="stack-row" key={group.label}><div><h4>{group.label}</h4><span className="tiny-label">{group.status}</span></div><div className="tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div>
  </section>;
}

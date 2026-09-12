import React from 'react';
import data from '../../data/portfolio';
import SectionHeading from './SectionHeading';
export default function Projects() {
  return <section id="projects" className="section">
    <SectionHeading number="03" title="Projects" />
    <div className="section-intro"><h3>A few things<br /><span>I’ve worked on.</span></h3><p>Web applications, learning tools, and a game. Different problems, each with something new to learn.</p></div>
    <div className="projects-grid">{data.projects.map((project, i) => <a className="project-card" href={project.url} target="_blank" rel="noopener noreferrer" key={project.title} aria-label={`${project.title} — visit website (opens in new tab)`}><div className="project-image"><img src={project.image} alt={`${project.title} screenshot`} loading="lazy" width="640" height="420" /></div><div className="project-topline"><span className="tiny-label">PROJECT / 0{i + 1}</span><span aria-hidden="true">↗</span></div><h4>{project.title}</h4><p>{project.description}</p><div className="project-tech">{project.technologies.join(' / ')}</div><span className="project-visit">Visit website ↗</span></a>)}</div>
  </section>;
}

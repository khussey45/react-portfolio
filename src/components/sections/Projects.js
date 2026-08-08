import React from 'react';
import portfolioData from '../../data/portfolio';
import SectionHeading from './SectionHeading';

const Projects = () => (
  <section id="projects" className="signal-section py-28 max-w-6xl mx-auto px-6">
    <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-5 mb-14">
      <SectionHeading number="03" title="Projects" />
      <p className="font-mono text-xs text-fog-500 max-w-xs sm:text-right mb-12">Three systems / different constraints / one bias toward shipping.</p>
    </div>
    <div className="space-y-5">
      {portfolioData.projects.map((project, index) => (
        <a
          key={project.title}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-signal group"
        >
          <div className="project-index">0{index + 1}</div>
          <div className="relative project-image overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top saturate-[1.1] opacity-90 group-hover:saturate-[1.25] group-hover:opacity-100 group-hover:scale-[1.025] transition-all duration-500"
            />
          </div>
          <div className="flex flex-col justify-center py-7 px-6 md:px-9">
            <p className="font-mono text-[10px] tracking-[0.2em] text-accent mb-3">DEPLOYED SYSTEM</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-fog-100 mb-3 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-fog-300 leading-relaxed mb-5 max-w-xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] uppercase tracking-wider text-fog-500"
                >
                  / {tech}
                </span>
              ))}
            </div>
          </div>
          <span className="project-arrow" aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;

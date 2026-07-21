import React from 'react';
import portfolioData from '../../data/portfolio';
import SectionHeading from './SectionHeading';

const Projects = () => (
  <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
    <SectionHeading number="03" title="Projects" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioData.projects.map((project, index) => (
        <a
          key={project.title}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-lg border border-ink-800 bg-ink-900 overflow-hidden hover:border-accent/40 hover:-translate-y-1 transition-all duration-200"
        >
          <div className="relative h-44 overflow-hidden border-b border-ink-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-300"
            />
          </div>
          <div className="flex flex-col flex-1 p-6">
            <p className="font-mono text-xs text-fog-500 mb-2">
              proj_{String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="text-xl font-bold text-fog-100 mb-2 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-fog-300 text-sm leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2 py-1 rounded border border-ink-700 text-fog-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;

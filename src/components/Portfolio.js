import React, { useState } from 'react';

const Portfolio = () => {
  // State for active navigation section
  const [activeSection, setActiveSection] = useState('home');

  // Portfolio data - replace with your own information
  const portfolioData = {
    name: "Kieren Hussey",
    title: "Full Stack developer",
    bio: "I'm a passionate developer with experience creating web applications. Tech stack includes Angular, Springboot, React, SQL, Python",
    
    skills: [
      { name: "Angular", level: 90 },
      { name: "Springboot", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "React", level: 70 },
      { name: "SQL", level: 80 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "Python", level: 75 }
    ],
    
    experience: [
      {
        company: "Ministry of Children Community & Social Services",
        position: "Jr. Software Engineer",
        period: "January 2024 - February 2025",
        description: "Worked on the My Benefits web app using Angular and Springboot."
      },
      {
        company: "Georgian College",
        position: "Computer Programming",
        period: "2022 - 2024",
        description: "I'm a graduate of Computer Programming Georgian College"
      }
    ],
    
    projects: [
      {
        title: "My Benefits",
        description: "A web app for Ontario Works and Ontario disability support.",
        technologies: ["Angular", "Springboot", "Oracle SQL", "Node.js", "Azure"],
        image: "/MyB.jpeg"
      },
      {
        title: "Hussey World",
        description: "A web app for posting messages for other users to read in a newsfeed",
        technologies: ["Angular", "Springboot", "PostgreSQL", "Linode"],
        image: "/hussey-word.png"
      },
      {
        title: "Kieren Hussey Portfolio Site",
        description: "This is the current site you are on!",
        technologies: ["React", "TailwindCSS", "Node.js"],
        image: "/Portfolio.jpeg"
      }
    ],
    
    contact: {
      email: "kierenhussey@example.com",
      location: "On, Canada",
      github: "github.com/khussey45",
      linkedin: "linkedin.com/in/kieren-hussey-1a9093222"
    }
  };

  const SkillBar = ({ name, level }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="font-medium">{name}</span>
          <span>{level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full" 
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    );
  };

  // Navigation handler
  const handleNavClick = (section) => {
    setActiveSection(section);
    // Smooth scroll to section
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed top-0 w-full z-10">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-blue-600">{portfolioData.name}</span>
            <div className="hidden md:flex space-x-6">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`capitalize ${activeSection === item ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
                >
                  {item}
                </button>
              ))}
            </div>
            {/* Mobile menu button - could be expanded with a dropdown */}
            <button className="md:hidden text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mx-auto px-6 pt-20">
        {/* Hero section */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-600 mb-2">Hello, I'm</p>
            <h1 className="text-5xl font-bold mb-4">{portfolioData.name}</h1>
            <h2 className="text-3xl font-medium text-gray-600 mb-6">{portfolioData.title}</h2>
            <p className="text-xl text-gray-700 mb-8">{portfolioData.bio}</p>
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in touch
            </button>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <img src="/profile.jpeg" alt="Profile" 
                   className="rounded-lg shadow-lg w-full profile-mobile" 
                   style={{ height: '300px', width: '300px', objectFit: 'cover' }}
                   
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
              <p className="text-gray-700 mb-4">
                I'm a full stack developer based in Ontario Canada. My foundation is building web applications that are responsive with CRUD capabilities.
              </p>
              <p className="text-gray-700 mb-4">
                My hobbies and other interests include hiking, reading, playing video games and music production. 
              </p>
              <p className="text-gray-700 mb-4">
                I'm open to explore new technologies with an interest in AI as well as XR including virtual and augmented reality.
              </p>
            </div>
          </div>
        </section>

        {/* Skills section */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>
          <div className="max-w-2xl mx-auto">
            {portfolioData.skills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
        </section>

        {/* Experience section */}
        <section id="experience" className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto">
            {portfolioData.experience.map((job, index) => (
              <div key={index} className="mb-8 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-600 before:rounded-full before:z-10">
                <div className={`${index !== portfolioData.experience.length - 1 ? 'before:content-[\'\'] before:absolute before:left-1.5 before:top-5 before:w-0.5 before:h-full before:bg-gray-200' : ''}`}>
                  <h3 className="text-xl font-bold">{job.position}</h3>
                  <p className="text-gray-600 mb-2">{job.company} | {job.period}</p>
                  <p className="text-gray-700">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Get In Touch</h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  {portfolioData.contact.email}
                </p>
                
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {portfolioData.contact.location}
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                  {portfolioData.contact.github}
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  </svg>
                  {portfolioData.contact.linkedin}
                </p>
              </div>
            </div>
            {/* <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div> */}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} {portfolioData.name}</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://www.linkedin.com/in/kieren-hussey-1a9093222/" target="_blank" className="hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                </svg>
              </a>
              <a href="https://github.com/khussey45" target="_blank" className="hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
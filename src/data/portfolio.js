// All site content lives here. Components only render this data.
const portfolioData = {
  name: "Kieren Hussey",
  title: "Full Stack Developer",
  bio: "I build web applications end to end — from Angular and React frontends to Rails and Spring Boot backends — and games in C++ on the side.",

  skillGroups: [
    {
      label: "Frontend",
      skills: ["Angular", "React", "TypeScript", "JavaScript", "HTML/CSS"],
    },
    {
      label: "Backend & Systems",
      skills: ["Spring Boot", "Ruby on Rails", "Python", "SQL", "C++"],
    },
    {
      label: "Tools & Platforms",
      skills: ["Git/GitHub", "Azure", "Linode", "WebAssembly", "Raylib"],
    },
  ],

  experience: [
    {
      company: "Ministry of Children, Community & Social Services",
      position: "Jr. Software Engineer",
      period: "Jan 2024 — Feb 2025",
      description:
        "Worked on the My Benefits web app serving Ontario Works and ODSP recipients, building features across an Angular frontend and Spring Boot backend.",
    },
    {
      company: "Georgian College",
      position: "Computer Programming Graduate",
      period: "2022 — 2024",
      description:
        "Graduated from the Computer Programming program, covering full stack development, databases, and systems programming.",
    },
  ],

  projects: [
    {
      title: "My Benefits",
      description:
        "Government web app for Ontario Works and Ontario Disability Support recipients to view and manage their benefits.",
      technologies: ["Angular", "Spring Boot", "Oracle SQL", "Node.js", "Azure"],
      image: "/MyB.jpeg",
      url: "https://mybenefits.mcss.gov.on.ca/auth/login",
    },
    {
      title: "Your Learning",
      description:
        "Learning hub for Kindergarten through Grade 12 students, built and deployed end to end.",
      technologies: ["Ruby", "Rails", "SQLite", "Linode"],
      image: "/yourlearning.png",
      url: "https://yourlearning.ca/",
    },
    {
      title: "Fly Fall",
      description:
        "2D ship-flying game written in C++ and compiled to WebAssembly so it runs in the browser.",
      technologies: ["C++", "WASM", "Raylib", "GitHub"],
      image: "/flyfall.png",
      url: "https://flyfall.ca/",
    },
  ],

  contact: {
    email: "khussey45@gmail.com",
    location: "Ontario, Canada",
    github: { label: "github.com/khussey45", url: "https://github.com/khussey45" },
    linkedin: {
      label: "linkedin.com/in/kieren-hussey",
      url: "https://www.linkedin.com/in/kieren-hussey-1a9093222/",
    },
  },
};

export default portfolioData;

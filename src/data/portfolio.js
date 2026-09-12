// All site content lives here. Components only render this data.
const portfolioData = {
  name: "Kieren Hussey",
  title: "Technology Developer",
  bio: "Exploring the space between software, AI, and the physical world. Building things, understanding how they work, and learning along the way.",
  currentFocus: {
    title: "A robotic arm.\nA new set of challenges.",
    description: "My current project is a robotic arm — a place to bring software, mechanical design, and electronics together.",
    images: [
      {
        src: "/robot-arm.jpg",
        alt: "Kieren’s black 3D-printed robotic arm with blue servos and a gripper on a wooden surface",
        caption: "Robotic arm · current build",
      },
      {
        src: "/robot-arm-wiring.jpg",
        alt: "Wiring diagram showing an Arduino Uno, breadboard, bench power supply, and five SG90 servos",
        caption: "Robotic arm · wiring diagram",
      },
    ],
    tags: ["Robotics", "CAD", "Electronics", "Programming"],
  },
  ai: {
    title: "Building with AI.",
    description: "An evolving focus on LLMs and the systems around them: agents, harnesses, and connections to real tools.",
    areas: [
      { title: "LLMs", subtitle: "The models", description: "Language models, context, and the interface between an idea and a useful result." },
      { title: "Agents", subtitle: "The workflows", description: "Tool use, planning, and multi-step workflows that move a task forward." },
      { title: "Harnesses", subtitle: "The environment", description: "The instructions, tools, and feedback around an agent’s work." },
      { title: "MCP", subtitle: "The connections", description: "Model Context Protocol: connecting AI applications to tools and context." },
    ],
    note: "Specific tools and build notes coming soon.",
  },
  broaderStack: [
    { label: "Web development", status: "Experience", skills: ["Ruby on Rails", "Angular", "React", "Spring Boot", "SQL"] },
    { label: "Programming", status: "Experience & exploration", skills: ["C++", "C", "Python"] },
    { label: "Servers & hosting", status: "Experience", skills: ["Linode / Akamai", "Linux", "Ubuntu",] },
    { label: "Design & fabrication", status: "Current study", skills: ["CAD", "Mechanical engineering"] },
    { label: "Electronics & control", status: "Current study", skills: ["Electrical engineering", "Robotics"] },
  ],

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

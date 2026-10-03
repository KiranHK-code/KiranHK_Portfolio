// Edit this file to update all portfolio content.
export const profile = {
  name: "Kiran H K",
  github: "https://github.com/KiranHK-code",
  linkedin: "https://www.linkedin.com/in/your-linkedin",
  email: "kiran@example.com",
  resume: "/resume.pdf",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "420+", label: "GitHub Contributions" },
  { value: "60+", label: "Pull Requests" },
  { value: "30+", label: "Merged External PRs" },
  { value: "2027", label: "Graduation" },
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL"] },
  { category: "Frontend", items: ["React", "React Native", "HTML", "CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Firebase"] },
  { category: "AI", items: ["Generative AI", "LLM APIs", "RAG", "Hugging Face", "AI App Development"] },
  { category: "Tools & Cloud", items: ["Git", "GitHub", "Docker", "Postman", "AWS"] },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  problem: string;
  solution: string;
  architecture: string;
  github: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-career-roadmap",
    name: "AI Career Roadmap",
    tagline: "Mobile · AI · RAG",
    description:
      "An AI-powered mobile application that generates personalized career learning roadmaps based on a user's skills, experience level, and career goals.",
    tech: ["React Native", "Expo", "Firebase", "AI/LLM", "RAG"],
    features: ["Personalized learning roadmap", "Beginner / Intermediate / Advanced levels", "AI-generated learning paths", "Quizzes and exercises", "Firebase authentication"],
    problem: "Learners struggle to find a structured path that matches their current skills and goals.",
    solution: "An LLM with retrieval over curated resources generates a step-by-step roadmap tailored to each user.",
    architecture: "Expo app → Firebase Auth & Firestore → LLM API with RAG over a curated resource index.",
    github: "https://github.com/KiranHK-code",
    featured: true,
  },
  {
    slug: "supply-chain",
    name: "Supply Chain Management",
    tagline: "Dashboard · Forecasting",
    description:
      "An AI-powered logistics dashboard designed to help businesses monitor inventory, forecast demand, optimize routes, and identify supply-chain disruptions.",
    tech: ["React", "Node.js", "PostgreSQL", "Docker", "Google Maps API", "AI"],
    features: ["Demand forecasting", "Warehouse inventory", "Route optimization", "Disruption alerts", "KPI dashboard", "Admin management"],
    problem: "Businesses lack a single view of inventory, demand and logistics risk.",
    solution: "A unified dashboard combining forecasting models, maps-based routing and alerting.",
    architecture: "React client → Node.js/Express API → PostgreSQL, containerized with Docker; Maps API for routing.",
    github: "https://github.com/KiranHK-code",
  },
  {
    slug: "jarvis",
    name: "Jarvis AI Assistant",
    tagline: "Voice · Vision · Local",
    description:
      "A local AI voice assistant capable of understanding voice commands, interacting with applications, answering questions, and processing visual information.",
    tech: ["Python", "AI/LLM APIs", "Speech Recognition", "Text-to-Speech", "Computer Vision"],
    features: ["Voice commands", "AI conversations", "Application control", "Speech recognition", "Text-to-speech", "Screen/image understanding"],
    problem: "Everyday computer tasks still require manual clicks and context switching.",
    solution: "A voice-first assistant that understands intent, controls apps and reasons about the screen.",
    architecture: "Python core → STT → LLM intent/router → OS automation + TTS; vision module for screenshots.",
    github: "https://github.com/KiranHK-code",
  },
  {
    slug: "caresync",
    name: "CareSync",
    tagline: "Healthcare · Location",
    description:
      "A healthcare-focused application designed to simplify access to essential information and services with location-aware functionality.",
    tech: ["React / React Native", "Firebase", "APIs"],
    features: ["Location-aware services", "Essential health information", "Firebase backend"],
    problem: "Finding nearby healthcare services and reliable information is fragmented.",
    solution: "One app surfacing nearby services and essential information based on location.",
    architecture: "React / React Native client → Firebase → third-party location APIs.",
    github: "https://github.com/KiranHK-code",
  },
  {
    slug: "intellihire",
    name: "IntelliHire",
    tagline: "Interview prep · AI",
    description:
      "An AI-powered interview assistant designed to help candidates practice resume-based, aptitude, technical, and interview questions.",
    tech: ["MERN", "AI/LLM APIs", "PostgreSQL", "WebRTC", "JWT"],
    features: ["Resume-based questions", "Aptitude practice", "Technical rounds", "Live mock interviews"],
    problem: "Candidates rarely get realistic, personalized interview practice.",
    solution: "An AI interviewer generating questions from the candidate's resume, with live sessions over WebRTC.",
    architecture: "React client → Express API with JWT → LLM APIs; WebRTC for live sessions.",
    github: "https://github.com/KiranHK-code",
  },
];

export const experience = [
  {
    role: "Frontend / UI/UX Contributor",
    org: "Hyrily",
    period: "Student startup",
    description:
      "Worked on frontend interfaces, low-fidelity UI/UX designs, Firebase authentication, Reddit research, and promotional design work for a student-focused startup.",
    upcoming: false,
  },
  {
    role: "Software Engineering Intern",
    org: "Your next team?",
    period: "2027",
    description: "Open to 2027 internships in software, backend and AI engineering.",
    upcoming: true,
  },
];

export const achievements = [
  { title: "OpenCode — IIT/IIIT Allahabad", detail: "Rank 60 among 3000+ contributors", kind: "Open Source" },
  { title: "Edulinkup Summer of Code", detail: "Rank 18 among 3300+ participants", kind: "Open Source" },
  { title: "Webathon", detail: "1st Place", kind: "Hackathon" },
  { title: "Vibeathon", detail: "2nd Place", kind: "Hackathon" },
];

export const certifications = [
  { name: "Get Started with Python", org: "Google" },
  { name: "Fundamentals of AI", org: "IBM" },
  { name: "Cloud Technical Essentials", org: "AWS" },
  { name: "Open Source Certification", org: "EWCoC" },
];

export const learning = ["AI Engineering", "Backend Development", "Data Structures & Algorithms", "Generative AI", "RAG & LLM Applications", "Cloud & Docker"];

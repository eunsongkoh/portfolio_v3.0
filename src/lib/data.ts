export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string; // Added companyUrl
  period: string;
  description: string;
  location: string;
  techStack?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

export interface ContactItem {
  id: string;
  label: string;
  link: string;
  display: string;
}

export interface About {
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
  graduation: string;
  coursework: string;
  internship_availability: string;
  ng_availability: string;
  resumeUrl: string;
}

export const aboutData: About = {
  name: "Eunsong Koh",
  title: "$ hello world, i'm Song",
  bio: "- Applied Research (Security + AI/ML) @ Safety Cybersecurity - 4th Year Computer Science Student @ Simon Fraser University - Background in Fullstack Development, AI/ML + Security Research - Interests in Security, AI/ML, Distributed Systems, and R&D - SFU DNS Club Director of Comm. + Multimedia, SFU WiCS Mentor and Workshop Host",
  photoUrl: "/profile.jpg",
  graduation: "April 2027",
  coursework: "Systems Programming, Database Systems, Data Structures and Algorithms, Networking, Data Science, Web Development",
  internship_availability: "Summer 2026",
  ng_availability: "Summer 2027",
  resumeUrl: "/resume.pdf",
};

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    title: "Applied Research Engineer (AI & Security)",
    company: "Safety Cybersecurity",
    companyUrl: "https://www.getsafety.com/vulnerability-database",
    period: "Jan 2026 - Present",
    location: "Vancouver, BC",
    description: "Applied research on AI/ML methods for vulnerability detection in cybersecurity systems ",
  },
  {
    id: "exp-2",
    title: "Undergraduate Research Assistant",
    company: "Simon Fraser University | Reliable Systems Lab",
    companyUrl: "https://github.com/sfu-rsl",
    period: "Jan 2026 - Apr 2026",
    location: "Vancouver, BC",
    description: "LLM based automatic vulnerability discovery & repair",
    techStack: "Python, HuggingFace, Prompt Engineering"
  },
  {
    id: "exp-3",
    title: "Software Engineer Intern",
    company: "Safety Cybersecurity",
    companyUrl: "https://www.getsafety.com/vulnerability-database",
    period: "Apr 2025 - Dec 2025",
    location: "Vancouver, BC",
    description: "AI & Security R&D, full-stack development, ML vulnerability detection",
    techStack: "React, Distributed Training, HuggingFace, LangSmith/LangChain",
  },
  {
    id: "exp-4",
    title: "Undergraduate Research Assistant",
    company: "Simon Fraser University | Reliable Systems Lab",
    companyUrl: "https://github.com/sfu-rsl",
    period: "Apr 2025 - Aug 2025",
    location: "Vancouver, BC",
    description: "Co-authored research, LLM vulnerability discovery & repair",
    techStack: "Rust, Python, Prompt Engineering",
  },
  {
    id: "exp-5",
    title: "Software Developer + Product Manager",
    company: "Simon Fraser University | Hope Health Action CBR Team",
    companyUrl: "https://play.google.com/store/apps/details?id=org.hopehealthaction.cbrapp&hl=en_CA",
    period: "Jan 2025 - Apr 2025",
    location: "Vancouver, BC",
    description: "Full-stack development, dashboards & mobile features, backend refactoring",
    techStack: "React, React Native, Django, PostgreSQL, Figma",
  },
  {
    id: "exp-6",
    title: "Software Engineer Intern",
    company: "Kelowna Software Ltd.",
    companyUrl: "https://www.kelownasoftware.com/",
    period: "Apr 2024 - Aug 2024",
    location: "Remote",
    description: "Legacy system optimization, ML pipelines, backend & client features",
    techStack: ".NET Core, Angular, Pandas, Dask",
  },
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "ubc nwHacks 2025: Mood Mirror",
    description: "Cross-platform Swift application for real-time emotion prediction using live camera and video calls",
    techStack: ["Swift", "SwiftUI", "Python", "Flask"],
    link: "https://devpost.com/software/moodmirror",
  },
  {
    id: "proj-3",
    title: "hack the north 2025: vybes",
    description: "Real-time crowd sentiment–driven music recommendation system with live analytics",
    techStack: ["python", "aws", "nextjs", "opencv", "grok api", "supabase"],
    link: "https://devpost.com/software/vybe-12bzfd",
  },
  {
    id: "proj-2",
    title: "TaxMe",
    description: "Real-time grocery budgeting app with tax-inclusive cart calculations and AI recipe recommendations",
    techStack: ["springboot", "nextjs", "redux", "azure sql server"],
    link: "https://github.com/eunsongkoh/tax-me",
  },
];

export const contactData: ContactItem[] = [
  {
    id: "contact-1",
    label: "email",
    link: "mailto:esongkoh@gmail.com",
    display: "esongkoh@gmail.com",
  },
  {
    id: "contact-2",
    label: "github",
    link: "#",
    display: "github.com/eunsongkoh",
  },
  {
    id: "contact-3",
    label: "linkedin",
    link: "#",
    display: "linkedin.com/in/songkoh",
  },
];

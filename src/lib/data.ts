export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  location: string;
}

export interface ContactItem {
  id: string;
  label: string;
  link: string;
  display: string;
}

export interface About {
  name: string;
  bio: string[];
  photoUrl: string;
  graduation: string;
  coursework: string;
  internship_availability: string;
  ng_availability: string;
  lookingFor: string;
  resumeUrl: string;
  skills: string[];
}

export const aboutData: About = {
  name: "Eunsong Koh",
  bio: [
    "Final Year Computer Science Student @ Simon Fraser University",
    "SFU DNS Club Growth and Marketing Lead, SFU WiCS Mentor and Workshop Host",
    "Bedroom Drum & Bass DJ",
  ],
  photoUrl: "/profile.jpg",
  graduation: "April 2027",
  coursework:
    "Database Systems, Systems Programming, Networking, Computational Data Science, Data Structures & Algorithms",
  internship_availability: "Fall 2026",
  ng_availability: "Summer 2027",
  lookingFor: "Machine Learning Engineer, Software Engineer, Data Engineer roles",
  resumeUrl: "/resume.pdf",
  skills: [
    "Applied AI/ML",
    "LLM Systems & Agents",
    "Security & Vulnerability Research",
    "Distributed Systems",
    "Cloud & Serverless Architecture",
    "Full-Stack Development",
    "Data Engineering",
  ],
};

export const experienceData: Experience[] = [
  {
    id: "exp-0",
    title: "Machine Learning Engineer Intern",
    company: "Amazon",
    period: "May 2026 - Jul 2026",
    location: "Vancouver, BC",
    description:
      "Architected a production serverless ML pipeline for automated tax classification, cutting cycle time 90% across millions of marketplace products",
  },
  {
    id: "exp-1",
    title: "Applied Research Engineer (AI & Security)",
    company: "Safety CLI Cybersecurity",
    companyUrl: "https://www.getsafety.com/vulnerability-database",
    period: "Jan 2026 - Apr 2026",
    location: "Vancouver, BC",
    description:
      "Redesigned vulnerability analysis into a distributed graph pipeline (5x throughput) and improved LLM classification precision from 28% to 78%",
  },
  {
    id: "exp-2",
    title: "Undergraduate Researcher",
    company: "Simon Fraser University | Reliable Systems Lab",
    companyUrl: "https://github.com/sfu-rsl",
    period: "May 2025 - Apr 2026",
    location: "Vancouver, BC",
    description:
      "Co-authored research on agentic automated vulnerability discovery & repair, submitted to NeurIPS 2026, and benchmarked LLMs on Rust vulnerability detection",
  },
  {
    id: "exp-3",
    title: "Software Engineer Intern",
    company: "Safety CLI Cybersecurity",
    companyUrl: "https://www.getsafety.com/vulnerability-database",
    period: "May 2025 - Dec 2025",
    location: "Vancouver, BC",
    description:
      "Built an ML-powered data classification pipeline (90%+ accuracy) and a full-stack vulnerability analysis platform (FastAPI + React), cutting security review time 4x",
  },
  {
    id: "exp-4",
    title: "Software Engineer Intern",
    company: "Kelowna Software Ltd.",
    companyUrl: "https://www.kelownasoftware.com/",
    period: "May 2024 - Aug 2024",
    location: "Remote",
    description:
      "Developed backend systems in C#/.NET Core and client-facing TypeScript/Angular features for 1000+ users",
  },
];

// TODO: Re-add a `Project` interface and `projectsData` array here once new
// project content is ready, then wire up a <Projects/> section in page.tsx
// between <About/> and <Contact/>.

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
    link: "https://github.com/eunsongkoh",
    display: "github.com/eunsongkoh",
  },
  {
    id: "contact-3",
    label: "linkedin",
    link: "https://linkedin.com/in/songkoh",
    display: "linkedin.com/in/songkoh",
  },
];

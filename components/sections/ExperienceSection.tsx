import TimelineItem from "../ui/TimelineItem";
import { Slide } from "react-awesome-reveal";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Safety Cybersecurity",
      period: "Apr 2025 — Present",
      location: "Vancouver, BC",
      description: "• Date Engine Team",
      techstack: "Python, HuggingFace, LangChain, BERT",
      logoSrc: "/images/safetycli_logo.jpg",
    },
    {
      role: "Undergraduate Research Assistant",
      company: "Simon Fraser University | Reliable Systems Lab",
      period: "Apr 2025 — Aug 2025",
      location: "Vancouver, BC",
      description:
        "• Assisting in Automated Vulnerability Discovery research under Dr.Steven Ko",
      techstack: "Rust, Python, Prompt Engineering",
      logoSrc: "/images/sfu.png",
    },
    {
      role: "Software Developer + Product Manager",
      company: "Simon Fraser University | Hope Health Action",
      period: "Jan 2025 — Apr 2025",
      location: "Vancouver, BC",
      description:
        "• CBR Team\n • Developed and maintained a non-profit healthcare app under the supervision of Dr. Brian Fraser.",
      techstack: "React, React Native, Django, PostgreSQL, Figma",
      logoSrc: "/images/cbr.jpg",
    },
    {
      role: "Software Engineer Intern",
      company: "Kelowna Software Ltd.",
      period: "Apr 2024 - Aug 2024",
      location: "Remote",
      description: "• Fullstack Team",
      techstack: ".NET Core, Angular, Python, TypeScript, Pandas, Dask",
      logoSrc: "/images/ks.png",
    },
    {
      role: "Relevant Coursework",
      company: "Simon Fraser University",
      period: "Sept 2022 - May 2026",
      location: "Vancouver, BC",
      description:
        "• Database Systems\n• Systems Programming\n• Networking\n• Computational Data Science\n• Data Structures & Algorithms\n• Web Development",
    },
  ];

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-hero mb-24 animate-fade-up text-center">
          EXPERIENCE
        </h2>
        <div className="relative">
          {experiences.map((job, index) => (
            <Slide cascade key={index}>
              <TimelineItem
                key={index}
                role={job.role}
                company={job.company}
                period={job.period}
                location={job.location}
                description={job.description}
                delay={index * 0.3}
                logoSrc={job.logoSrc}
                techstack={job.techstack}
              />
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

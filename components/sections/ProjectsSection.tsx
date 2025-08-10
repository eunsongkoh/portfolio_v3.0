import { Fade } from "react-awesome-reveal";
import ProjectCard from "../ui/ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Mood Mirror: nwHacks 2025",
      tech: "Swift, SwiftUI, Python, Flask",
      description:
        "A cross-platform Swift app that predicts emotions based on facial expressions to help neurodivergent children learn communications. It includes a Live Camera Mode & a Video Call Mode!",
      url: "https://devpost.com/software/moodmirror",
    },
    {
      title: "taxMe",
      tech: "Next.js, SpringBoot, Azure SQL Server, Redux",
      description:
        "taxMe is a dynamic grocery tracking application designed to help users manage their budget while shopping. It offers real-time total cart calculations including the item tax, budget tracking, personalized recipe recommendations from an AI-powered chatbot, and the ability to track past purchases!",
      url: "https://github.com/eunsongkoh/tax-me",
    },
    {
      title: "Group Chat Server",
      tech: "C",
      description:
        "A custom Group Chat Server made in C that features a custom server and fuzzer clients",
    },
    {
      title: "Roblox Reminder",
      tech: "C++, Boost.Asio, libcurl, Docker",
      description:
        "An email reminder system built with C++ that notifies you on the price of Roblox catalog items! ",
    },
    {
      title: "Gesture Genius: Hack the North 2023",
      tech: "HTML/CSS, JS, Node.js, GCP",
      description:
        "An accessible ASL Translator utilizing Google Cloud's API and Teachable Machine AI Model. Created at Canada's largest hackathon, Hack the North @ the University of Waterloo",
      url: "https://devpost.com/software/gesture-genius-asl-ai-recognition",
    },
  ];

  return (
    <Fade>
      <section id="projects" className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-hero mb-24 animate-fade-up">PROJECTS</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                tech={project.tech}
                description={project.description}
                delay={index * 0.2}
                url={project.url}
              />
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
}

import { projectsData } from "@/lib/data";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

export default function Projects() {
  return (
    <Section id="projects" title="projects">
      <div className="flex flex-col gap-10">
        {projectsData.map((project, index) => (
          <ScrollReveal
            key={project.id}
            animation="slide-left"
            delay={index * 100}
            className="hover:opacity-70 transition-opacity duration-300"
          >
            <div className="mb-2">
              <div className="text-[1.3em] font-medium lowercase mb-1">
                <Link
                  href={project.link}
                  className="text-portfolio-white border-b border-portfolio-gray hover:opacity-70 transition-opacity"
                >
                  {project.title}
                </Link>
              </div>
              <p className="text-[1.05em] leading-[1.5] text-portfolio-gray lowercase mb-2">
                {project.description}
              </p>
              <div className="text-[0.9em] text-portfolio-gray lowercase">
                {project.techStack.join(", ")}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

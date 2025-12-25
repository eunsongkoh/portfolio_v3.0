import { experienceData } from "@/lib/data";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Experience() {
  return (
    <Section id="experience" title="experience">
      <div className="flex flex-col gap-10">
        {experienceData.map((item, index) => (
          <ScrollReveal
            key={item.id}
            animation="slide-left"
            delay={index * 100}
            className="hover:opacity-70 transition-opacity duration-300"
          >
            <div className="mb-2">
              <line />
              <div className="flex flex-col md:flex-row justify-between items-baseline mb-1 gap-1 md:gap-0">
                <h3 className="text-[1.3em] font-medium text-portfolio-white">
                  {item.title}
                </h3>
                <span className="text-[0.95em] text-portfolio-gray">
                  {item.period}
                </span>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-baseline mb-2 gap-1 md:gap-0">
                <span className="text-[1.05em] text-portfolio-white/90">
                  {item.company}
                </span>
                <span className="text-[0.95em] text-portfolio-gray">
                  {item.location}
                </span>
              </div>

              <p className="text-[1em] leading-[1.5] text-portfolio-gray mb-2">
                {item.description}
              </p>
              {item.techStack && (
                <p className="text-[0.85em] text-portfolio-gray/60 italic">
                  {item.techStack}
                </p>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

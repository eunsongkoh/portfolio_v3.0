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
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-portfolio-accent transition-colors duration-300 inline-flex items-center gap-1"
                    >
                      {item.company}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                      >
                        <path
                          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9L11 4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  ) : (
                    item.company
                  )}
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

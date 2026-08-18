import { experienceData } from "@/lib/data";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Experience() {
  return (
    <Section id="experience" number="01" title="Experience">
      <div>
        {experienceData.map((item, index) => (
          <ScrollReveal key={item.id} delay={index * 100}>
            <div className="flex gap-6">
              <div className="flex flex-col items-center w-[14px] flex-shrink-0">
                <span className="w-[9px] h-[9px] rounded-full bg-bg border-[1.5px] border-fg flex-shrink-0 mt-[5px]" />
                {index < experienceData.length - 1 && (
                  <span className="w-px flex-1 bg-border min-h-[34px]" />
                )}
              </div>
              <div className="pb-[18px] flex-1">
                <div className="font-mono text-xs text-muted mb-[5px]">{item.period}</div>
                <div className="flex justify-between items-baseline gap-4 flex-wrap">
                  <div className="text-xl font-bold tracking-[-0.01em]">{item.title}</div>
                  <div className="font-mono text-xs text-muted whitespace-nowrap">
                    {item.location}
                  </div>
                </div>
                <div className="text-[15px] font-semibold text-muted mt-0.5">
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-fg transition-colors"
                    >
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                </div>
                <p className="text-sm text-body leading-[1.6] mt-2 max-w-[640px]">
                  {item.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

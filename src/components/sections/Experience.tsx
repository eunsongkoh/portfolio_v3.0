import { experienceData } from "@/lib/data";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ArxivLogo from "@/components/ui/ArxivLogo";

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
              <div className="pb-[28px] flex-1 min-w-0">
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
                      className="inline-flex items-center gap-1 hover:text-fg transition-colors"
                    >
                      {item.company}
                      <svg
                        className="w-3 h-3 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ) : (
                    item.company
                  )}
                </div>
                <p className="text-sm text-body leading-[1.6] mt-2 max-w-[640px]">
                  {item.description}
                </p>
                {item.paperUrl && (
                  <a
                    href={item.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 mt-3 p-3 w-full max-w-[420px] rounded-md border border-border hover:border-fg transition-colors"
                  >
                    <ArxivLogo className="w-9 h-auto flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold leading-snug truncate">
                        {item.paperTitle}
                      </div>
                      <div className="font-mono text-xs text-muted mt-1">
                        [{item.paperVenue}
                        {item.paperStatus ? ` · ${item.paperStatus}` : ""}]
                      </div>
                      <div className="font-mono text-xs text-muted group-hover:text-fg transition-colors mt-2">
                        Read on arXiv →
                      </div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

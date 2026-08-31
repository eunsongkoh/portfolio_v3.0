import Image from "next/image";
import { aboutData } from "@/lib/data";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  return (
    <Section id="about" number="02" title="About">
      <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 md:gap-11">
        <ScrollReveal>
          <div className="relative w-[160px] h-[160px] border border-border overflow-hidden">
            <Image
              src={aboutData.photoUrl}
              alt={aboutData.name}
              fill
              sizes="160px"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal delay={100}>
            <div className="flex flex-col gap-2.5 text-base leading-[1.7]">
              {aboutData.bio.map((line, index) => (
                <div key={index} className="flex gap-2.5">
                  <span className="text-muted">—</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="my-6 md:my-7">
              <div className="border border-border divide-y divide-border font-mono text-xs">
                {(
                  [
                    { label: "expected graduation", value: aboutData.graduation },
                    { label: "internship availability", value: aboutData.internship_availability },
                    { label: "new-grad availability", value: aboutData.ng_availability },
                    { label: "looking for", value: aboutData.lookingFor },
                  ] as { label: string; value: string | string[] }[]
                ).map((stat) => (
                  <div
                    key={stat.label}
                    className="group flex flex-wrap justify-between gap-2 px-4 py-3 transition-colors duration-300 hover:bg-fg/5 cursor-default"
                  >
                    <span className="text-fg transition-colors duration-300">{stat.label}</span>
                    <span className="text-fg flex flex-wrap justify-end gap-1.5 max-w-full">
                      {(Array.isArray(stat.value) ? stat.value : [stat.value]).map((v) => (
                        <span
                          key={v}
                          className="font-mono text-xs px-3 py-1.5 rounded-full border border-fg/60 transition-colors duration-300 hover:bg-fg hover:text-bg hover:border-fg cursor-default"
                        >
                          {v}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
              <div className="font-mono text-xs text-fg mt-4">
                coursework: <span className="text-fg">{aboutData.coursework}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* TODO: Selected Work / Projects block — see TODO in src/lib/data.ts
              for the data shape once new project content is ready. */}
        </div>
      </div>
    </Section>
  );
}

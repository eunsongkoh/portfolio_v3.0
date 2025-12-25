import { aboutData } from "@/lib/data";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Resume() {
  return (
    <Section id="resume" title="resume">
      <ScrollReveal animation="fade">
        <a
          href={aboutData.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-portfolio-white text-portfolio-black px-8 py-[14px] rounded-[980px] font-medium mt-5 lowercase transition-colors hover:bg-[#e8e8ed]"
        >
          view resume
        </a>
      </ScrollReveal>
    </Section>
  );
}

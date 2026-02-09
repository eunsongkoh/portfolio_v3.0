import { contactData } from "@/lib/data";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  return (
    <Section id="contact" title="contact">
      <ScrollReveal animation="fade">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[30px] mt-5">
          {contactData.map((item) => (
            <div key={item.id} className="text-[1.1em]">
              <span className="block text-[0.9em] text-portfolio-gray mb-2 lowercase">
                {item.label}
              </span>
              <a
                href={item.link}
                className="text-portfolio-white hover:opacity-70 transition-opacity lowercase block break-all"
              >
                {item.display}
              </a>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}

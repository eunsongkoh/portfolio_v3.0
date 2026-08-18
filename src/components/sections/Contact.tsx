import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactLinks from "@/components/ui/ContactLinks";

export default function Contact() {
  return (
    <Section id="contact" number="03" title="Contact" lastSection>
      <ScrollReveal>
        <ContactLinks />
      </ScrollReveal>
    </Section>
  );
}

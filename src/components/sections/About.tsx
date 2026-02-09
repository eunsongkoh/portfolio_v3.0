import { aboutData } from "@/lib/data";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  return (
    <Section id="about" title="about">
      <ScrollReveal animation="fade">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
          <div className="text-[1em] leading-[1.7] text-portfolio-gray max-w-[500px] flex-1">
            {aboutData.bio.includes("-") ? (
              <ul className="list-none flex flex-col gap-2">
                {aboutData.bio
                  .split("-")
                  .map((item) => item.trim())
                  .filter((item) => item.length > 0)
                  .map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <span>-</span>
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>
            ) : (
              <p className="lowercase">{aboutData.bio}</p>
            )}

            <div className="mt-8 space-y-4">
              <p className="lowercase">
                <span className="text-portfolio-white/90">expected graduation: </span>
                {aboutData.graduation}
              </p>
              <p className="lowercase">
                <span className="text-portfolio-white/90">coursework:</span> {aboutData.coursework}
              </p>
              <p className="lowercase">
                <span className="text-portfolio-white/90">internship availability:</span> {aboutData.internship_availability}
              </p>
              <p className="lowercase">
                <span className="text-portfolio-white/90">new-grad availability:</span> {aboutData.ng_availability}
              </p>
            </div>
          </div>
          {aboutData.photoUrl && (
            <div className="w-full md:w-[200px] flex-shrink-0">
              <img
                src={aboutData.photoUrl}
                alt={aboutData.name}
                className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          )}
        </div>
      </ScrollReveal>
    </Section>
  );
}   

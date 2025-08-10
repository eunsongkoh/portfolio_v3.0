import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import TextType from "../ui/TextType";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <Fade>
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden circuit-pattern"
      >
        <div className="text-center max-w-6xl mx-auto">
          <div className="text-left max-w-6xl mx-auto">
            <div className="text-display mb-8 animate-fade-up flex flex-col space-y-2">
              <div className="flex justify-left">
                <span className="w-6 text-left">$</span>
                <span className="ml-2">hello world</span>
              </div>
              <div className="flex justify-left">
                <span className="w-6 text-left">$</span>
                <span className="ml-2 shimmer">i&apos;m Song :)</span>
              </div>
            </div>
            <TextType
              text={["I am a Developer..", ".. a Student..", ".. a Creative.."]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-body text-left text-muted-foreground max-w-2xl mx-auto mb-16 animate-fade-up leading-loose"
              style={{ animationDelay: "0.3s" }}
            />
          </div>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="px-12 py-6 bg-transparent border border-foreground text-foreground font-mono text-xs tracking-widest uppercase transition-all duration-500 hover:bg-foreground hover:text-background hover:scale-105"
            >
              VIEW WORK
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="px-12 py-6 bg-transparent border border-foreground text-foreground font-mono text-xs tracking-widest uppercase transition-all duration-500 hover:bg-foreground hover:text-background hover:scale-105"
            >
              GET IN TOUCH
            </Button>
          </div>
        </div>

        <Button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-12 bg-transparent left-1/2 transform -translate-x-1/2 animate-bounce text-accent-gunmetal hover:text-foreground s duration-300"
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      </section>
    </Fade>
  );
}

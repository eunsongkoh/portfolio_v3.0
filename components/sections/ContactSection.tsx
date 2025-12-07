import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-hero mb-12 animate-fade-up">CONNECT</h2>

        <p
          className="text-body text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-up leading-loose"
          style={{ animationDelay: "0.3s" }}
        >
          I&apos;m always down to chat about new opportunities, projects, or
          collaborations!
        </p>

        <div
          className="flex flex-col md:flex-row gap-8 justify-center mb-20 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="esongkoh@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="px-12 py-6 bg-transparent border border-foreground text-foreground font-mono text-xs tracking-widest uppercase transition-all duration-500 hover:bg-foreground hover:text-background hover:scale-105 hover:shadow-[0_0_10px_#00ffff]">
              <Mail className="w-5 h-5 mr-3" />
              EMAIL
            </Button>
          </a>

          <a
            href="https://github.com/eunsongkoh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="px-12 py-6 bg-transparent border border-foreground text-foreground font-mono text-xs tracking-widest uppercase transition-all duration-500 hover:bg-foreground hover:text-background hover:scale-105 hover:shadow-[0_0_10px_#00ffff]">
              <Github className="w-5 h-5 mr-3" />
              GITHUB
            </Button>
          </a>

          <a
            href="https://linkedin.com/in/songkoh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="px-12 py-6 bg-transparent border border-foreground text-foreground font-mono text-xs tracking-widest uppercase transition-all duration-500 hover:bg-foreground hover:text-background hover:scale-105 hover:shadow-[0_0_10px_#00ffff]">
              <Linkedin className="w-5 h-5 mr-3" />
              LINKEDIN
            </Button>
          </a>
        </div>

        <div
          className="surface p-12 animate-fade-up card-3d"
          style={{ animationDelay: "0.9s" }}
        >
          <p className="text-mono text-accent-gunmetal mb-3 tracking-wider">
            CURRENTLY AVAILABLE FOR
          </p>
          <p className="text-title font-light">
            SUMMER 2026
            <br />
            SWE INTERNSHIPS
            <br />
            <br />
            SUMMER 2027
            <br />
            SWE NEW GRAD
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

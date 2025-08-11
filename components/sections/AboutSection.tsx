import Image from "next/image";
import FlipCard from "../ui/FlipCard";
import { Slide } from "react-awesome-reveal";

export default function AboutSection() {
  const news = [
    {
      title: "WiCS Fullstack Workshop",
      description:
        "After an amazing semester as a mentor, I had the opportunity to host my second Fullstack Workshop with SFU Women in Computing Science (WiCS) this Summer!",
      photo: "/images/wics.png",
    },
    {
      title: "DNS: Industry Panelist Event",
      description:
        "As the current Director of Communications + Multimedia for the Developers & Systems club, I hosted an Industry Panel event with past SFU alumni!",
      photo: "/images/dns.png",
    },
    {
      title:
        "CIBC Undergraduate Award for Women in Faculty of Applied Sciences",
      description:
        "Honoured and grateful to receive the CIBC Undergraduate Award for Women in the Faculty of Applied Sciences! This award recognizes women undergraduates with strong academics and active involvement in tech-focused work, Co-op, or community activities.",
      photo: "/images/cibc.png",
    },
  ];

  return (
    <section id="about" className="relative py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start w-full">
          <Slide direction="down" cascade>
            <div className="animate-fade-up flex flex-col items-center lg:items-start max-w-md mx-auto lg:mx-0">
              <h2 className="text-hero mb-8 lg:text-left">ABOUT</h2>
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-accent-warm to-accent-chrome mb-8 relative overflow-hidden rounded-xl">
                <div className="w-full h-full bg-gradient-to-br from-accent-silver/30 to-accent-gunmetal/30 flex items-center justify-center rounded-xl">
                  <Image
                    src="/images/sng.jpg"
                    alt="Description"
                    fill
                    style={{ objectFit: "contain" }}
                    className="brightness-90 rounded-xl"
                  />
                </div>
              </div>
              <p className="text-body text-center font-mono text-xs lg:text-left leading-loose text-muted-foreground">
                I’m a third-year <b>Computer Science</b> student at{" "}
                <b>Simon Fraser University</b> with a passion for blending
                technology and creativity.
                <br /> <br />
                Most of my professional experience comes from working in
                <b> startups</b>, where I’ve learned to adapt quickly, wear many
                hats, and tackle challenging problems head-on. I have a special
                interest in <b>cybersecurity, accessibility, and gaming</b>, and
                I love exploring new technologies that <b>push boundaries.</b>{" "}
                <br />
                <br />
                Outside of coding, you’ll often find me editing videos, DJing,
                or working on creative projects that bring ideas to life!
                <br />
              </p>
              <hr className="border-t border-white my-6" />
              <div>
                <h4 className="text-body text-left font-mono text-xs lg:text-left leading-loose text-muted-foreground">
                  I also enjoy being involved in community and tech initiatives!
                </h4>
                <ul className="list-disc font-mono text-xs list-inside mt-2 space-y-1 text-muted-foreground">
                  <li>
                    <b>Director of Communications & Multimedia</b>, SFU
                    Developers & Systems Club
                  </li>
                  <li>
                    <b>Mentor</b>, SFU Women in Computing Science (WiCS)
                  </li>
                  <li>
                    <b>Video editing</b> for SFU Student Societies, including
                    the Computing Science Student Society
                  </li>
                </ul>
              </div>
            </div>
          </Slide>

          <Slide direction="left" cascade>
            <div className="animate-fade-up w-full max-w-md mx-auto lg:mx-0">
              <h3 className="text-title text-accent-gunmetal mb-8">
                LIFE RECENTLY
              </h3>
              <h5 className="text-xs mb-2 font-mono">(Click to learn more!)</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {news.map((item, index) => (
                  <FlipCard
                    key={index}
                    title={item.title}
                    imageSrc={item.photo}
                    description={item.description}
                    delay={index * 0.2}
                  />
                ))}
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}

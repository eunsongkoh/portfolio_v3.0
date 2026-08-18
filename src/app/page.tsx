import { aboutData } from "@/lib/data";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import ContactLinks from "@/components/ui/ContactLinks";

export default function Home() {
  return (
    <>
      <header className="max-w-[1400px] mx-auto px-6 md:px-16 pt-14 pb-6 md:pt-[72px] md:pb-8">
        <h1 className="text-[48px] font-black leading-[0.85] tracking-[-0.03em]">
          {aboutData.name.toUpperCase().split(" ").map((word) => (
            <span key={word} className="block">
              {word}
            </span>
          ))}
        </h1>
        <ContactLinks className="mt-4" />
        <a
          href={aboutData.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-mono text-[13px] text-fg mt-2 hover:opacity-70 transition-opacity"
        >
          Resume ↗
        </a>
      </header>
      <main className="max-w-[1400px] mx-auto px-6 md:px-16">
        <Experience />
        <About />
        {/* TODO: <Projects/> — pending new project content, see src/lib/data.ts */}
        <Contact />
      </main>
    </>
  );
}

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Resume from "@/components/sections/Resume";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6">
      <Hero />
      <Experience />
      <About />
      <Projects />
      <Contact />
      <Resume />
    </main>
  );
}

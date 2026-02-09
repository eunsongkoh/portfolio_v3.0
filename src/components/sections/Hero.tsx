import { aboutData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="text-left pt-[100px] pb-[50px]">
      <h1 className="text-[2.5em] md:text-[4em] font-semibold tracking-[-1px] lowercase text-portfolio-white">
        {aboutData.name}
      </h1>
      <p className="text-left text-[1.2em] md:text-[1.5em] text-portfolio-gray font-normal lowercase">
        {aboutData.title}
      </p>
    </section>
  );
}

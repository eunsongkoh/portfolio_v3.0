import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-[60px] border-t border-portfolio-border",
        className
      )}
    >
      {title && (
        <h2 className="text-[1.5em] md:text-[2em] font-semibold mb-10 tracking-[-0.5px] lowercase text-portfolio-white">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

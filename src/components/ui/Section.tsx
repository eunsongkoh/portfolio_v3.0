import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  lastSection?: boolean;
}

export default function Section({
  id,
  number,
  title,
  children,
  className,
  lastSection = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-0",
        !lastSection && "border-b border-border",
        className
      )}
    >
      <div className="font-mono text-[13px] text-muted">
        ({number}) {title}
      </div>
      <div>{children}</div>
    </section>
  );
}

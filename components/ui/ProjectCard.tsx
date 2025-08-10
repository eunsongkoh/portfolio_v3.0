import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  tech: string;
  description: string;
  delay?: number;
  url?: string;
}

export default function ProjectCard({
  title,
  tech,
  description,
  delay = 0,
  url,
}: ProjectCardProps) {
  return (
    <div
      className="surface p-10 font-mono hover:bg-hover transition-all duration-500 group card-3d animate-fade-up cursor-pointer border border-foreground shadow-[0_0_10px_#ffffff] hover:bg-foreground hover:text-background hover:scale-105 hover:shadow-[0_0_10px_#00ffff]"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-mono font-medium text-accent-gunmetal transition-colors duration-300">
          {title}
        </h3>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent-gunmetal transition-colors duration-300" />
          </a>
        )}
      </div>
      <p className="text-mono text-accent-silver-dark mb-6 text-xs">{tech}</p>
      <p className="text-muted-foreground leading-loose text-sm">
        {description}
      </p>
    </div>
  );
}

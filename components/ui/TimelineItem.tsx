import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  techstack?: string;
  logoSrc?: string;
  delay?: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  role,
  company,
  period,
  location,
  description,
  techstack,
  logoSrc,
  delay = 0,
}) => {
  return (
    <div
      className="relative mb-16 last:mb-0 animate-fade-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute left-3 top-8 w-3 h-3 -translate-x-1/2 bg-accent-gunmetal border-2 border-background rounded-full"></div>
      <div className="surface-elevated p-8 ml-4 sm:ml-8 md:ml-12 lg:ml-16 card-3d hover:shadow-lg transition-all duration-500">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              {logoSrc && (
                <Image
                  src={logoSrc}
                  alt={`${company} logo`}
                  width={24}
                  height={24}
                  className="object-cover"
                />
              )}
              <h3 className="text-mono font-medium text-accent-gunmetal">
                {role}
              </h3>
            </div>

            <h4 className="text-title font-light">{company}</h4>
          </div>
          <div className="text-mono text-muted-foreground mt-4 lg:mt-0 text-right">
            <div className="flex items-center gap-2 mb-2 lg:justify-end">
              <Calendar className="w-4 h-4" />
              {period}
            </div>
            <div className="flex items-center gap-2 lg:justify-end">
              <MapPin className="w-4 h-4" />
              {location}
            </div>
          </div>
        </div>
        <p className="text-muted-foreground font-mono text-sm leading-loose whitespace-pre-line">
          {description}
        </p>
        <p className="text-xs mt-5 text-muted-foreground font-mono leading-loose">
          <i>{techstack}</i>
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;

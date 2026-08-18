import { contactData } from "@/lib/data";
import { cn } from "@/lib/utils";

const icons: Record<string, React.ReactNode> = {
  email: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M2 5.5C2 4.67 2.67 4 3.5 4h17c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="m3 5.5 9 7 9-7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  github: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12.03c0 5.05 3.28 9.33 7.83 10.84.57.1.78-.25.78-.55v-2.15c-3.18.69-3.85-1.4-3.85-1.4-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.54-.29-5.21-1.27-5.21-5.66 0-1.25.44-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.17a11 11 0 0 1 5.79 0c2.2-1.48 3.17-1.17 3.17-1.17.63 1.58.24 2.75.12 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.68 5.37-5.23 5.65.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A11.53 11.53 0 0 0 23.5 12.03C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  ),
  linkedin: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  ),
};

interface ContactLinksProps {
  className?: string;
}

export default function ContactLinks({ className }: ContactLinksProps) {
  return (
    <div className={cn("flex items-center gap-6 text-fg", className)}>
      {contactData.map((item) => (
        <a
          key={item.id}
          href={item.link}
          target={item.label === "email" ? undefined : "_blank"}
          rel={item.label === "email" ? undefined : "noopener noreferrer"}
          aria-label={item.display}
          className="hover:opacity-70 transition-opacity"
        >
          {icons[item.label]}
        </a>
      ))}
    </div>
  );
}

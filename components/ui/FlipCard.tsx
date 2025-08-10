import Image from "next/image";
import { useState } from "react";

interface FlipCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  delay?: number;
}

export default function FlipCard({
  title,
  description,
  imageSrc,
  delay = 0,
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full max-w-xs h-80 [perspective:1000px] cursor-pointer"
      style={{ animationDelay: `${delay}s` }}
      onClick={() => setFlipped((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setFlipped((prev) => !prev);
      }}
    >
      <div
        className={`relative w-full h-full duration-700 [transform-style:preserve-3d] ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full rounded-xl shadow-md flex flex-col items-center justify-center p-1 bg-grey [backface-visibility:hidden]">
          {imageSrc && (
            <div className="w-full max-w-[200px] mx-auto mb-4">
              <Image
                src={imageSrc}
                alt={title}
                width={200}
                height={280}
                className="object-cover rounded-xl"
              />
            </div>
          )}
          <h4 className="text-mono font-mono text-xs text-center text-accent-gunmetal text-muted-foreground">
            {title}
          </h4>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full rounded-xl shadow-md flex items-center justify-center p-2 bg-black/50 rotate-y-180 [backface-visibility:hidden]">
          <p className="text-sm text-center leading-relaxed text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

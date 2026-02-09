"use client";

import { useEffect, useState } from "react";

interface ParticleStyle extends React.CSSProperties {
  "--drift": string;
}

export default function ParticleBackground() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      style: ParticleStyle;
    }>
  >([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const particleCount = 50;
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 2 + 1;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      const drift = (Math.random() - 0.5) * 100;

      newParticles.push({
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          "--drift": `${drift}px`,
        } as ParticleStyle,
      });
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(newParticles);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-portfolio-white/30 rounded-full animate-[float_linear_infinite]"
          style={particle.style}
        />
      ))}
    </div>
  );
}

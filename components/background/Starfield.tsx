"use client";
import { useMemo } from "react";

interface Star {
  id: number;
  size: number;
  top: number;
  left: number;
  dur: number;
  delay: number;
  op: number;
}

export default function Starfield() {
  const stars = useMemo<Star[]>(() => {
    // Use seeded values for SSR consistency
    const s: Star[] = [];
    for (let i = 0; i < 160; i++) {
      const seed = i * 137.508; // golden angle pseudo-random
      s.push({
        id: i,
        size: (((seed * 13.7) % 2.5) + 0.5),
        top: (seed * 7.3) % 100,
        left: (seed * 11.9) % 100,
        dur: ((seed * 3.1) % 4) + 2,
        delay: (seed * 5.7) % 4,
        op: ((seed * 17.3) % 0.7) + 0.3,
      });
    }
    return s;
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white anim-twinkle"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.top}%`,
            left: `${star.left}%`,
            ["--star-dur" as string]: `${star.dur}s`,
            ["--star-delay" as string]: `${star.delay}s`,
            ["--star-op" as string]: star.op,
            opacity: star.op,
          }}
        />
      ))}
    </div>
  );
}

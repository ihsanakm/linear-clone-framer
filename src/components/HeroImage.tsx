"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Line {
  id: string;
  direction: "to top" | "to left";
  size: number;
  duration: number;
}

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const HeroImage = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const [lines, setLines] = useState<Line[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const removeLine = (id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
  };

  useEffect(() => {
    if (!inView) return;

    const renderLine = (timeout: number) => {
      timeoutRef.current = setTimeout(() => {
        setLines((lines) => [
          ...lines,
          {
            direction: Math.random() > 0.5 ? "to top" : "to left",
            size: randomNumberBetween(10, 30),
            duration: randomNumberBetween(1300, 3500),
            id: Math.random().toString(36).substring(7),
          },
        ]);
        renderLine(randomNumberBetween(800, 2500));
      }, timeout);
    };

    renderLine(randomNumberBetween(800, 2500));

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [inView, setLines]);

  return (
    <div ref={ref} className="mt-[12.8rem] [perspective:2000px]">
      <div
        className={`bg-hero-gradient rounded-lg border border-[#ffffff0a] bg-[#ffffff03] bg-opacity-[0.01] ${
          inView ? "animate-image-rotate" : "[transform:rotatex(25deg)]"
        } before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-hero-glow before:[filter:blur(120px)] before:opacity-0 ${
          inView ? "before:animate-image-glow" : ""
        }`}
      >
        <div className="absolute top-0 left-0 h-full w-full z-20">
          {lines.map((line) => (
            <span
              key={line.id}
              onAnimationEnd={() => removeLine(line.id)}
              style={
                {
                  "--direction": line.direction,
                  "--size": line.size,
                  "--animation-duration": `${line.duration}ms`,
                } as CSSProperties
              }
              className={`absolute top-0 block bg-glow-lines
        ${
          line.direction === "to left"
            ? "left-0 h-[1px] w-[calc(var(--size)*1rem)] animate-glow-line-horizontal"
            : ""
        }
        ${
          line.direction === "to top"
            ? "right-0 w-[1px] h-[calc(var(--size)*1rem)] animate-glow-line-vertical"
            : ""
        }
      `}
            />
          ))}
        </div>
        <svg
          className={`absolute left-0 top-0 h-full w-full [&_path]:stroke-white [&_path]:[strokeOpacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]${
            inView ? " [&_path]:animate-sketch-lines" : ""
          }`}
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>
        <img
          className={`relative z-10 transition-opacity delay-[600ms] ${
            inView ? "opacity-100" : "opacity-0"
          }`}
          src="/img/hero.png"
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default HeroImage;

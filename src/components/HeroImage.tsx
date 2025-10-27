"use client";

import { before } from "node:test";
import { useInView } from "react-intersection-observer";

const HeroImage = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="mt-[12.8rem] [perspective:2000px]">
      <div
        className={`bg-hero-gradient rounded-lg border border-[#ffffff0a] bg-[#ffffff03] bg-opacity-[0.01] ${
          inView ? "animate-image-rotate" : "[transform:rotatex(25deg)]"
        } before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-hero-glow before:[filter:blur(120px)] before:opacity-0 ${
          inView ? "before:animate-image-glow" : ""
        }`}
      >
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

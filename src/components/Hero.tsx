import React from "react";

interface HeroProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children,className='' }: HeroProps) => {
  return <h1 className={`md:text-7xl text-6xl my-6 text-gradient ${className}`}>{children}</h1>;
};

export const HeroSubTitle = ({ children,className='' }: HeroProps) => {
  return <p className={`text-lg mb-12 text-[#b4bcd0] ${className}`}>{children}</p>;
};

export const Hero = ({ children,className='' }: HeroProps) => {
  return <div className={`text-center ${className}`}>{children}</div>;
};

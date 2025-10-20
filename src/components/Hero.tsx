import React from "react";

interface HeroProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroProps) => {
  return <h1 className="md:text-7xl text-6xl my-6 text-gradient">{children}</h1>;
};

export const HeroSubTitle = ({ children }: HeroProps) => {
  return <p className="text-lg mb-12 text-[#b4bcd0]">{children}</p>;
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};

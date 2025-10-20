import React from "react";

interface SecondaryButtonProps {
  className?: string;
}

const SecondaryButton = ({ className }: SecondaryButtonProps) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <a
        href="/"
        className={`text-[1.3rem] relative rounded-full inline-flex items-center bg-white bg-opacity-10 backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight]:bg-[#ffffff14] [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 px-3 h-7 translate-y-[-1rem] animate-fade-in border border-[#ffffff14] ${className}`}
      >
        <span>Linear {year} Release – Built for scale</span>
        <span className="highlight">→</span>
      </a>
    </div>
  );
};

export default SecondaryButton;

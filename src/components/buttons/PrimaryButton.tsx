import React, { Children, ReactNode } from "react";

interface buttonProps {
  content: ReactNode;
  className?: string;
}

const PrimaryButton = ({ content, className="" }: buttonProps) => {
  return (
    <button
      className={`relative rounded-full inline-flex items-center bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow] [&_.highlight]:ml-2 ${className}`}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;

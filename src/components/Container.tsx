import React from "react";

interface containerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: containerProps) => {
  return (
    <div className={`max-w-[120rem] mx-auto px-8  ${className}`}>
      {children}
    </div>
  );
};

export default Container;

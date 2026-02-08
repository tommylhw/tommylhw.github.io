import React, { ReactNode } from "react";

const MarkHighlight = ({ children, active }: { children: ReactNode, active?: boolean; }) => {
  return (
    <mark className={`bg-transparent text-inherit bg-gradient-to-r from-highlight to-highlight bg-no-repeat bg-[length:0_38%] bg-left-bottom hover:bg-[length:100%_38%] transition-all duration-[1500ms] ease-in-out ${active 
          ? "bg-[length:100%_38%]" 
          : "bg-[length:0_38%] hover:bg-[length:100%_38%]"
        }`}>
      {children}
    </mark>
  );
};

export default MarkHighlight;

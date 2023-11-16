import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, ...rest }) => {
  return <section {...rest}>{children}</section>;
};

export default Section;

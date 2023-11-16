import React from "react";
import Section from "./Section";
import RichContent from "./RichContent";
import StepsList from "./StepsList/StepsList";
import { Step as StepType } from "../types";

interface ProcessSectionProps {
  data: {
    Title: string;
    Content: string;
    Steps: StepType[];
  };
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ data }) => {
  const { Title, Content, Steps } = data;

  return (
    <Section className="mb-12 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>{Title && <h2 className="mb-3">{Title}</h2>}</div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>{Content && <RichContent content={Content} />}</div>
        {Steps && <StepsList steps={Steps} />}
      </div>
    </Section>
  );
};

export default ProcessSection;

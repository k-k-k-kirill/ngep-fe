import React from "react";
import Section from "./Section";
import SectionImage from "./SectionImage";
import ButtonLink from "./ButtonLink/ButtonLink";

interface CTASectionProps {
  data: any;
}

const CTASection: React.FC<CTASectionProps> = ({ data }) => {
  const { Title, Button, Image } = data;

  return (
    <Section className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-12 gap-4">
        <div className="mb-3 lg:mb-0">
          <SectionImage image={Image} />
        </div>
        <div className="flex flex-col justify-center">
          {Title && <h2 className="mb-3">{Title}</h2>}
          {Button && <ButtonLink data={Button} />}
        </div>
      </div>
    </Section>
  );
};

export default CTASection;

import React from "react";
import Section from "./Section";
import SectionImage from "./SectionImage";
import RichContent from "./RichContent";

interface AboutSectionProps {
  data: any;
}

const AboutSection: React.FC<AboutSectionProps> = async ({ data }) => {
  const { Title, Content, Image } = data;

  return (
    <Section className="mb-12 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          {Title && <h2 className="mb-3 order-2 lg:order-1">{Title}</h2>}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col order-2 lg:order-1">
          {Image && (
            <div className="order-1 lg:order-2 mb-3 lg:mb-0">
              <SectionImage image={Image} />
            </div>
          )}
        </div>
        <div className="order-1 lg:order-2">
          <RichContent content={Content} />
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;

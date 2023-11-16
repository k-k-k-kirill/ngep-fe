import React from "react";
import Section from "./Section";
import ButtonLink from "./ButtonLink/ButtonLink";
import SectionImage from "./SectionImage";

interface HeroSectionProps {
  data: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const { Title, Content, Image: StrapiImage, CTA } = data;

  return (
    <Section className="mb-12 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          {Title && <h1 className="mb-3">{Title}</h1>}
          {Content && <p className="lead mb-4">{Content}</p>}
          {CTA && <ButtonLink data={CTA} />}
        </div>

        {StrapiImage && (
          <div
            className="order-1 lg:order-2 mb-3 lg:mb-0 relative"
            style={{ position: "relative" }}
          >
            <SectionImage image={StrapiImage} />
          </div>
        )}
      </div>
    </Section>
  );
};

export default HeroSection;

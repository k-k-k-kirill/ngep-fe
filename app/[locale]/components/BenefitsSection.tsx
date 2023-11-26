import React from "react";
import Section from "./Section";
import SectionImage from "./SectionImage";

interface BenefitsSectionProps {
  data: any;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ data }) => {
  const { Title, Image, Benefits } = data;

  return (
    <Section id="benefits" className="container mx-auto px-4 mb-12">
      {Title && (
        <div className="mb-3">
          <h2>{Title}</h2>
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <SectionImage image={Image} />
        </div>
        <div>
          {Benefits &&
            Benefits.map((benefit, index) => {
              return (
                <div key={index} className="mb-4">
                  {benefit.Title && (
                    <h3 className="mb-2">
                      {index < 10 ? `0${++index}` : index} {benefit.Title}
                    </h3>
                  )}
                  {benefit.Content && <p>{benefit.Content}</p>}
                </div>
              );
            })}
        </div>
      </div>
    </Section>
  );
};

export default BenefitsSection;

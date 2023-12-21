import React from "react";
import Section from "../Section";
import styles from "./FeaturesSection.module.css";

interface FeaturesSectionProps {
  data: any;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ data }) => {
  const { Title, Features } = data;

  return (
    <Section id="services" className="bg-greyish mb-12">
      <div className="container mx-auto px-4 py-5">
        <div className="mb-3">
          <h2>{Title}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {Features.map((feature, index) => {
            return (
              <div className="mb-3" key={index}>
                <div className={`${styles.circle} mb-1`} />
                <h3 className="mb-2">{feature.Title}</h3>
                <p>{feature.Content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default FeaturesSection;

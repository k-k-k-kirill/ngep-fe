import React from "react";
import Section from "../Section";
import styles from "./IndustriesSection.module.css";
import Marquee from "react-fast-marquee";

interface IndustriesSectionProps {
  data: any;
}

const IndustriesSection: React.FC<IndustriesSectionProps> = ({ data }) => {
  const { Title, Industries } = data;

  const doubledIndustries = [...Industries, ...Industries];

  return (
    <Section
      id="industries"
      className={`mb-12 ${styles.industriesSection} container mx-auto px-4`}
    >
      <div>{Title && <h2 className="mb-3">{Title}</h2>}</div>
      <div className={styles.scrollContainer}>
        <div className={styles.floatingIndustries}>
          <Marquee pauseOnHover style={{ overflowY: "hidden" }}>
            {doubledIndustries.map((industry, index) => (
              <div key={index} className={styles.industryItem}>
                {industry.Title}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </Section>
  );
};

export default IndustriesSection;

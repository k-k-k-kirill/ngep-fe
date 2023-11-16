import { useLocale } from "next-intl";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import CTASection from "./components/CTASection";
import IndustriesSection from "./components/IndustriesSection/IndustriesSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import BenefitsSection from "./components/BenefitsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

async function getData(locale: string = "en") {
  const res = await fetch(
    `${process.env.API_URL}/api/home-page?populate=deep,10&locale=${locale}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const parsedResponse = await res.json();

  return parsedResponse.data;
}

const sectionComponentsMap: { [key: string]: React.FC<{ data: any }> } = {
  ["header"]: Header,
  ["hero-section"]: HeroSection,
  ["about-section"]: AboutSection,
  ["process-section"]: ProcessSection,
  ["cta-section"]: CTASection,
  ["industries-section"]: IndustriesSection,
  ["features-section"]: FeaturesSection,
  ["benefits-section"]: BenefitsSection,
  ["contact-section"]: ContactSection,
  ["footer"]: Footer,
};

export default async function Home() {
  const locale = useLocale();
  const data = await getData(locale);

  return (
    <main>
      {data.attributes.Sections?.map((section: any, index: number) => {
        const SectionComponent =
          sectionComponentsMap[section.__component.replace("sections.", "")];
        if (!SectionComponent) {
          // Handle unknown section type
          return null;
        }
        return <SectionComponent key={index} data={section} />;
      })}
    </main>
  );
}

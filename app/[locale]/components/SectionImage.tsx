import React from "react";
import Image from "next/image";

interface StrapiImage {
  data: {
    attributes: {
      src: string;
      alt: string;
      width: number;
      height: number;
      url: string;
    };
  };
}

interface SectionImageProps {
  image: StrapiImage;
}

const SectionImage: React.FC<SectionImageProps> = ({ image }) => {
  return (
    <div style={{ width: "100%" }}>
      <Image
        src={`${process.env.API_URL}${image.data.attributes.url}`}
        alt={image.data.attributes.alt}
        width={image.data.attributes.width}
        height={image.data.attributes.height}
        layout="responsive"
      />
    </div>
  );
};

export default SectionImage;

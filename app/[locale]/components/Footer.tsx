import React from "react";
import SectionLink from "./SectionLink/SectionLink";
import Logo from "../../../assets/logo.png";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  data: any;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const {
    Address,
    Phone,
    Email,
    PrivacyPolicy,
    AddressLabel,
    ContactLabel,
    LegalLabel,
  } = data;
  return (
    <footer className="bg-grey py-5">
      <div className="container px-4 mx-auto">
        <div className="mb-4 flex justify-start">
          <Link
            className="md:flex md:justify-center md:flex-col md:items-center"
            href="/"
          >
            <Image
              className="mb-1"
              src={Logo}
              alt="NGEP"
              width={80}
              height={80}
            />
            <span className="text-xs hidden md:block text-center">
              Nordic Green Environmental <br /> Partners
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            {Address && (
              <div>
                <h3 className="mb-2">{AddressLabel}</h3>
                <p>{Address}</p>
              </div>
            )}
          </div>
          <div>
            {(Phone || Email) && (
              <div>
                <h3 className="mb-2">{ContactLabel}</h3>
                {Phone && (
                  <div>
                    <SectionLink
                      className="mb-1"
                      url={`tel:${Phone}`}
                      title={Phone}
                    />
                  </div>
                )}
                {Email && (
                  <div>
                    <SectionLink
                      className="mb-1"
                      url={`mailto:${Email}`}
                      title={Email}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          <div>
            <h3 className="mb-2">{LegalLabel}</h3>
            {PrivacyPolicy && (
              <div>
                <SectionLink
                  className="mb-1"
                  url={PrivacyPolicy.Url}
                  title={PrivacyPolicy.Title}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

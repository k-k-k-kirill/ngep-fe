import React from "react";
import SectionLink from "./SectionLink/SectionLink";
import SiteLogo from "./SiteLogo";

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
        <div className="mb-4">
          <SiteLogo />
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

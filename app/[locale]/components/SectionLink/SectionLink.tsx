import React from "react";
import Link from "next/link";
import styles from "./SectionLink.module.css";

interface SectionLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  url: string;
  title: string;
}

const SectionLink: React.FC<SectionLinkProps> = ({
  url,
  title,
  className,
  ...rest
}) => {
  return (
    <Link href={url}>
      <span
        {...rest}
        className={`${styles.sectionLink} ${className} inline-block`}
      >
        {title}
      </span>
    </Link>
  );
};

export default SectionLink;

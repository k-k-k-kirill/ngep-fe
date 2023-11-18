import React from "react";
import Logo from "../../../assets/logo.png";
import Link from "next/link";
import Image from "next/image";

const SiteLogo = () => {
  return (
    <Link href="/">
      <Image src={Logo} alt="NGEP" width={80} height={80} />
    </Link>
  );
};

export default SiteLogo;

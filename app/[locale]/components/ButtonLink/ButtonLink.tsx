import React from "react";
import Link from "next/link";
import Button from "../Button/Button";

interface ButtonProps {
  data: any;
}

const ButtonLink: React.FC<ButtonProps> = ({ data }) => {
  const { Title, Url } = data;

  return (
    <Link href={`/${Url}`}>
      <Button title={Title} />
    </Link>
  );
};

export default ButtonLink;

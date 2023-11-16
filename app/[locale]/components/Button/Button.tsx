import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <button {...rest} className={styles.button}>
      {title}
    </button>
  );
};

export default Button;

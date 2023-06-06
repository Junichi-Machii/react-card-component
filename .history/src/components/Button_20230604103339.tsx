import { ButtonInterface } from "../type";
import styles from "./Button.module.css";

const Button = ({ text, filled }: ButtonInterface) => {
  const filledClass = filled ? styles.filled : "";
  return (
    <>
      <small className={`${styles.Button} uppercase ${filledClass}`}>{text}</small>
    </>
  );
};

export default Button;



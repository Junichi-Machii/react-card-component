import { ButtonInterface } from "../type";
import styles from "./Button.module.css";

const Button = ({ text, filled }: ButtonInterface) => {
  const filledClass = filled ? styles.filled : "";
  return (
    <>
<a href="#" className="">Bu</a>    </>
  );
};

export default Button;



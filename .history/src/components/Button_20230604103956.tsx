import { ButtonInterface } from "../type";
import styles from "./Button.module.css";

const Button = ({ text, filled, type, text,  }: ButtonInterface) => {
  const filledClass = filled ? styles.filled : "";
  return (
    <>
      <a href="#" className="">
        Button
      </a>{" "}
    </>
  );
};

export default Button;

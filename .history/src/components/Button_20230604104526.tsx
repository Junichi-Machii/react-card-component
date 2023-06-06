import { ButtonInterface } from "../type";
import styles from "./Button.module.css";

const Button = ({ text, filled, type, href, icon  }: ButtonInterface) => {
  const filledClass = filled ? styles.filled : "";
  return (
    <>
      <a href={href} className={`${sty}`}>
        {text}
      </a>{" "}
    </>
  );
};

export default Button;

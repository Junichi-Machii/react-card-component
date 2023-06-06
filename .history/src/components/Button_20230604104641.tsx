import { ButtonInterface } from "../type";
import styles from "./Button.module.css";

const Button = ({ text, filled, type, href, icon  }: ButtonInterface) => {
  const filledClass = filled ? styles.filled : "";
  return (
    <>
      <a href={href} className={`${styles.btn} ${sytles[type]} ${fi}`}>
        {text}
      </a>{" "}
    </>
  );
};

export default Button;

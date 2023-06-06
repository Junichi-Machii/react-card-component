import { ButtonInterface } from "../type";
import styles from "./Button.module.css";

const Button = ({ text, filled, type, href, icon  }: ButtonInterface) => {
  const filledClass = filled ? styles.filled : "";
  return (
    <>
      <a href={href} className={`${styles.btn} ${styles[type.to]} ${filledClass}`}>
        <span>{text}</span>
        {icon}
      </a>{" "}
    </>
  );
};

export default Button;

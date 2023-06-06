import { BInterface } from "../type";
import styles from "./B.module.css";

const B = ({ text, filled }: BInterface) => {
  const filledClass = filled ? styles.filled : "";
  return (
    <>
      <small className={`${styles.B} uppercase ${filledClass}`}>{text}</small>
    </>
  );
};

export default B;



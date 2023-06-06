import { ButtInterface } from "../type";
import styles from "./Butt.module.css";

const Butt = ({ text, filled }: ButtInterface) => {
  const filledClass = filled ? styles.filled : "";
  return (
    <>
      <small className={`${styles.Butt} uppercase ${filledClass}`}>{text}</small>
    </>
  );
};

export default Butt;



import { Interface } from "../type";
import styles from "./.module.css";

const  = ({ text, filled }: Interface) => {
  const filledClass = filled ? styles.filled : "";
  return (
    <>
      <small className={`${styles.} uppercase ${filledClass}`}>{text}</small>
    </>
  );
};

export default ;



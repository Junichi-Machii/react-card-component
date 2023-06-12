import { BadgeInterface } from "../type";
import styles from "./Badge.module.css";

const Badge = ({ text, filled ,ic}: BadgeInterface) => {
  const filledClass = filled ? styles.filled : "";
  return (
    <>
      <small className={`${styles.badge} uppercase ${filledClass}`}>{text}</small>
    </>
  );
};

export default Badge;

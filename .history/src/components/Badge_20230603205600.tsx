import { BadgeInterface } from "../type";
import styles from "./Badge.module.css";

const Badge = ({ text, filled }: BadgeInterface) => {
  const filledClass = filled ? styles.f
  return (
    <>
      <small className={`${styles.badge}`}>{text}</small>
    </>
  );
};

export default Badge;
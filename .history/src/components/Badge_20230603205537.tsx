import { BadgeInterface } from "../type";
import styles from "./Badge.module.css";

const Badge = ({ text, filled }: BadgeInterface) => {
  cons
  return (
    <>
      <small className={`${styles.badge}`}>{text}</small>
    </>
  );
};

export default Badge;

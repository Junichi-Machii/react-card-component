import { BadgeInterface } from "../type";
import styles fro

const Badge = ({ text, filled }: BadgeInterface) => {
  return (
  <>
  <small className={`${styles.badge}`}>{text}</small>
  </>
  )
};

export default Badge;

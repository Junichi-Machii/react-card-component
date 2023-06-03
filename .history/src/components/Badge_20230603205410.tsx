import { BadgeInterface } from "../type";
import style

const Badge = ({ text, filled }: BadgeInterface) => {
  return (
  <>
  <small className={`${styles.badge}`}>{text}</small>
  </>
  )
};

export default Badge;

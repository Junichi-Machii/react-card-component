import { BadgeInterface } from "../type";
import 

const Badge = ({ text, filled }: BadgeInterface) => {
  return (
  <>
  <small className={`${styles.badge}`}>{text}</small>
  </>
  )
};

export default Badge;

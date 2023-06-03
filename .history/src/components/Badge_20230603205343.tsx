import { BadgeInterface } from "../type";


const Badge = ({ text, filled }: BadgeInterface) => {
  return (
  <>
  <small className={`${styles.badge}`}>{text}</small>
  </>
  )
};

export default Badge;

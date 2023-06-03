import { BadgeInterface } from "../type";

const Badge = ({ text, filled }: BadgeInterface) => {
  return (
  <>
  <small className={`${styles.bad}`}>{text}</small>
  </>
  )
};

export default Badge;

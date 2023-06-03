import { BadgeInterface } from "../type";

const Badge = ({ text, filled }: BadgeInterface) => {
  return (
  <>
  <small className={`${st}`}>{text}</small>
  </>
  )
};

export default Badge;

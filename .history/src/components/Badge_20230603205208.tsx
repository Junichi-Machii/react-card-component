import { BadgeInterface } from "../type";

const Badge = ({ text, filled }: BadgeInterface) => {
  return (
  <>
  <small className={`${styl}`}>{text}</small>
  </>
  )
};

export default Badge;

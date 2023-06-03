import { BadgeInterface } from "../type";

const Badge = ({ text, filled }: BadgeInterface) => {
  return (
  <>
  <small className={`${sty}`}>{text}</small>
  </>
  )
};

export default Badge;

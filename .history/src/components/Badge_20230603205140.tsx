import { BadgeInterface } from "../type";

const Badge = ({ text, filled }: BadgeInterface) => {
  return (
  <>
  <small class>{text}</small>
  </>
  )
};

export default Badge;

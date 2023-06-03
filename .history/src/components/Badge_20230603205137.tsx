import { BadgeInterface } from "../type";

const Badge = ({ text, filled }: BadgeInterface) => {
  return (
  <>
  <small >{text}</small>
  </>
  )
};

export default Badge;

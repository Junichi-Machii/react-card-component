import { BadgeInterface } from "../type";

const Badge = ({ text, filled }: BadgeInterface) => {
  return (
  <>
  <small cla>{text}</small>
  </>
  )
};

export default Badge;

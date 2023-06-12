import { CardInterface } from "../type";
import styles from "./Card.module.css";

const Card = ({body, btn,title,badge,image,indicator} : CardInterface) => {
  return (
   <article className={`stack-lg ${styles.card}`}>
    {indicator &&
      smal
    }
   </article>
  )
}
export default Card
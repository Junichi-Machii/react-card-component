import { CardInterface } from "../type";
import styles from "./Card.module.css";

const Card = ({body, btn,title,badge,image,indicator} : CardInterface) => {
  return (
   <article className={`stack-lg ${styles.card}`}>
    {indicator &&
      <small className={styles.indicator}>{indicator}</small>
    }
    {badge &&
      
    }
   </article>
  )
}
export default Card
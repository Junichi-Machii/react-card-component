import { CardInterface } from "../type";
import Badge from "./Badge";
import styles from "./Card.module.css";

const Card = ({body, btn,title,badge,image,indicator} : CardInterface) => {
  return (
   <article className={`stack-lg ${styles.card}`}>
    {indicator &&
      <small className={styles.indicator}>{indicator}</small>
    }
    {badge &&
      <Badge text={badge.text} filled={badge.filled} />
    }
    {image &&
      <img src={image} alt="T" />
    }
   </article>
  )
}
export default Card
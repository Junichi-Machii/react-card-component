import { CardInterface } from "../type";
import Badge from "./Badge";
import styles from "./Card.module.css";

const Card = ({body, btn,title,badge,image,indicator, subtitle} : CardInterface) => {
  return (
   <article className={`stack-lg ${styles.card}`}>
    {indicator &&
      <small className={styles.indicator}>{indicator}</small>
    }
    {badge &&
      <Badge text={badge.text} filled={badge.filled} />
    }
    {image &&
      <img src={image} alt="Random Image" className={styles.image}/>
    }
    <div className="stack-sm">
      <h3 className={styles.title}>{title}</h3>
      {subtitle && 
        <small className={styles.subtitle}>{subtitle}</small>
      }
    </div>
    <p className={}></p>
   </article>
  )
}
export default Card
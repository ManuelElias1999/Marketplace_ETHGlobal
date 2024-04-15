import styles from "@/styles/components/card.module.css";
import MainButton from "../buttons/MainButton";
import { RemoveMediaImage } from "iconoir-react";
import Image from "next/image";

type CardProps = {
  imgSrc?: string;
  imgAlt?: string;
  tittle?: string;
  description?: string;
  price?: number;
  currency?: string;
  rating?: number;
  button?: string;
};

function Card({
  imgSrc,
  imgAlt,
  tittle = "Product Tittle",
  description = "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan nisl..",
  price = 100,
  currency = "ETH",
  rating = 4.5,
  button = "Add to Cart",
}: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        {imgSrc && imgAlt ? (
          <Image src={imgSrc} alt={imgAlt} width={150} height={150} />
        ) : (
          <RemoveMediaImage width={150} height={150} />
        )}
      </div>
      <div className={styles.card_tittle}>
        <h4>{tittle}</h4>
      </div>
      <div className={styles.card_description}>{description}</div>
      <div className={styles.notes}>
        <div className={styles.price}>
          <span className={styles.price_number}>{price}</span>
          <span className={styles.price_currency}> {" " + currency}</span>
        </div>
        <div className={styles.rating}>
          <span className={styles.rating_number}>{rating}</span>
        </div>
      </div>
      <div className={styles.card_button}>
        <MainButton color="var(--secondary)">
          <span>{button}</span>
        </MainButton>
      </div>
    </div>
  );
}

export default Card;

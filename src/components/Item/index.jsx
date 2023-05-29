import React from "react";
import BasketBtn from "../BasketBtn";
import styles from "./Item.module.css";
import Price from "../Price";

export default function Item({ title, image, price }) {
  return (
    <div className={styles.item}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.bottomItem}>
        <Price price={price} />
        <BasketBtn>asdfdasf</BasketBtn>
      </div>
    </div>
  );
}

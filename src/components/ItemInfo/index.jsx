import React from "react";
import styles from "./ItemInfo.module.css";
import Price from "../Price";
import BasketBtn from "../BasketBtn";
import QuantitySelector from "../QuantitySelector";

export default function ItemInfo({ itemName, price, description }) {
  return (
    <div className={styles.infoContainer}>
      <h1 className={styles.itemName}>{itemName}</h1>
      <hr />
      
      <Price price={price} />
      <div className={styles.buy}>
        <QuantitySelector />
        <BasketBtn />
      </div>
      <p>{description}</p>
      <hr />
    </div>
  );
}

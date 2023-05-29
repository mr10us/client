import React from "react";
import styles from "./BasketBtn.module.css";
import basket from "../../SVGs/basket";

export default function BasketBtn() {
  return <button className={styles.basketBtn}>Придбати{basket}</button>;
}

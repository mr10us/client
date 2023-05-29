import React from "react";
import styles from "./Price.module.css";

export default function Price({ price }) {
  return <p className={styles.price}>{price} грн</p>;
}

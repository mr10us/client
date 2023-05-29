import React from "react";
import styles from "./Card.module.css";

export default function Card({image, name}) {
  return (
    <div className={styles.card}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        />
        <p>{name}</p>
    </div>
  );
}

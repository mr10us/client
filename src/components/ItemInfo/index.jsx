import React from "react";
import styles from "./ItemInfo.module.css";

export default function ItemInfo({ itemName, description, children}) {
  return (
    <div className={styles.infoContainer}>
      <h1 className={styles.itemName}>{itemName}</h1>
      <hr />
      {children}
      <p>{description}</p>
      <hr />
    </div>
  );
}

import React from "react";
import styles from "./ItemsContainer.module.css"

export default function ItemsContainer({children}) {
  return (
    <div
      style={{ position: "relative", backgroundColor: "#f5f5f5"}}
    >
      <div className={styles.itemsContainer}>
        {children}
      </div>
    </div>
  );
}

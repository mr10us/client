import React from "react";
import styles from "./ItemImage.module.css";

export default function ItemImage({src, alt }) {

  return (
    <div className={styles.imgContainer}>
      <img src={src} alt={alt} />
    </div>
  );
}

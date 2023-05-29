import React from "react";
import styles from "./ItemImage.module.css";

export default function ItemImage({ imageUrl, alt }) {
  return (
    <div className={styles.imgContainer}>
      <img src={imageUrl} alt={alt} />
    </div>
  );
}

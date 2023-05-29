import React from "react";
import styles from "./HeaderText.module.css"
import Button from "../Button"

export default function HeaderText() {
  return (
    <div className={styles.textContainer}>
      <h2>Краще спорядження</h2>
      <h1>Висока якість</h1>
      <p>Ми дбаємо про наших клієнтів</p>
      <Button style={{padding: 15, fontSize: "1.2rem", fontWeight: "bold"}}>Придбати зараз</Button>
    </div>
  );
}

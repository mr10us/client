import React from "react";
import styles from "./Price.module.css";

export default function Price({ children }) {
  return <p className={styles.price}>{children} грн</p>;
}

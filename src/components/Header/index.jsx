import React from "react";
import HeaderText from "../HeaderText";
import styles from "./Header.module.css";

export default function Header({children, showText}) {
  return (
    <header>
      <div className={styles.mainPage}>
        {showText &&
        <HeaderText />}
      </div>
      {children}
    </header>
  );
}

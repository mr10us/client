import React from "react";
import HeaderText from "../../components/HeaderText";
import styles from "./Header.module.css";

export default function Header({children, showText, height}) {
  return (
    <header>
      <div className={styles.mainPage} style={{height: height}}>
        {showText &&
        <HeaderText />}
      </div>
      {children}
    </header>
  );
}

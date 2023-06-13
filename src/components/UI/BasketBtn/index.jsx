import React from "react";
import styles from "./BasketBtn.module.css";    
import { useDispatch } from "react-redux";
import { addItem, toggleActive } from "../../../features/items/itemSlice";

export default function BasketBtn({item}) {
  const dispatch = useDispatch();
  return (
    <div className={styles.buttons}>
      <button className={styles.btn} onClick={() => dispatch(addItem(item))}>
        <span></span>
        <p
          data-text="Придбати"
          data-title={item?.price ? item?.price + " грн" : "Товар відсутній"}
        ></p>
      </button>
    </div>
  );
}

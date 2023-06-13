import React from "react";
import BasketBtn from "../UI/BasketBtn";
import styles from "./Item.module.css";
import { SHOP_ROUTE } from "../../utils/consts";
import { NavLink } from "react-router-dom";

export default function Item({ item, type }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <NavLink to={SHOP_ROUTE + `${type}/${item.id}`}>
          <img
            src={process.env.REACT_APP_API_URL + item.img}
            className={styles.img}
            alt={item.name}
          />
          <strong>{item.name}</strong>
        </NavLink>

        <BasketBtn item={item} />
      </div>
    </div>
  );
}

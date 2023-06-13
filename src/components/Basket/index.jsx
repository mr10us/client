import { BASKET_ROUTE } from "../../utils/consts";
import styles from "./Basket.module.css";
import basket from "../../SVGs/basket";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItemsAmount } from "../../features/items/itemSlice";
import { useEffect } from "react";

export default function Basket() {
  const itemsAmount = useSelector(selectItemsAmount);

  return (
    <div className={styles.basket}>
      <NavLink to={BASKET_ROUTE}>
        <p style={itemsAmount == 0 ? { marginRight: "5px" } : {}}>
          {itemsAmount > 0 ? itemsAmount : ""}
        </p>
        {basket}
      </NavLink>
    </div>
  );
}

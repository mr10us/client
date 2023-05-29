import React, { useState } from "react";
import styles from "./QuantitySelector.module.css";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  function handleIncreaseQuantity() {
    setQuantity(quantity + 1);
  }

  function handleDecreaseQuantity() {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  }

  return (
    <div className="quantity-selector">
      <div className={styles.quantitySelector__controls}>
        <button onClick={handleDecreaseQuantity}>&#8722;</button>
        <div className="quantity-selector__quantity">{quantity}</div>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
    </div>
  );
}

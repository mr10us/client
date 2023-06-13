import { useState } from "react";
import styles from "./QuantitySelector.module.css";
import { useSelector } from "react-redux";
import { selectOneItem } from "../../../features/items/itemSlice";

export default function QuantitySelector({ onAmountChange, id }) {
  const [amount, setAmount] = useState(1);

  const item = useSelector((state) => selectOneItem(state, id));

  const decreaseAmount = () => {
    if (amount > 1) {
      const newAmount = amount - 1;
      setAmount(newAmount);
      onAmountChange && onAmountChange(newAmount);
    }
  };

  const increaseAmount = () => {
    const newAmount = amount + 1;
    setAmount(newAmount);
    onAmountChange && onAmountChange(newAmount);
  };

  return (
    <div className="quantity-selector">
      <div className={styles.quantitySelector__controls}>
        <button onClick={decreaseAmount}>&#8722;</button>
        <div className="quantity-selector__quantity">
          {item?.amount ? item?.amount : amount}
        </div>
        <button onClick={increaseAmount}>+</button>
      </div>
    </div>
  );
}

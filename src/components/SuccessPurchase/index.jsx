import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SuccessPurchase.module.css";
import { SHOP_ROUTE } from "../../utils/consts";
import { useSelector } from "react-redux";
import { selectItems } from "../../features/items/itemSlice";

export default function SuccessPurchase() {
  const items = useSelector(selectItems);
  const [time, setTime] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      navigate(SHOP_ROUTE);
    }
  }, [time, navigate]);

  return (
    <div className={styles.success}>
      <h1>Дякуємо за покупку!</h1>
      <p>
        Ви будете перенаправлені на головну сторінку через {time} секунд
        {time === 1 ? "" : "и"}
      </p>
    </div>
  );
}

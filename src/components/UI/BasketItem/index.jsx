import Price from "../Price";
import QuantitySelector from "../QuantitySelector";
import styles from "./BasketItem.module.css";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { dropItem } from "../../../features/items/itemSlice";

export default function BasketItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.separator}>
      <div className={styles.itemInfo}>
        <div className={styles.itemContainer}>
          <img
            src={process.env.REACT_APP_API_URL + item.img}
            alt={item.name}
          />
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        </div>
        <div>
          <Price>{item.price}</Price>
          <QuantitySelector id={item.id} />
          <Button
            style={{ fontSize: "1rem", color: "red" }}
            onClick={() => dispatch(dropItem(item.id))}
          >
            Прибрати зі списку
          </Button>
        </div>
      </div>
    </div>
  );
}

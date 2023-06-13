import styles from "./BasketContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { dropState, selectActive, selectItems } from "../../features/items/itemSlice";
import BasketItem from "../UI/BasketItem";
import Button from "../UI/Button";
import { useNavigate, useParams } from "react-router-dom";
import { SUCCESS_ROUTE } from "../../utils/consts";
import { useEffect } from "react";

export default function BasketContainer() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      {items.length > 0 ? (
        items.map((item) => <BasketItem key={item.id} item={item} />)
      ) : (
        <h2 style={{ padding: 50, textAlign: "center" }}>
          Товарів не знайдено
        </h2>
      )}
      {items.length > 0 ? (
        <Button
          style={{ position: "absolute", right: 15, bottom: -70 }}
          onClick={() => {
            dispatch(dropState());
            navigate(SUCCESS_ROUTE)
          }}
        >
          Замовити
        </Button>
      ) : null}
    </div>
  );
}

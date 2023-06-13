import React, { useEffect, useRef, useState } from "react";
import ItemImage from "../components/ItemImage";
import ItemInfo from "../components/ItemInfo";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import QuantitySelector from "../components/UI/QuantitySelector";
import BasketBtn from "../components/UI/BasketBtn";
import Basket from "../components/Basket";
import { fetchOneItem } from "../http/itemApi";

export default function ItemPage() {
  const [amount, setAmount] = useState(1);
  const [item, setItem] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchOneItem(id).then((data) => setItem(data));
  }, []);

  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
  };

  return (
    <>
      <NavBar faded={true} />
      <div
        style={{
          backgroundColor: "#fff",
          display: "flex",
          width: "80%",
          margin: "120px auto",
          boxShadow: "0 10px 25px black",
        }}
      >
        <ItemImage src={process.env.REACT_APP_API_URL + item.img} alt={"alt"} />
        <ItemInfo itemName={item.name} description={item.description}>
          <div style={{ display: "flex", alignItems: "center", gap: 25 }}>
            <QuantitySelector
              onAmountChange={handleAmountChange}
              id={id}
            />
            <BasketBtn item={{ ...item, amount: amount }}></BasketBtn>
          </div>
        </ItemInfo>
      </div>
      <Basket />
    </>
  );
}

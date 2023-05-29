import React from "react";
import ItemImage from "../components/ItemImage";
import ItemInfo from "../components/ItemInfo";
import { useLocation } from "react-router-dom";

export default function ItemPage() {

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "40px",
          backgroundColor: "#008001",
          marginTop: "15px"
        }}
      ></div>
      <div
        style={{
          backgroundColor: "#fff",
          display: "flex",
          width: "80%",
          margin: "120px auto",
        }}
      >
        <ItemImage imageUrl={0} alt={'alt'} />
        <ItemInfo
          itemName={'title'}
          price={'price'}
          description={'description'}
        />
      </div>
    </>
  );
}

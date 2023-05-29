import React from "react";
import Header from "../components/Header";
import ItemSlider from "../components/ItemSlider";

export default function Shop() {
  return (
    <Header showText={true}>
      <ItemSlider />
    </Header>
  );
}

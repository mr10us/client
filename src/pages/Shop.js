import React from "react";
import Header from "../Layouts/Header";
import ItemSlider from "../components/ItemSlider";
import NavBar from "../components/NavBar";

export default function Shop() {
  return (
    <Header showText={true}>
      <NavBar />
      <ItemSlider />
    </Header>
  );
}

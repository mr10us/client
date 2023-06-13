import React from "react";
import Header from "../Layouts/Header";
import ItemsContainer from "../components/ItemsContainer";
import NavBar from "../components/NavBar";
import Basket from "../components/Basket";


export default function Items() {
  return (
    <>
      <Header showText={false} height={window.innerHeight / 2} />
      <NavBar />
      <ItemsContainer />
      <Basket />
    </>
  );
}

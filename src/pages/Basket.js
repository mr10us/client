import React from "react";
import NavBar from "../components/NavBar";
import BasketContainer from "../components/BasketContainer";

export default function Basket() {

  return (
    <>
      <NavBar faded={true}/>

      <BasketContainer />
    </>
  );
}

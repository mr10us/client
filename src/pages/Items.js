import React from "react";
import Header from "../components/Header";
import ItemsContainer from "../components/ItemsContainer";
import Item from "../components/Item";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";

export default function Items() {

  return (
    <>
      <Header showText={false} />
      <ItemsContainer>
        {/* {items !== 0 ? (
          neededItems.map((item) => (
            <NavLink
            key={item.id}
            to={SHOP_ROUTE + `${currentTypeId[1]}/${item.id}`}
            style={{textDecoration: 'none', color: 'inherit'}}
            >
              <Item
                title={item.title}
                image={item.image}
                price={item.price}
              />
            </NavLink>
          ))
        ) : (
          <p style={{ fontSize: "1.5rem" }}>Товар відсутній</p>
        )} */}
      </ItemsContainer>
    </>
  );
}

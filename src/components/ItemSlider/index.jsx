import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { Context } from "../..";
import Item from "../Card";
import styles from "./ItemSlider.module.css";
import { SHOP_ROUTE } from "../../utils/consts";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(255, 255, 255, 0.6)",
        right: -100,
        top: 20,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(255, 255, 255, 0.6)",
        left: -100,
        top: 20,
      }}
      onClick={onClick}
    />
  );
}
const ItemSlider = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };


  return (

    <div
      style={{ position: "relative", height: 150, backgroundColor: "#fafafa" }}
    >
      <div className={styles.slider}>
        <Slider {...settings}>
          {/* {.map((item) => (
            <NavLink
              key={item.id}
              to={SHOP_ROUTE + `${item.id}`}
            >
              <Item name={item.name} image={item.img} />
            </NavLink>
          ))} */}
        </Slider>
      </div>
    </div>
  );
};

export default ItemSlider;

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import Card from "../Card";
import styles from "./ItemSlider.module.css";
import { SHOP_ROUTE } from "../../utils/consts";
import { useDispatch, useSelector } from "react-redux";
import { selectTypes } from "../../features/types/typeSlice";
import { fetchTypes } from "../../http/itemApi";
import { setTypes } from "../../features/types/typeSlice";
import Loading from "../UI/Loading"

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

  const types = useSelector(selectTypes);
  
  return (
    <div
      style={{ position: "relative", height: 150, backgroundColor: "#fafafa" }}
    >
      <div className={styles.slider}>
        {types.length != 0 ? <Slider {...settings}>
          {types.map((type) => (
            <NavLink key={type.id} to={SHOP_ROUTE + `${type.nameUrl}`}>
              <Card
                name={type.name}
                image={process.env.REACT_APP_API_URL + type.img}
              />
            </NavLink>
          ))}
        </Slider> : <Loading />}
      </div>
    </div>
  );
};

export default ItemSlider;

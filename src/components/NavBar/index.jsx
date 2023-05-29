import React from "react";
import styles from "./NavBar.module.css";
import NavButton from "../NavButton";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { useSelector, useDispatch } from "react-redux";
import { dropUser, selectUser } from "../../features/user/userSlice";

const NavBar = ({ faded }) => {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <nav
      className={`wrapper ${styles.navigation}`}
      style={faded ? { opacity: 1, backgroundColor: "#008001" } : {}}
    >
      <NavButton>
        <NavLink
          style={{ textDecoration: "none", color: "inherit" }}
          to={SHOP_ROUTE}
        >
          Головна
        </NavLink>
      </NavButton>
      {user.isAuth ? (
        <>
          <div>
            <NavButton>Панель адміністратора</NavButton>
            <NavButton onClick={() => dispatch(dropUser())}>Вийти</NavButton>
          </div>
        </>
      ) : (
        <>
          <NavLink
            style={{ textDecoration: "none", color: "inherit" }}
            to={LOGIN_ROUTE}
          >
            <NavButton>Увійти</NavButton>
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default NavBar;

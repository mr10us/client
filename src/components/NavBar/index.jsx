import React from "react";
import styles from "./NavBar.module.css";
import NavButton from "../UI/NavButton";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { useSelector, useDispatch } from "react-redux";
import { dropUser, selectUser } from "../../features/user/userSlice";

const NavBar = ({
  faded,
  showMain = true,
  showAdmin = true,
}) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <nav
      className={`wrapper ${styles.navigation}`}
      style={
        faded
          ? {
              opacity: 1,
              backgroundColor: "#008001",
              boxShadow: "inset 0 0 10px black",
            }
          : {}
      }
    >
      {showMain && (
        <NavLink
          style={{ textDecoration: "none", color: "inherit" }}
          to={SHOP_ROUTE}
        >
          <NavButton>Головна</NavButton>
        </NavLink>
      )}
      {user.isAuth ? (
        <>
          <div>
            {showAdmin && (
              <NavLink
                style={{ textDecoration: "none", color: "inherit" }}
                to={ADMIN_ROUTE}
              >
                <NavButton>Панель адміністратора</NavButton>
              </NavLink>
            )}
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

import React, { useState } from "react";
import styles from "./AuthForm.module.css";
import Input from "../Input";
import Button from "../Button";
import { NavLink, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTER_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { useDispatch, useSelector } from "react-redux";
import { addUser, selectUser } from "../../features/user/userSlice";

export default function AuthForm() {
  const [userInfo, setUserInfo] = useState({ email: "", pwd: "" });
  const [loc, setLoc] = useState(LOGIN_ROUTE);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const signUp = (e) => {
    e.preventDefault();
    if (userInfo.email.length > 6 && userInfo.pwd.length > 7) {
      dispatch(addUser(userInfo));
      setUserInfo({ email: "", pwd: "" });
      navigate(SHOP_ROUTE);
    }
  };

  const signIn = (e) => {
    e.preventDefault();
    if (userInfo.email.length > 6 && userInfo.pwd.length > 7) {
      if (user.email !== userInfo.email) {
        dispatch(addUser(userInfo));
      }
      setUserInfo({ email: "", pwd: "" });
      navigate(SHOP_ROUTE);
    }
  };

  return (
    <div className={styles.background}>
      <div
        className={styles.container}
        style={{ height: window.innerHeight - 54 }}
      >
        <div>
          {loc === LOGIN_ROUTE ? (
            <h1>Авторизація</h1>
          ) : (
            <h1>Зареєструватись</h1>
          )}
          <form>
            <Input
              placeholder="Ваш логін"
              type={"text"}
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />
            <Input
              placeholder="Ваш пароль"
              type={"password"}
              value={userInfo.pwd}
              onChange={(e) =>
                setUserInfo({ ...userInfo, pwd: e.target.value })
              }
            />
            <div className={styles.buttonContainer}>
              <div>
                {loc === LOGIN_ROUTE ? "Немає акаунту?" : "Маєте акаунт?"}
                {loc === LOGIN_ROUTE ? (
                  <NavLink
                    to={REGISTER_ROUTE}
                    className={styles.authBtn}
                    onClick={() => setLoc(REGISTER_ROUTE)}
                  >
                    Зареєструватись
                  </NavLink>
                ) : (
                  <NavLink
                    to={LOGIN_ROUTE}
                    className={styles.authBtn}
                    onClick={() => setLoc(LOGIN_ROUTE)}
                  >
                    Увійти
                  </NavLink>
                )}
              </div>
              {loc === LOGIN_ROUTE ? (
                <Button onClick={(e) => signIn(e)}>Вхід</Button>
              ) : (
                <Button onClick={(e) => signUp(e)}>Реєстрація</Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

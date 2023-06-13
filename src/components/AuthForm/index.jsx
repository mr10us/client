import { useState } from "react";
import styles from "./AuthForm.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTER_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { useDispatch, useSelector } from "react-redux";
import { addUser, selectUser } from "../../features/user/userSlice";
import NavBar from "../NavBar";
import { registration, login } from "../../http/userAPI";

export default function AuthForm() {
  const [userInfo, setUserInfo] = useState({ email: "", pwd: "" });
  const [loc, setLoc] = useState(LOGIN_ROUTE);
  const isLogin = loc === LOGIN_ROUTE;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const click = async (e) => {
    try {
      e.preventDefault();
      if (userInfo.email.length > 6 && userInfo.pwd.length > 7) {
        if (user.email !== userInfo.email) {
          if (isLogin) {
            const response = await login(userInfo.email, userInfo.pwd);
            dispatch(addUser(userInfo));
          } else {
            const response = await registration(userInfo.email, userInfo.pwd);
            dispatch(addUser(userInfo));
          }
        }
        setUserInfo({ email: "", pwd: "" });
        navigate(SHOP_ROUTE);
      }
    } catch (error) {
      alert(error.response.data.message)
    }
  };

  return (
    <>
      <NavBar />
      <div className={styles.background}>
        <div
          className={styles.container}
          style={{ height: window.innerHeight - 54 }}
        >
          <div>
            {isLogin ? <h1>Авторизація</h1> : <h1>Зареєструватись</h1>}
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
                  {isLogin ? "Немає акаунту?" : "Маєте акаунт?"}
                  {isLogin ? (
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
                <Button onClick={(e) => click(e)}>
                  {isLogin ? "Вхід" : "Регістрація"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

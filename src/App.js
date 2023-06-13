import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";
import { useEffect, useState } from "react";
import { check } from "./http/userAPI";
import { addUser } from "./features/user/userSlice";
import Loading from "./components/UI/Loading";
import { fetchTypes } from "./http/itemApi";
import { setTypes } from "./features/types/typeSlice";

function App() {
  const { user } = useSelector(selectUser);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    check()
      .then((data) => {
        dispatch(addUser(user));
      })
      .finally(() => setLoading(false));
    fetchTypes().then((data) => {
      dispatch(setTypes(data));
    })
  }, []);

  return (
  <BrowserRouter>
    {loading ? 
    <Loading /> 
    : <AppRouter />}
  </BrowserRouter>);
}

export default App;

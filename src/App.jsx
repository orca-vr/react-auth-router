import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./pages/SharedLayout";
import { PrivateRoute, RestrictedRoute } from "./components/AuthRoutes/AuthRoutes";
import { GlobalStyle } from "./GlobalStyle";
import { refresh } from "./reduxstore/auth/operations.js";
import { Home } from "./pages/Home.jsx";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { ContactList } from "./components/ContactList/ContactList";
import { selectIsRefreshing } from "./reduxstore/auth/authSlice";


export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  console.log('App isRefreshing== ', isRefreshing)

  useEffect(() => {
    console.log('App dispatch refrash')
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (<>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterForm />} />}/>
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginForm />} />}/>
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactList />} />}/>
      </Route>
    </Routes>
      <GlobalStyle />
  </>
  );
}

import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "../../reduxstore/auth/authSlice";
// import { selectIsLoggedIn, selectIsRefreshing } from "redux/auth/authSlice";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
   const isLoggedIn = useSelector(selectIsLoggedIn);
   const isRefreshing = useSelector(selectIsRefreshing);
   const shouldRedirect = !isLoggedIn && !isRefreshing;
 
   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
 };
 
export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
   const isLoggedIn = useSelector(selectIsLoggedIn);
 
   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
 };
 
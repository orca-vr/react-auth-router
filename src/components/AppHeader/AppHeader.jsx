import { Wrapper } from "./AppHeader.styled";
// import { AuthMenu } from "./components/AuthMenu/AuthMenu";
import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "./reduxstore/auth/authSlice";
// import { UserMenu } from "./components/UserMenu/UserMenu";
import { Navigation } from "../Navigation/Navigation";
import { AuthMenu } from "../AuthMenu/AuthMenu";
import { UserMenu } from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../reduxstore/auth/authSlice";

export const AppHeader = () =>{
   const isLogged = useSelector(selectIsLoggedIn);
   return(
      <Wrapper>
         <Navigation />
         {isLogged ? <UserMenu /> : <AuthMenu />}
      </Wrapper>

   )
}
import { NavItem, NavMenu, StyledLink } from "../AppHeader/AppHeader.styled";

export const AuthMenu = () => {
  return (
   <NavMenu>
      <NavItem><StyledLink to="/register">Register</StyledLink></NavItem>
      <NavItem><StyledLink to="/login">Log In</StyledLink></NavItem>
   </NavMenu>
  );
};

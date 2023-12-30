import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  border-bottom: 4px solid ${({ theme }) => theme.colors.darkgray};
  padding: 0 ${({ theme }) => theme.spacing(2)};
  font-size: 20px;
`;

export const MainNav = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const NavItem = styled.li`
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
  font-weight: 500;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkgray};
  }
  &.active {
    color: darkorange;
  }
`;

export const UserBar = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.span`
  margin-left: 4px;
  margin-right: 16px;
  font-size: 18px;
`;

export const BtnAuth = styled.button`
align-self: center;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  font-size: inherit;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkgray};
  }
`;

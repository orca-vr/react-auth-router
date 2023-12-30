// import { BtnAuth, UserBar, UserInfo } from 'components/AppHeader/AppHeader.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail } from '../../reduxstore/auth/authSlice';
import { BtnAuth, UserBar, UserInfo } from '../AppHeader/AppHeader.styled';
import { logout } from '../../reduxstore/auth/operations';
// import { selectEmail } from 'reduxstore/auth/authSlice';
// import { logout } from 'reduxstore/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectEmail).email;
  return (
    <UserBar>
      {/* <MdAccountCircle size={32} /> */}
      <UserInfo>Welcome, {userEmail}</UserInfo>
      <BtnAuth type="button" onClick={() => dispatch(logout())}>
        Logout
      </BtnAuth>
    </UserBar>
  );
};

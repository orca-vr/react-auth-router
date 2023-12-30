import { Layout, Text, Title } from '../components/Layout';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../reduxstore/auth/authSlice';

export const Home = () => {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <Layout>
      <Title>        Phonebook      </Title>
      {isLogged ? <Text>Thanks for registering and using this app</Text> : <Text>Please register or login to use this app</Text>}
      {/* {error && <ErrMsg>Sorry, something went wrong. Try reload page</ErrMsg>} */}
    </Layout>
  );
};

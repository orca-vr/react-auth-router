// import { login } from './reduxstore/auth/operations';
import { useDispatch } from 'react-redux';
// import { BtnAuth } from './components/AppHeader/AppHeader.styled';
import { Form, Input, Label } from '../RegisterForm/RegisterForm.styled';
import { login } from '../../reduxstore/auth/operations';
import { BtnAuth } from '../AppHeader/AppHeader.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        E-mail
        <Input name="email" type="email" />
      </Label>
      <Label>
        Password
        <Input name="password" type="password" />
      </Label>
      <BtnAuth>Login</BtnAuth>
    </Form>
  );
};

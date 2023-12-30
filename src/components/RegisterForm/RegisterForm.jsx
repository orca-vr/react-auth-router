import { register } from '../../reduxstore/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Label } from './RegisterForm.styled';
import { BtnAuth } from '../AppHeader/AppHeader.styled';
import { selectAuthError } from '../../reduxstore/auth/authSlice';
import toast from 'react-hot-toast';

const toastOptions = {
  position: 'center-top',
  duration: 5000,
  style: {
    width: '100%',
    fontSize: '22px',
    backgroundColor: '#f7ba60',
  },
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const errorAuth = useSelector(selectAuthError);

  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    dispatch(
      register({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    
    if (errorAuth!==null) {
      toast('Registration failed. Please check your data', toastOptions)
    } 
  };
  console.log(errorAuth);
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input name="name" type="text" />
      </Label>
      <Label>
        E-mail
        <Input name="email" type="email" />
      </Label>
      <Label>
        Password
        <Input name="password" type="password" />
      </Label>
      <BtnAuth>Register</BtnAuth>
    </Form>
  );
};

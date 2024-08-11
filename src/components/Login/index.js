import { useState } from 'react';
import Cookies from 'js-cookie';
import {
  Logincontainer,
  LoginCard,
  CompanyImage,
  LoginForm,
  FormHeading,
  InputContainer,
  InputLabel,
  InputFeild,
  LoginButton,
  CheckBoxContainer
} from './loginStyled';
import spartificial_login_image from '../Resources/spartificial_login_image.jpeg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setToShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleToggleShowPassword = () => {
    setToShowPassword(prevState => !prevState);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginDetails = { email, password };
    Cookies.set('LoginDetails', JSON.stringify(loginDetails), { expires: 1 });
    navigate('/');
    setEmail('');
    setPassword('');
  };

  return (
    <Logincontainer>
      <LoginCard>
        <CompanyImage alt="Company Logo" src={spartificial_login_image} />
        <LoginForm as="form" onSubmit={handleSubmit}>
          <FormHeading>Admin Login</FormHeading>
          <InputContainer>
            <InputLabel htmlFor="email">EMAIL</InputLabel>
            <InputFeild
              id="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={handleEmailChange}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="password">PASSWORD</InputLabel>
            <InputFeild
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </InputContainer>
          <CheckBoxContainer>
            <input
              type="checkbox"
              id="checkbox"
              checked={showPassword}
              onChange={handleToggleShowPassword}
            />
            <InputLabel htmlFor="checkbox">Show Password</InputLabel>
          </CheckBoxContainer>
          <LoginButton type="submit">LOGIN</LoginButton>
        </LoginForm>
      </LoginCard>
    </Logincontainer>
  );
};

export default Login;

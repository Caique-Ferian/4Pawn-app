import React from 'react';
import LoginForm from '@organisms/LoginForm';
import Container from '@atoms/Container/index';

const LoginPage: React.FunctionComponent = () => {

  return(
    <Container className="login-page">
      <LoginForm/>
    </Container>
  );
};
export default LoginPage;
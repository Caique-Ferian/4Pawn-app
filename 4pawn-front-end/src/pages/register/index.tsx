import React from 'react';
import RegisterForm from '@organisms/RegisterForm';
import Container from '@atoms/Container/index';

const RegisterPage: React.FunctionComponent = () => {
  return(
    <Container className="register-page">
      <RegisterForm />
    </Container>
  );
};
export default RegisterPage;
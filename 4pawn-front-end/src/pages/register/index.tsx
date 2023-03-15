import React from 'react';
import RegisterForm from '@organisms/userOrganism/RegisterForm';
import Container from '@atoms/Container/index';

const RegisterPage: React.FC = () => {
  return(
    <Container className="register-page">
      <RegisterForm />
    </Container>
  );
};
export default RegisterPage;
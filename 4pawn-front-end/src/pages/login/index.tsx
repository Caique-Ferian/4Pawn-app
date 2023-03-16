import React from 'react';
import LoginForm from '@organisms/userOrganism/LoginForm';
import Container from '@atoms/Container/index';
import logo from '@molecules/HeaderWithLogo/logo.svg'
import Image from '@atoms/Image';

const LoginPage: React.FC = () => {

  return(
    <Container className="login-page">
      <Container className='image-container'>
        <Image src={logo} width="90%" alt="4Pawn-logo"/>
      </Container>
      <LoginForm/>
    </Container>
  );
};
export default LoginPage;
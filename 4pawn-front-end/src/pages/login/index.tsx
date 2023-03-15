import React from 'react';
import LoginForm from '@organisms/userOrganism/LoginForm';
import Container from '@atoms/Container/index';
import logo from '@molecules/HeaderWithLogo/logo.png'
import Image from '@atoms/Image';

const LoginPage: React.FC = () => {

  return(
    <Container className="login-page">
      <Container className='image-container'>
        <Image src={logo} width="250px" height="80px" alt="4Pawn-logo"/>
      </Container>
      <LoginForm/>
    </Container>
  );
};
export default LoginPage;
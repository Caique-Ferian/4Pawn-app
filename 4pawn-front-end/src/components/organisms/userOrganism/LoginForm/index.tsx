import React, { useContext } from 'react';
import Button from '@atoms/Button';
import FormContainer from '@molecules/FormContainer/index';
import UserOrPetInput from '@molecules/UserOrPetInput/index';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';
import Paragraph from '@atoms/Paragraph';
import Container from '@atoms/Container';

const LoginForm: React.FC = () => {
  const { errors,goBack } = useContext(AppContext) as AppContextType;
  return(
    <FormContainer endpoint='users/auth/login'>
      <UserOrPetInput
        content='Username'
        htmlFor='username-input'
        type='text'
        placeholder='Username'
        formRegister='username'
        />
      { errors.map(({ type, message } ,i) => type === 'username'
        && <Paragraph key={i} content={ message }/>) }
      <UserOrPetInput
        content='Password'
        htmlFor='password-input'
        type='password'
        placeholder='Password'
        formRegister='password'
        />
      { errors.map(({ type, message } ,i) => type === 'password'
        && <Paragraph key={i} content={ message }/>) }
      <Container className='buttons-container'>
        <Button
          content='Enter'
          type='submit'
          className='btn btn-success'
        />
        <Button
          content='Register'
          type='button'
          onClick={ () => goBack('register') }
          className='btn btn-dark'
        />
      </Container>
    </FormContainer>
  );
}

export default LoginForm;
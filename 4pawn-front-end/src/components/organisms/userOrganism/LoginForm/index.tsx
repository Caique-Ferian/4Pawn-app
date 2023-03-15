import React, { useContext } from 'react';
import Button from '@atoms/Button';
import FormContainer from '@molecules/FormContainer/index';
import UserOrPetInput from '@molecules/UserOrPetInput/index';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';
import Paragraph from '@atoms/Paragraph';
import Container from '@atoms/Container';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { errors, setErrors } = useContext(AppContext) as AppContextType;
  const goToRegister = () => {
    setErrors([]);
    navigate('/register');
  }
  return(
    <FormContainer endpoint='users/auth/login'>
      <Container className='mb-3'>
        <UserOrPetInput
          content='Username'
          htmlFor='username-input'
          type='text'
          placeholder='Username'
          formRegister='username'
          />
        { errors.map(({ type, message } ,i) => type === 'username'
          && <Paragraph key={i} content={ message }/>) }
      </Container>
      <Container className='mb-3'>
        <UserOrPetInput
          content='Password'
          htmlFor='password-input'
          type='password'
          placeholder='Password'
          formRegister='password'
          />
        { errors.map(({ type, message } ,i) => type === 'password'
          && <Paragraph key={i} content={ message }/>) }
      </Container>
      <Container className='login-page-buttons'>
        <Container className='login-button'>
          <Button
            content='Enter'
            type='submit'
            className='btn btn-dark'
          />
        </Container>
        <Button
          content='Register'
          type='button'
          onClick={ goToRegister }
          className='btn btn-secondary'
        />
      </Container>
    </FormContainer>
  );
}

export default LoginForm;
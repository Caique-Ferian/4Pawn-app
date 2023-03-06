import React, { useContext } from 'react';
import Button from '@atoms/Button';
import FormContainer from '@molecules/FormContainer/index';
import UserOrPetInput from '@molecules/UserOrPetInput/index';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';
import Paragraph from '@atoms/Paragraph';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { errors } = useContext(AppContext) as AppContextType;
  return(
    <FormContainer endpoint='users/auth/login'>
      <UserOrPetInput
        content='Username: '
        htmlFor='username-input'
        type='text'
        placeholder='Username'
        formRegister='username'
      />
      { errors.map(({ type, message } ,i) => type === 'username'
        && <Paragraph key={i} content={ message }/>) }
      <UserOrPetInput
        content='Password: '
        htmlFor='password-input'
        type='password'
        placeholder='Password'
        formRegister='password'
      />
      { errors.map(({ type, message } ,i) => type === 'password'
        && <Paragraph key={i} content={ message }/>) }
      <Button
        content='Enter'
        type='submit'
        className='btn btn-primary'
      />
      <Button
        content='Register'
        type='button'
        onClick={() => navigate('/register')}
        className='btn btn-primary'
      />
    </FormContainer>
  );
}

export default LoginForm;
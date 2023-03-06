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
        content='Usuário: '
        htmlFor='usuário-input'
        type='text'
        placeholder='Usuário'
        formRegister='username'
      />
      { errors.map(({ type, message } ,i) => type === 'username'
        && <Paragraph key={i} content={ message }/>) }
      <UserOrPetInput
        content='Senha: '
        htmlFor='senha-input'
        type='password'
        placeholder='Senha'
        formRegister='password'
      />
      { errors.map(({ type, message } ,i) => type === 'password'
        && <Paragraph key={i} content={ message }/>) }
      <Button
        content='Entrar'
        type='submit'
        className='btn btn-primary'
      />
      <Button
        content='Registrar'
        type='button'
        onClick={() => navigate('/register')}
        className='btn btn-primary'
      />
    </FormContainer>
  );
}

export default LoginForm;
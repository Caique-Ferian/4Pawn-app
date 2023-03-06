import React from 'react';
import Button from '@atoms/Button';
import FormContainer from '@molecules/FormContainer/index';
import UserOrPetInput from '@molecules/UserOrPetInput/index';
import { useNavigate } from 'react-router-dom';
import { requestPost } from '@utils/request';

const LoginForm: React.FC = () => {
  const navigate = useNavigate()
  const login = () => requestPost();
  return(
    <FormContainer>
      <UserOrPetInput
        content='Usuário: '
        htmlFor='usuário-input'
        type='text'
        placeholder='Usuário'
        formRegister='username'
      />
      <UserOrPetInput
        content='Senha: '
        htmlFor='senha-input'
        type='password'
        placeholder='Senha'
        formRegister='password'
      />
      <Button
        content='Entrar'
        type='submit'
        onClick={login}
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
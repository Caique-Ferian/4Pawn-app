import React from 'react';
import Button from '@atoms/Button';
import FormContainer from '@molecules/FormContainer/index';
import UserInput from '@molecules/UserInput/index';
import { useNavigate } from 'react-router-dom';

const RegisterForm: React.FC = () => {
  const navigate = useNavigate()
  return(
    <FormContainer>
      <UserInput
        content='Nome Completo: '
        htmlFor='nome-input'
        type='text'
        placeholder='Nome Completo'
        formRegister='fullName'
      />
      <UserInput
        content='Email: '
        htmlFor='email-input'
        type='text'
        placeholder='Email'
        formRegister='email'

      />
      <UserInput
        content='Usuário: '
        htmlFor='usuário-input'
        type='text'
        placeholder='Usuário'
        formRegister='username'

      />
      <UserInput
        content='Senha: '
        htmlFor='senha-input'
        type='password'
        placeholder='Senha'
        formRegister='password'

      />
      <Button
        content='Registrar'
        type='submit'
        onClick={() => navigate('/home')}
        className='btn btn-primary'
      />
    </FormContainer>
  );
}

export default RegisterForm;
import React from 'react';
import Button from '@atoms/Button';
import FormContainer from '@molecules/FormContainer/index';
import UserOrPetInput from '@molecules/UserOrPetInput/index';
import { useNavigate } from 'react-router-dom';

const RegisterForm: React.FC = () => {
  const navigate = useNavigate()
  return(
    <FormContainer endpoint=''>
      <UserOrPetInput
        content='Nome Completo: '
        htmlFor='nome-input'
        type='text'
        placeholder='Nome Completo'
        formRegister='fullName'
      />
      <UserOrPetInput
        content='Email: '
        htmlFor='email-input'
        type='text'
        placeholder='Email'
        formRegister='email'

      />
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
        content='Registrar'
        type='submit'
        onClick={() => navigate('/home')}
        className='btn btn-primary'
      />
    </FormContainer>
  );
}

export default RegisterForm;
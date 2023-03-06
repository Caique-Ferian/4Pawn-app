import React, { useContext } from 'react';
import Button from '@atoms/Button';
import FormContainer from '@molecules/FormContainer/index';
import UserOrPetInput from '@molecules/UserOrPetInput/index';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';
import Paragraph  from '@atoms/Paragraph';

const RegisterForm: React.FC = () => {
  const { errors } = useContext(AppContext) as AppContextType;
  return(
    <FormContainer endpoint='users/'>
      <UserOrPetInput
        content='Nome Completo: '
        htmlFor='nome-input'
        type='text'
        placeholder='Nome Completo'
        formRegister='fullName'
      />
      { errors.map(({ type,message }, i) => type === 'fullname'
        && <Paragraph key={i} content={ message }/>) }
      <UserOrPetInput
        content='Email: '
        htmlFor='email-input'
        type='text'
        placeholder='Email'
        formRegister='email'

      />
      { errors.map(({ type,message }, i) => type === 'email'
        && <Paragraph key={i} content={ message }/>) }
      <UserOrPetInput
        content='Usuário: '
        htmlFor='usuário-input'
        type='text'
        placeholder='Usuário'
        formRegister='username'

      />
      { errors.map(({ type,message }, i) => type === 'username'
        && <Paragraph key={i} content={ message }/>) }
      <UserOrPetInput
        content='Senha: '
        htmlFor='senha-input'
        type='password'
        placeholder='Senha'
        formRegister='password'

      />
      { errors.map(({ type,message }, i) => type === 'password'
        && <Paragraph key={i} content={ message }/>) }
      <Button
        content='Registrar'
        type='submit'
        className='btn btn-primary'
      />
    </FormContainer>
  );
}

export default RegisterForm;
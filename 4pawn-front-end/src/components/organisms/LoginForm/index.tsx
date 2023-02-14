import React from 'react';
import Button from '../../atoms/Button';
import FormContainer from '../../molecules/FormContainer/index';
import UserInput from '../../molecules/UserInput/index';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const navigate = useNavigate()
  const login = () => console.log('login successful');
  return(
    <FormContainer>
      <UserInput
        content='Informe seu Usuário: '
        htmlFor='usuário-input'
        type='text'
        placeholder='Usuário'
        formRegister='username'
        validation={{required: 'Informe o usuário!'}}
      />
      <UserInput
        content='Informe sua Senha: '
        htmlFor='senha-input'
        type='password'
        placeholder='Senha'
        formRegister='password'
        validation={{required: 'Informe a senha!'}}

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
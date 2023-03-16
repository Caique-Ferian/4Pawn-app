import React, { useContext } from 'react';
import Button from '@atoms/Button';
import FormContainer from '@molecules/FormContainer/index';
import UserOrPetInput from '@molecules/UserOrPetInput/index';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';
import Paragraph  from '@atoms/Paragraph';
import { useNavigate } from 'react-router-dom';
import Container from '@atoms/Container';

const RegisterForm: React.FC = () => {
  const { errors,setErrors } = useContext(AppContext) as AppContextType;
  const navigate = useNavigate();
  const goToHome = () => {
    setErrors([]);
    navigate('/');
  }
  return(
    <FormContainer endpoint='users/'>
      <UserOrPetInput
        content='Full Name'
        htmlFor='fullName-input'
        type='text'
        placeholder='Full Name'
        formRegister='fullName'
      />
      { errors.map(({ type,message }, i) => type === 'fullname'
        && <Paragraph key={i} content={ message }/>) }
      <UserOrPetInput
        content='Email'
        htmlFor='email-input'
        type='text'
        placeholder='Email'
        formRegister='email'

      />
      { errors.map(({ type,message }, i) => type === 'email'
        && <Paragraph key={i} content={ message }/>) }
      <UserOrPetInput
        content='Username'
        htmlFor='username-input'
        type='text'
        placeholder='Username'
        formRegister='username'

      />
      { errors.map(({ type,message }, i) => type === 'username'
        && <Paragraph key={i} content={ message }/>) }
      <UserOrPetInput
        content='Password'
        htmlFor='password-input'
        type='password'
        placeholder='Password'
        formRegister='password'

      />
      { errors.map(({ type,message }, i) => type === 'password'
        && <Paragraph key={i} content={ message }/>) }
      <Container className='user-buttons-container'>
        <Button
          content='Register'
          type='submit'
          className='btn btn-secondary register-button'
        />
        <Button
          content='Back'
          type='button'
          className='btn btn-secondary'
          onClick={goToHome}
        />
      </Container>
    </FormContainer>
  );
}

export default RegisterForm;
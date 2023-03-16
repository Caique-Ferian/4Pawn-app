import React, { useContext } from 'react';
import Button from '@atoms/Button';
import FormContainer from '@molecules/FormContainer/index';
import UserOrPetInput from '@molecules/UserOrPetInput/index';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';
import Paragraph  from '@atoms/Paragraph';
import Container from '@atoms/Container';

const UpdatePasswordForm: React.FC = () => {
  const { errors } = useContext(AppContext) as AppContextType;
  return(
    <FormContainer endpoint='users/patch/password'>
      <UserOrPetInput
        content='Password'
        htmlFor='password-input'
        type='password'
        placeholder='Password'
        formRegister='password'

      />
      { errors.map(({ type,message }, i) => type === 'password'
        && <Paragraph key={i} content={ message }/>) }
      <Container className="update-button">
        <Button
          content='Update'
          type='submit'
          className='btn btn-primary'
        />
      </Container>
    </FormContainer>
  );
}

export default UpdatePasswordForm;
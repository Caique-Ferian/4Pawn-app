import React, { useContext } from 'react';
import Button from '@atoms/Button';
import FormContainer from '@molecules/FormContainer/index';
import UserOrPetInput from '@molecules/UserOrPetInput/index';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';
import Paragraph  from '@atoms/Paragraph';
import Container from '@atoms/Container';

const UpdateEmailForm: React.FC = () => {
  const { errors } = useContext(AppContext) as AppContextType;
  return(
    <FormContainer endpoint='users/patch/email'>
      <UserOrPetInput
        content='Email'
        htmlFor='email-input'
        type='text'
        placeholder='Email'
        formRegister='email'

      />
      { errors.map(({ type,message }, i) => type === 'email'
        && <Paragraph key={i} content={ message }/>) }
      <Container className='update-button'>
        <Button
          content='Update'
          type='submit'
          className='btn btn-primary'
        />
      </Container>
    </FormContainer>
  );
}

export default UpdateEmailForm;
import React, { useContext } from 'react';
import Button from '@atoms/Button';
import FormContainer from '@molecules/FormContainer/index';
import UserOrPetInput from '@molecules/UserOrPetInput/index';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';
import Paragraph  from '@atoms/Paragraph';
import Container from '@atoms/Container';

const UpdatePetImageForm: React.FC = () => {
  const { errors, goBack } = useContext(AppContext) as AppContextType;
  return(
    <FormContainer endpoint='pets/patch/image'>
      <UserOrPetInput
        content='Image'
        htmlFor='image-input'
        type='text'
        placeholder='Image'
        formRegister='image'
      />
      { errors.map(({ type,message }, i) => type === 'image'
        && <Paragraph key={i} content={ message }/>) }
      <Container className='buttons-container'>
        <Button
          content='Update'
          type='submit'
          className='btn btn-dark'
        />
        <Button
          content='Back'
          type='button'
          className='btn btn-danger'
          onClick={() => goBack('/admin')}
        />
      </Container>
    </FormContainer>
  );
}

export default UpdatePetImageForm;
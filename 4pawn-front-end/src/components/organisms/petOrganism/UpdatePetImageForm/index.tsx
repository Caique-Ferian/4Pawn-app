import React, { useContext } from 'react';
import Button from '@atoms/Button';
import FormContainer from '@molecules/FormContainer/index';
import UserOrPetInput from '@molecules/UserOrPetInput/index';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';
import Paragraph  from '@atoms/Paragraph';

const UpdatePetImageForm: React.FC = () => {
  const { errors } = useContext(AppContext) as AppContextType;
  return(
    <FormContainer endpoint='pets/patch/image'>
      <UserOrPetInput
        content='Image: '
        htmlFor='image-input'
        type='text'
        placeholder='Image'
        formRegister='image'
      />
      { errors.map(({ type,message }, i) => type === 'image'
        && <Paragraph key={i} content={ message }/>) }
      <Button
        content='Update'
        type='submit'
        className='btn btn-primary'
      />
    </FormContainer>
  );
}

export default UpdatePetImageForm;
import React, { useContext } from 'react';
import Button from '@atoms/Button';
import FormContainer from '@molecules/FormContainer/index';
import UserOrPetInput from '@molecules/UserOrPetInput/index';
import { AppContext } from '@context/index';
import  AppContextType  from '@context/types';
import Paragraph from '@atoms/Paragraph';

const RegisterPet: React.FC = () => {
  const { errors } = useContext(AppContext) as AppContextType;
  return(
    <FormContainer endpoint='pets'>
      <UserOrPetInput
        content='Pet Name: '
        htmlFor='name-input'
        type='text'
        placeholder='Pet Name'
        formRegister='name'
      />
      { errors.map(({ type,message }, i) => type === 'name'
        && <Paragraph key={i} content={ message }/>) }
      <UserOrPetInput
        content='Age In years: '
        htmlFor='age-input'
        type='number'
        placeholder='Age In years'
        formRegister='ageInYears'
      />
      { errors.map(({ type,message }, i) => type === 'age'
        && <Paragraph key={i} content={ message }/>) }
      <UserOrPetInput
        content='Weight in Kg: '
        htmlFor='weight-input'
        type='number'
        placeholder='Weight in Kg'
        formRegister='weightInKg'

      />
      { errors.map(({ type,message }, i) => type === 'weight'
        && <Paragraph key={i} content={ message }/>) }
      <UserOrPetInput
        content='Color: '
        htmlFor='color-input'
        type='text'
        placeholder='Color'
        formRegister='color'

      />
      { errors.map(({ type,message }, i) => type === 'color'
        && <Paragraph key={i} content={ message }/>) }
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
        content='Register'
        type='submit'
        className='btn btn-primary'
      />
    </FormContainer>
  );
}

export default RegisterPet;
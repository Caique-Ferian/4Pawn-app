import React, { useContext } from 'react';
import Button from '@atoms/Button';
import FormContainer from '@molecules/FormContainer/index';
import UserOrPetInput from '@molecules/UserOrPetInput/index';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';
import Paragraph  from '@atoms/Paragraph';

const UpdatePetAgeForm: React.FC = () => {
  const { errors } = useContext(AppContext) as AppContextType;
  return(
    <FormContainer endpoint='pets/patch/age'>
      <UserOrPetInput
        content='Age In years: '
        htmlFor='age-input'
        type='number'
        placeholder='Age In years'
        formRegister='ageInYears'
      />
      { errors.map(({ type,message }, i) => type === 'ageinyears'
        && <Paragraph key={i} content={ message }/>) }
      <Button
        content='Update'
        type='submit'
        className='btn btn-primary'
      />
    </FormContainer>
  );
}

export default UpdatePetAgeForm;
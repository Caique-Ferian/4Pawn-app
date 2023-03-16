import React, { useContext } from 'react';
import Button from '@atoms/Button';
import FormContainer from '@molecules/FormContainer/index';
import UserOrPetInput from '@molecules/UserOrPetInput/index';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';
import Paragraph  from '@atoms/Paragraph';

const UpdatePetWeightForm: React.FC = () => {
  const { errors } = useContext(AppContext) as AppContextType;
  return(
    <FormContainer endpoint='pets/patch/weight'>
      <UserOrPetInput
        content='Weight in Kg: '
        htmlFor='weight-input'
        type='number'
        placeholder='Weight in Kg'
        formRegister='weightInKg'

      />
      { errors.map(({ type,message }, i) => type === 'weightinkg'
        && <Paragraph key={i} content={ message }/>) }
      <Button
        content='Update'
        type='submit'
        className='btn btn-primary'
      />
    </FormContainer>
  );
}

export default UpdatePetWeightForm;
import React from 'react';
import UserOrPetInput from '@molecules/UserOrPetInput/index';
import UpdatePetAdoptedProps from './types';

const UpdatePetAdoptedForm: React.FC<UpdatePetAdoptedProps> = (
  {onChange, checked}: UpdatePetAdoptedProps) => {
  return(
      <UserOrPetInput
        content='Adopted Status: '
        htmlFor='adopted-input'
        checked={checked}
        type='checkbox'
        onChange={onChange}
        placeholder=''
        formRegister='adopted'
      />
  );
}

export default UpdatePetAdoptedForm;
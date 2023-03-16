import React from 'react';
import UserOrPetInput from '@molecules/UserOrPetInput/index';
import UpdatePetAdoptedProps from './types';
import Container from '@atoms/Container';

const UpdatePetAdoptedForm: React.FC<UpdatePetAdoptedProps> = (
  {onChange, checked}: UpdatePetAdoptedProps) => {
  return(
      <Container className='form-check form-switch'>
        <UserOrPetInput
          content='Adopted Status'
          htmlFor='adopted-input'
          checked={checked}
          type='checkbox'
          onChange={onChange}
          classNameInput='form-check-input'
          classNameLabel='form-check-label'
          placeholder=''
          formRegister='adopted'
          />
      </Container>
  );
}

export default UpdatePetAdoptedForm;
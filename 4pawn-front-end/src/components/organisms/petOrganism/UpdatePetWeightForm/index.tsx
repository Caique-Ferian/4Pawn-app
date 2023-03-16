import React, { useContext } from 'react';
import Button from '@atoms/Button';
import FormContainer from '@molecules/FormContainer/index';
import UserOrPetInput from '@molecules/UserOrPetInput/index';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';
import Paragraph  from '@atoms/Paragraph';
import Container from '@atoms/Container';

const UpdatePetWeightForm: React.FC = () => {
  const { errors, goBack } = useContext(AppContext) as AppContextType;
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

export default UpdatePetWeightForm;
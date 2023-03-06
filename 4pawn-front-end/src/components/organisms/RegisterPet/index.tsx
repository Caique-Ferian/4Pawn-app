import React from 'react';
import Button from '@atoms/Button';
import FormContainer from '@molecules/FormContainer/index';
import UserOrPetInput from '@molecules/UserOrPetInput/index';

const RegisterPet: React.FC = () => {
  return(
    <FormContainer endpoint=''>
      <UserOrPetInput
        content='Nome do Pet: '
        htmlFor='nome-input'
        type='text'
        placeholder='Nome do Pet'
        formRegister='name'
      />
      <UserOrPetInput
        content='Idade em anos: '
        htmlFor='idade-input'
        type='number'
        placeholder='Idade em anos'
        formRegister='ageInYears'
      />
      <UserOrPetInput
        content='Peso em Kg: '
        htmlFor='peso-input'
        type='number'
        placeholder='Peso em Kg'
        formRegister='weightInKg'

      />
      <UserOrPetInput
        content='Cor: '
        htmlFor='cor-input'
        type='text'
        placeholder='Cor'
        formRegister='color'

      />
      <UserOrPetInput
        content='Imagem: '
        htmlFor='imagem-input'
        type='text'
        placeholder='Imagem'
        formRegister='image'

      />
      <Button
        content='Registrar'
        type='submit'
        onClick={() => console.log('REGISTERED')}
        className='btn btn-primary'
      />
    </FormContainer>
  );
}

export default RegisterPet;
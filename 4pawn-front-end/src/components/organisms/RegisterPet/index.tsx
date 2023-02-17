import React from 'react';
import Button from '@atoms/Button';
import FormContainer from '@molecules/FormContainer/index';
import UserOrPetInput from '@molecules/UserOrPetInput/index';

const RegisterPet: React.FC = () => {
  return(
    <FormContainer>
      <UserOrPetInput
        content='Nome do Pet: '
        htmlFor='nome-input'
        type='text'
        placeholder='Nome do Pet'
        formRegister='petName'
      />
      <UserOrPetInput
        content='Idade em anos: '
        htmlFor='idade-input'
        type='number'
        placeholder='Idade em anos'
        formRegister='petAge'
      />
      <UserOrPetInput
        content='Peso em Kg: '
        htmlFor='peso-input'
        type='number'
        placeholder='Peso em Kg'
        formRegister='petWeight'

      />
      <UserOrPetInput
        content='Cor: '
        htmlFor='cor-input'
        type='text'
        placeholder='Cor'
        formRegister='petColor'

      />
      <UserOrPetInput
        content='Imagem: '
        htmlFor='imagem-input'
        type='text'
        placeholder='Imagem'
        formRegister='petImage'

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
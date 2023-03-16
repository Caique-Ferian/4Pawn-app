import React, { useState } from 'react';
import RegisterPet from '@organisms/petOrganism/RegisterPet';
import Container from '@atoms/Container/index';
import AdminHeader from '@organisms/userOrganism/AdminHeader';
import Button from '@atoms/Button';
import UpdatePetList from '@organisms/petOrganism/UpdatePetList';

const AdminPage: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const onClickToRegister = () => {
    setIsRegistering(!isRegistering);
    setIsUpdating(false);
  }
  const onClickToUpdate = () => {
    setIsUpdating(!isUpdating);
    setIsRegistering(false);
  }
  return(
    <Container className="admin-page">
      <AdminHeader content='Home' target='/home'/>
      <Container className="register-form">
        <Container className='pet-buttons-container'>
          <Button 
            content="New Pet"
            className="btn btn-warning pet-button"
            type="button"
            onClick={onClickToRegister}
            />
          {isRegistering && <RegisterPet />}
          <Button 
            content="Update Pet"
            className="btn btn-warning"
            type="button"
            onClick={onClickToUpdate}
            />
          {isUpdating && <UpdatePetList />}
        </Container>
      </Container>
    </Container>
  );
};
export default AdminPage;
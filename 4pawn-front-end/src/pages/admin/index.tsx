import React, { useState } from 'react';
import RegisterPet from '@organisms/petOrganism/RegisterPet';
import Container from '@atoms/Container/index';
import AdminHeader from '@organisms/userOrganism/AdminHeader';
import Button from '@atoms/Button';
import UpdatePetList from '@organisms/petOrganism/UpdatePetList';

const AdminPage: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  return(
    <Container className="admin-page">
      <AdminHeader content='Home' target='/home'/>
      <Button 
        content="New Pet"
        className="btn btn-primary"
        type="button"
        onClick={() => setIsRegistering(!isRegistering)}
      />
      {isRegistering && <RegisterPet />}
      <Button 
        content="Update Pet"
        className="btn btn-primary"
        type="button"
        onClick={() => setIsUpdating(!isUpdating)}
      />
      {isUpdating && <UpdatePetList />}
    </Container>
  );
};
export default AdminPage;
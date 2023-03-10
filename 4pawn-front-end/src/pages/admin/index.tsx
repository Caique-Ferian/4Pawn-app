import React from 'react';
import RegisterPet from '@organisms/RegisterPet';
import Container from '@atoms/Container/index';
import AdminHeader from '@organisms/AdminHeader';

const AdminPage: React.FC = () => {
  return(
    <Container className="admin-page">
      <AdminHeader content='Home' target='/home'/>
      <RegisterPet />
    </Container>
  );
};
export default AdminPage;
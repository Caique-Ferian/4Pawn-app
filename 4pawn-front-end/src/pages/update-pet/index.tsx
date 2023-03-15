import React from 'react';
import Container from '@atoms/Container/index';
import AdminHeader from '@organisms/userOrganism/AdminHeader';
import { useParams } from 'react-router-dom';
import UpdatePetAgeForm from '@organisms/petOrganism/UpdatePetAgeForm';
import UpdatePetWeightForm from '@organisms/petOrganism/UpdatePetWeightForm';
import UpdatePetImageForm from '@organisms/petOrganism/UpdatePetImageForm';

const UpdatePetPage: React.FC = () => {
  const { type } = useParams();
  return(
    <Container className="admin-page">
      <AdminHeader content='Home' target='/home'/>
      {type === 'age' && <UpdatePetAgeForm />}
      {type === 'weight' && <UpdatePetWeightForm />}
      {type === 'image' && <UpdatePetImageForm />}
    </Container>
  );
};
export default UpdatePetPage;
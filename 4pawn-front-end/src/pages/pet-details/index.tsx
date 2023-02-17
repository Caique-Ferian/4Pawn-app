import React from 'react';
import UserHeader from '@organisms/UserHeader';
import PetDetails from '@organisms/PetDetails';
import Container from '@atoms/Container';
const PetDetailsPage: React.FunctionComponent = () => {
  return(
    <Container className="pet-details">
      <UserHeader />
      <PetDetails />
    </Container>
  );
};
export default PetDetailsPage;
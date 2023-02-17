import React from 'react';
import UserHeader from '@organisms/UserHeader';
import './home.css'
import Container from '@atoms/Container';
import PetCard from '@organisms/PetsCard';

const HomePage: React.FunctionComponent = () => {
  return(
    <Container className="home-page">
      <UserHeader />
      <PetCard />
    </Container>
  );
};
export default HomePage;




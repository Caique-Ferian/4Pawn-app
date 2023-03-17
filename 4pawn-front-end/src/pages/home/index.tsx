import React, { useContext, useEffect } from 'react';
import UserHeader from '@organisms/userOrganism/UserHeader';
import Container from '@atoms/Container';
import PetCard from '@organisms/petOrganism/PetsCard';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';
import AdminHeader  from '@organisms/userOrganism/AdminHeader';

const HomePage: React.FC = () => {
  const { cards, get, user } = useContext(AppContext) as AppContextType
  useEffect(() => {
    const fetch = async() => await get('pets');

    fetch();
  },[get]);

  return(
    <Container className="home-page">
      {user.role === 'admin' ? (
        <AdminHeader
          content='Pets'
          target='/admin' 
        />) : <UserHeader/>}
      {cards.map(({ name,image,adopted },i) => !adopted && (
        <PetCard 
          key={ i }
          name={ name }
          image={ image }
          index={ i }
        />))}
    </Container>
  );
};
export default HomePage;




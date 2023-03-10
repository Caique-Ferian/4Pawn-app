import React, { useContext, useEffect } from 'react';
import UserHeader from '@organisms/UserHeader';
import './home.css'
import Container from '@atoms/Container';
import PetCard from '@organisms/PetsCard';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';
import AdminHeader  from '@organisms/AdminHeader';

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
          content='Register Pet'
          target='/admin' 
        />) : <UserHeader/>}
      {cards.map(({ name,image },i) =>
        <PetCard 
          key={ i }
          name={ name }
          image={ image }
          index={ i }
        />)}
    </Container>
  );
};
export default HomePage;




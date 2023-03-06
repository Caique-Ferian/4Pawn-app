import React, { useContext } from 'react';
import UserHeader from '@organisms/UserHeader';
import PetDetails from '@organisms/PetDetails';
import Container from '@atoms/Container';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';
import { useParams } from 'react-router-dom';

const PetDetailsPage: React.FunctionComponent = () => {
  const { cards } = useContext(AppContext) as AppContextType;
  const { id } = useParams();
  const { name, ageInYears, weightInKg, color, image } = cards[+(id as string)];
  return(
    <Container className="pet-details">
      <UserHeader />
      <PetDetails 
        name={ name }
        ageInYears={ ageInYears }
        weightInKg= { weightInKg }
        color={ color }
        image={ image } 
      />

    </Container>
  );
};
export default PetDetailsPage;
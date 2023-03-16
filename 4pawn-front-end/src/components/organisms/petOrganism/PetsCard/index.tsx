import Image from "@atoms/Image";
import Title from "@atoms/Title";
import LinkedCard from "@molecules/LinkedCard";
import React from "react";
import CardsProps from './types/index';



const PetCard: React.FC<CardsProps> = ({ name, image, index }: CardsProps) => {
  return(
    <LinkedCard target={`/pet-details/${ index }`}>
      <Title content={ name }/>
      <Image 
        src={ image }
        className='card-img-top'
        width=""
        height="450px"
        alt={ name }
      />
    </LinkedCard>
  );
}

export default PetCard;
import Image from "@atoms/Image";
import Paragraph from "@atoms/Paragraph";
import Title from "@atoms/Title";
import LinkedCard from "@molecules/LinkedCard";
import React from "react";



const PetCard: React.FC = () => {
  return(
    <LinkedCard target="/pet-details">
      <Title content="Organism"/>
      <Image 
        src="pet"
        width="300px"
        height="300px"
        alt="creating_organism"
      />
      <Paragraph content="New-Organism"/>
    </LinkedCard>
  );
}

export default PetCard;
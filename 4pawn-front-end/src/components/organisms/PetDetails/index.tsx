import Button from "@atoms/Button";
import Container from "@atoms/Container";
import Image from "@atoms/Image";
import Paragraph from "@atoms/Paragraph";
import Title from "@atoms/Title";
import LinkButton from "@molecules/LinkButton";
import React from "react";
import PetDetailsProps from "./types";



const PetDetails: React.FC<PetDetailsProps> = (
  { name, ageInYears, weightInKg, color, image }: PetDetailsProps) => {
  return(
    <Container className="pet-details">
      <Title content={ name }/>
      <Image 
        src={ image }
        width="600px"
        height="600px"
        alt={ name }
      />
      <Paragraph content= {`Age in year(s): ${ ageInYears }`}/>
      <Paragraph content= {`Weight in Kg(s): ${ weightInKg }`}/>
      <Paragraph content= {`Breed/Color: ${ color }`}/>
      <Container className="pet-details-buttons">
        <Button type="button" content="Adopt" className="adopt-button"/>
        <LinkButton content="Back" target="/home"/>
      </Container>
    </Container>
  );
}

export default PetDetails;
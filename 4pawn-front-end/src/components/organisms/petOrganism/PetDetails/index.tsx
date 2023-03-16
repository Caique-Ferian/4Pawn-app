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
    <Container className="card card-container">
      <Title content={ name }/>
      <Image 
        src={ image }
        className='card-img-top'
        width=""
        height="450px"
        alt={ name }
      />
      <Container className="card-body">
        <Paragraph 
          className='card-text'
          content= {`Age: ${ ageInYears } Years(s)`}
        />
        <Paragraph 
          className='card-text'
          content= {`Weight: ${ weightInKg } Kg(s)`}
        />
        <Paragraph 
          className='card-text'
          content= {`Breed/Color: ${ color }`}
        />
        <Container className="details-buttons-container">
          <Button type="button" content="Adopt" className="btn btn-success"/>
          <LinkButton 
            content="Back"
            target="/home"
            className="btn btn-danger"
          />
        </Container>
      </Container>
    </Container>
  );
}

export default PetDetails;
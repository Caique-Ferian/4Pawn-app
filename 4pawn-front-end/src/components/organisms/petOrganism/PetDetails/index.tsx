import { useEffect, useContext } from "react";
import Button from "@atoms/Button";
import Container from "@atoms/Container";
import Image from "@atoms/Image";
import Paragraph from "@atoms/Paragraph";
import Title from "@atoms/Title";
import LinkButton from "@molecules/LinkButton";
import React from "react";
import PetDetailsProps from "./types";
import { AppContext } from "@context/index";
import AppContextType from "@context/types";



const PetDetails: React.FC<PetDetailsProps> = (
  { name, ageInYears, weightInKg, color, image,id }: PetDetailsProps) => {
    const { patch,setPetId } = useContext(AppContext) as AppContextType;
    useEffect(() => {
      setPetId(id);
    },[setPetId,id]);
  const onClick = async () => await patch('pets/patch/adopted',{adopted:true});
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
          <Button 
            className="btn btn-success"
            content="Adopt"
            type="button"
            onClick={onClick}
          />
          <LinkButton 
            className="btn btn-danger"
            content="Back"
            target="/home"
          />
        </Container>
      </Container>
    </Container>
  );
}

export default PetDetails;
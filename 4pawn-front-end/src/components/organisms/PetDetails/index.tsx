import Button from "@atoms/Button";
import Container from "@atoms/Container";
import Image from "@atoms/Image";
import Paragraph from "@atoms/Paragraph";
import Title from "@atoms/Title";
import LinkButton from "@molecules/LinkButton";
import React from "react";



const PetDetails: React.FC = () => {
  return(
    <Container className="pet-details">
      <Title content="Organism"/>
      <Image 
        src="pet"
        width="300px"
        height="300px"
        alt="creating_organism"
      />
      <Paragraph content="Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Dolores nulla, commodi modi laborum sint perferendis 
      error iusto ducimus autem? Illum quia repellendus magni autem at,
      molestias ab eaque eos distinctio?"/>
      <Container className="pet-details-buttons">
        <Button type="button" content="Adotar" className="adopt-button"/>
        <LinkButton content="Voltar" target="/home"/>
      </Container>
    </Container>
  );
}

export default PetDetails;
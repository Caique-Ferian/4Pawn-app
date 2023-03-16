import Container from "@atoms/Container";
import React from "react";
import { Link } from "react-router-dom";
import PropsLinkedCard from "./types";


const LinkedCard: React.FC<PropsLinkedCard> = (
  {target, children}: PropsLinkedCard) => {
    return(
    <Container className="card card-container border-dark">
      <Link to={ target }>{children}</Link>
    </Container>
    );
}

export default LinkedCard;
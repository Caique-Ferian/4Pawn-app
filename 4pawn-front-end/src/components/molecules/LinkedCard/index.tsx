import Container from "@atoms/Container";
import React from "react";
import { Link } from "react-router-dom";
import IPropsLinkedCard from "./types";


const LinkedCard: React.FC<IPropsLinkedCard> = (
  {target, children}: IPropsLinkedCard) => {
    return(
    <Container className="Linked-card">
      <Link to={ target }>{children}</Link>
    </Container>
    );
}

export default LinkedCard;
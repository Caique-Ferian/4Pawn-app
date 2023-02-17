import React from "react";
import Button from "@atoms/Button";
import IPropsLinkButton from "./types";
import { useNavigate } from 'react-router-dom';
import Container from '@atoms/Container/index';

const LinkButton: React.FC<IPropsLinkButton> = (
  {target,content, className}:IPropsLinkButton) => {
    const navigate = useNavigate();
    return(
      <Container className= {className ?? "button"}>
        <Button 
          type="button"
          onClick={() => navigate(target)}
          content={content}
          className='link-button'
        />
      </Container>
    );
}

export default LinkButton;
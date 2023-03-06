import React from "react";
import Button from "@atoms/Button";
import PropsLinkButton from "./types";
import { useNavigate } from 'react-router-dom';
import Container from '@atoms/Container/index';

const LinkButton: React.FC<PropsLinkButton> = (
  {target,content, className}:PropsLinkButton) => {
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
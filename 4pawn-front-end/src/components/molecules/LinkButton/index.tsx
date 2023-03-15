import React, { useContext } from "react";
import Button from "@atoms/Button";
import PropsLinkButton from "./types";
import { useNavigate } from 'react-router-dom';
import Container from '@atoms/Container/index';
import { AppContext } from '@context/index';
import AppContextType from "@context/types";

const LinkButton: React.FC<PropsLinkButton> = (
  {target,content, petId ,className, disabled}:PropsLinkButton) => {
    const { setErrors, setPetId } = useContext(AppContext) as AppContextType
    const navigate = useNavigate();
    const goTo = () => {
      if(petId) setPetId(petId);
      else setErrors([]);
      navigate(target);
    }
    return(
      <Container className= {className ?? "button"}>
        <Button 
          type="button"
          onClick={goTo}
          disabled={disabled ?? false}
          content={content}
          className='link-button'
        />
      </Container>
    );
}

export default LinkButton;
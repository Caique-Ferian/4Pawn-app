import React from "react";
import Button from "@atoms/Button";
import IPropsLinkButton from "./types";
import { useNavigate } from 'react-router-dom';

const LinkButton: React.FC<IPropsLinkButton> = ({target,content}:IPropsLinkButton) => {
  const navigate = useNavigate();
  return(
    <div>
      <Button 
        type="button"
        onClick={() => navigate(target)}
        content={content}
        className='link-button'
      />
    </div>
  );
}

export default LinkButton;
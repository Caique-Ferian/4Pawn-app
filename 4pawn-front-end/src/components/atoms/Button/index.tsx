import React from "react";
import PropsButton from "./types";


const Button: React.FC<PropsButton> = (
  { content, onClick, className, type, disabled }: PropsButton) => {
  return(
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled ?? false}
      className={className}
    >
      {content}
    </button>
  )
}

export default Button;
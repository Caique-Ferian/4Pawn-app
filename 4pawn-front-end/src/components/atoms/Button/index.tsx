import React from "react";
import PropsButton from "./types";


const Button: React.FC<PropsButton> = ({ content, onClick, className, type }: PropsButton) => {
  return(
    <button 
      type={type}
      onClick={onClick}
      className={className}
    >
      {content}
    </button>
  )
}

export default Button;
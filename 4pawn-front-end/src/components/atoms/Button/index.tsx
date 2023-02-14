import React from "react";
import IPropsButton from "./types";


const Button: React.FC<IPropsButton> = ({ content, onClick, className, type }: IPropsButton) => {
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
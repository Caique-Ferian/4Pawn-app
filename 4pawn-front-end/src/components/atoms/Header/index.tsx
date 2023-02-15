import React from "react";
import IPropsHeader from "./types";


const Header: React.FC<IPropsHeader> = ({content, className}:IPropsHeader) => {
  return(
    <div className={className}>
      <h1>{content}</h1>
    </div>
  );
};


export default Header;
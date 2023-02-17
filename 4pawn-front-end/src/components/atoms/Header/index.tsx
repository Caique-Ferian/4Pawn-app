import React from "react";
import IPropsHeader from "./types";


const Header: React.FC<IPropsHeader> = ({content}:IPropsHeader) => {
  return(<h1>{content}</h1>);
};


export default Header;
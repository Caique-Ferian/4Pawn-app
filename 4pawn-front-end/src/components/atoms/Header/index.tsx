import React from "react";
import PropsHeader from "./types";


const Header: React.FC<PropsHeader> = ({content}:PropsHeader) => {
  return(<h1>{content}</h1>);
};


export default Header;
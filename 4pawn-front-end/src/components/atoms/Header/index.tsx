import React from "react";
import PropsHeader from "./types";


const Header: React.FC<PropsHeader> = ({content}:PropsHeader) => {
  return(<h1 className="navbar-text">{content}</h1>);
};


export default Header;
import React from "react";
import PropsTitle from "./types";


const Title: React.FC<PropsTitle> = ({content}:PropsTitle) => {
  return(<h2>{content}</h2>);
}


export default Title;
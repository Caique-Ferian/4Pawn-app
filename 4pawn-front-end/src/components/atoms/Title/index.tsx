import React from "react";
import PropsTitle from "./types";


const Title: React.FC<PropsTitle> = ({content}:PropsTitle) => {
  return(<h4>{content}</h4>);
}


export default Title;
import React from "react";
import IPropsTitle from "./types";


const Title: React.FC<IPropsTitle> = ({content}:IPropsTitle) => {
  return(<h4>{content}</h4>);
}


export default Title;
import Container from "@atoms/Container";
import React from "react";
import PropsTitle from "./types";


const Title: React.FC<PropsTitle> = ({content}:PropsTitle) => {
  return(<Container className='card-header'><h2>{content}</h2></Container>);
}


export default Title;
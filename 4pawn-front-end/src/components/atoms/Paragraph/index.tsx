import React from "react";
import PropsParagraph from "./types";



const Paragraph: React.FC<PropsParagraph> = (
    {content,className}:PropsParagraph) => {
    return(<p className={className}>{content}</p>);
}



export default Paragraph;
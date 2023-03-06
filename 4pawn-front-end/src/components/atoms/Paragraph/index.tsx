import React from "react";
import PropsParagraph from "./types";



const Paragraph: React.FC<PropsParagraph> = ({content}:PropsParagraph) => {
    return(<p>{content}</p>);
}



export default Paragraph;
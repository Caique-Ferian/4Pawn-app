import React from "react";
import IPropsParagraph from "./types";



const Paragraph: React.FC<IPropsParagraph> = ({content}:IPropsParagraph) => {
    return(<p>{content}</p>);
}



export default Paragraph;
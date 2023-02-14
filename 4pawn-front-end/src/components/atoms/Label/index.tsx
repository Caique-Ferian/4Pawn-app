import React from "react";
import IPropsLabel from "./types";


const Label: React.FC<IPropsLabel> = ({content,htmlFor, children, className}:IPropsLabel) => {
  return(
    <label className={className} htmlFor={htmlFor}>
      {content}
      {children}
    </label>
  )
}

export default Label;
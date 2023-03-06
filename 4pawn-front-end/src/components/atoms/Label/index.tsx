import React from "react";
import PropsLabel from "./types";


const Label: React.FC<PropsLabel> = ({content,htmlFor, children, className}:PropsLabel) => {
  return(
    <label className={className} htmlFor={htmlFor}>
      {content}
      {children}
    </label>
  )
}

export default Label;
import React from "react";
import IPropsContainer from "./types";

const Container: React.FC<IPropsContainer> = (
  { className, children }: IPropsContainer) => {
    return(
      <div className={className}>
        {children}
      </div>
    )
}


export default Container;
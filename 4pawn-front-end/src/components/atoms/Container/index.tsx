import React from "react";
import PropsContainer from "./types";

const Container: React.FC<PropsContainer> = (
  { className, children }: PropsContainer) => {
    return(
      <div className={className}>
        {children}
      </div>
    )
}


export default Container;
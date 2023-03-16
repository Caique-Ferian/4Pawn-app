import React from "react";
import PropsLink from "./types";
import { Link as LinkTo } from "react-router-dom";

const Link: React.FC<PropsLink> = ({className, children,to,}:PropsLink) => {
  return(<LinkTo to={to} className={className}>{children}</LinkTo>);
};


export default Link;
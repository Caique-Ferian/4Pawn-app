import { ReactNode } from "react";

export default interface PropsLink {
  className:string;
  to:string;
  children: ReactNode;
}
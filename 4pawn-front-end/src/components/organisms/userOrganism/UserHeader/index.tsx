import React, { useContext } from "react";
import HeaderWithLogo from "@molecules/HeaderWithLogo";
import LinkButton from "@molecules/LinkButton";
import Container from '@atoms/Container/index';
import Paragraph from "@atoms/Paragraph";
import { AppContext } from "@context/index";
import AppContextType from "@context/types";
import PropsUserHeader from "./types";

const UserHeader: React.FC<PropsUserHeader> = ( 
  {content, target}: PropsUserHeader ) => {
  const { user } = useContext(AppContext) as AppContextType;
  return(
    <Container className="navbar navbar-secondary bg-dark">
      <HeaderWithLogo/>
      <Container className="header-infos">
        <Paragraph content={`Hello ${user.email}`}/>
        <Container className="buttons-container">
          <LinkButton 
            content={ content ?? 'Profile' }
            target={ target ?? "/profile" }
            className="btn btn-outline-primary"
            />
          <LinkButton 
            content="Logout"
            target='/'
            className="btn btn-outline-danger logout-button"
            />
        </Container>
      </Container>
    </Container>
  );
} 

export default UserHeader;
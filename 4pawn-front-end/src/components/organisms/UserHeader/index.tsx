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
    <Container className="user-header">
      <HeaderWithLogo content="4 Pawn"/>
      <Paragraph content={`Hello ${user.username}`}/>
      <LinkButton 
        content={ content ? content : 'Profile' }
        target={ target ? target : "/profile" }
      />
      <LinkButton content="Logout" target='/'className="logout-button"/>
    </Container>
  );
} 

export default UserHeader;
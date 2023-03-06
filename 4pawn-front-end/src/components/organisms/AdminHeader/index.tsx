import React, { useContext } from "react";
import HeaderWithLogo from "@molecules/HeaderWithLogo";
import LinkButton from "@molecules/LinkButton";
import Container from '@atoms/Container/index';
import Paragraph from "@atoms/Paragraph";
import AppContextType from "@context/types";
import { AppContext } from "@context/index";

const AdminHeader: React.FC = () => {
  const { user } = useContext(AppContext) as AppContextType;
  return(
    <Container className="user-header">
      <HeaderWithLogo content="4 Pawn"/>
      <Paragraph content={`Hello ${user}`}/>
      <LinkButton content="Home" target="/home" />
      <LinkButton content="Logout" target='/'className="logout-button"/>
    </Container>
  );
} 

export default AdminHeader;
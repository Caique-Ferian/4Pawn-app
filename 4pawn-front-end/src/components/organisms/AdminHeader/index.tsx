import React from "react";
import HeaderWithLogo from "@molecules/HeaderWithLogo";
import LinkButton from "@molecules/LinkButton";
import Container from '@atoms/Container/index';
import Paragraph from "@atoms/Paragraph";

const AdminHeader: React.FC = () => {
  return(
    <Container className="user-header">
      <HeaderWithLogo content="4 Pawn"/>
      <Paragraph content="Hello Admin"/>
      <LinkButton content="Home" target="/home" />
      <LinkButton content="Logout" target='/'className="logout-button"/>
    </Container>
  );
} 

export default AdminHeader;
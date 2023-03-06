import React from "react";
import Header from "@atoms/Header";
import Image from "@atoms/Image";
import PropsHeaderWithLogo from './types/index';
import logo from './logo.png'
import Container from "@atoms/Container";

const HeaderWithLogo: React.FC<PropsHeaderWithLogo> = (
  { content }: PropsHeaderWithLogo) => {
    return(
      <Container className="header-with-logo">
        <Image src={logo} width="250px" height="80px" alt="4Pawn-logo" />
        <Container className="header">
          <Header  content={content}/>
        </Container>
      </Container>
    );
}

export default HeaderWithLogo;
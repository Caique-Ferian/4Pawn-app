import React from "react";
import Image from "@atoms/Image";
import logo from './logo.svg'
import Container from "@atoms/Container";
import Link from "@atoms/Link";

const HeaderWithLogo: React.FC = () => {
    return(
      <Container className="navbar navbar-dark">
        <Link to='/home' className="navbar-brand">
          <Image src={logo} width="250px" alt="4Pawn-logo" />
        </Link>
      </Container>
    );
}

export default HeaderWithLogo;
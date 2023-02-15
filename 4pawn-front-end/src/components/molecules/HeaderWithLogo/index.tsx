import React from "react";
import Header from "@atoms/Header";
import Image from "@atoms/Image";
import IPropsHeaderWithLogo from './types/index';
import logo from './logo.png'

const HeaderWithLogo: React.FC<IPropsHeaderWithLogo> = (
  { content }: IPropsHeaderWithLogo) => {
    return(
      <div className="header-with-logo">
        <Image src={logo} width="250px" height="80px" alt="4Pawn-logo" />
        <Header className="header"  content={content}/>
      </div>
    );
}

export default HeaderWithLogo;
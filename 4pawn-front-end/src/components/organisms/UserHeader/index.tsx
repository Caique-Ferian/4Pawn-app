import React from "react";
import HeaderWithLogo from "@molecules/HeaderWithLogo";
import LinkButton from "@molecules/LinkButton";

const UserHeader: React.FC = () => {
  return(
    <div className="user-header">
      <HeaderWithLogo content="4 Pawn"/>
      <LinkButton content="Logout" target='/'/>
    </div>
  );
} 

export default UserHeader;
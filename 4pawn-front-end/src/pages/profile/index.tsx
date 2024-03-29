import React from "react";
import Container from "@atoms/Container";
import UserHeader from "@organisms/userOrganism/UserHeader";
import UpdateEmailForm from "@organisms/userOrganism/UpdateEmailForm";
import UpdatePasswordForm from "@organisms/userOrganism/UpdatePasswordForm";

const ProfilePage: React.FC = () => {
  return (
    <Container className="profile-page">
      <UserHeader content="Home" target="/home"/>
      <Container className="register-form">
        <UpdateEmailForm />
        <UpdatePasswordForm />
      </Container>
    </Container>
  );
}

export default ProfilePage;
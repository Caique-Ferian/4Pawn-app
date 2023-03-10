import React from "react";
import Container from "@atoms/Container";
import UserHeader from "@organisms/UserHeader";
import UpdateEmailForm from "@organisms/UpdateEmailForm";
import UpdatePasswordForm from "@organisms/UpdatePasswordForm";

const ProfilePage: React.FC = () => {
  return (
    <Container className="profile-page">
      <UserHeader content="Home" target="/home"/>
      <UpdateEmailForm />
      <UpdatePasswordForm />
    </Container>
  );
}

export default ProfilePage;
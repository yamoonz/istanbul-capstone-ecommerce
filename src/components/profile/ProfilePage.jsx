import React from "react";
import GeneralSection from "./general/GeneralSection";
import AccessCheck from "../common/AccessCheck";
import UserFavoriteList from "./UserFavoriteList";

const ProfilePage = () => {
  return (
    <>
      <AccessCheck />
      <GeneralSection />
      <UserFavoriteList />
    </>
  );
};

export default ProfilePage;

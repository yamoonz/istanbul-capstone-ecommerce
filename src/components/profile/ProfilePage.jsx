import React from "react";
import GeneralSection from "./general/GeneralSection";
import UserFavoriteList from "./userFavoriteList/UserFavoriteList";
const ProfilePage = () => {
  return (
    <>
      <GeneralSection />
      <UserFavoriteList />
    </>
  );
};

export default ProfilePage;

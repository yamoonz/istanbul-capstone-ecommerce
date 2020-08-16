import React from "react";
import GeneralSection from "./general/GeneralSection";
import AccessCheck from "../common/AccessCheck";

const ProfilePage = () => {
  return (
    <>
      <AccessCheck />
      <GeneralSection />
    </>
  );
};

export default ProfilePage;

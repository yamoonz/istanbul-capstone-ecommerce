import React from "react";
import "./GeneralSection.scss";
import Container from "react-bootstrap/Container";

const DEFAULT_IMG_SRC =
  "https://images.unsplash.com/photo-1561882161-d9599193623c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80";

const GeneralSection = () => {
  return (
    <Container fluid className="profileGeneralSection">
      <div className="userSectionWrapper">
        <div className="avatarContainer">
          <img src={DEFAULT_IMG_SRC} alt="user avatar" />
          <i className="fas fa-cogs settingsIcon"></i>
        </div>
        <span className="userInfo">Emre Erdem</span>
      </div>
    </Container>
  );
};

export default GeneralSection;

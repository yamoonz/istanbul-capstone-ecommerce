import React from "react";
import aboutHero from "../../assets/img/aboutHero.jpg";
import "./style.scss";

export default function AboutHeader() {
  return (
    <div className="aboutHeader">
      <div className="aboutHeaderImgBox">
        <img src={aboutHero} alt="about page header" />
      </div>
      <div className="aboutLine"></div>
      <h1>Who are we</h1>
      <p className="aboutDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}

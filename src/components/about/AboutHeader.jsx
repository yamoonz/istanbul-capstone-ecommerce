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
        We are a group of four people who aims to enhance the health of everyone{" "}
        <br />
        by both strengthen the read about health and providing healthy products.
      </p>
    </div>
  );
}

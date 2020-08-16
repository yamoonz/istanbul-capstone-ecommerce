import React from "react";
import AboutHeader from "./AboutHeader";
import OurTeam from "./OurTeam";
import Footer from "../layout/footer/Footer";
import "./style.scss";

export default function About() {
  return (
    <div className="aboutPage">
      <AboutHeader />
      <OurTeam />
      <Footer />
    </div>
  );
}

import React from "react";
import clock from "../../assets/video-clock.mov";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className="header container">
      <div className="videoWrap">
        <video src={clock} autoPlay={true} loop={true}></video>
      </div>
      <div className="headerOverlay"></div>
      <div className="headerContent">
        <div className="lineWrapper">
          <p className="whiteLine mt-4"></p>
        </div>
        <div className="headerTextContent">
          <h1 className="headerTitle">
            {t("headerTitle", "We Care About Your Health")}
          </h1>
          <p className="headerDescription">
            Cholesterol is a waxy, fat-like substance that's found in all the
            cells in your body. Your body needs some cholesterol to make
            hormones and substances that help you digest foods. Your body makes
            all the cholesterol it needs. Cholesterol is also found in foods
            from animal sources, such as egg yolks and meat. If you have too
            much cholesterol in your blood, it can combine with other substances
            in the blood to form plaque.
          </p>
          <div className="middleButtons">
            <Button variant="info" className="buttonGetStarted">
              Get Started
            </Button>
            <Button variant="secondary" className="ml-5 buttonSignUp">
              <NavLink to="/signup">Sign Up</NavLink>
            </Button>
          </div>
        </div>
        <div className="bottomButtons">
          <ul>
            <li>Fast shipping</li>
            <li className="ml-5">Education</li>
            <li className="ml-5">Healthy life</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

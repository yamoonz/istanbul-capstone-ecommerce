import React from "react";
import clock from "../../assets/video-clock.mov";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

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
          <Row className="shortInfoRow">
            <Col className="shortInfoItem">
              <i className="fas fa-shipping-fast shippingIcon shortInfoIcon"></i>
              <h3 className="shortInfoTitle">Fast shipping</h3>
              <span className="shortInfoText">
                Have your orders shipped right away!
              </span>
            </Col>
            <Col className="shortInfoItem shortInfoEducation">
              <i className="fas fa-award educationIcon shortInfoIcon"></i>
              <h3 className="shortInfoTitle">Education</h3>
              <span className="shortInfoText">
                Learn how to distinct quality products!
              </span>
            </Col>
            <Col className="shortInfoItem">
              <i className="fas fa-medkit healthIcon shortInfoIcon"></i>
              <h3 className="shortInfoTitle">Healthy life</h3>
              <span className="shortInfoText">
                Choose only natural products!
              </span>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

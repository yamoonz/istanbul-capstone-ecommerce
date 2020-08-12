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
          <h1 className="headerTitle">{t("homepage.header.title")}</h1>
          <p className="headerDescription">
            {t("homepage.header.description")}
          </p>
          <div className="middleButtons">
            <Button variant="info" className="buttonGetStarted">
              <NavLink to="/products">
                {t("homepage.header.getStarted")}
              </NavLink>
            </Button>
            <Button variant="secondary" className="ml-5 buttonSignUp">
              <NavLink to="/signup">{t("homepage.header.signUp")}</NavLink>
            </Button>
          </div>
        </div>
        <div className="bottomButtons">
          <Row className="shortInfoRow">
            <Col className="shortInfoItem">
              <i className="fas fa-shipping-fast shippingIcon shortInfoIcon"></i>
              <h3 className="shortInfoTitle">
                {t("homepage.header.shipping")}
              </h3>
              <span className="shortInfoText">
                {t("homepage.header.shippingInfo")}
              </span>
            </Col>
            <Col className="shortInfoItem shortInfoEducation">
              <i className="fas fa-award educationIcon shortInfoIcon"></i>
              <h3 className="shortInfoTitle">
                {t("homepage.header.education")}
              </h3>
              <span className="shortInfoText">
                {t("homepage.header.educationInfo")}
              </span>
            </Col>
            <Col className="shortInfoItem">
              <i className="fas fa-medkit healthIcon shortInfoIcon"></i>
              <h3 className="shortInfoTitle">{t("homepage.header.health")}</h3>
              <span className="shortInfoText">
                {t("homepage.header.healthInfo")}
              </span>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

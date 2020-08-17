import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./SignUp.scss";
import { NavLink } from "react-router-dom";
import GoogleAndFacebookLogIn from "../../../auth/login/GoogleAndFacebookLogIn";
import Login from "../../../auth/login/Login";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation();

  return (
    <>
      <Col xl={11} className="signupBox">
        <Login />
        <Col className="signupRedirect">
          <NavLink to="/signup">{t("homepage.loginform.signUp")}</NavLink>
        </Col>
        <Row className="socialMediaSeparator"></Row>
        <GoogleAndFacebookLogIn />
      </Col>
    </>
  );
};

export default SignUp;

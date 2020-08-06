import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./SignUp.scss";
import { NavLink } from "react-router-dom";
import GoogleAndFacebookLogIn from "../../../auth/login/GoogleAndFacebookLogIn";
import Login from "../../../auth/login/Login";

const SignUp = () => {
  return (
    <>
      <Col xl={11} className="signupBox">
        <Login />
        <Col className="signupRedirect">
          <NavLink to="/signup">Still not a user? Register now!</NavLink>
        </Col>
        <Row className="socialMediaSeperator"></Row>
        <GoogleAndFacebookLogIn />
      </Col>
    </>
  );
};

export default SignUp;

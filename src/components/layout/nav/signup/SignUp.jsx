import React from "react";
import Col from "react-bootstrap/Col";
import "./SignUp.scss";
import { NavLink } from "react-router-dom";
import GoogleAndFacebookLogIn from "../../../auth/login/GoogleAndFacebookLogIn";
import Login from "../../../auth/login/Login";

const SignUp = () => {
  return (
    <>
      <Col xl={11} className="signupBox">
        <GoogleAndFacebookLogIn />
        <Login />
        <Col className="signupRedirect">
          <NavLink to="/signup">Still not a user? Sign up now!</NavLink>
        </Col>
      </Col>
    </>
  );
};

export default SignUp;

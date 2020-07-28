import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import "./SignUp.scss";
import { NavLink } from "react-router-dom";
import useDeviceSizes from "../../useDeviceSizes";

const SignUp = () => {
  const passwordOfUser = useRef(false);
  const emailOfUser = useRef(false);
  const { widthOfDevice } = useDeviceSizes();
  const breakPointsToSmallDevices = 765;

  //This function will send the input values to check auth with 'emailOfUser.current.value' and 'passwordOfUser.current.value';
  const handleLoginInputs = () => null;

  return (
    <>
      <Col
        xl={11}
        className={`signupBox ${
          widthOfDevice < breakPointsToSmallDevices ? "signUpBoxResponsive" : ""
        }`}
      >
        <Row>
          <Col>
            <Button variant="info" size="md" className="fbButton">
              Facebook
            </Button>
          </Col>
          <Col>
            <Button variant="info" size="md" className="ggButton">
              Google
            </Button>
          </Col>
        </Row>
        <Col className="signupForm">
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailOfUser}
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordOfUser}
              />
              <Button
                variant="info"
                size="md"
                className="loginButton"
                onClick={handleLoginInputs}
              >
                Login
              </Button>
            </Form.Group>
          </Form>
        </Col>
        <Col className="signupRedirect">
          <NavLink to="/signup">Still not a user? Sign-Up now!</NavLink>
        </Col>
      </Col>
    </>
  );
};

export default SignUp;

import React, { useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import "./index.scss";
import { NavLink } from "react-router-dom";
import useDeviceSizes from "../../useDeviceSizes";

const SignUpBox = () => {
  const passwordOfUser = useRef(null);
  const emailOfUser = useRef(null);
  const { widthOfDevice, heightOfDevice } = useDeviceSizes();
  const breakPointsToSmallDevices = 765;

  const handleLoginInputs = () =>
    console.log([emailOfUser.current.value, passwordOfUser.current.value]);

  return (
    <>
      <Col
        xl={11}
        className={`signup-box ${
          widthOfDevice < breakPointsToSmallDevices ? "signUpBoxResponsive" : ""
        }`}
      >
        <Row>
          <Col>
            <Button variant="info" size="md" className="fb-button">
              Facebook
            </Button>
          </Col>
          <Col>
            <Button variant="info" size="md" className="gg-button">
              Google
            </Button>
          </Col>
        </Row>
        <Col className="signup-form">
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
                className="login-button"
                onClick={handleLoginInputs}
              >
                Login
              </Button>
            </Form.Group>
          </Form>
        </Col>
        <Col className="signup-redirect">
          <NavLink to="/signup">Still not a user? Sign-Up now!</NavLink>
        </Col>
      </Col>
    </>
  );
};

export default SignUpBox;

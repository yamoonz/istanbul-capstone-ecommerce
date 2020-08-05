import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import "./SignUp.scss";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const passwordValue = useRef(false);
  const emailValue = useRef(false);

  // TODO(emrerdem1): This function will send the input values to check auth with 'emailValue.current.value' and 'passwordValue.current.value';
  const handleLogin = () => null;

  return (
    <>
      <Col xl={11} className="signupBox">
        <Row className="socialLoginButtons">
          <Col>
            <Button variant="info" size="md" className="fbButton">
              Facebook
            </Button>
          </Col>
          <Col>
            <Button variant="info" size="md" className="googleButton">
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
                ref={emailValue}
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordValue}
              />
              <Button
                variant="info"
                size="md"
                className="loginButton"
                onClick={handleLogin}
              >
                Login
              </Button>
            </Form.Group>
          </Form>
        </Col>
        <Col className="signupRedirect">
          <NavLink to="/signup">Still not a user? Sign up now!</NavLink>
        </Col>
      </Col>
    </>
  );
};

export default SignUp;

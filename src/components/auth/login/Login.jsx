import React, { useState } from "react";
import { auth } from "../../config/firebaseConfig";
import db from "../../config/firebaseConfig";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { logIn, logOut, popUpStatus } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

const LogInForm = () => {
  const loginInfo = useSelector((state) => state.handleLogin);
  const dispatch = useDispatch();
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [validationError, setValidationError] = useState(false);

  const userLogout = (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      dispatch(logOut());
      dispatch(popUpStatus(true));
    });
  };

  const userLogin = async (e) => {
    e.preventDefault();
    const userLogin = await auth.signInWithEmailAndPassword(
      emailValue,
      passwordValue
    );

    if (userLogin) {
      const loggedInUserName = await db
        .collection("users")
        .doc(userLogin.user.uid)
        .get();

      dispatch(
        logIn(loggedInUserName.data().name, loggedInUserName.data().isAdmin)
      );
      dispatch(popUpStatus(true));
      setValidationError(false);
    } else {
      setValidationError(true);
    }
  };

  const emailGroup = (
    <Form.Group controlId="formGroupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmailValue(e.target.value)}
      />
    </Form.Group>
  );

  const passwordGroup = (
    <Form.Group controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        onChange={(e) => setPasswordValue(e.target.value)}
      />
    </Form.Group>
  );

  const validationErrorUI = <div>Oops!</div>;

  const handleOnSubmit = (e) => {
    if (loginInfo.loggedIn) {
      userLogout(e);
    } else {
      userLogin(e);
    }
  };

  return (
    <>
      <Col className="signupForm">
        <Form onSubmit={handleOnSubmit}>
          {emailGroup}
          {passwordGroup}
          {validationError && validationErrorUI}
          <Button
            variant="info"
            size="md"
            className="loginButton"
            type="submit"
          >
            {`${loginInfo.loggedIn ? "Log out" : "Log in"}`}
          </Button>
        </Form>
      </Col>
    </>
  );
};

export default LogInForm;

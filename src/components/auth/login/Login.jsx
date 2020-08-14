import React, { useState, useEffect } from "react";
import { auth } from "../../config/firebaseConfig";
import db from "../../config/firebaseConfig";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { logIn, logOut, handlePopUp } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const LogInForm = () => {
  const loginInfo = useSelector((state) => state.handleLogin);
  const dispatch = useDispatch();
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const history = useHistory();

  const userLogout = (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      dispatch(logOut());
    });
  };

  const userLogin = async (e) => {
    e.preventDefault();
    await auth.signInWithEmailAndPassword(emailValue, passwordValue);
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userObject = await db.collection("users").doc(user.uid).get();
        const { name: nameFromSignUpForm, isAdmin } = userObject.data();
        user.updateProfile({
          displayName: nameFromSignUpForm,
        });
        dispatch(logIn(user.displayName, isAdmin));
        dispatch(handlePopUp());
      } else {
        history.push("/");
        dispatch(handlePopUp());
      }
    });
  }, []);

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

  return (
    <>
      <Col className="signupForm">
        <Form
          onSubmit={(e) => {
            if (loginInfo.loggedIn) {
              userLogout(e);
            } else {
              userLogin(e);
            }
          }}
        >
          {emailGroup}
          {passwordGroup}
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

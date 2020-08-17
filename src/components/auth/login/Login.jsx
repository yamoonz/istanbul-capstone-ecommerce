import React, { useState } from "react";
import { auth } from "../../config/firebaseConfig";
import db from "../../config/firebaseConfig";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {
  logIn,
  logOut,
  logInError,
  popUpStatus,
} from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

const LogInForm = () => {
  const { isLoggedIn, authError } = useSelector(
    (state) => state.authentication
  );
  const dispatch = useDispatch();
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const userLogout = (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      dispatch(logOut());
      dispatch(popUpStatus(true));
    });
  };

  const userLogin = async (e) => {
    e.preventDefault();
    let userLogin;
    try {
      userLogin = await auth.signInWithEmailAndPassword(
        emailValue,
        passwordValue
      );
    } catch (error) {
      dispatch(logInError(error));
    }
    if (userLogin) {
      await db
        .collection("users")
        .doc(userLogin.user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            dispatch(logIn(doc.data().name, doc.data().isAdmin));
            dispatch(popUpStatus(true));
          } else {
            dispatch(logInError());
          }
        })
        .catch((error) => {
          dispatch(logInError(error));
        });
    }
  };

  const emailGroup = (
    <Form.Group controlId="formGroupEmail" className="formGroupEmail">
      <Form.Label className="formInputLabel">Email address</Form.Label>
      <div className="formInputWrapper">
        <i className="fas fa-user-circle"></i>
        <Form.Control
          type="email"
          placeholder="Enter email"
          className="formInput"
          onChange={(e) => setEmailValue(e.target.value)}
        />
      </div>
    </Form.Group>
  );

  const passwordGroup = (
    <Form.Group controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <div className="formInputWrapper">
        <i className="fas fa-key"></i>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          className="formInput"
          onChange={(e) => setPasswordValue(e.target.value)}
        />
      </div>
    </Form.Group>
  );

  const authErrorUi = <div>Oops!</div>;

  const handleOnSubmit = (e) => {
    if (isLoggedIn) {
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
          {authError && authErrorUi}
          <Button
            variant="info"
            size="md"
            className="loginButton"
            type="submit"
          >
            {`${isLoggedIn ? "Log out" : "Log in"}`}
          </Button>
        </Form>
      </Col>
    </>
  );
};

export default LogInForm;

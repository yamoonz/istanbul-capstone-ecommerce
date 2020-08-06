import React, { useState, useRef } from "react";
import { auth } from "../../config/firebaseConfig";
import db from "../../config/firebaseConfig";
import AddProducts from "../../addProductsForm/AddProducts";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const LogInForm = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const passwordValue = useRef(false);
  const emailValue = useRef(false);

  const userLogout = () => {
    auth.signOut().then(() => {
      setIsAdmin(false);
      setLoggedIn(false);
    });
  };

  const userLogin = async (e) => {
    const userLogin = await auth.signInWithEmailAndPassword(
      emailValue,
      passwordValue
    );

    const loggedInUserName = await db
      .collection("users")
      .doc(userLogin.user.uid)
      .get();
    setIsAdmin(loggedInUserName.data().isAdmin);
    setLoggedIn(true);
  };

  const emailGroup = (
    <Form.Group controlId="formGroupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" ref={emailValue} />
    </Form.Group>
  );

  const passwordGroup = (
    <Form.Group controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        ref={passwordValue}
      />
      {isLoggedIn ? (
        <Button
          variant="info"
          size="md"
          className="loginButton"
          onClick={userLogout}
        >
          Logout
        </Button>
      ) : (
        <Button
          variant="info"
          size="md"
          className="loginButton"
          onClick={userLogin}
        >
          Login
        </Button>
      )}
    </Form.Group>
  );

  return (
    <>
      {isAdmin && <AddProducts />}
      <Col className="signupForm">
        <Form>
          {emailGroup}
          {passwordGroup}
        </Form>
      </Col>
    </>
  );
};

export default LogInForm;

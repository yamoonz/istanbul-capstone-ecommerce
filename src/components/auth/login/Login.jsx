import React, { useState, useEffect } from "react";
import { auth } from "../../config/firebaseConfig";
import db from "../../config/firebaseConfig";
import AddProducts from "../../addProductsForm/AddProducts";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { logIn, logOut } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

const LogInForm = () => {
  const isLoggedIn = useSelector((state) => state.handleLogin);
  const dispatch = useDispatch();
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const userLogout = (e) => {
    e.preventDefault();
    auth.signOut().then(() => {});
  };

  const userLogin = async (e) => {
    e.preventDefault();
    await auth.signInWithEmailAndPassword(emailValue, passwordValue);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userObject = await db.collection("users").doc(user.uid).get();
        const { name: nameFromSignUpForm, isAdmin } = userObject.data();
        user.updateProfile({
          displayName: nameFromSignUpForm,
        });
        dispatch(logIn(user.displayName, isAdmin));
      } else {
        dispatch(logOut());
      }
    });
    console.log(isLoggedIn);
    return () => unsubscribe();
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
            if (isLoggedIn) {
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
            {`${isLoggedIn ? "Log out" : "Log in"}`}
          </Button>
        </Form>
      </Col>
    </>
  );
};

export default LogInForm;

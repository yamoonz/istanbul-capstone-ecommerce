import React, { useState, useRef } from "react";
import { auth } from "../../config/firebaseConfig";
import db from "../../config/firebaseConfig";
import AddProducts from "../../addProductsForm/AddProducts";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { logIn, logOut } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

const LogInForm = () => {
  const isLoggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();
  const [isAdmin, setIsAdmin] = useState(false);
  const passwordValue = useRef(false);
  const emailValue = useRef(false);

  const userLogout = () => {
    auth.signOut().then(() => {
      setIsAdmin(false);
      dispatch(logOut());
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
    dispatch(logIn());
  };

  const emailGroup = (
    <Form.Group controlId="formGroupEmail" className="formGroupEmail">
      <Form.Label className="formInputLabel">Email address</Form.Label>
      <div className="formInputWrapper">
        <i className="fas fa-user-circle"></i>
        <Form.Control
          type="email"
          placeholder="Enter your registered email"
          ref={emailValue}
          className="formInput"
        />
      </div>
    </Form.Group>
  );

  const passwordGroup = (
    <Form.Group controlId="formGroupPassword" className="formGroupPassword">
      <Form.Label className="formInputLabel">Password</Form.Label>
      <div className="formInputWrapper">
        <i className="fas fa-key"></i>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          ref={passwordValue}
          className="formInput"
        />
      </div>
      <Button
        variant="info"
        size="md"
        className="loginButton"
        onClick={`${isLoggedIn ? userLogout : userLogin}`}
      >
        {`${isLoggedIn ? "LOG OUT" : "LOG IN"}`}
      </Button>
    </Form.Group>
  );

  return (
    <>
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

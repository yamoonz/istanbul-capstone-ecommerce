import React, { useState } from "react";
import { auth } from "../../config/firebaseConfig";
import db from "../../config/firebaseConfig";
import AddProducts from "../../addProductsForm/AddProducts";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";

const LogInForm = () => {
  const { t } = useTranslation();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const userLogout = (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      setIsAdmin(false);
      setLoggedIn(false);
    });
  };

  const userLogin = async (e) => {
    e.preventDefault();
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
      <Form.Label>{t("homepage.loginform.email")}</Form.Label>
      <Form.Control
        type="email"
        placeholder={t("homepage.loginform.emailPlaceholder")}
        onChange={(e) => setEmailValue(e.target.value)}
      />
    </Form.Group>
  );

  const passwordGroup = (
    <Form.Group controlId="formGroupPassword">
      <Form.Label>{t("homepage.loginform.password")}</Form.Label>
      <Form.Control
        type="password"
        placeholder={t("homepage.loginform.passwordPlaceholder")}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
    </Form.Group>
  );

  return (
    <Row>
      {isAdmin && <AddProducts />}
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
            {`${
              isLoggedIn
                ? t("homepage.loginform.logout")
                : t("homepage.loginform.login")
            }`}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default LogInForm;

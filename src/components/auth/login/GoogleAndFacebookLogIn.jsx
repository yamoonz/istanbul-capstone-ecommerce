import React from "react";
import db from "../../config/firebaseConfig";
import * as firebase from "firebase";
import "firebase/auth";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function GoogleAndFacebookLogIn() {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  const postData = async (user) => {
    const info = {
      name: user.displayName,
      userId: user.uid,
      imageUrl: user.photoURL,
      isAdmin: false,
    };
    // Create new subcollection
    await db.collection("users").doc(info.userId).collection("liked").add({
      liked: 0,
    });
    await db.collection("users").doc(info.userId).set(info);
  };

  const logIn = (provider) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        postData(user);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <Row className="socialLoginButtons">
      <Col>
        <Button
          variant="info"
          size="md"
          className="fbButton"
          onClick={() => logIn(facebookProvider)}
        >
          Facebook
        </Button>
      </Col>
      <Col>
        <Button
          variant="info"
          size="md"
          className="googleButton"
          onClick={() => logIn(googleProvider)}
        >
          Google
        </Button>
      </Col>
    </Row>
  );
}

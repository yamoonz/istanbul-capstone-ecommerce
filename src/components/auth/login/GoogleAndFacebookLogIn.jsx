import React from "react";
import db from "../../config/firebaseConfig";
import * as firebase from "firebase";
import "firebase/auth";
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
    <Row className="socialLoginIcons">
      <span>Login or Register using:</span>
      <i
        className="fab fa-facebook facebookIcon"
        onClick={() => logIn(facebookProvider)}
      ></i>
      <i
        className="fab fa-google-plus googleIcon"
        onClick={() => logIn(googleProvider)}
      ></i>
    </Row>
  );
}

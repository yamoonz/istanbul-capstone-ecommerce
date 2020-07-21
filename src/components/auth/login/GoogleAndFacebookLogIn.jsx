import React from "react";
import db from "../../config/firebaseConfig";
import * as firebase from "firebase";
import "firebase/auth";

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
    // console.log(info.userId)
    const createNewSubCollection = await db
      .collection("users")
      .doc(info.userId)
      .collection("liked")
      .add({
        liked: "0",
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
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
      });
  };

  return (
    <div>
      <button onClick={() => logIn(googleProvider)}> Log in with Google</button>
      <button onClick={() => logIn(facebookProvider)}>
        {" "}
        Log in with Facebook
      </button>
    </div>
  );
}

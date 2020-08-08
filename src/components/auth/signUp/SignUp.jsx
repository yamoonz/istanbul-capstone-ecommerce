import React from "react";
import { auth } from "../../config/firebaseConfig";
import db from "../../config/firebaseConfig";
import Footer from "../../layout/footer/Footer";
import "./signUp.scss";

export default function SignUp() {
  const createNewUser = async (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const newUser = await auth.createUserWithEmailAndPassword(email, password);

    // Create new subcollection
    await db.collection("users").doc(newUser.user.uid).collection("liked").add({
      liked: "0",
    });

    // Set new user data
    await db.collection("users").doc(newUser.user.uid).set({
      name: userName,
      isAdmin: false,
    });
  };

  return (
    <>
      <div className="signUpContainer">
        <form className="signUpForm" onSubmit={createNewUser}>
          <h1 className="signUpTitle">Create Account</h1>

          <label className="signUpFormLable">
            Full Name:
            <input
              name="username"
              type="text"
              className="signUpFormInput"
              required
            />
          </label>

          <label className="signUpFormLable">
            Email:
            <input
              name="email"
              type="email"
              className="signUpFormInput"
              required
            />
          </label>

          <label className="signUpFormLable">
            Password:
            <input
              name="password"
              type="password"
              className="signUpFormInput"
              required
            />
          </label>

          <button className="signUpFormBtn">Sign Up</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

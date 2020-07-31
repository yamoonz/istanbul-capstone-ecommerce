import React from "react";
import { auth } from "../../config/firebaseConfig";
import db from "../../config/firebaseConfig";

export default function SignUp() {
  const createNewUser = async (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const newUser = await auth.createUserWithEmailAndPassword(email, password);
    const createNewSubCollection = await db
      .collection("users")
      .doc(newUser.user.uid)
      .collection("liked")
      .add({
        liked: "0",
      });
    const setNewUserData = await db
      .collection("users")
      .doc(newUser.user.uid)
      .set({
        name: userName,
        isAdmin: false,
      });
  };
  return (
    <div>
      <h5>Sign Up</h5>
      <form onSubmit={createNewUser}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

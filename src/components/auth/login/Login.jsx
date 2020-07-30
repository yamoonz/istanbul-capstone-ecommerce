import React from "react";
import { auth } from "../../config/firebaseConfig";
import db from "../../config/firebaseConfig";
import AddProducts from "../../addProductsForm/AddProducts";
import GoogleAndFacebookLogIn from "./GoogleAndFacebookLogIn";

const LogInForm = () => {
  const [isAdmin, setIsAdmin] = React.useState(false);

  const userLogout = () => {
    auth.signOut().then(() => {
      setIsAdmin(false);
    });
  };
  const userLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const userLogin = await auth.signInWithEmailAndPassword(email, password);
    const loggedInUserName = await db
      .collection("users")
      .doc(userLogin.user.uid)
      .get();
    setIsAdmin(loggedInUserName.data().isAdmin);
  };

  return (
    <>
      {isAdmin && <AddProducts />}
      <h5>sign in</h5>
      <form onSubmit={userLogin}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log in</button>
      </form>

      <button onClick={userLogout}>Logout</button>
      <GoogleAndFacebookLogIn />
    </>
  );
};

export default LogInForm;

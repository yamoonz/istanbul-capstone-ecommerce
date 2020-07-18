import React from "react";
import { auth } from '../../config/firebaseConfig';
import db from '../../config/firebaseConfig';

 const logInForm = () => {

  

  const userLogout =  () => {
    auth.onAuthStateChanged(function(user) {
      if (user) {

        console.log(user);
        
        auth.signOut().then(() => {
          console.log('user logged out');
         });
         
      } else {
        console.log('there are no users  ');      }
    });
    
    
  }
  const userLogin = async(e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const userLogin= await auth.signInWithEmailAndPassword(email, password);
    console.log(userLogin.user.uid)
    const loggedInUserName = await db.collection("users").doc(userLogin.user.uid).get()   
    console.log(loggedInUserName.data())
  }

  

  return (
    <>
    <h5>sign in</h5>
    <form onSubmit ={(e) => userLogin(e)} >
      <input type="email"  id ="emailField" placeholder = "Email" />
      <input type="password"  id ="passwordField" placeholder = "Password" />
      <button type ="submit">Log in</button>
      <button onClick = {userLogout}>Logout</button>
    </form>
    </>
  );
};

export default logInForm;
import React from "react";
import Products from "../products/Products";
import LoginForm from "../auth/login/Login";
import SignUpForm from "../auth/signUp/SignUp";
import LanguageDropdown from "./LanguageDropdown";
<<<<<<< HEAD
import Footer from "./Footer";
export default function Home() {
  return (
    <>
      <LanguageDropdown />;
      <Footer />
=======
import Categories from "./Categories";

export default function Home() {
  return (
    <>
      <LoginForm />
      <SignUpForm />
      <LanguageDropdown />
      <Categories />
      <Products />
>>>>>>> 0d85599d5d7389b90b4e6df65ad393130453429c
    </>
  );
}

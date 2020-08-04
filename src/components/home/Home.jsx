import React from "react";
import Products from "../products/Products";
import LoginForm from "../auth/login/Login";
import SignUpForm from "../auth/signUp/SignUp";
import LanguageDropdown from "./LanguageDropdown";
import Footer from "./Footer";
import Categories from "./Categories";
export default function Home() {
  return (
    <>
      <LanguageDropdown />;
      <Footer />
      <LoginForm />
      <SignUpForm />
      <LanguageDropdown />
      <Categories />
      <Products />

    </>
  );
}

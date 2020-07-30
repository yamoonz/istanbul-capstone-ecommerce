import React from "react";
import Products from "../products/Products";
import LoginForm from "../auth/login/Login";
import SignUpForm from "../auth/signUp/SignUp";
import LanguageDropdown from "./LanguageDropdown";
import Categories from "./Categories";

export default function Home() {
  return (
    <>
      <LoginForm />
      <SignUpForm />
      <LanguageDropdown />
      <Categories />
      <Products />
    </>
  );
}

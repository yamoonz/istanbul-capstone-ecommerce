import React from "react";
import LoginForm from "../auth/login/Login";
import SignUpForm from "../auth/signUp/SignUp";
import LanguageDropdown from "./LanguageDropdown";
import Navbar from "../layout/nav/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <LoginForm />
      <SignUpForm />
      <LanguageDropdown />
    </>
  );
}

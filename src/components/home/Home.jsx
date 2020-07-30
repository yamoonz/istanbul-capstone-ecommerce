import React from "react";
import LoginForm from "../auth/login/Login";
import SignUpForm from "../auth/signUp/SignUp";
import LanguageDropdown from "./LanguageDropdown";

export default function Home() {
  return (
    <div>
      <LoginForm />
      <SignUpForm />
      <LanguageDropdown />
    </div>
  );
}

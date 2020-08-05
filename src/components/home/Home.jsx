import React from "react";
import Products from "../products/Products";
import LoginForm from "../auth/login/Login";
import SignUpForm from "../auth/signUp/SignUp";
import LanguageDropdown from "./LanguageDropdown";
import Categories from "./Categories";
import SliderSection from "../singleProductPage/SliderSection";

export default function Home() {
  return (
    <>
      <LoginForm />
      <SignUpForm />
      <LanguageDropdown />
      <Categories />
      <Products />
      <SliderSection />
    </>
  );
}

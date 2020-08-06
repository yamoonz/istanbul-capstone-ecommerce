import React from "react";
import Products from "../products/Products";
import LoginForm from "../auth/login/Login";
import SignUpForm from "../auth/signUp/SignUp";
import LanguageDropdown from "./LanguageDropdown";
import Categories from "./Categories";
import SliderSection from "../singleProductPage/SliderSection";
import Footer from "../layout/footer/Footer";

export default function Home() {
  return (
    <>
      <LanguageDropdown />;
      <LoginForm />
      <SignUpForm />
      <LanguageDropdown />
      <Categories />
      <Products />
      <SliderSection />
      <Footer />
    </>
  );
}

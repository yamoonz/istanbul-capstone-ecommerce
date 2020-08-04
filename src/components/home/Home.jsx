import React from "react";
import Products from "../products/Products";
import LoginForm from "../auth/login/Login";
import LanguageDropdown from "./LanguageDropdown";
import Categories from "./Categories";

export default function Home() {
  return (
    <>
      <LoginForm />
      <LanguageDropdown />
      <Categories />
      <Products />
    </>
  );
}

import React from "react";
import Products from "../products/Products";
import LoginForm from "../auth/login/Login";
import SignUpForm from "../auth/signUp/SignUp";
import LanguageDropdown from "./LanguageDropdown";
import Categories from "./Categories";
import Header from "../header/Header";
import SliderSection from "../singleProductPage/SliderSection";
// import CartDetails from "../shoppingCart/cartmain/"
import { CartContext } from "../shoppingCart/cartmain/CartContext";
import { CartReducer } from "../shoppingCart/cartmain/CartReducer";
import { ProductsContext } from "../shoppingCart/cartmain/ProductsContext";
export default function Home() {
  return (
    <>
      <Header />
      <LoginForm />
      <SignUpForm />
      <LanguageDropdown />
      <Categories />
      <Products />
      <SliderSection />
      <CartContext />
      <CartReducer/>
      <ProductsContext/>
    </>
  );
}

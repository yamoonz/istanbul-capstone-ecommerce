import React from "react";
import Products from "../products/Products";
import LanguageDropdown from "./LanguageDropdown";
import Categories from "./Categories";
import Header from "../header/Header";
import SliderSection from "../singleProductPage/SliderSection";
import Footer from "../layout/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <LanguageDropdown />
      <Categories />
      <Products />
      <SliderSection />
      <Footer />
    </>
  );
}

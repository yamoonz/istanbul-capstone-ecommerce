import React from "react";
import Products from "../products/Products";
import Categories from "./Categories";
import Header from "../header/Header";
import Footer from "../layout/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

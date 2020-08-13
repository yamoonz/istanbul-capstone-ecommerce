import React from "react";
import Products from "../products/Products";
import Categories from "./Categories";
import Header from "../header/Header";

export default function Home() {

  return (
    <>
      <Header />
      <Categories />
      <Products />
    </>
  );
}

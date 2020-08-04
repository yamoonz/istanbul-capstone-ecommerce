import React from "react";
import Products from "../products/Products";
import LanguageDropdown from "./LanguageDropdown";
import Categories from "./Categories";

export default function Home() {
  return (
    <>
      <LanguageDropdown />
      <Categories />
      <Products />
    </>
  );
}

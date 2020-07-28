import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "../components/signup/SignUp";
import CartPage from "../components/shoppingCart/Cart";
import BlogOverview from "../components/blog/BlogOverview";
import AboutPage from "../components/about/About";
import ProductsPage from "../components/products/Products";
import AdminPage from "../components/addProductsForm/AddProducts";

export const RouteBlock = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/shoppingcart" component={CartPage} />
      <Route path="/blog" component={BlogOverview} />
      <Route path="/about" component={AboutPage} />
      <Route path="/admin" component={AdminPage} />
    </Switch>
  );
};

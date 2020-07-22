import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "../components/signup";
import CartPage from "../components/shoppingCart";
import BlogOverview from "../components/blog/BlogOverview";
import AboutPage from "../components/about";
import HomePage from "../components/home";
import ProductsPage from "../components/products";
import Navbar from "../components/layout/nav";

export const RouteBlock = () => {
  return (
    <Switch>
      <Route path="/" component={Navbar} />
      <Route path="/signup" component={SignUp} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/shoppingcart" component={CartPage} />
      <Route path="/blog" component={BlogOverview} />
      <Route path="/about" component={AboutPage} />
      <Route path="/admin" component={AboutPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
};

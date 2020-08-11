import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "../components/auth/signUp/SignUp";
import CartPage from "../components/shoppingCart/Cart";
import BlogOverview from "../components/blog/BlogOverview";
import AboutPage from "../components/about/About";
import ProductsPage from "../components/products/Products";
import AdminPage from "../components/addProductsForm/AddProducts";
import Home from "../components/home/Home";
import SingleProductPage from "../components/singleProductPage/SingleProductPage";
import ProfilePage from "../components/profile/ProfilePage";

export const RouteBlock = () => {
  return (
    <Switch>
      <Route path="/categories/:categoryName" component={ProductsPage} />
      <Route path="/products/:productId" component={SingleProductPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/shoppingcart" component={CartPage} />
      <Route path="/signup" component={SignUp} />
      <Route path="/blog" component={BlogOverview} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/admin" component={AdminPage} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

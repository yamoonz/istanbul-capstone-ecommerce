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
import {
  CATEGORIES,
  PRODUCTS,
  SHOPPING_CART,
  SIGN_UP,
  BLOG,
  PROFILE,
  ABOUT,
  ADMIN,
  HOME,
} from "./Route.paths.js";

export const RouteBlock = () => {
  return (
    <Switch>
      <Route path={`${CATEGORIES}/:categoryName`} component={ProductsPage} />
      <Route path={`${PRODUCTS}/:productId`} component={SingleProductPage} />
      <Route path={PRODUCTS} component={ProductsPage} />
      <Route path={SHOPPING_CART} component={CartPage} />
      <Route path={SIGN_UP} component={SignUp} />
      <Route path={BLOG} component={BlogOverview} />
      <Route path={PROFILE} component={ProfilePage} />
      <Route path={ABOUT} component={AboutPage} />
      <Route path={ADMIN} component={AdminPage} />
      <Route exact path={HOME} component={Home} />
    </Switch>
  );
};

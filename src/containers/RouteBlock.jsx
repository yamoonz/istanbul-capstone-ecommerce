import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import SignUp from "../components/auth/signUp/SignUp";
import CartPage from "../components/shoppingCart/Cart";
import BlogOverview from "../components/blog/BlogOverview";
import AboutPage from "../components/about/About";
import ProductsPage from "../components/products/Products";
import AdminPage from "../components/addProductsForm/AddProducts";
import Home from "../components/home/Home";
import SingleProductPage from "../components/singleProductPage/SingleProductPage";
import ProfilePage from "../components/profile/ProfilePage";
import SinglePostPage from "../components/blog/SinglePostPage";
import NoMatch from "../components/nomatch/NoMatch";
import { useSelector } from "react-redux";

const ADMIN_PAGE = "/dashboard";

export const RouteBlock = () => {
  /*const history = useHistory();
  const isAdmin = useSelector((state) => state.authentication.isAdmin);*/

  return (
    <Switch>
      <Route path="/categories/:categoryName" component={ProductsPage} />
      <Route path="/products/:productId" component={SingleProductPage} />
      <Route path="/blog/:postTitle" component={SinglePostPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/shoppingcart" component={CartPage} />
      <Route path="/signup" component={SignUp} />
      <Route path="/blog" component={BlogOverview} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/about" component={AboutPage} />
      <Route path={ADMIN_PAGE} component={AdminPage} />
      {/*isAdmin && history.push(ADMIN_PAGE)*/}
      <Route exact path="/" component={Home} />
      <Route component={NoMatch} />
    </Switch>
  );
};

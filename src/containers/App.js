import React from "react";
import "../App.scss";
import { RouteBlock } from "./RouteBlock";
import { Route } from "react-router-dom";
import Navbar from "../components/layout/nav/Navbar";
import Home from "../components/home/Home";
import Cart from "../components/shoppingCart/Cart";
<<<<<<< HEAD

=======
>>>>>>> shoppingCart
function App() {
  return (
    <>
      <Route path="/" component={Navbar} />
      <RouteBlock />
      <Cart />
      <Home />
<<<<<<< HEAD
      <Cart />
=======

>>>>>>> shoppingCart
    </>
  );
}

export default App;

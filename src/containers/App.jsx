import React from "react";
import "../App.scss";
import { RouteBlock } from "./RouteBlock";
import { Route } from "react-router-dom";
import Navbar from "../components/layout/nav/Navbar";
<<<<<<< HEAD:src/containers/App.js
import Home from "../components/home/Home";
import Cart from "../components/shoppingCart/Cart";
<<<<<<< HEAD
=======
>>>>>>> 0d85599d5d7389b90b4e6df65ad393130453429c:src/containers/App.jsx

=======
>>>>>>> shoppingCart
function App() {
  return (
    <>
      <Route path="/" component={Navbar} />
      <RouteBlock />
<<<<<<< HEAD:src/containers/App.js
      <Cart />
      <Home />
<<<<<<< HEAD
      <Cart />
=======

>>>>>>> shoppingCart
=======
>>>>>>> 0d85599d5d7389b90b4e6df65ad393130453429c:src/containers/App.jsx
    </>
  );
}

export default App;

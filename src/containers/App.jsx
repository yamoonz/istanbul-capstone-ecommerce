import React from "react";
import "../App.scss";
import { RouteBlock } from "./RouteBlock";
import { Route } from "react-router-dom";
import Navbar from "../components/layout/nav/Navbar";
import Footer from "../components/layout/footer/Footer";

function App() {
  return (
    <>
      <Route path="/" component={Navbar} />
      <RouteBlock />
      <Footer />
    </>
  );
}

export default App;

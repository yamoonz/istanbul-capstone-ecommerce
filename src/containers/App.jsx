import React from "react";
import "../App.scss";
import { RouteBlock } from "./RouteBlock";
import { Route } from "react-router-dom";
import Navbar from "../components/layout/nav/Navbar";

function App() {
  return (
    <>
      <Route path="/" component={Navbar} />
      <RouteBlock />
    </>
  );
}

export default App;

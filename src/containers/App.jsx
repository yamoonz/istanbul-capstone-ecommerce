import React, { useState, useLayoutEffect } from "react";
import "../App.scss";
import { RouteBlock } from "./RouteBlock";
import { Route, useLocation } from "react-router-dom";
import Navbar from "../components/layout/nav/Navbar";
import Footer from "../components/layout/footer/Footer";

const SHOPPING_CART_URL = "/shoppingcart";

function App() {
  const { pathname: currentUrl } = useLocation();
  const [isShoppingCartOpened, setIsShoppingCartOpened] = useState(false);

  useLayoutEffect(() => {
    const isMatching = currentUrl === SHOPPING_CART_URL;
    setIsShoppingCartOpened(isMatching);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    return () => null;
  }, [currentUrl]);

  return (
    <>
      <Route path="/" component={Navbar} />
      <RouteBlock />
      {!isShoppingCartOpened && <Footer />}
    </>
  );
}

export default App;

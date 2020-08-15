import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  SHOPPING_CART,
  SIGN_UP,
  PROFILE,
  ADMIN,
  HOME,
} from "../../containers/Route.paths.js";

const REDIRECT_TO_HOME = <Redirect to={HOME} />;

const AccessCheck = () => {
  const { isLoggedIn, isAdmin } = useSelector((state) => state.handleLogin);
  const { pathname } = useLocation();

  const renderSwitch = () => {
    switch (pathname) {
      case SIGN_UP:
        if (isLoggedIn) {
          return REDIRECT_TO_HOME;
        }
        break;
      case ADMIN:
        if (!isAdmin) {
          return REDIRECT_TO_HOME;
        }
        break;
      case SHOPPING_CART || PROFILE:
        if (!isLoggedIn) {
          return REDIRECT_TO_HOME;
        }
        break;
      default:
        return null;
    }
  };

  return <>{renderSwitch()}</>;
};

export default AccessCheck;

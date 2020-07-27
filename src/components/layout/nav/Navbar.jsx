import React, { useReducer } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import SignUpBox from "./signup/SignUp";
import SearchBox from "./search/Search";

function navbarIconsReducer(state, action) {
  switch (action.type) {
    case "IS_SIGN_OPENED":
      return {
        ...state,
        isSignBoxOpen: !state.isSignBoxOpen,
        isSearchBoxOpen: false,
      };

    case "IS_SEARCH_OPENED":
      return {
        ...state,
        isSearchBoxOpen: !state.isSearchBoxOpen,
        isSignBoxOpen: false,
      };

    case "IS_HAMBURGER_OPENED":
      return {
        isHamburgerOpen: !state.isHamburgerOpen,
        isSignBoxOpen: false,
        isSearchBoxOpen: false,
      };

    default:
      return state;
  }
}

const Navbar = () => {
  const [
    { isSignBoxOpen, isSearchBoxOpen, isHamburgerOpen, isAdminLoggedIn },
    dispatch,
  ] = useReducer(navbarIconsReducer, {
    isSignBoxOpen: false,
    isSearchBoxOpen: false,
    isHamburgerOpen: false,
    isAdminLoggedIn: false,
  });

  const handleStatusOfIcons = (type) => dispatch({ type });

  return (
    <>
      {isSearchBoxOpen && <SearchBox />}
      <Container fluid id="navbar">
        <Row
          className="hamburgerContainer"
          onClick={() => handleStatusOfIcons("IS_HAMBURGER_OPENED")}
        >
          <Col className="hamburgerIcon"></Col>
        </Row>
        <Row
          className={`collapseMenuItems ${
            isHamburgerOpen ? "hamburgerOpened" : ""
          }`}
        >
          <Row className="navbarLogo">LOGO</Row>

          <Row xl={7} lg={7} className="navbarItems">
            <Col>
              <NavLink exact to="/">
                Home
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/about">About</NavLink>
            </Col>
            <Col>
              <NavLink to="/blog">Blog</NavLink>
            </Col>
            <Col>
              <NavLink to="/products">Products</NavLink>
            </Col>
            <Col>
              <NavLink to="/contact">Contact</NavLink>
            </Col>
          </Row>
          <Row xl={2} lg={2} className="icon-trio">
            <div>
              <i
                className="fas fa-search"
                onClick={() => handleStatusOfIcons("IS_SEARCH_OPENED")}
              ></i>
            </div>
            {isAdminLoggedIn ? (
              <div>
                <NavLink to="/admin">
                  <i className="fas fa-user-shield"></i>
                </NavLink>
              </div>
            ) : (
              <div>
                <i
                  className="fas fa-user-circle"
                  onClick={() => handleStatusOfIcons("IS_SIGN_OPENED")}
                ></i>
              </div>
            )}
            <div>
              <NavLink to="/shoppingcart">
                <i className="fas fa-shopping-cart"></i>
              </NavLink>
            </div>
          </Row>
        </Row>
      </Container>
      {isSignBoxOpen && <SignUpBox />}
    </>
  );
};

export default Navbar;

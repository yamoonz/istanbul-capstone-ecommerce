import React, { useState, useReducer, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import SignUpBox from "./signup/SignUp";
import SearchBox from "./search/Search";
import "./Navbar.scss";
import LanguageDropdown from "../../home/LanguageDropdown";
import ClickAwayListener from "react-click-away-listener";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { popUpStatus } from "../../redux/actions/index";
import {
  IS_LANGUAGE_DROPDOWN_OPENED,
  IS_SIGNUP_OPENED,
  IS_SEARCH_OPENED,
  IS_HAMBURGER_OPENED,
  CLICK_AWAY,
} from "./navbarFormConstants.js";
import UserLoggedInDropdown from "../../auth/login/UserLoggedInDropdown.jsx";

function navbarIconsReducer(state, action) {
  switch (action.type) {
    case IS_LANGUAGE_DROPDOWN_OPENED:
      return {
        ...state,
        isLanguageDropdownOpen: !state.isLanguageDropdownOpen,
        isSearchBoxOpen: false,
        isSignUpBoxOpen: false,
      };

    case IS_SIGNUP_OPENED:
      return {
        ...state,
        isSignUpBoxOpen: !state.isSignUpBoxOpen,
        isSearchBoxOpen: false,
      };

    case IS_SEARCH_OPENED:
      return {
        ...state,
        isSearchBoxOpen: !state.isSearchBoxOpen,
        isSignUpBoxOpen: false,
      };

    case IS_HAMBURGER_OPENED:
      return {
        isHamburgerOpen: !state.isHamburgerOpen,
        isSignUpBoxOpen: false,
        isSearchBoxOpen: false,
      };

    case CLICK_AWAY:
      return {
        isHamburgerOpen: false,
        isSignUpBoxOpen: false,
        isSearchBoxOpen: false,
      };

    default:
      return state;
  }
}

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);
  const currentPopUpStatus = useSelector((state) => state.modal.isPopUpClosed);
  const dispatch = useDispatch();
  const [
    navbarWithTransparentBackground,
    setNavbarWithTransparentBackground,
  ] = useState(false);
  const [scrollStateOnTop, setScrollStateOnTop] = useState(true);
  let location = useLocation();

  const [
    {
      isLanguageDropdownOpen,
      isSignUpBoxOpen,
      isSearchBoxOpen,
      isHamburgerOpen,
    },
    localeDispatch,
  ] = useReducer(navbarIconsReducer, {
    isLanguageDropdownOpen: false,
    isSignUpBoxOpen: false,
    isSearchBoxOpen: false,
    isHamburgerOpen: false,
  });

  const handleStatus = (type) => localeDispatch({ type });

  const hamburgerMenu = (
    <Row
      className="hamburgerContainer navbarItemWrapper"
      onClick={() => handleStatus(IS_HAMBURGER_OPENED)}
    >
      <Col className="hamburgerIcon"></Col>
    </Row>
  );

  const componentsLocation = ["/", "/about", "/signup"];
  // To give navbar background on components with white background
  const navBarClassForLocation = (currentLocation) => {
    for (let i in componentsLocation) {
      if (currentLocation === componentsLocation[i]) {
        setNavbarWithTransparentBackground(true);
        break;
      } else {
        setNavbarWithTransparentBackground(false);
      }
    }
  };

  // To give navbar background on scrolling
  const changeNavbarClassNameOnScroll = (currentLocation) => {
    const listener = document.addEventListener("scroll", (e) => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 90) {
        if (scrollStateOnTop) {
          setScrollStateOnTop(false);
          setNavbarWithTransparentBackground(false);
        }
      } else {
        if (!scrollStateOnTop) {
          for (let i in componentsLocation) {
            if (currentLocation === componentsLocation[i]) {
              setScrollStateOnTop(true);
              setNavbarWithTransparentBackground(true);
              break;
            } else {
              setNavbarWithTransparentBackground(false);
            }
          }
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  };

  const fullNavbarMenu = (
    <Row
      className={`navbarItemWrapper collapseMenuItems ${
        isHamburgerOpen ? "hamburgerOpened" : ""
      }`}
    >
      <Row className="navbarLogo">LOGO</Row>

      <Row xl={7} lg={7} className="navbarItems">
        <Col className="navLinkCol">
          <NavLink exact to="/">
            Home
          </NavLink>
        </Col>
        <Col className="navLinkCol">
          <NavLink to="/about">About</NavLink>
        </Col>
        <Col className="navLinkCol">
          <NavLink to="/blog">Blog</NavLink>
        </Col>
        <Col className="navLinkCol">
          <NavLink to="/products">Products</NavLink>
        </Col>
      </Row>
      <Row xl={2} lg={2} className="iconTrio navbarItemWrapper">
        <div className="iconWrapper">
          <i
            className="fas fa-search"
            onClick={() => handleStatus(IS_SEARCH_OPENED)}
          ></i>
        </div>
        <div className="iconWrapper">
          <i
            className="fas fa-user-circle"
            onClick={() => {
              handleStatus(IS_SIGNUP_OPENED);
              dispatch(popUpStatus(false));
            }}
          ></i>
        </div>
        <div className="iconWrapper">
          <NavLink to="/shoppingcart">
            <i className="fas fa-shopping-cart"></i>
          </NavLink>
        </div>
        <div className="iconWrapper">
          <i
            className="fas fa-globe"
            onClick={() => handleStatus(IS_LANGUAGE_DROPDOWN_OPENED)}
          ></i>
          {isLanguageDropdownOpen && <LanguageDropdown />}
        </div>
      </Row>
    </Row>
  );

  const closeSignUpForm = (
    <i
      className="fas fa-times closeSignUpForm"
      onClick={() => handleStatus(IS_SIGNUP_OPENED)}
    ></i>
  );

  const handleClickAway = () => handleStatus(CLICK_AWAY);

  const navbarClassName = () => {
    let classNames = ["navbar"];
    if (isSearchBoxOpen) {
      classNames.push("moveOverHeader");
    } else if (navbarWithTransparentBackground) {
      classNames.push("navbarWithTransparentBackground");
    }
    return classNames.join(" ");
  };  

  useEffect(() => {
    navBarClassForLocation(location.pathname);
    changeNavbarClassNameOnScroll(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, scrollStateOnTop]);

  useEffect(() => {
    if (currentPopUpStatus && isSignUpBoxOpen) {
      setTimeout(() => handleStatus(IS_SIGNUP_OPENED), 2000);
    }
  }, [currentPopUpStatus, isSignUpBoxOpen]);

  useEffect(() => {
    handleStatus(CLICK_AWAY);
  }, [location.pathname]);

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        {isSearchBoxOpen && <SearchBox />}
        <Container fluid className={navbarClassName()}>
          {hamburgerMenu}
          {fullNavbarMenu}
        </Container>
        {isSignUpBoxOpen && (
          <>
            {closeSignUpForm}
            <SignUpBox />
          </>
        )}
      </ClickAwayListener>
    </>
  );
};

export default Navbar;

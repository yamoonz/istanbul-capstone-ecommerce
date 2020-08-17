import React, { useState, useReducer, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NavLink, useHistory } from "react-router-dom";
import SignUpBox from "./signup/SignUp";
import SearchBox from "./search/Search";
import NavigationTabOnLogin from "./NavigationTabOnLogin.jsx";
import "./Navbar.scss";
import LanguageDropdown from "../../home/LanguageDropdown";
import ClickAwayListener from "react-click-away-listener";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { popUpStatus } from "../../redux/actions/index";
import {
  IS_LANGUAGE_DROPDOWN_OPENED,
  IS_LOGGED_IN_BOX_OPENED,
  IS_SIGNUP_OPENED,
  IS_SEARCH_OPENED,
  IS_HAMBURGER_OPENED,
  CLICK_AWAY,
} from "./navbarFormConstants.js";
import { ADMIN } from "../../../containers/Route.paths.js";

const CLOSE_MODAL_AFTER = 2500;
import { useTranslation } from "react-i18next";

function navbarIconsReducer(state, action) {
  switch (action.type) {
    case IS_LANGUAGE_DROPDOWN_OPENED:
      return {
        ...state,
        isLanguageDropdownOpen: !state.isLanguageDropdownOpen,
        isSearchBoxOpen: false,
        isSignUpBoxOpen: false,
        isLoggedInBoxOpen: false,
      };

    case IS_SIGNUP_OPENED:
      return {
        ...state,
        isSignUpBoxOpen: !state.isSignUpBoxOpen,
        isSearchBoxOpen: false,
        isLoggedInBoxOpen: false,
      };
    case IS_LOGGED_IN_BOX_OPENED:
      return {
        ...state,
        isLoggedInBoxOpen: !state.isLoggedInBoxOpen,
        isSignUpBoxOpen: false,
        isSearchBoxOpen: false,
      };
    case IS_SEARCH_OPENED:
      return {
        ...state,
        isSearchBoxOpen: !state.isSearchBoxOpen,
        isSignUpBoxOpen: false,
        isLoggedInBoxOpen: false,
      };

    case IS_HAMBURGER_OPENED:
      return {
        isHamburgerOpen: !state.isHamburgerOpen,
        isSignUpBoxOpen: false,
        isSearchBoxOpen: false,
        isLoggedInBoxOpen: false,
      };

    case CLICK_AWAY:
      return {
        isHamburgerOpen: false,
        isSignUpBoxOpen: false,
        isSearchBoxOpen: false,
        isLoggedInBoxOpen: false,
      };

    default:
      return state;
  }
}

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const history = useHistory();
  const isAdmin = useSelector((state) => state.authentication.isAdmin);
  const currentPopUpStatus = useSelector((state) => state.modal.isPopUpClosed);
  const dispatch = useDispatch();
  const [
    navbarWithTransparentBackground,
    setNavbarWithTransparentBackground,
  ] = useState(false);
  const [scrollStateOnTop, setScrollStateOnTop] = useState(true);
  let location = useLocation();
  const { t } = useTranslation();

  const [
    {
      isLanguageDropdownOpen,
      isSignUpBoxOpen,
      isSearchBoxOpen,
      isHamburgerOpen,
      isLoggedInBoxOpen,
    },
    localeDispatch,
  ] = useReducer(navbarIconsReducer, {
    isLanguageDropdownOpen: false,
    isSignUpBoxOpen: false,
    isSearchBoxOpen: false,
    isHamburgerOpen: false,
    isLoggedInBoxOpen: false,
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
      <Row className="navbarLogo">KATARA</Row>

      <Row xl={7} lg={7} className="navbarItems">
        <Col className="navLinkCol">
          <NavLink exact to="/">
            {t("homepage.navbar.menuHome")}
          </NavLink>
        </Col>
        <Col className="navLinkCol">
          <NavLink to="/about"> {t("homepage.navbar.menuAbout")}</NavLink>
        </Col>
        <Col className="navLinkCol">
          <NavLink to="/blog">Blog</NavLink>
        </Col>
        <Col className="navLinkCol">
          <NavLink to="/products"> {t("homepage.navbar.menuProducts")}</NavLink>
        </Col>
      </Row>
      <Row xl={2} lg={2} className="iconTrio navbarItemWrapper">
        <div className="iconWrapper">
          <i
            className="fas fa-search"
            onClick={() => handleStatus(IS_SEARCH_OPENED)}
          ></i>
        </div>

        {isLoggedIn ? (
          <Row
            className="iconWrapper loggedInUserIconWrapper"
            onClick={() => {
              handleStatus(IS_LOGGED_IN_BOX_OPENED);
              dispatch(popUpStatus(false));
            }}
          >
            <Col className="loggedInTabCol loggedInUserIconCol loggedInIconsContainer">
              <i className="fas fa-user-astronaut loggedDefaultIcon"></i>
            </Col>
            <Col
              className="loggedInTabCol loggedInTextContainer"
              xl={9}
              lg={9}
              md={9}
              sm={9}
              xs={9}
            >
              <Col className="loggedInTabText loggedProfileText">
                My Profile
              </Col>
              <Col className="loggedInTabText loggedUserName">Emre Erdem</Col>
            </Col>
            <Col className="loggedInTabCol loggedInIconsContainer">
              <i className="fas fa-arrow-down loggedArrowIcon"></i>
            </Col>
          </Row>
        ) : (
          <div className="iconWrapper">
            <i
              className="fas fa-user-circle"
              onClick={() => {
                handleStatus(IS_SIGNUP_OPENED);
                dispatch(popUpStatus(false));
              }}
            ></i>
          </div>
        )}
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
      setTimeout(() => handleStatus(IS_SIGNUP_OPENED), CLOSE_MODAL_AFTER);
    }
    if (isLoggedInBoxOpen && !isSignUpBoxOpen && !isLoggedIn) {
      handleStatus(IS_SIGNUP_OPENED);
      dispatch(popUpStatus(false));
      isAdmin && history.push(ADMIN);
    }
  }, [
    currentPopUpStatus,
    isSignUpBoxOpen,
    isLoggedInBoxOpen,
    isLoggedIn,
    isAdmin,
    history,
  ]);

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
        {isLoggedInBoxOpen && <NavigationTabOnLogin />}
      </ClickAwayListener>
    </>
  );
};

export default Navbar;

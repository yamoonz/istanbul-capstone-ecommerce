import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="footerIcons">
        <a href="https://www.twitter.com/" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.gmail.com/" className="gmail social">
          <FontAwesomeIcon icon={faGoogle} size="2x" />
        </a>
        <a href="https://www.facebook.com/" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.github.com/" className="github social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <ul className="navBar">
        <NavLink to="/">
          <li className="navBarItem">Home</li>
        </NavLink>
        <NavLink to="/products">
          <li className="navBarItem">Products</li>
        </NavLink>
        <NavLink to="/blog">
          <li className="navBarItem">Blog</li>
        </NavLink>
        <NavLink to="/about">
          <li className="navBarItem">About</li>
        </NavLink>
      </ul>
    </footer>
  );
};

export default Footer;

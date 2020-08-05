import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
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
        <li className="navBarItem">Home</li>
        <li className="navBarItem">Products</li>
        <li className="navBarItem">Blog</li>
        <li className="navBarItem">Contact</li>
      </ul>
    </footer>
  );
};

export default Footer;

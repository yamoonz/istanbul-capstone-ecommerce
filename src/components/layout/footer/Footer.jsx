import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <Container fluid className="footerWrapper">
      <Row className="footerLinks">
        <Col className="footerLinksLogo">
          <h3 className="footerLogo">LOGO</h3>
          <span className="footerMotto">Your health is in good hands.</span>
        </Col>
        <Col className="footerLinksBlogs">
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/blog">Skin Care</NavLink>
          <NavLink to="/blog">Stay Fit and Healthy</NavLink>
        </Col>
        <Col className="footerLinksPages">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
        </Col>
      </Row>
      <Row className="footerSeparator"></Row>
      <Row className="footerIconsCopyright">
        <Col className="footerIcons">
          <a
            href="https://www.twitter.com/"
            className="footerSocialIcon twitter"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.gmail.com/" className="footerSocialIcon google">
            <FontAwesomeIcon icon={faGoogle} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/"
            className="footerSocialIcon facebook"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.github.com/" className="footerSocialIcon github">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </Col>
        <Col className="footerCopyright">&copy; All rights reserved.</Col>
      </Row>
    </Container>
  );
};

export default Footer;

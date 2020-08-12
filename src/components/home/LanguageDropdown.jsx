import React from "react";
import i18next from "i18next";
import { Col } from "react-bootstrap";
import "./languageDropdown.scss";

export default function LanguageDropdown() {
  function setLanguage(language) {
    i18next.changeLanguage(language);
  }

  return (
    <Col className="languageDropdown">
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">EN</option>
        <option value="ar">AR</option>
        <option value="tr">TR</option>
      </select>
    </Col>
  );
}

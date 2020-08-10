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
        <option value="en">en</option>
        <option value="ar">ar</option>
      </select>
    </Col>
  );
}

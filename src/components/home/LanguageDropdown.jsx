import React from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export default function LanguageDropdown() {
  const { t } = useTranslation();

  function setLanguage(language) {
    i18next.changeLanguage(language);
  }

  return (
    <div>
      <h1>{t("omar")}</h1>
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">en</option>
        <option value="ar">ar</option>
      </select>
    </div>
  );
}

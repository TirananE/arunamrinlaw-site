"use client";

import React from "react";
import { useLanguage } from "./LanguageProvider";

const LanguageSwitcher: React.FC = () => {
  const { language, changeLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "th" : "en";
    changeLanguage(newLanguage);
  };

  return (
    <div className="language-switcher">
      <button
        onClick={toggleLanguage}
        className="language-btn"
        aria-label={t("change_language")}
      >
        <span className="language-text hidden sm:inline">{t("language")}:</span>
        <span className="language-code">
          {language === "en" ? "EN" : "ไทย"}
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;

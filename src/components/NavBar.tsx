"use client";

import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { navigationData } from "@/data";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.id;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar" style={{backgroundColor: 'rgb(255, 255, 255) !important'}}>
      <div className="navbar-container">
        <div className="navbar-brand">
          {/* Arunamrinlaw */}
          <img
            src="/assets/images/logo/1ARUNAMRIN.png"
            alt="Logo"
            className="navbar-logo"
          />
        </div>
        <button
          className={`navbar-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          {navigationData.map((item) => (
            <button
              key={item.id}
              className={`navbar-item ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              {t(item.label.toLowerCase())}
            </button>
          ))}
          <div className="navbar-item language-switcher-item">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

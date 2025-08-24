"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./NavBar.css";
import { navigationData } from "@/data";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
    <nav
      className="navbar"
      style={{ backgroundColor: "rgb(255, 255, 255) !important" }}
    >
      <div className="navbar-container">
        <div className="navbar-brand">
          {/* Arunamrinlaw */}
          <Image
            src="/assets/images/logo/1ARUNAMRIN.png"
            alt="Logo"
            className="navbar-logo"
            width={200}
            height={50}
            priority
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
          <div className="navbar-item consultation-button-item">
            <button onClick={openModal} className="consultation-btn">
              {t("book_consultation")}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1050,
          }}
          onClick={closeModal}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div
                className="modal-header"
                style={{ backgroundColor: "#1a1f3e", color: "white" }}
              >
                <h5 className="modal-title">{t("contact_us")}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={closeModal}
                  aria-label="Close"
                ></button>
              </div>
              <div
                className="modal-body p-0"
                style={{
                  backgroundColor: "#1a1f3e !important",
                }}
              >
                <div
                  className="no-gutters"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <div>
                    <Image
                      src="/assets/images/contact/qrcode.JPG"
                      alt="Office Location"
                      width={300}
                      height={300}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    style={{ backgroundColor: "#1a1f3e", color: "white" }}
                    className="p-4"
                  >
                    <h4 style={{ color: "#D4AF37", marginBottom: "20px" }}>
                      {t("contact_us")}
                    </h4>
                    <div className="contact-info">
                      <div className="mb-3">
                        <i
                          className="fa-solid fa-location-dot me-2"
                          style={{ color: "#D4AF37" }}
                        ></i>
                        <a
                          href="https://maps.app.goo.gl/rw8kxHS5FBBUd1SU8?g_st=com.google.maps.preview.copy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-decoration-none"
                          style={{ color: "white" }}
                        >
                          109/12, SOI LAT PHRAO 23, LAT PHRAO, CHANKASEM,
                          CHATUCHAK, BANGKOK 10900
                        </a>
                      </div>
                      <div className="mb-3">
                        <i
                          className="fa-solid fa-phone me-2"
                          style={{ color: "#D4AF37" }}
                        ></i>
                        <span>{t("call")}: 02-513-0130-4</span>
                      </div>
                      <div className="mb-3">
                        <i
                          className="fa-solid fa-mobile-alt me-2"
                          style={{ color: "#D4AF37" }}
                        ></i>
                        <span>{t("mobile_phone")}: 084-378-4434</span>
                      </div>
                      <div className="mb-3">
                        <i
                          className="fa-solid fa-envelope me-2"
                          style={{ color: "#D4AF37" }}
                        ></i>
                        <span>arunamrin.law@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

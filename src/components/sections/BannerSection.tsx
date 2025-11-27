"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../LanguageProvider";

const BannerSection = () => {
  const { t } = useLanguage();
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const logoRef = React.useRef<HTMLDivElement | null>(null);
  const [logoWidth, setLogoWidth] = useState(0);
  const [logoHeight, setLogoHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const updateMarker = () => {
      if (!sectionRef.current || !logoRef.current) return;
      const secRect = sectionRef.current.getBoundingClientRect();
      const logoRect = logoRef.current.getBoundingClientRect();
      const top = Math.max(0, logoRect.top - secRect.top);
      const height = Math.max(0, logoRect.height);
      sectionRef.current.style.setProperty("--banner-marker-top", `${top}px`);
      sectionRef.current.style.setProperty(
        "--banner-marker-height",
        `${height}px`
      );
    };

    updateMarker();
    window.addEventListener("resize", updateMarker);
    window.addEventListener("load", updateMarker);
    return () => {
      window.removeEventListener("resize", updateMarker);
      window.removeEventListener("load", updateMarker);
    };
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setLogoWidth(mobile ? 200 : 350);
      setLogoHeight(mobile ? 120 : 220);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="travel_banner_outer position-relative">
      <section
        id="banner"
        ref={sectionRef}
        className="travelbanner-con position-relative"
      >
        <div className="banner-container">
          <div
            className="banner_image_top"
            ref={logoRef}
            data-aos="fade-down"
            style={{
              position: "absolute",
              top: isMobile ? "100px" : "20px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "auto",
            }}
          >
            <Image
              src="/assets/images/logo/2ARUNAMRIN.png"
              alt="Arunamrin Law"
              width={logoWidth}
              height={logoHeight}
              className="banner-logo"
              priority
            />
          </div>
          <div className="row align-items-center justify-content-center h-100 m-0 banner-row-centered">
            {/* Logo + Content in same column so left edges align */}
            <div className="col-lg-8 col-md-12 col-sm-12 col-12 banner-column">
              {/* <div className="banner-marker" aria-hidden="true"></div> */}
              <div
                className="banner_content_fullwidth text-center"
                data-aos="fade-left"
              >
                <h2 className="banner-title-fullwidth">{t("banner_title")}</h2>
                <p className="text-size-18 banner-description">
                  {t("banner_description")}
                </p>
                <h5 className="banner-tagline">{t("banner_tagline")}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerSection;

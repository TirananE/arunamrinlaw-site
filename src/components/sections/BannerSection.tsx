"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../LanguageProvider";

const BannerSection = () => {
  const { t } = useLanguage();

  return (
    <div className="travel_banner_outer position-relative">
      <section id="banner" className="travelbanner-con position-relative">
        <div className="banner-container">
          <div className="row align-items-center h-100 m-0">
            {/* Image section - Desktop only, sticks to left edge */}
            <div className="col-lg-6 col-md-6 d-none d-lg-block p-0">
              <div className="banner_image_left" data-aos="fade-right">
                <Image
                  src="/assets/images/5ARUNAMRIN.png"
                  alt="Arunamrin Law"
                  width={320}
                  height={200}
                  className="banner-logo"
                  priority
                />
              </div>
            </div>
            {/* Content section - Full width on mobile, half on desktop */}
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="banner_content_fullwidth" data-aos="fade-left">
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

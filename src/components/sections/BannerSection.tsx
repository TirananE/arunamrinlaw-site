"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from '../LanguageProvider';

const BannerSection = () => {
  const { t } = useLanguage();
  
  return (
    <div className="travel_banner_outer position-relative">
      <section id="banner" className="travelbanner-con position-relative">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="banner_content" data-aos="fade-up">
                <h1>
                  {t('banner_title')}
                </h1>
                <p className="text-size-18">
                  {t('banner_description')}
                </p>
                <h5>{t('banner_tagline')}</h5>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12 text-lg-left text-center">
              <div className="banner_wrapper" data-aos="zoom-in">
                <figure className="banner-image mb-0">
                  <Image
                    src="/assets/images/home/25680723-IMG_9323.jpg"
                    alt="banner"
                    width={1000}
                    height={1000}
                    className="img-fluid"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerSection;

"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from '../LanguageProvider';

const AboutSection2 = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="travelabout-con position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="about_content" data-aos="fade-up">
              <p className=" text text-size-16">
                {t('our_team_description')}
              </p>
              <h3 className=" text text-size-18">
                {t('peace_of_mind')}
              </h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-lg-left text-center">
            <div className="about_wrapper position-relative" data-aos="zoom-in">
              <figure className="about-image mb-0 w-100">
                <Image
                  src="/assets/images/about/25680723-IMG_9332.jpg"
                  alt="about"
                  width={400}
                  height={400}
                  className="img-fluid w-100 h-auto"
                  style={{ objectFit: 'cover' }}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;

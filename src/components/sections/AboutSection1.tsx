"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from '../LanguageProvider';

const AboutSection1 = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="travelabout-con position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-lg-left text-center">
            <div className="about_wrapper position-relative" data-aos="zoom-in">
              <figure className="about-image mb-0 w-100">
                <Image
                  src="/assets/images/about/IMG_2875.JPG"
                  alt="about"
                  width={400}
                  height={400}
                  className="img-fluid w-100 h-auto"
                  style={{ objectFit: 'cover' }}
                />
              </figure>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="about_content" data-aos="fade-up">
              {/* <h6 className="text-white">{t('about')}</h6> */}
              <h2 className="text-white">{t('commitment')}</h2>
              <p className="text-white text text-size-16">
                {t('commitment_description')}
              </p>
              {/* <div className="propertise">
                <ul className="list-unstyled mb-0 list1">
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p className="mb-0 text-size-18">Excepteur sint occae</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p className="mb-0 text-size-18">Duis aute irure dolor</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p className="mb-0 text-size-18">Rerum hic tenetur sai</p>
                  </li>
                </ul>
                <ul className="list-unstyled mb-0 list2">
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p className="mb-0 text-size-18">Quo voluptas nullaiur</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p className="mb-0 text-size-18">Consectetur adiriscive</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p className="mb-0 text-size-18">Suscirit laboriosamer</p>
                  </li>
                </ul>
              </div> */}
              {/* <Link href="/about" className="text-decoration-none all_button">
                Read More<i className="fa-solid fa-arrow-right"></i>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection1;

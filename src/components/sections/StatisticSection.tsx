"use client";

import React from "react";
import Image from "next/image";
import { statisticsDataKeys } from "@/data";
import { useLanguage } from '../LanguageProvider';
import "./StatisticSection.css";

const StatisticSection = () => {
  const { t } = useLanguage();
  return (
    <section id="statistic" className="statistic-con position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="statistic_content text-center" data-aos="fade-up">
              <h2>{t('our_services')}</h2>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-12 col-sm-12 col-12 text-lg-left text-center"
          style={{
            marginBottom: "24px",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className="about_wrapper position-relative" data-aos="zoom-in">
            <figure className="about-image mb-0">
              <Image
                src="/assets/images/services/25680723-IMG_9317.jpg"
                alt="about"
                width={600}
                height={400}
                className="img-fluid border-radius-30"
              />
            </figure>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          {statisticsDataKeys.map((stat, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-6 mb-4">
              <div className="statistic-box h-100 d-flex flex-column justify-content-center">
                <figure className={`icon ${stat.iconClassName || ""}`}>
                  <Image
                    src={stat.icon}
                    alt="statistic"
                    width={60}
                    height={60}
                    className="img-fluid"
                  />
                </figure>
                <span className="value">
                  <h3>{t(stat.valueKey)}</h3>
                </span>
                <span className="text">{t(stat.textKey)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticSection;

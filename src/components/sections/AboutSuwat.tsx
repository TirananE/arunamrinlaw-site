"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AboutSuwat = () => {
  const { t, i18n } = useTranslation();
  const isThaiLanguage = i18n.language === "th";

  // Array of founder images (only JPG/JPEG files)
  const founderImages = [
    "/assets/images/founder/25680723-IMG_9329.jpg",
    "/assets/images/founder/25680723-IMG_9334.jpg",
    "/assets/images/founder/25680723-IMG_9336.jpg",
    "/assets/images/founder/25680723-IMG_9339.jpg",
    "/assets/images/founder/IMG_2876.JPG",
    "/assets/images/founder/IMG_2894.JPG",
  ];

  const achievements = isThaiLanguage
    ? [
        t("suwat_achievements.1"),
        t("suwat_achievements.2"),
        t("suwat_achievements.3"),
        t("suwat_achievements.4"),
        t("suwat_achievements.5"),
        t("suwat_achievements.6"),
        t("suwat_achievements.7"),
        t("suwat_achievements.8"),
        t("suwat_achievements.9"),
        t("suwat_achievements.10"),
        t("suwat_achievements.11"),
        t("suwat_achievements.12"),
        t("suwat_achievements.13"),
      ]
    : [
        t("suwat_achievements.1"),
        t("suwat_achievements.2"),
        t("suwat_achievements.3"),
        t("suwat_achievements.4"),
        t("suwat_achievements.5"),
        t("suwat_achievements.6"),
        t("suwat_achievements.7"),
        t("suwat_achievements.8"),
        t("suwat_achievements.9"),
        t("suwat_achievements.10"),
        t("suwat_achievements.11"),
        t("suwat_achievements.12"),
        t("suwat_achievements.13"),
      ];

  return (
    <section id="about-suwat" className="travelabout-con position-relative">
      <h2 className="text-center" style={{marginBottom: "26px"}}>
        {isThaiLanguage ? t("about_suwat_title"): "About Suwat Apaipakdi"}
      </h2>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8 col-md-10 col-sm-12 col-12 text-center">
            <div className="about_wrapper position-relative" data-aos="zoom-in">
              <div className="founder-image-slider mb-4 w-100">
                <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                  enabled: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                grabCursor={true}
                className="founderSwiper"
                breakpoints={{
                  320: {
                    navigation: {
                      enabled: false,
                    },
                  },
                  768: {
                    navigation: {
                      enabled: true,
                    },
                  },
                }}
              >
                {founderImages.map((imageSrc, index) => (
                  <SwiperSlide key={index}>
                    <figure className="about-image mb-0">
                      <Image
                        src={imageSrc}
                        alt={`Suwat Apaipakdi - Photo ${index + 1}`}
                        width={700}
                        height={500}
                        className="img-fluid founder-image"
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </figure>
                  </SwiperSlide>
                ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12 col-sm-12 col-12">
            <div className="about_content text-center" data-aos="fade-up">
              {/* Achievements List */}
              <div className="achievements-container">
                <div className="achievements-grid">
                  <div className="achievements-column">
                    <ul className="list-unstyled mb-0">
                      {achievements.slice(0, Math.ceil(achievements.length / 2)).map((achievement, index) => (
                        <li key={index} className="achievement-item">
                          <i className="fa fa-check" aria-hidden="true"></i>
                          <p className="mb-0 text-size-16">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="achievements-column">
                    <ul className="list-unstyled mb-0">
                      {achievements.slice(Math.ceil(achievements.length / 2)).map((achievement, index) => (
                        <li key={index + Math.ceil(achievements.length / 2)} className="achievement-item">
                          <i className="fa fa-check" aria-hidden="true"></i>
                          <p className="mb-0 text-size-16">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .achievements-container {
          margin-top: 28px;
        }

        .achievements-grid {
          display: flex;
          gap: 40px;
          justify-content: center;
          align-items: flex-start;
          max-width: 1000px;
          margin: 0 auto;
        }

        .achievements-column {
          flex: 1;
          text-align: left;
        }

        .achievement-item {
          position: relative;
          margin-bottom: 16px;
          padding-left: 34px;
          line-height: 1.6;
        }

        .achievement-item i {
          font-size: 9px;
          height: 17px;
          width: 17px;
          line-height: 13px;
          top: 6px;
          left: 0;
          position: absolute;
          text-align: center;
          border-radius: 100%;
          color: var(--e-global-color-white);
          background-color: transparent;
          border: 2px solid var(--e-global-color-white);
          transition: all 0.3s ease-in-out;
        }

        .achievement-item p {
          margin: 0;
          color: var(--e-global-color-white);
          font-weight: 400;
          line-height: 26px;
          font-size: 16px;
        }

        /* Founder Slider Styles */
        .founder-image-slider {
          border-radius: 20px;
          overflow: hidden;
          max-width: 700px;
          margin: 0 auto;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .founderSwiper {
          border-radius: 20px;
          overflow: hidden;
          width: 100%;
          height: 500px;
        }

        .founderSwiper .swiper-slide {
          border-radius: 20px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .founderSwiper .swiper-slide .about-image {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 20px;
        }

        .founderSwiper .swiper-slide img,
        .founder-image {
          border-radius: 20px;
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          display: block;
        }

        .founderSwiper .swiper-button-next,
        .founderSwiper .swiper-button-prev {
          color: rgba(255, 255, 255, 0.9);
          background: rgba(0, 0, 0, 0.4);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .founderSwiper .swiper-button-next:hover,
        .founderSwiper .swiper-button-prev:hover {
          color: #ffffff;
          background: rgba(0, 0, 0, 0.6);
        }

        .founderSwiper .swiper-button-next::after,
        .founderSwiper .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }

        .founderSwiper .swiper-pagination {
          bottom: 15px;
        }

        .founderSwiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          width: 10px;
          height: 10px;
          margin: 0 4px;
          transition: all 0.3s ease;
        }

        .founderSwiper .swiper-pagination-bullet-active {
          background: #ffffff;
          transform: scale(1.2);
        }

        @media (max-width: 1199px) {
          .achievements-grid {
            gap: 30px;
          }

          .founder-image-slider {
            max-width: 600px;
          }

          .founderSwiper {
            height: 450px;
          }

          .founderSwiper .swiper-slide {
            height: 450px;
          }
        }

        @media (max-width: 991px) {
          .about_content {
            padding-left: 0 !important;
            /* margin-top: 40px; */
            text-align: center;
          }

          .achievements-grid {
            flex-direction: column;
            gap: 0;
          }

          .achievement-item {
            text-align: left;
            margin-bottom: 14px;
          }

          .founder-image-slider {
            max-width: 500px;
          }

          .founderSwiper {
            height: 400px;
          }

          .founderSwiper .swiper-slide {
            height: 400px;
          }

          .founderSwiper .swiper-button-next,
          .founderSwiper .swiper-button-prev {
            width: 45px;
            height: 45px;
          }
        }

        @media (max-width: 767px) {
          .achievement-item {
            margin-bottom: 12px;
            padding-left: 28px;
          }

          .achievement-item p {
            font-size: 14px;
            line-height: 22px;
          }

          .achievement-item i {
            font-size: 8px;
            height: 15px;
            width: 15px;
            line-height: 11px;
            top: 5px;
          }

          .founder-image-slider {
            max-width: 400px;
          }

          .founderSwiper {
            height: 350px;
          }

          .founderSwiper .swiper-slide {
            height: 350px;
          }

          .founderSwiper .swiper-button-next,
          .founderSwiper .swiper-button-prev {
            display: none; /* Hide navigation arrows on mobile */
          }

          .founderSwiper .swiper-pagination {
            bottom: 10px;
          }

          .founderSwiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            margin: 0 3px;
          }
        }

        @media (max-width: 480px) {
          .founder-image-slider {
            max-width: 320px;
          }

          .founderSwiper {
            height: 300px;
          }

          .founderSwiper .swiper-slide {
            height: 300px;
          }

          .founderSwiper .swiper-pagination {
            bottom: 8px;
          }

          .founderSwiper .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
            margin: 0 2px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSuwat;

"use client";

import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AboutSuwat = () => {
  // Array of founder images (only JPG/JPEG files)
  const founderImages = [
    "/assets/images/founder/25680723-IMG_9329.jpg",
    "/assets/images/founder/25680723-IMG_9334.jpg",
    "/assets/images/founder/25680723-IMG_9336.jpg",
    "/assets/images/founder/25680723-IMG_9339.jpg",
    "/assets/images/founder/IMG_2876.JPG",
    "/assets/images/founder/IMG_2894.JPG",
    "/assets/images/founder/Studio Session-600.jpg",
  ];

  const achievements = [
    "Serves the position as chairman of Arunamarin Law Co. Ltd.",
    "One of the initial members of the first graduating class from Ramkumhang Law School.",
    "Association Secretary of Ramkumhang Law School.",
    "Deputy Secretary General at the Thai's Lawyer Council.",
    "Master's degree in Public Administration from Ramkumhang University.",
    "Master of Arts in Political Science from Ramkumhang University.",
    "Legal consultant for Deputy Ministry of Transport, Deputy Minister of Interior, and Minister of Commerce.",
    "Legal consultant for Bangkok University.",
    "Ex Honorary Adviser for the study committee for anti-corruption and good governance.",
  ];

  return (
    <section id="about-suwat" className="travelabout-con position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-lg-left text-center">
            <div className="about_wrapper position-relative" data-aos="zoom-in">
              <div className="founder-image-slider mb-0 w-100">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation={{
                    enabled: true,
                  }}
                  pagination={{ 
                    clickable: true,
                    dynamicBullets: true 
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
                          width={350}
                          height={350}
                          className="img-fluid"
                          style={{ objectFit: "fill", width: "100%", height: "100%" }}
                        />
                      </figure>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="about_content" data-aos="fade-up">
              <h2 className="text-white">About Suwat Apaipakdi</h2>

              {/* Achievements List */}
              <div className="achievements-container">
                <ul className="list-unstyled mb-0">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="achievement-item">
                      <i className="fa fa-check" aria-hidden="true"></i>
                      <p className="mb-0 text-size-16 text-white">
                        {achievement}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .achievements-container {
          margin-top: 28px;
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
          border-radius: 30px;
          overflow: hidden;
          max-width: 450px;
          margin: 0 auto;
        }

        .founderSwiper {
          border-radius: 30px;
          overflow: hidden;
          width: 100%;
          height: 350px;
        }

        .founderSwiper .swiper-slide {
          border-radius: 30px;
        }

        .founderSwiper .swiper-slide img {
          border-radius: 30px;
        }

        .founderSwiper .swiper-button-next,
        .founderSwiper .swiper-button-prev {
          color: rgba(255, 255, 255, 0.8);
          background: rgba(0, 0, 0, 0.3);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .founderSwiper .swiper-button-next:hover,
        .founderSwiper .swiper-button-prev:hover {
          color: #ffffff;
          background: rgba(0, 0, 0, 0.6);
        }

        .founderSwiper .swiper-button-next::after,
        .founderSwiper .swiper-button-prev::after {
          font-size: 16px;
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

        @media (max-width: 991px) {
          .about_content {
            padding-left: 0 !important;
            margin-top: 40px;
            text-align: center;
          }

          .achievement-item {
            text-align: left;
            margin-bottom: 14px;
          }

          .founder-image-slider {
            max-width: 400px;
          }

          .founderSwiper {
            height: 320px;
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
            max-width: 300px;
          }

          .founderSwiper {
            height: 280px;
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
            max-width: 250px;
          }

          .founderSwiper {
            height: 250px;
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

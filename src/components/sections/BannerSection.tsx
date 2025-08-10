import React from "react";
import Link from "next/link";
import Image from "next/image";

const BannerSection = () => {
  return (
    <div className="travel_banner_outer position-relative">
      <section id="banner" className="travelbanner-con position-relative">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="banner_content" data-aos="fade-up">
                {/* <h5>We Don’t Just Practice Law — We Define It.</h5> */}
                <h1>
                  A well-respected Thai law firm with 50 years of experience.
                </h1>
                <p className="text-size-18">
                  One of the most trusted and respected law firms in the
                  industry. Known for our unwavering commitment to excellence,
                  we combine deep legal expertise with strategic thinking to
                  deliver results that exceed expectations.
                </p>
                <h5>We Don’t Just Practice Law — We Define It.</h5>
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

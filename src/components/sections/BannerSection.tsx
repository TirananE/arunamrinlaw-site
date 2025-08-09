import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BannerSection = () => {
  return (
    <div className="travel_banner_outer position-relative">
      <section className="travelbanner-con position-relative">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="banner_content" data-aos="fade-up">
                <h5>Welcome to the Insurerity</h5>
                <h1>Secure Your Adventures with Travel Insurance!</h1>
                <p className="text-size-18">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore aeunur pariatur non proident aute dolore magnairure.</p>
                <div className="button_wrapper">
                  <Link href="/contact" className="text-decoration-none all_button get_started">
                    Get Started<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link href="/contact" className="text-decoration-none all_button get_quote">
                    Get a Quote<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12 text-lg-left text-center">
              <div className="banner_wrapper" data-aos="zoom-in">
                <figure className="banner-image mb-0">
                  <Image 
                    src="/assets/images/banner3-image.jpg" 
                    alt="banner" 
                    width={500}
                    height={500}
                    className="img-fluid"
                  />
                </figure>
                <div className="box" data-aos="fade-up">
                  <div className="images">
                    <figure className="banner-image1 mb-0 ml-0">
                      <Image 
                        src="/assets/images/banner-image1.jpg" 
                        alt="banner" 
                        width={100}
                        height={100}
                        className="img-fluid"
                      />
                    </figure>
                    <figure className="banner-image2 mb-0">
                      <Image 
                        src="/assets/images/banner-image2.jpg" 
                        alt="banner" 
                        width={100}
                        height={100}
                        className="img-fluid"
                      />
                    </figure>
                    <figure className="banner-image4 mb-0">
                      <Image 
                        src="/assets/images/banner-image4.jpg" 
                        alt="banner" 
                        width={100}
                        height={100}
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="text">
                    <span className="value"><span className="numb counter">156</span>+</span>
                    <span className="review">Satisfied Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerSection;
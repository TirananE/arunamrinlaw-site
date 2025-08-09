import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="travelabout-con position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-lg-left text-center">
            <div className="about_wrapper position-relative" data-aos="zoom-in">
              <figure className="about-image mb-0">
                <Image 
                  src="/assets/images/about3-image.jpg" 
                  alt="about" 
                  width={600}
                  height={600}
                  className="img-fluid"
                />
              </figure>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="about_content" data-aos="fade-up">
              <h6 className="text-white">About Us</h6>
              <h2 className="text-white">Your Trusted Travel Insurance Partner</h2>
              <p className="text-white text text-size-16">
                Quis autem vel eum iure reprehenderit rui in ea volurate veli 
                esse ruam nihil molestiae conseauatur vel illum rui dolorema eum fugiat ruo voluetas nulla pariatur.
              </p>
              <div className="propertise">
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
              </div>
              <Link href="/about" className="text-decoration-none all_button">
                Read More<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
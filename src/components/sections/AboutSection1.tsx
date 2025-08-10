import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutSection1 = () => {
  return (
    <section id="about" className="travelabout-con position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-lg-left text-center">
            <div className="about_wrapper position-relative" data-aos="zoom-in">
              <figure className="about-image mb-0">
                <Image
                  src="/assets/images/about/IMG_2875.JPG"
                  alt="about"
                  width={400}
                  height={400}
                  className="img-fluid"
                />
              </figure>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="about_content" data-aos="fade-up">
              {/* <h6 className="text-white">About Us</h6> */}
              <h2 className="text-white">Commitment</h2>
              <p className="text-white text text-size-16">
                Our founder, Mr.Suwat Apaipakdi, has dedicated his life to work
                and all his clients. He promised to deliver the best outcome for
                all the clients as well as bring justice and quality to society.
                This is why Arunamrin has become a well-known and well-
                respected law firm in Thailand that has a long history of more
                than 50 years. At Arunamrin, we are committed to delivering
                clear, strategic, and results-driven legal counsel. Whether you
                are an individual, a business, or an organization, we offer
                personalized legal solutions tailored to your unique needs and
                challenges.
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

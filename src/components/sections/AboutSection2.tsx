import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutSection2 = () => {
  return (
    <section id="about" className="travelabout-con position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="about_content" data-aos="fade-up">
              <p className="text-white text text-size-16">
                With a team of experienced attorneys dedicated to excellence,
                integrity, and advocacy, we handle each case with the utmost
                professionalism and care. From complex litigation to day-to-day
                legal advice, we are here to help you navigate the law with
                confidence and clarity. Our clients range from individuals to
                multinational corporations — all seeking more than just legal
                support, but a true strategic advantage. With a reputation built
                on integrity, innovation, and proven success, we continue to
                lead the way in shaping the future of legal practice.
              </p>
              <p className="text-white text text-size-16">
                --- Your peace of mind is our priority. Let us be your trusted legal 
                partner. ---
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-lg-left text-center">
            <div className="about_wrapper position-relative" data-aos="zoom-in">
              <figure className="about-image mb-0">
                <Image
                  src="/assets/images/about/25680723-IMG_9332.jpg"
                  alt="about"
                  width={400}
                  height={400}
                  className="img-fluid"
                />
                ˝
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const InsuranceSection = () => {
  return (
    <section id="insurance" className="insurance-con position-relative">
      <figure className="insurance-leftimage mb-0">
        <Image 
          src="/assets/images/choose-leftimage.png" 
          alt="insurance" 
          width={400}
          height={400}
          className="image-fluid"
        />
      </figure>
      <div className="container">
        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="insurance_content">
              <h2 className="text-white">Let's Get Started Your Insurance Now</h2>
              <p className="text-white text-size-16 mb-0">
                Quia voluptas aspernatur aurodit aut fugit, sed neatae vitae dicta ripis cing elit sed do incidunt labore aredolore.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="insurance_wrapper">
              <Link href="/contact" className="text-decoration-none all_button get_started">
                Get Started<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
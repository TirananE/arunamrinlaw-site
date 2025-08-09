import React from 'react';
import Image from 'next/image';

const PartnerSection = () => {
  return (
    <section className="partner-con">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="partner_content text-center" data-aos="fade-up">
              <h6>Our Partners</h6>
              <h2>Our Trusted Partners</h2>
            </div>
          </div>
          <ul className="list-unstyled mb-0" data-aos="fade-up">
            <li>
              <figure className="mb-0">
                <Image 
                  src="/assets/images/partner1.png" 
                  alt="partner" 
                  width={200}
                  height={100}
                  className="img-fluid"
                />
              </figure>
            </li>
            <li>
              <figure className="mb-0">
                <Image 
                  src="/assets/images/partner2.png" 
                  alt="partner" 
                  width={200}
                  height={100}
                  className="img-fluid"
                />
              </figure>
            </li>
            <li>
              <figure className="mb-0 haus">
                <Image 
                  src="/assets/images/partner3.png" 
                  alt="partner" 
                  width={200}
                  height={100}
                  className="img-fluid"
                />
              </figure>
            </li>
            <li>
              <figure className="mb-0">
                <Image 
                  src="/assets/images/partner4.png" 
                  alt="partner" 
                  width={200}
                  height={100}
                  className="img-fluid"
                />
              </figure>
            </li>
          </ul>
          <ul className="list-unstyled second mb-0" data-aos="fade-up">
            <li>
              <figure className="mb-0">
                <Image 
                  src="/assets/images/partner5.png" 
                  alt="partner" 
                  width={200}
                  height={100}
                  className="img-fluid"
                />
              </figure>
            </li>
            <li>
              <figure className="mb-0">
                <Image 
                  src="/assets/images/partner6.png" 
                  alt="partner" 
                  width={200}
                  height={100}
                  className="img-fluid"
                />
              </figure>
            </li>
            <li className="mb-0">
              <figure className="mb-0">
                <Image 
                  src="/assets/images/partner7.png" 
                  alt="partner" 
                  width={200}
                  height={100}
                  className="img-fluid"
                />
              </figure>
            </li>
            <li className="mb-0">
              <figure className="mb-0 logoipsum">
                <Image 
                  src="/assets/images/partner8.png" 
                  alt="partner" 
                  width={200}
                  height={100}
                  className="img-fluid"
                />
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
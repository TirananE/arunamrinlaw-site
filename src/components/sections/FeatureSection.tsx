import React from 'react';
import Image from 'next/image';

const FeatureSection = () => {
  return (
    <section className="feature-con position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="feature_content text-center" data-aos="fade-up">
              <h6>Our Features</h6>
              <h2>Why We are Better Than Others</h2>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-4 col-md-4 col-sm-10 col-12 mx-auto">
            <div className="feature-box">
              <figure className="icon icon1">
                <Image 
                  src="/assets/images/feature-icon1.png" 
                  alt="feature" 
                  width={60}
                  height={60}
                  className="img-fluid"
                />
              </figure>
              <h4>Certified Platform</h4>
              <p className="text-size-16 mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore aeu fugiat nulla pariatur.</p>
            </div>   
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10 col-12 mx-auto">
            <div className="feature-box">
              <figure className="icon">
                <Image 
                  src="/assets/images/feature-icon2.png" 
                  alt="feature" 
                  width={60}
                  height={60}
                  className="img-fluid"
                />
              </figure>
              <h4>24 Hours Service </h4>
              <p className="text-size-16 mb-0">Nuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore aeu fugiat nulla pariatur.</p>
            </div>    
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10 col-12 mx-auto">
            <div className="feature-box mb-0">
              <figure className="icon">
                <Image 
                  src="/assets/images/feature-icon3.png" 
                  alt="feature" 
                  width={60}
                  height={60}
                  className="img-fluid"
                />
              </figure>
              <h4>Complete Solutions</h4>
              <p className="text-size-16 mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore aeu fugiat nulla pariatur.</p>
            </div>   
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
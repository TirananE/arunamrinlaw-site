import React from 'react';

const BenefitSection = () => {
  return (
    <section className="benefit-con position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
            <div className="benefit_content" data-aos="fade-up">
              <h6>What We Provide</h6>
              <h2>Benefits if You Have Our Insurance</h2>
              <p className="text text-size-18 mb-0">Quisruam est qui dolorem ipsum quia dolor sit amer adipisci velit, sed nuia non numuam.</p>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 col-12">
            <div className="benefit_wrapper position-relative" data-aos="fade-up">
              <ul className="list-unstyled mb-0">
                <li className="beneft-box">
                  <figure className="icon">
                    <img src="/assets/images/benefit-icon1.png" alt="image" className="img-fluid" />
                  </figure>
                  <h5>Complete Insurance Solutions</h5>
                  <p className="text-size-16 mb-0">Dolorem ipsum nuia adieisci velit ruia...</p>
                </li>
                <li className="beneft-box">
                  <figure className="icon">
                    <img src="/assets/images/benefit-icon2.png" alt="image" className="img-fluid" />
                  </figure>
                  <h5>Risk Management Solutions</h5>
                  <p className="text-size-16 mb-0">Nolorem ipsum nuia adieisci velit ruia...</p>
                </li>
                <li className="beneft-box">
                  <figure className="icon">
                    <img src="/assets/images/benefit-icon3.png" alt="image" className="img-fluid" />
                  </figure>
                  <h5>Claims Management</h5>
                  <p className="text-size-16 mb-0">Qolorem ipsum nuia adieisci velit ruia...</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;

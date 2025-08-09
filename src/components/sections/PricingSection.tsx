import React from 'react';

const PricingSection = () => {
  return (
    <section className="pricing-con position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="pricing_content text-center" data-aos="fade-up">
              <h6>Pricings Plans</h6>
              <h2>Select Best Plan For Your Future</h2>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 mx-auto">
            <div className="pricing-box">
              <div className="content">
                <div className="value">
                  <sup className="dollar">$</sup>
                  <span className="number">29</span>
                  <span className="month">/Month</span>
                </div>
                <h4>Basic</h4>
                <p className="text text-size-16 mb-0">Quibusdam et aut officiis debitis aut rerum necessitatibus.</p>
              </div>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-check"></i>
                  <p className="mb-0 text-size-16">Affordable coverage for needs</p>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <p className="mb-0 text-size-16">Ideal for budget-conscious families</p>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <p className="mb-0 text-size-16">Includes basic health, home, and auto insurance coverage</p>
                </li>
              </ul>
              <a href="/pricing" className="text-decoration-none all_button get_started">Get Started<i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          {/* Add Standard and Premium pricing boxes here */}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

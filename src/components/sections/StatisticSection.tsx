import React from 'react';
import Image from 'next/image';

const StatisticSection = () => {
  return (
    <section id="statistic" className="statistic-con position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="statistic_content text-center" data-aos="fade-up">
              <h6>Our Statistics</h6>
              <h2>Enjoy Your Life With Our Insurance</h2>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-3 col-md-3 col-sm-6 col-6 mx-auto">
            <div className="statistic-box">
              <figure className="icon">
                <Image 
                  src="/assets/images/statistic-icon1.png" 
                  alt="statistic" 
                  width={60}
                  height={60}
                  className="img-fluid"
                />
              </figure>
              <span className="value"><span className="number counter">95</span>+</span>
              <span className="text">Awards Win</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6 mx-auto">
            <div className="statistic-box">
              <figure className="icon">
                <Image 
                  src="/assets/images/statistic-icon2.png" 
                  alt="statistic" 
                  width={60}
                  height={60}
                  className="img-fluid"
                />
              </figure>
              <span className="value"><span className="number counter">100</span>%</span>
              <span className="text">Satisified Clients</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6 mx-auto">
            <div className="statistic-box">
              <figure className="icon">
                <Image 
                  src="/assets/images/statistic-icon3.png" 
                  alt="statistic" 
                  width={60}
                  height={60}
                  className="img-fluid"
                />
              </figure>
              <span className="value"><span className="number counter">320</span>+</span>
              <span className="text">Insurance Polices</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6 mx-auto">
            <div className="statistic-box">
              <figure className="icon icon4">
                <Image 
                  src="/assets/images/statistic-icon4.png" 
                  alt="statistic" 
                  width={60}
                  height={60}
                  className="img-fluid"
                />
              </figure>
              <span className="value"><span className="number counter">150</span>+</span>
              <span className="text">Employees Working</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticSection;
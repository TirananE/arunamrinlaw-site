"use client";

import React from 'react';
import { useLanguage } from '../LanguageProvider';

const BenefitSection = () => {
  const { t } = useLanguage();
  return (
    <section className="benefit-con position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
            <div className="benefit_content" data-aos="fade-up">
              <h6>{t('what_we_provide')}</h6>
              <h2>{t('benefits_insurance')}</h2>
              <p className="text text-size-18 mb-0">{t('benefits_insurance_desc')}</p>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 col-12">
            <div className="benefit_wrapper position-relative" data-aos="fade-up">
              <ul className="list-unstyled mb-0">
                <li className="beneft-box">
                  <figure className="icon">
                    <img src="/assets/images/benefit-icon1.png" alt="image" className="img-fluid" />
                  </figure>
                  <h5>{t('complete_insurance_solutions')}</h5>
                  <p className="text-size-16 mb-0">{t('complete_insurance_solutions_desc')}</p>
                </li>
                <li className="beneft-box">
                  <figure className="icon">
                    <img src="/assets/images/benefit-icon2.png" alt="image" className="img-fluid" />
                  </figure>
                  <h5>{t('risk_management_solutions')}</h5>
                  <p className="text-size-16 mb-0">{t('risk_management_solutions_desc')}</p>
                </li>
                <li className="beneft-box">
                  <figure className="icon">
                    <img src="/assets/images/benefit-icon3.png" alt="image" className="img-fluid" />
                  </figure>
                  <h5>{t('claims_management')}</h5>
                  <p className="text-size-16 mb-0">{t('claims_management_desc')}</p>
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

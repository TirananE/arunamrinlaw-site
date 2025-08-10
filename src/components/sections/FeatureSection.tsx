"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../LanguageProvider';

const FeatureSection = () => {
  const { t } = useLanguage();
  return (
    <section id="feature" className="feature-con position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="feature_content text-center" data-aos="fade-up">
              <h6>{t('our_features')}</h6>
              <h2>{t('why_better')}</h2>
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
              <h4>{t('certified_platform')}</h4>
              <p className="text-size-16 mb-0">{t('certified_platform_desc')}</p>
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
              <h4>{t('24_hours_service')}</h4>
              <p className="text-size-16 mb-0">{t('24_hours_service_desc')}</p>
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
              <h4>{t('complete_solutions')}</h4>
              <p className="text-size-16 mb-0">{t('complete_solutions_desc')}</p>
            </div>   
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
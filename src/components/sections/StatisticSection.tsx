"use client";

import React from "react";
import Image from "next/image";
import { statisticsDataKeys } from "@/data";
import { useLanguage } from '../LanguageProvider';
import "./StatisticSection.css";
import { Camera, Wrench, Handshake, Briefcase, Home, Users, ShieldCheck } from "lucide-react";

// Icon mapping function
const getIconComponent = (iconIdentifier: string | React.ReactNode) => {
  if (typeof iconIdentifier === 'string') {
    // Check if it's an icon identifier or image path
    if (iconIdentifier.includes('/') || iconIdentifier.includes('.')) {
      // It's an image path
      return null;
    }
    
    // It's an icon identifier - map to actual icon component
    switch (iconIdentifier) {
      case 'wrench':
        return <Wrench size={60} className="text-primary" color="#0f122b" />;
      case 'camera':
        return <Camera size={60} className="text-primary" color="#0f122b" />;
      case 'handshake':
        return <Handshake size={60} className="text-primary" color="#0f122b" />;
      case 'briefcase':
        return <Briefcase size={60} className="text-primary" color="#0f122b" />;
      case 'home':
        return <Home size={60} className="text-primary" color="#0f122b" />;
      case 'users':
        return <Users size={60} className="text-primary" color="#0f122b" />;
      case 'shield-check':
        return <ShieldCheck size={60} className="text-primary" color="#0f122b" />;
      default:
        return null;
    }
  }
  
  // It's already a React component
  return iconIdentifier;
};

const StatisticSection = () => {
  const { t } = useLanguage();
  return (
    <section id="statistic" className="statistic-con position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="statistic_content text-center" data-aos="fade-up">
              <h2 style={{color: '#0f122b !important'}}>{t('our_services')}</h2>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-12 col-sm-12 col-12 text-lg-left text-center"
          style={{
            marginBottom: "24px",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className="about_wrapper position-relative" data-aos="zoom-in">
            <figure className="about-image mb-0">
              <Image
                src="/assets/images/services/25680723-IMG_9317.jpg"
                alt="about"
                width={600}
                height={400}
                className="img-fluid border-radius-30"
              />
            </figure>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          {statisticsDataKeys.map((stat, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-6 mb-4">
              <div className="statistic-box h-100 d-flex flex-column justify-content-center">
                <figure className={`icon ${stat.iconClassName || ""}`}>
                  {(() => {
                    const iconComponent = getIconComponent(stat.icon);
                    if (iconComponent) {
                      return iconComponent;
                    } else {
                      // Render as image if it's a path or no icon component found
                      return (
                        <Image
                          src={stat.icon as string}
                          alt="statistic"
                          width={60}
                          height={60}
                          className="img-fluid"
                        />
                      );
                    }
                  })()}
                </figure>
                <span className="value">
                  <h3>{t(stat.valueKey)}</h3>
                </span>
                <span className="text">{t(stat.textKey)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticSection;

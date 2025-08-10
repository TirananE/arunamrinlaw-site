'use client'

import React from "react";
import Image from "next/image";
import { useLanguage } from '../LanguageProvider';

const OurOfficeSection = () => {
  const { t } = useLanguage();
  const allOfficeImages = [
    "/assets/images/office_and_location/25680723-IMG_9309.jpg",
    "/assets/images/office_and_location/25680723-IMG_9317.jpg", 
    "/assets/images/office_and_location/25680723-IMG_9321.jpg",
    "/assets/images/office_and_location/25680723-IMG_9323.jpg",
    "/assets/images/office_and_location/25680723-IMG_9332.jpg",
    "/assets/images/office_and_location/25680723-IMG_9354.jpg",
    "/assets/images/office_and_location/25680723-IMG_9355.jpg",
    "/assets/images/office_and_location/25680723-IMG_9356.jpg",
    "/assets/images/office_and_location/25680723-IMG_9359.jpg",
    "/assets/images/office_and_location/25680723-IMG_9380.jpg"
  ];

  // Show 9 images on desktop (lg and above), 10 images on other devices
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 992); // Bootstrap lg breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const imagesToShow = isDesktop ? allOfficeImages.slice(0, 9) : allOfficeImages;

  return (
    <section id="office" className="office-con position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="office_content text-center" data-aos="fade-up">
              <h2>{t('our_office')}</h2>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          {imagesToShow.map((imageSrc, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="office-image-wrapper position-relative" data-aos="zoom-in" data-aos-delay={index * 100}>
                <figure className="office-image mb-0">
                  <Image
                    src={imageSrc}
                    alt={`Office view ${index + 1}`}
                    width={400}
                    height={300}
                    className="img-fluid border-radius-10"
                    style={{
                      objectFit: "cover",
                      height: "300px",
                      width: "100%"
                    }}
                  />
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .office-con {
          padding: 100px 0;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          position: relative;
        }

        .office-con::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(30, 58, 138, 0.8);
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .office_content h2 {
          color: #ffffff;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .office-image-wrapper {
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .office-image-wrapper:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .office-image {
          overflow: hidden;
          border-radius: 15px;
        }

        .border-radius-10 {
          border-radius: 15px;
          transition: transform 0.3s ease;
        }

        .office-image-wrapper:hover .border-radius-10 {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .office-con {
            padding: 60px 0;
          }
          
          .office_content h2 {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 576px) {
          .office_content h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default OurOfficeSection;

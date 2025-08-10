"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import TeamCard from "../TeamCard";
import { teamMembersDataKeys } from '@/data';
import { useLanguage } from '../LanguageProvider';

const customArrowStyles = `
.splide__pagination {
  bottom: -8px;
}
  .splide__arrow {
    background: rgba(255, 255, 255, 0.95);
    border: 2px solid #e0e0e0;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }
  
  .splide__arrow:hover {
    background: #ffffff;
    border-color: #007bff;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 4px 20px rgba(0, 123, 255, 0.3);
  }
  
  .splide__arrow--prev {
    left: -70px;
  }
  
  .splide__arrow--next {
    right: -70px;
  }
  
  .splide__arrow svg {
    width: 20px;
    height: 20px;
    fill: #333;
    transition: fill 0.3s ease;
  }
  
  .splide__arrow:hover svg {
    fill: #007bff;
  }
  
  .splide__arrow:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    .splide__arrow--prev {
      display: none;
      left: -15px;
    }
    
    .splide__arrow--next {
     display: none;
      right: -15px;
    }
    
    .splide__arrow {
      width: 40px;
      height: 40px;
    }
    
    .splide__arrow svg {
      width: 16px;
      height: 16px;
    }
      
  }
`;



const TeamSection = () => {
  const { t } = useLanguage();
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customArrowStyles }} />
      <section id="team" className="team-con travelteam-con position-relative">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="team_content text-center" data-aos="fade-up">
                <h2>{t('our_members')}</h2>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="position-relative">
            <Splide
              options={{
                type: "loop",
                perPage: 3,
                perMove: 1,
                gap: "2rem",
                autoplay: true,
                interval: 4000,
                pauseOnHover: true,
                resetProgress: false,
                breakpoints: {
                  1200: {
                    perPage: 3,
                  },
                  992: {
                    perPage: 2,
                  },
                  768: {
                    perPage: 1,
                  },
                },
              }}
              aria-label="Team Members Carousel"
            >
              {teamMembersDataKeys.map((member, index) => (
                <SplideSlide key={index}>
                  <TeamCard
                    name={member.name}
                    position={t(member.positionKey)}
                    imageUrl={member.imageUrl}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;

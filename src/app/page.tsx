import React from 'react';
import BannerSection from '@/components/sections/BannerSection';
import FeatureSection from '@/components/sections/FeatureSection';
import AboutSection1 from '@/components/sections/AboutSection1';
import StatisticSection from '@/components/sections/StatisticSection';
import TypeSection from '@/components/sections/TypeSection';
import TeamSection from '@/components/sections/TeamSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import InsuranceSection from '@/components/sections/InsuranceSection';
import PartnerSection from '@/components/sections/PartnerSection';
import FooterSection from '@/components/sections/FooterSection';
import AboutSection2 from '@/components/sections/AboutSection2';

export default function Home() {
  return (
    <main>
      <BannerSection />
      {/* <FeatureSection /> */}
      <AboutSection1 />
      <AboutSection2 />
      <StatisticSection />
      {/* <TypeSection /> */}
      <TeamSection />
      {/* <TestimonialSection /> */}
      {/* <InsuranceSection /> */}
      {/* <PartnerSection /> */}
      <FooterSection />
    </main>
  );
}
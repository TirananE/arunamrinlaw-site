import React from 'react';
import BannerSection from '@/components/sections/BannerSection';
import FeatureSection from '@/components/sections/FeatureSection';
import AboutSection from '@/components/sections/AboutSection';
import StatisticSection from '@/components/sections/StatisticSection';
import TypeSection from '@/components/sections/TypeSection';
import TeamSection from '@/components/sections/TeamSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import InsuranceSection from '@/components/sections/InsuranceSection';
import PartnerSection from '@/components/sections/PartnerSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <main>
      <BannerSection />
      <FeatureSection />
      <AboutSection />
      <StatisticSection />
      <TypeSection />
      <TeamSection />
      <TestimonialSection />
      <InsuranceSection />
      <PartnerSection />
      <FooterSection />
    </main>
  );
}
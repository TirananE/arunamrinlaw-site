import React from "react";
import BannerSection from "@/components/sections/BannerSection";
import AboutSection1 from "@/components/sections/AboutSection1";
import StatisticSection from "@/components/sections/StatisticSection";
import TeamSection from "@/components/sections/TeamSection";
import FooterSection from "@/components/sections/FooterSection";
import AboutSection2 from "@/components/sections/AboutSection2";
import AboutSuwat from "@/components/sections/AboutSuwat";
import OurOfficeSection from "@/components/sections/OurOfficeSection";

export default function Home() {
  return (
    <main>
      <BannerSection />
      <AboutSection1 />
      <AboutSection2 />
      <AboutSuwat />
      <TeamSection />
      <StatisticSection />
      <OurOfficeSection />
      <FooterSection />
    </main>
  );
}

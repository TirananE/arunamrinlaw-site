// Centralized data structures for reusable components
import React from 'react';

// Translation key interfaces
export interface StatisticItemWithKeys {
  icon: string | React.ReactNode;
  valueKey: string;
  textKey: string;
  iconClassName?: string;
}

export interface TeamMemberWithKeys {
  name: string;
  positionKey: string;
  imageUrl: string;
}

export interface ServiceItemWithKeys {
  titleKey: string;
  descriptionKey: string;
}

export interface StatisticItem {
  icon: string;
  value: string;
  suffix?: string;
  text: string;
  iconClassName?: string;
}

export interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface NavItem {
  id: string;
  label: string;
}

// Statistics data with translation keys
export const statisticsDataKeys: StatisticItemWithKeys[] = [
  {
    icon: "wrench", // Icon identifier instead of JSX
    valueKey: "civil_law",
    textKey: "civil_law_desc",
  },
  {
    icon: "handshake",
    valueKey: "commercial_law",
    textKey: "commercial_law_desc",
  },
  {
    icon: "briefcase",
    valueKey: "business_commercial_law",
    textKey: "business_commercial_law_desc",
  },
  {
    icon: "home",
    valueKey: "property_investment_law",
    textKey: "property_investment_law_desc",
  },
  {
    icon: "users",
    valueKey: "family_law",
    textKey: "family_law_desc",
  },
  {
    icon: "shield-check",
    valueKey: "corporate_compliance",
    textKey: "corporate_compliance_desc",
  },
];

// Backward compatibility - deprecated, use statisticsDataKeys instead
export const statisticsData: StatisticItem[] = [
  {
    icon: "/assets/images/statistic-icon1.png",
    value: "Civil Law",
    text: "Consulting and Representing client in court cases",
  },
  {
    icon: "/assets/images/statistic-icon2.png",
    value: "Commercial Law",
    text: "Consulting and Representing client in court cases",
  },
  {
    icon: "/assets/images/statistic-icon3.png",
    value: "Business and commercial law",
    text: "Business Set-up Contract Negotiation and Drafting Dispute Resolution",
  },
  {
    icon: "/assets/images/statistic-icon4.png",
    value: "Property and investment law",
    text: "Property Acquisition and Sales Property Disputes",
    iconClassName: "icon4",
  },
  {
    icon: "/assets/images/statistic-icon4.png",
    value: "Family law",
    text: "Manage Assets, debts and Property Drafting Contracts",
    iconClassName: "icon4",
  },
  {
    icon: "/assets/images/statistic-icon4.png",
    value: "Coperate Compliance",
    text: "Ensuring businesses comply with relevant laws and regulations. ",
    iconClassName: "icon4",
  },
];

// Team members data with translation keys
export const teamMembersDataKeys: TeamMemberWithKeys[] = [
  {
    name: "Suwat Apaipakdi",
    positionKey: "chairman_attorney",
    imageUrl: "/assets/images/members/Suwat.jpg",
  },
  {
    name: "Atchara Saengkhao",
    positionKey: "attorney",
    imageUrl: "/assets/images/members/Atchara.jpg",
  },
  {
    name: "Atichart Saengkhao",
    positionKey: "attorney",
    imageUrl: "/assets/images/members/Atichart.jpg",
  },
  {
    name: "Wilaiporn Kaewmool",
    positionKey: "attorney",
    imageUrl: "/assets/images/members/Wilaiporn.jpg",
  },
  {
    name: "Thitikarn Wichianbut",
    positionKey: "attorney",
    imageUrl: "/assets/images/members/Thitikarn.jpg",
  },
  {
    name: "Sasathorn Thongchai",
    positionKey: "attorney",
    imageUrl: "/assets/images/members/Sasathorn.jpg",
  },
  {
    name: "Nareewat Apaipakdi",
    positionKey: "international_client_representative",
    imageUrl: "/assets/images/members/Nareewat.jpg",
  },
  {
    name: "Nareeporn Apaipakdi",
    positionKey: "international_client_representative",
    imageUrl: "/assets/images/members/Nareeporn.jpg",
  },
];

// Backward compatibility - deprecated, use teamMembersDataKeys instead
export const teamMembersData: TeamMember[] = [
  {
    name: "Suwat Apaipakdi",
    position: "Chairman, Attorney",
    imageUrl: "/assets/images/members/Suwat.jpg",
  },
  {
    name: "Atchara Saengkhao",
    position: "Attorney",
    imageUrl: "/assets/images/members/Atchara.jpg",
  },
  {
    name: "Atichart Saengkhao",
    position: "Attorney",
    imageUrl: "/assets/images/members/Atichart.jpg",
  },
  {
    name: "Wilaiporn Kaewmool",
    position: "Attorney",
    imageUrl: "/assets/images/members/Wilaiporn.jpg",
  },
  {
    name: "Thitikarn Wichianbut",
    position: "Attorney",
    imageUrl: "/assets/images/members/Thitikarn.jpg",
  },
  {
    name: "Sasathorn Thongchai",
    position: "Attorney",
    imageUrl: "/assets/images/members/Sasathorn.jpg",
  },
  {
    name: "Nareewat Apaipakdi",
    position: "International client representative",
    imageUrl: "/assets/images/members/Nareewat.jpg",
  },
  {
    name: "Nareeporn Apaipakdi",
    position: "International client representative",
    imageUrl: "/assets/images/members/Nareeporn.jpg",
  },
];

// Services data with translation keys
export const servicesDataKeys: ServiceItemWithKeys[] = [
  {
    titleKey: "corporate_law",
    descriptionKey: "corporate_law_desc",
  },
  {
    titleKey: "commercial_contracts",
    descriptionKey: "commercial_contracts_desc",
  },
  {
    titleKey: "litigation",
    descriptionKey: "litigation_desc",
  },
  {
    titleKey: "investment_advisory",
    descriptionKey: "investment_advisory_desc",
  },
  {
    titleKey: "labor_law",
    descriptionKey: "labor_law_desc",
  },
  {
    titleKey: "intellectual_property",
    descriptionKey: "intellectual_property_desc",
  },
];

// Backward compatibility - deprecated, use servicesDataKeys instead
export const servicesData: ServiceItem[] = [
  {
    title: "Corporate Law",
    description: "Business registration, mergers & acquisitions, corporate restructuring",
  },
  {
    title: "Commercial Contracts",
    description: "Contract drafting, review, and negotiation for business transactions",
  },
  {
    title: "Litigation",
    description: "Civil and commercial dispute resolution, arbitration",
  },
  {
    title: "Investment Advisory",
    description: "Foreign investment consulting, BOI promotion applications",
  },
  {
    title: "Labor Law",
    description: "Employment contracts, work permits, labor disputes",
  },
  {
    title: "Intellectual Property",
    description: "Trademark registration, patent applications, IP protection",
  },
];

// Navigation items data
export const navigationData: NavItem[] = [
  { id: "banner", label: "home" },
  { id: "about", label: "about" },
  { id: "team", label: "team" },
  { id: "statistic", label: "services" },
  { id: "office", label: "office" },
  { id: "contact", label: "contact" },
];

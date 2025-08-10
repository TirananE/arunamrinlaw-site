// Centralized data structures for reusable components

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

// Statistics data
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

// Team members data
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
  {
    name: "Supisara Angthong",
    position: "International client representative",
    imageUrl: "/assets/images/members/Supisara.jpg",
  },
];

// Services data
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
  { id: "banner", label: "Home" },
  { id: "feature", label: "Features" },
  { id: "about", label: "About" },
  { id: "statistic", label: "Statistics" },
  { id: "type", label: "Services" },
  { id: "team", label: "Team" },
  { id: "testimonial", label: "Testimonials" },
  { id: "insurance", label: "Insurance" },
  { id: "partner", label: "Partners" },
];

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    common: {
      "welcome": "Welcome to My Website",
      "language": "Language",
      "change_language": "Change Language",
      "home": "Home",
      "about": "About",
      "services": "Services",
      "contact": "Contact",
      "law_firm": "Law Firm",
      "professional_services": "Professional legal services you can trust",
      "learn_more": "Learn More",
      "get_in_touch": "Get in Touch",
      "our_expertise": "Our Expertise",
      "years_experience": "Years of Experience",
      "satisfied_clients": "Satisfied Clients",
      "successful_cases": "Successful Cases",
      "banner_title": "A well-respected Thai law firm with 50 years of experience.",
      "banner_description": "One of the most trusted and respected law firms in the industry. Known for our unwavering commitment to excellence, we combine deep legal expertise with strategic thinking to deliver results that exceed expectations.",
      "banner_tagline": "We Don't Just Practice Law — We Define It."
    },
  },
  th: {
    common: {
      "welcome": "ยินดีต้อนรับเข้าสู่เว็บไซต์ของเรา",
      "language": "ภาษา",
      "change_language": "เปลี่ยนภาษา",
      "home": "หน้าแรก",
      "about": "เกี่ยวกับเรา",
      "services": "บริการ",
      "contact": "ติดต่อ",
      "law_firm": "สำนักงานกฎหมาย",
      "professional_services": "บริการทางกฎหมายมืออาชีพที่คุณไว้วางใจได้",
      "learn_more": "เรียนรู้เพิ่มเติม",
      "get_in_touch": "ติดต่อเรา",
      "our_expertise": "ความเชี่ยวชาญของเรา",
      "years_experience": "ปีของประสบการณ์",
      "satisfied_clients": "ลูกค้าที่พึงพอใจ",
      "successful_cases": "คดีที่ประสบผลสำเร็จ",
      "banner_title": "สำนักงานกฎหมายไทยที่มีชื่อเสียงด้วยประสบการณ์ 50 ปี",
      "banner_description": "หนึ่งในสำนักงานกฎหมายที่น่าเชื่อถือและมีชื่อเสียงที่สุดในอุตสาหกรรม เป็นที่รู้จักจากความมุ่งมั่นอย่างแน่วแน่เพื่อความเป็นเลิศ เราผสมผสานความเชี่ยวชาญทางกฎหมายอย่างลึกซึ้งกับการคิดเชิงกลยุทธ์เพื่อส่งมอบผลลัพธ์ที่เกินความคาดหวัง",
      "banner_tagline": "เราไม่เพียงแค่ปฏิบัติตามกฎหมาย — เราคือผู้กำหนดมัน"
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common'],
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false,
    },
    
    react: {
      useSuspense: false,
    },
  });

export default i18n;

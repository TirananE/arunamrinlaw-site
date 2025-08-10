'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';

const LanguageSwitcher: React.FC = () => {
  const { language, changeLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'th' : 'en';
    changeLanguage(newLanguage);
  };

  return (
    <div className="language-switcher">
      <button
        onClick={toggleLanguage}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center gap-2"
        aria-label={t('change_language')}
      >
        <span className="hidden sm:inline">{t('language')}:</span>
        <span className="font-semibold">
          {language === 'en' ? 'EN' : 'ไทย'}
        </span>
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 9l4-4 4 4m0 6l-4 4-4-4" 
          />
        </svg>
      </button>
    </div>
  );
};

export default LanguageSwitcher;

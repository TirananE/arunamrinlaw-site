'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';

interface FontProviderProps {
  children: React.ReactNode;
  interClassName: string;
  thaiClassName: string;
}

export const FontProvider: React.FC<FontProviderProps> = ({ 
  children, 
  interClassName, 
  thaiClassName 
}) => {
  const { language } = useLanguage();
  
  const fontClassName = language === 'th' ? thaiClassName : interClassName;
  
  return (
    <div className={fontClassName}>
      {children}
    </div>
  );
};

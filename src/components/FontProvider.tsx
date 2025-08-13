'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';

interface FontProviderProps {
  children: React.ReactNode;
  interClassName: string;
  thaiClassName: string;
  forumClassName: string;
}

export const FontProvider: React.FC<FontProviderProps> = ({ 
  children, 
  interClassName, 
  thaiClassName,
  forumClassName
}) => {
  const { language } = useLanguage();
  
  // Use Forum for English, Thai font for Thai
  const fontClassName = language === 'th' ? thaiClassName : forumClassName;
  
  return (
    <div className={fontClassName}>
      {children}
    </div>
  );
};
